import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const WorksPage = lazy(() => import('pages/Works'));
const BlogPage = lazy(() => import('pages/Blog'));
const ContactPage = lazy(() => import('pages/Contact'));

const App: FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/works" element={<WorksPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
