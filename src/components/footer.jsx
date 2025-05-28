import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-5">
      <div className="container">
        {/* Marquee Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="marquee-container bg-primary py-2">
              <marquee behavior="scroll" direction="left" scrollamount="5">
                <span className="h5">Enjoy our premium legal services • Trusted by thousands • Excellence in advocacy • Your success, our priority</span>
              </marquee>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <div className="d-flex gap-4">
              <a href="#" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className="hover-gold" />
              </a>
              <a href="#" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="hover-gold" />
              </a>
              <a href="#" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} className="hover-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row text-center mb-3">
          <div className="col-12">
            <p className="mb-1">&copy; 2025 Vivid Vignette. All rights reserved</p>
            <p>Developed by Rosaline Mwangi</p>
          </div>
        </div>

        {/* Partner Firms */}
        <div className="row">
          <div className="col-12">
            <p className="small text-muted mb-0">
              Partnered with: ADRA Advocates LLP, Bowmans, Cliffe Dekker Hofmeyr, 
              CMS Daly Inamdar Advocates, DLA Piper Africa Kenya (IKM Advocates), 
              ENSafrica, Kaplan & Stratton Advocates, KO Associates, MMC ASAFO, 
              OLM Law Advocates LLP, Oraro & Company Advocates, TripleOKlaw Advocates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;