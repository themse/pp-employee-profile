import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Loader } from 'components/Loader';

const HomePage = lazy(() => import('pages/Home'));
const WorksPage = lazy(() => import('pages/works/Works'));
const WorkPage = lazy(() => import('pages/works/[slug]'));
const BlogPage = lazy(() => import('pages/Blog'));
const PageNotFound = lazy(() => import('pages/404'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/works/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <WorkPage />
            </Suspense>
          }
        />
        <Route
          path="/works"
          element={
            <Suspense fallback={<Loader />}>
              <WorksPage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loader />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
