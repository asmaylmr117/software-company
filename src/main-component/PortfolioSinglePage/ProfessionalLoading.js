import React from 'react';


const ProfessionalLoading = () => {
  return (
    <div className="professional-loading-wrapper">
      {/* Header Placeholder */}
      <div className="loading-header">
        <div className="container">
          <div className="loading-nav">
            <div className="loading-logo"></div>
            <div className="loading-nav-items">
              <div className="loading-nav-item"></div>
              <div className="loading-nav-item"></div>
              <div className="loading-nav-item"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title Skeleton */}
      <div className="loading-page-title">
        <div className="container">
          <div className="loading-title-content">
            <div className="loading-breadcrumb">
              <div className="loading-breadcrumb-item"></div>
              <div className="loading-breadcrumb-separator"></div>
              <div className="loading-breadcrumb-item"></div>
            </div>
            <div className="loading-main-title"></div>
            <div className="loading-subtitle"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="loading-content">
        <div className="container">
          {/* Main Image Skeleton */}
          <div className="loading-main-image">
            <div className="loading-image-placeholder">
              <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
              </div>
            </div>
          </div>

          {/* Title and Description Skeleton */}
          <div className="loading-text-content">
            <div className="loading-content-title"></div>
            <div className="loading-description">
              <div className="loading-text-line"></div>
              <div className="loading-text-line"></div>
              <div className="loading-text-line short"></div>
            </div>
          </div>

          {/* Info List Skeleton */}
          <div className="loading-info-section">
            <div className="loading-info-grid">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="loading-info-item">
                  <div className="loading-info-label"></div>
                  <div className="loading-info-value"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Section Skeleton */}
          <div className="loading-requirements">
            <div className="loading-section-title"></div>
            <div className="loading-text-block">
              <div className="loading-text-line"></div>
              <div className="loading-text-line"></div>
            </div>
            <div className="loading-checklist">
              <div className="loading-checklist-column">
                {[1, 2, 3, 4].map(item => (
                  <div key={item} className="loading-checklist-item">
                    <div className="loading-check-icon"></div>
                    <div className="loading-check-text"></div>
                  </div>
                ))}
              </div>
              <div className="loading-checklist-column">
                {[1, 2, 3, 4].map(item => (
                  <div key={`right-${item}`} className="loading-checklist-item">
                    <div className="loading-check-icon"></div>
                    <div className="loading-check-text"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar Projects Skeleton */}
          <div className="loading-similar-projects">
            <div className="loading-section-title"></div>
            <div className="loading-projects-grid">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="loading-project-card">
                  <div className="loading-project-image"></div>
                  <div className="loading-project-content">
                    <div className="loading-project-categories">
                      <div className="loading-category-tag"></div>
                      <div className="loading-category-tag"></div>
                    </div>
                    <div className="loading-project-title"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .professional-loading-wrapper {
          min-height: 100vh;
          background: #f8f9fa;
          animation: pulse-bg 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-bg {
          0% { background-color: #f8f9fa; }
          100% { background-color: #f5f5f5; }
        }

        /* Header Loading */
        .loading-header {
          background: white;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .loading-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .loading-logo {
          width: 150px;
          height: 40px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .loading-nav-items {
          display: flex;
          gap: 2rem;
        }

        .loading-nav-item {
          width: 80px;
          height: 20px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Page Title Loading */
        .loading-page-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .loading-page-title::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: slide 2s infinite;
        }

        @keyframes slide {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .loading-title-content {
          text-align: center;
          color: white;
        }

        .loading-breadcrumb {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .loading-breadcrumb-item {
          width: 60px;
          height: 16px;
          background: rgba(255,255,255,0.3);
          border-radius: 4px;
          animation: pulse-white 1.5s ease-in-out infinite;
        }

        .loading-breadcrumb-separator {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
        }

        .loading-main-title {
          width: 300px;
          height: 48px;
          background: rgba(255,255,255,0.3);
          margin: 0 auto 1rem;
          border-radius: 8px;
          animation: pulse-white 1.5s ease-in-out infinite;
        }

        .loading-subtitle {
          width: 120px;
          height: 20px;
          background: rgba(255,255,255,0.3);
          margin: 0 auto;
          border-radius: 4px;
          animation: pulse-white 1.5s ease-in-out infinite;
        }

        @keyframes pulse-white {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Main Content Loading */
        .loading-content {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Main Image Loading */
        .loading-main-image {
          margin-bottom: 3rem;
        }

        .loading-image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .loading-spinner {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .spinner-ring:nth-child(2) {
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          border-top-color: #764ba2;
          animation-delay: -0.3s;
        }

        .spinner-ring:nth-child(3) {
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          border-top-color: #f093fb;
          animation-delay: -0.6s;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Text Content Loading */
        .loading-text-content {
          margin-bottom: 3rem;
        }

        .loading-content-title {
          width: 400px;
          height: 32px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .loading-description {
          margin-bottom: 2rem;
        }

        .loading-text-line {
          height: 16px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .loading-text-line:nth-child(1) { width: 100%; }
        .loading-text-line:nth-child(2) { width: 95%; }
        .loading-text-line.short { width: 60%; }

        /* Info Section Loading */
        .loading-info-section {
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .loading-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .loading-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .loading-info-label {
          width: 100px;
          height: 14px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .loading-info-value {
          width: 150px;
          height: 16px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        /* Requirements Section Loading */
        .loading-requirements {
          margin-bottom: 3rem;
        }

        .loading-section-title {
          width: 250px;
          height: 28px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
          margin-bottom: 1.5rem;
        }

        .loading-text-block {
          margin-bottom: 2rem;
        }

        .loading-checklist {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .loading-checklist-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .loading-checklist-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .loading-check-icon {
          width: 20px;
          height: 20px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .loading-check-text {
          width: 200px;
          height: 16px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        /* Similar Projects Loading */
        .loading-similar-projects {
          margin-bottom: 3rem;
        }

        .loading-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .loading-project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .loading-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .loading-project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        .loading-project-content {
          padding: 1.5rem;
        }

        .loading-project-categories {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .loading-category-tag {
          width: 80px;
          height: 20px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
        }

        .loading-project-title {
          width: 100%;
          height: 24px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .loading-nav-items {
            gap: 1rem;
          }
          
          .loading-nav-item {
            width: 60px;
          }

          .loading-main-title {
            width: 250px;
            height: 36px;
          }

          .loading-content-title {
            width: 300px;
            height: 28px;
          }

          .loading-checklist {
            grid-template-columns: 1fr;
          }

          .loading-info-grid {
            grid-template-columns: 1fr;
          }

          .loading-projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalLoading;
