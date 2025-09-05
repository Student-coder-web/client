import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
     
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Career Vision Into Reality
          </h1>
          <p className="hero-subtitle">
            We help ambitious professionals navigate career complexity, drive innovation, and achieve extraordinary results through AI-powered career guidance.
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard" className="hero-btn-primary">
              Start Your Journey
            </Link>
            <Link to="/career" className="hero-btn-secondary">
              Explore Career Paths
            </Link>
          </div>
        </div>
      </section>
    
      <div className="page-container">
        <div className="home-hero">
          <h2 className="home-title">
            Our Expertise
          </h2>
          <p className="home-subtitle">
            Specialized AI-powered services tailored to meet your career needs and drive exceptional growth
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Career Path Analysis</h3>
              <p className="feature-description">Discover your ideal career path with AI-powered recommendations based on your skills, interests, and market opportunities.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Job Opportunities</h3>
              <p className="feature-description">Find the best job opportunities tailored to your skills and experience with our intelligent matching system.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Learning Hub</h3>
              <p className="feature-description">Enhance your skills with personalized learning resources and courses designed for your career goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
