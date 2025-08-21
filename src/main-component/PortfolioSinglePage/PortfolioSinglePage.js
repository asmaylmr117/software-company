import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import { Link } from 'react-router-dom';
import psImg from '../../images/portfolio/portfolio_details_image_1.webp';
import icon from '../../images/icons/icon_check_3.svg';

const PortfolioSinglePage = () => {
  const { slug } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for API images - قم بتغيير هذا حسب الدومين الخاص بك
  const BASE_IMAGE_URL = 'https://portfolio-vercel-bi43.vercel.app';

  // دالة لمعالجة مسار الصورة
  const getImageSrc = (imagePath, fallbackImage = psImg) => {
    if (!imagePath) return fallbackImage;
    
    // إذا كانت الصورة تبدأ بـ http أو https، استخدمها كما هي
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // إذا كانت الصورة تبدأ بـ /، أضف Base URL
    if (imagePath.startsWith('/')) {
      return `${BASE_IMAGE_URL}${imagePath}`;
    }
    
    // في الحالات الأخرى، أضف Base URL مع /
    return `${BASE_IMAGE_URL}/${imagePath}`;
  };

  // دالة للتعامل مع خطأ تحميل الصورة
  const handleImageError = (event) => {
    event.target.src = psImg; // استخدم الصورة الافتراضية
  };

  // Fetch projects from the API
  useEffect(() => {
    axios
      .get('https://portfolio-vercel-bi43.vercel.app/api/projects?Page1')
      .then((response) => {
        setProjects(response.data.projects);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch projects');
        setLoading(false);
      });
  }, []);

  // البحث عن المشروع ذو ID = 10 للحصول على صورته
  const getHeaderImage = () => {
    const project10 = projects.find(project => project.Id === "10");
    return project10 ? project10.pImg : null;
  };

  // Find the project matching the slug
  const PortfolioDetails = projects.find((item) => item.slug === slug);

  // Handle scroll on click
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Render loading, error, or not found states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!PortfolioDetails) return <div>Project not found</div>;

  // Filter similar projects by category, excluding the current project
  // إذا لم توجد مشاريع كافية من نفس الفئة، اعرض مشاريع من فئات أخرى
  let similarProjects = projects
    .filter((project) => project.category === PortfolioDetails.category && project.slug !== PortfolioDetails.slug);
  
  // إذا كان عدد المشاريع المشابهة أقل من 4، أضف مشاريع من فئات أخرى
  if (similarProjects.length < 4) {
    const otherProjects = projects
      .filter((project) => project.category !== PortfolioDetails.category && project.slug !== PortfolioDetails.slug)
      .slice(0, 4 - similarProjects.length);
    
    similarProjects = [...similarProjects, ...otherProjects];
  }
  
  // اعرض أقصى 4 مشاريع
  similarProjects = similarProjects.slice(0, 4);

  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={PortfolioDetails.title}
          pagesub={'Details 😃'}
          pageTop={'Portfolio'}
        />
        <section className="portfolio_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image">
              <img 
                src={getImageSrc(getHeaderImage() || PortfolioDetails.pImg)} 
                alt="Portfolio Item"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <h2 className="details_item_title">{PortfolioDetails.title}</h2>
            <p>{PortfolioDetails.description}</p>
            <p className="mb-0">
              {PortfolioDetails.description}
            </p>
            <hr />
            <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Services:</strong>
                  {PortfolioDetails.category || 'N/A'}
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Client:</strong>
                  {PortfolioDetails.client || 'N/A'}
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Location:</strong>
                  {PortfolioDetails.Country || 'N/A'}
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Completed Date:</strong>
                  {PortfolioDetails.completedDate || 'N/A'}
                </span>
              </li>
            </ul>

            <h3 className="details_item_info_title pt-4">Project Requirement</h3>
            <p>
              In this phase of the {PortfolioDetails.title}, our focus is on executing robust data migration strategies to ensure the seamless transfer of data from on-premises servers to cloud storage solutions. Leveraging advanced techniques and tools,
            </p>
            <div className="row mb-4">
              <div className="col-lg-5">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Comprehensive Assessment Phase</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Strategic Migration Plan Development</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Robust Data Migration Strategies</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Infrastructure Preparation</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Application Migration</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Training and Documentation</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Infrastructure Preparation</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">Post-migration Support</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="details_item_info_title pt-4">Solution & Result</h3>
            <p>
              The successful execution of robust data migration strategies ensures the seamless transfer of data from on-premises servers to cloud storage solutions. Data integrity, security, and regulatory compliance are prioritized throughout the migration process. Rigorous testing and validation verify the accuracy and completeness of data migration, minimizing downtime and data loss risks.
            </p>
            <p>
              To achieve successful data migration, our solution includes a comprehensive approach that encompasses meticulous planning, advanced techniques, and thorough testing. We leverage industry-leading tools and expertise.
            </p>

            <h3 className="details_item_info_title pt-5 mb-4">Our Similar Projects</h3>
            <div className="row">
              {similarProjects.length > 0 ? (
                similarProjects.map((project, prj) => (
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={`${project.Id}-${prj}`}>
                    <div className="portfolio_block portfolio_layout_2">
                      <div className="portfolio_image">
                        <Link
                          onClick={ClickHandler}
                          className="portfolio_image_wrap"
                          to={`/portfolio_details/${project.slug}`}
                        >
                          <img 
                            src={getImageSrc(project.pImg)} 
                            alt={project.title || "Portfolio Item"}
                            onError={handleImageError}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div className="portfolio_content">
                        <ul className="category_list unordered_list">
                          <li>
                            <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                              <i className="fa-solid fa-tags"></i> {project.thumb1 || project.category || 'N/A'}
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                              <i className="fa-solid fa-building"></i> {project.thumb2 || project.Industry || 'N/A'}
                            </Link>
                          </li>
                        </ul>
                        <h3 className="portfolio_title">
                          <Link 
                            onClick={ClickHandler} 
                            to={`/portfolio_details/${project.slug}`}
                            title={project.title}
                          >
                            {project.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="text-center py-5">
                    <div className="mb-4">
                      <i className="fa-solid fa-folder-open fa-3x text-muted"></i>
                    </div>
                    <h4 className="text-muted">No Similar Projects Found</h4>
                    <p className="text-muted mb-4">We couldn't find any projects to show at the moment.</p>
                    <Link to="/portfolio" className="btn btn-primary">
                      <i className="fa-solid fa-arrow-left me-2"></i>
                      View All Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default PortfolioSinglePage;