import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false); // Update auth state
    navigate('aboutus');
    window.location.reload(); // Force refresh to update UI
  };
 

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : 'navbar-top'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="firm-name">VIVID VIGNETTE</span>
          <span className="firm-suffix">LAW FIRM</span>
          <span className="brand-icon">⚖️</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Services
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/getservices" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link></li>
                <li><Link className="dropdown-item" to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>Legal Consultation</Link></li>
                <li><Link className="dropdown-item" to="/uploadservice" onClick={() => setIsMobileMenuOpen(false)}>Upload Documents</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/makepayment" onClick={() => setIsMobileMenuOpen(false)}>Payments</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/Homepage" onClick={() => setIsMobileMenuOpen(false)}>Homepage</Link>
                </li>
                
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signup-btn" to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </li>

                <li className="nav-item">
                  <button className="nav-link logout-btn" onClick={handleLogout}>Logout</button>
                </li>

                <li className="nav-item">
                  <Link className="nav-link signup-btn" to="/LawChatbot" onClick={() => setIsMobileMenuOpen(false)}>LawChatbot</Link>
                </li>

              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;