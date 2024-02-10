import React from "react";
import LogoWhiteIcon from "../../icons/LogoWhiteIcon";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="flex gap-10px margin-120">
        <LogoWhiteIcon />
      </div>
      <div className="flex flex-column gap-8">
        <div className="line"></div>
        <div className="footer-text-set">
          <div>
            <p className="made-with-text">Made with ❤️</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="footer-dot">
              <p className="made-with-text">•</p>
            </div>
            <div>
              <p className="footer-text">Privacy policy</p>
            </div>
            <div>
              <p className="made-with-text">•</p>
            </div>
            <div>
              <p className="footer-text">Terms of usage</p>
            </div>
            <div>
              <p className="made-with-text">•</p>
            </div>
            <div>
              <p className="footer-text">Cancellation policy</p>
            </div>
            <div>
              <p className="made-with-text">•</p>
            </div>
            <div>
              <p className="footer-text">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
