
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {

  return (
    <footer className="bg-[#171B2A] text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">RENTER</h2>
          <p className="text-sm leading-6 mb-4">
            Find your dream home with RENTER — your trusted partner for buying,
            selling, and renting premium properties.
          </p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm mb-4">📧 support@renter.com</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#FF5A3C] transition">
              <Twitter size={20} />
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
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FF5A3C]">About Us</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Careers</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Blog</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Press</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Contact</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FF5A3C]">Property Buying</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Property Selling</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Rent Management</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Property Listing</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Legal Assistance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FF5A3C]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF5A3C]">Report a Problem</a></li>
          </ul>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RENTER. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
