import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const CoursesPage = lazy(() => import('./pages/CoursesPage.tsx'));
const GalleriesPage = lazy(() => import('./pages/GalleriesPage.tsx'));
const ExhibitionsPage = lazy(() => import('./pages/ExhibitionsPage.tsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.tsx'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/galleries" element={<GalleriesPage />} />
              <Route path="/exhibitions" element={<ExhibitionsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;