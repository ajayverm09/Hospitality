import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#232946] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About Section */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a href="/" className="mb-4">
              <img src="https://noblehealthcity.com/assets/wLogo%20(1).png" alt="Noble Healthcity Logo" className="h-32" />
            </a>
            <p className="text-sm text-gray-400 mb-6">
              Noble Healthcity, founded by a team of experienced medical professionals, is a leading healthcare provider in Rohtak. Equipped with state-of-the-art technology and staffed by skilled doctors and nurses, we are dedicated to delivering exceptional patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#ff7137] pb-2 inline-block">Important Link</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Home</a></li>
              <li><a href="/about" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> About Us</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Find a Doctor</a></li>
              <li><a href="/blogs" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Blogs</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Career</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> News & Updates</a></li>
              <li><a href="/contact" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Contact Us</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#ff7137] pb-2 inline-block">Departments</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Gastroenterology</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Neuro & Spine Surgery</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> IVF & Infertility</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Sports Injury</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Cardiac Care Unit (CCU)</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Critical Care</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Physiotherapy</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors duration-300"><span className="mr-2">&gt;</span> Laboratory</a></li>
            </ul>
          </div>

          {/* Official Info */}
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#ff7137] pb-2 inline-block">Official Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-1 text-[#ff7137]">
                    <path fillRule="evenodd" d="m11.54 22.351.07.07.009.009a.75.75 0 0 0 1.06 0l.009-.009.07-.07A16.5 16.5 0 0 0 22.5 10.5c0-6.627-5.263-12-11.75-12S-1.5 3.873-1.5 10.5c0 4.887 2.85 9.072 7.042 11.232l.069.07.009.009a.75.75 0 0 0 1.06 0l.009-.009.069-.07a16.5 16.5 0 0 0 7.23-10.887Z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="block text-sm text-white">Location</strong>
                    <p className="text-xs">Plot No. H2 & H3 Sector-30 Phase II, Delhi Road, IMT Rohtak-124001 (HR)</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-1 text-[#ff7137]">
                    <path d="M1.5 8.67v8.586a1.5 1.5 0 0 0 1.5 1.5h17.25a1.5 1.5 0 0 0 1.5-1.5V8.67l-9.14 5.385a1.5 1.5 0 0 1-1.72 0L1.5 8.67Z" />
                    <path d="M22.5 6.904L12.062 12.63c-1.785 1.053-3.939 1.053-5.724 0L1.5 6.904A1.5 1.5 0 0 1 3 5.4h18a1.5 1.5 0 0 1 1.5 1.504Z" />
                  </svg>
                  <div>
                    <strong className="block text-sm text-white">Email</strong>
                    <p className="text-xs">info@noblehealthcity.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-1 text-[#ff7137]">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H4.5a3 3 0 0 1-3-3V4.5Zm12.555 1.843a.75.75 0 0 0-1.079-1.011l-3.344 3.125a.75.75 0 0 0-.256.551v4.5A.75.75 0 0 0 9.75 14a.75.75 0 0 0 .75-.75v-3.75l2.25-2.102Z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="block text-sm text-white">Phone</strong>
                    <p className="text-xs">+91-6262-8484-60</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <div className="bg-[#1f253d] p-4 rounded-lg text-xs text-gray-400 mb-6">
            <span className="font-semibold text-white">Disclaimer:</span> All the information on this website - noblehealthcity.com - is published in good faith and for general information purpose only. Noble Healthcity does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Noble Healthcity), is strictly at your own risk. Noble Healthcity will not be liable for any losses and/or damages in connection with the use of our website.
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p className="mb-2 sm:mb-0">© Copyright 2025 Noble Healthcare. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">Branding Pioneers</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;