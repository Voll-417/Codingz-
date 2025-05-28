import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SidebarNavbar.css'; // Custom CSS file

function Navbar() {
  const navigate = useNavigate();
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
    setIsAuthenticated(false);
    navigate('aboutus');
    window.location.reload();
  };

  return (
    <>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>

      {/* Sidebar */}
      <nav className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="firm-name">VIVID VIGNETTE</span>
            <span className="firm-suffix">LAW FIRM ⚖️</span>
          </Link>
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</button>
        </div>

        <ul className="sidebar-menu">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>

          <li className="dropdown">
            <span>Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/getservices" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link></li>
              <li><Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>Legal Consultation</Link></li>
              <li><Link to="/uploadservice" onClick={() => setIsMobileMenuOpen(false)}>Upload Documents</Link></li>
            </ul>
          </li>

          <li><Link to="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/makepayment" onClick={() => setIsMobileMenuOpen(false)}>Payments</Link></li>

          {isAuthenticated ? (
            <li><Link to="/Homepage" onClick={() => setIsMobileMenuOpen(false)}>Homepage</Link></li>
          ) : (
            <>
              <li><Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link></li>
              <li><Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link></li>
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
