import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">UH</span>
              </div>
              <span className="text-xl font-bold text-white">UrbanHealthScope</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Researching and addressing systemic health challenges facing India's middle class, focusing on obesity and lifestyle diseases.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@urbanhealthscope.org" 
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={22} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Home
              </Link>
              <Link to="/problem" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Problem Domain
              </Link>
              <Link to="/analysis" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Systems Analysis
              </Link>
              <Link to="/findings" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Research Findings
              </Link>
              <Link to="/team" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Team Members
              </Link>
              <Link to="/resources" className="text-neutral-300 hover:text-primary-400 transition-colors">
                Resources
              </Link>
            </nav>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About the Project</h3>
            <p className="text-neutral-300 mb-4">
              FSTE Hackathon 53 Project by Team FSTE, focusing on addressing lifestyle diseases and obesity in middle-class India through systems thinking.
            </p>
            <p className="text-neutral-300">
              <strong className="text-white">Contact:</strong> <br />
              Email: team@urbanhealthscope.org
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-neutral-700 text-center text-neutral-400">
          <p>© {currentYear} UrbanHealthScope | FSTE Hackathon 53 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;