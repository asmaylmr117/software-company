import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load all pages for code splitting — reduces initial JS bundle
const Homepage = lazy(() => import('../HomePage/HomePage'));
const HomePage2 = lazy(() => import('../HomePage2/HomePage2'));
const HomePage3 = lazy(() => import('../HomePage3/HomePage3'));
const AboutUsPage = lazy(() => import('../AboutUsPage/AboutUsPage'));
const PricingPage = lazy(() => import('../PricingPage/PricingPage'));
const PortfolioPage = lazy(() => import('../PortfolioPage/PortfolioPage'));
const PortfolioSinglePage = lazy(() => import('../PortfolioSinglePage/PortfolioSinglePage'));
const TeamPage = lazy(() => import('../TeamPage/TeamPage'));
const TeamSinglePage = lazy(() => import('../TeamSinglePage/TeamSinglePage'));
const ServicePage = lazy(() => import('../ServicePage/ServicePage'));
const ServiceSinglePage = lazy(() => import('../ServiceSinglePage/ServiceSinglePage'));
const BlogPage = lazy(() => import('../BlogPage/BlogPage'));
const BlogDetails = lazy(() => import('../BlogDetails/BlogDetails'));
const ContactPage = lazy(() => import('../ContactPage/ContactPage'));

// Loading fallback while lazy components are fetched
const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#fff',
    }}
    role="status"
    aria-label="Loading page"
  >
    <div
      style={{
        width: 48,
        height: 48,
        border: '4px solid #e9ecef',
        borderTop: '4px solid #0d6efd',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="home_software_company" element={<HomePage2 />} />
            <Route path="home_business_consulting" element={<HomePage3 />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio_details/:slug" element={<PortfolioSinglePage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="team-single/:slug" element={<TeamSinglePage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="service-single/:slug" element={<ServiceSinglePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-single/:slug" element={<BlogDetails />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
