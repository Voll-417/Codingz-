import React from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    // Navigation handlers
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
      <div className="homepage-container">
          {/* Hero Carousel */}
          <section className="hero-section">
              <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src="/assets/images/r1.webp" alt="Law firm building" className="d-block w-100" />
                          <div className="carousel-caption">
                              <h3>Expert Legal Representation</h3>
                              <p>Trusted by clients for over 20 years</p>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="/assets/images/r2.jpeg" alt="Legal team meeting" className="d-block w-100" />
                          <div className="carousel-caption">
                              <h3>Dedicated Legal Team</h3>
                              <p>Specialized in various practice areas</p>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="/assets/images/r4.webp" alt="Courtroom" className="d-block w-100" />
                          <div className="carousel-caption">
                              <h3>Aggressive Litigation</h3>
                              <p>Protecting your rights in court</p>
                          </div>
                      </div>
                  </div>
                  <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                  </a>
              </div>
          </section>
          
          {/* Legal Services Section */}
          <section className="services-section">
              <h2 className="section-title">Our Legal Services</h2>
              <div className="services-grid">
                  <div className="service-card">
                      <div className="service-icon">⚖️</div>
                      <h3>Corporate & Business Law</h3>
                      <p>Comprehensive legal solutions for businesses of all sizes including contracts, compliance, and mergers.</p>
                  </div>
                  <div className="service-card">
                      <div className="service-icon">👨‍⚖️</div>
                      <h3>Litigation & Dispute Resolution</h3>
                      <p>Aggressive representation in civil and criminal cases with a 95% success rate.</p>
                  </div>
                  <div className="service-card">
                      <div className="service-icon">👪</div>
                      <h3>Family Law</h3>
                      <p>Compassionate handling of divorce, child custody, and domestic matters.</p>
                  </div>
                  <div className="service-card">
                      <div className="service-icon">🏠</div>
                      <h3>Real Estate Law</h3>
                      <p>Expert guidance through property transactions and zoning issues.</p>
                  </div>
                  <div className="service-card">
                      <div className="service-icon">📝</div>
                      <h3>Intellectual Property</h3>
                      <p>Protection for your trademarks, patents, and creative works.</p>
                  </div>
                  <div className="service-card">
                      <div className="service-icon">🌎</div>
                      <h3>Immigration Law</h3>
                      <p>Navigating visa applications and citizenship processes.</p>
                  </div>
              </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
              <h2 className="section-title">Client Testimonials</h2>
              <div className="testimonials-grid">
                  <div className="testimonial-card">
                      <div className="quote">"</div>
                      <p className="testimonial-text">Amazing legal service! They successfully defended my case with strong expertise.</p>
                      <div className="client-info">
                          <p className="client-name">Michael Brown</p>
                          <p className="case-type">Litigation Case</p>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote">"</div>
                      <p className="testimonial-text">The team was highly professional and helped me win my case. Highly recommend!</p>
                      <div className="client-info">
                          <p className="client-name">John Doe</p>
                          <p className="case-type">Business Law</p>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote">"</div>
                      <p className="testimonial-text">They provided excellent guidance throughout my divorce process. Truly grateful!</p>
                      <div className="client-info">
                          <p className="client-name">Sarah Johnson</p>
                          <p className="case-type">Family Law</p>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* Contact Section */}
          <footer className="footer-section">
              <h2 className="section-title">Contact Us</h2>
              <div className="contact-info">
                  <div className="contact-item">
                      <span className="contact-icon">📍</span>
                        <button onClick={() => navigate('/map')}>
                            123 Justice Ave, Suite 500, Kenya
                        </button>

                  </div>
                  <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <p>(254) 745-678-900</p>
                  </div>
                  <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <p>contact@vividvignettefirm.com</p>
                  </div>
              </div>
          </footer>
      </div>
    );
};

export default HomePage;