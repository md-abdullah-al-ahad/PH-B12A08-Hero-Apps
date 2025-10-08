import React from "react";
import logo from "../../../public/logo.png";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HERO.IO" className="w-8 h-8" />
              <span className="text-xl font-bold">HERO.IO</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Building innovative apps that transform ideas into seamless
              digital experiences.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/md-abdullah-al-ahad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-wrap justify-between flex-1 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:text-primary">Mobile Apps</a>
                </li>
                <li>
                  <a className="hover:text-primary">Web Apps</a>
                </li>
                <li>
                  <a className="hover:text-primary">Desktop Apps</a>
                </li>
                <li>
                  <a className="hover:text-primary">Enterprise Solutions</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:text-primary">App Store</a>
                </li>
                <li>
                  <a className="hover:text-primary">Google Play</a>
                </li>
                <li>
                  <a className="hover:text-primary">Developer Portal</a>
                </li>
                <li>
                  <a className="hover:text-primary">Documentation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:text-primary">About Us</a>
                </li>
                <li>
                  <a className="hover:text-primary">Careers</a>
                </li>
                <li>
                  <a className="hover:text-primary">Press Kit</a>
                </li>
                <li>
                  <a className="hover:text-primary">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:text-primary">Help Center</a>
                </li>
                <li>
                  <a className="hover:text-primary">Terms of Service</a>
                </li>
                <li>
                  <a className="hover:text-primary">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:text-primary">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold">HERO.IO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
