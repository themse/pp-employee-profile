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
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/works/:slug" element={<WorkPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
