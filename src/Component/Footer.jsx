import React from "react";
import {
  Facebook,
  House,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#171B2A] text-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <House size={50} color="#FF5A3C" />
            <h2 className="text-3xl font-extrabold text-white"> RENTER</h2>
          </div>
          <p className="text-base leading-6 mb-4 leading-loose">
            Find your dream home with RENTER — your trusted partner for buying,
            selling, and renting premium properties.
          </p>
          <p className="text-base flex gap-2 mt-4 text-[15px]">
            <Phone /> +880 1234-567890
          </p>
          <p className="text-base flex gap-2 mt-3 text-[15px]">
            <Mail /> support@renter.com
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Company</h3>
          <ul className="space-y-5 text-base">
            <li>
              <a href="#" className="footer-hover">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Services</h3>
          <ul className="space-y-5 text-base">
            <li>
              <a href="#" className="footer-hover">
                Property Buying
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Property Selling
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Rent Management
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Property Listing
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Legal Assistance
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">
            Customer Care
          </h3>
          <ul className="space-y-5 text-base">
            <li>
              <a href="#" className="footer-hover">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-hover">
                Report a Problem
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Design by shohan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
