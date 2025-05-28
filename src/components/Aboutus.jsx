import React from 'react';
import { useNavigate } from 'react-router-dom';

function Aboutus() {
  const navigate = useNavigate();
  
  const goToHomepage = () => {
    navigate('/');
  };

  return (
    <div className="about-us-container">
      <nav>
        <button className="btn btn-outline-primary m-4" onClick={goToHomepage}>
          Back to Homepage
        </button>
      </nav>


      
      <div className="header-banner">
        <img src="/static/images/Law.png" alt="Prestige Legal Associates Office
        " className="w-100" />
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h1 className="display-4">About Vivid vignette Firm</h1>
            <div className="underline mx-auto"></div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2>Our Heritage</h2>
            <p className="lead">
              Founded in 2025, Vivid Vignette has grown from a small practice to one of the region's most respected full-service law firms. Our founding principles of excellence, integrity, and client commitment continue to guide us today.
            </p>
            <p>
              Over the past four months, we've successfully represented thousands of clients in matters ranging from complex corporate transactions to sensitive family law cases. Our longevity in the legal community is a testament to our consistent results and ethical practice.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/static/images/q1.jpg" alt="Our Firm History" className="img-fluid rounded" />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <h2>Our Philosophy</h2>
            <p className="lead">
              At Vivid Vignette Legal, we believe the law should be accessible, understandable, and effective for every client.
            </p>
            <p>
              We reject the "one-size-fits-all" approach, instead crafting personalized legal strategies for each client's unique circumstances. Our attorneys take time to understand not just the legal issues, but the human stories behind each case.
            </p>
            <ul className="value-list">
              <li><strong>Client-Centered:</strong> Your goals become our goals</li>
              <li><strong>Strategic:</strong> Forward-thinking legal solutions</li>
              <li><strong>Ethical:</strong> Uncompromising professional standards</li>
              <li><strong>Innovative:</strong> Leveraging technology for better outcomes</li>
            </ul>
          </div>
          <div className="col-md-6 order-md-1">
            <img src="/assets/images/corporate.jpg" alt="Our Legal Philosophy" className="img-fluid rounded" />
          </div>
        </div>

        <div className="achievements-section text-center p-5 mb-5">
          <h2 className="mb-4">Our Achievements</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="counter-box">
                <h3>500+</h3>
                <p>Satisfied Corporate Clients</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box">
                <h3>$2B+</h3>
                <p>Recovered for Clients</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box">
                <h3>30+</h3>
                <p>Legal Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="community-section mb-5">
          <h2 className="text-center mb-4">Community Involvement</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Beyond our legal practice, we're committed to serving our community through pro bono work, legal education initiatives, and partnerships with local organizations. Each year, our attorneys dedicate hundreds of hours to helping those who cannot afford legal representation.
              </p>
              <p>
                We're proud sponsors of the Community Legal Clinic and active participants in the Bar Association's mentorship program for young lawyers.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/static/images/w4.jpeg" alt="Community Involvement" className="img-fluid rounded" />
            </div>
          </div>
        </div>

        <div className="testimonials-section p-5 mb-5">
          <h2 className="text-center mb-4">Client Testimonials</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <p>"vivid_vignette firm  guided us through a complex merger with exceptional skill. Their attention to detail saved us millions."</p>
                <p className="client-name">- James Wilson, CEO TechCorp</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <p>"When I faced a serious legal challenge, the team at Vivid Vignette stood by me every step of the way. I can't recommend them enough."</p>
                <p className="client-name">- Maria Gonzalez</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <p>"Their intellectual property team protected our patents aggressively and effectively. True experts in their field."</p>
                <p className="client-name">- Dr. Robert Chen, BioInnovate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;