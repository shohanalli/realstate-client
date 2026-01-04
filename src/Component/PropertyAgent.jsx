import { Facebook, Linkedin } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
const PropertyAgent = () => {
  return (
    <div>
      <section className="py-18">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10 text-[var(--color-text)]">
            Property Agents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
            <div className="bg-base-200 h-[auto] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300  flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co.com/WND6NWhc/Screenshot-6.png"
                alt="John Doe"
                className="h-90 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-base-content">Rima Akter</h3>
              <h3 className="text-base font-semibold mb-3 text-[var(--primary-color)]">
                Property Seller
              </h3>
              <div className="flex gap-3 pb-8">
                <Facebook size={18} className="text-base-content" />
                <Linkedin size={18} className="text-base-content" />
                <FaXTwitter size={18} className="text-base-content" />
              </div>
            </div>
            <div className="bg-base-200 h-[auto] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300  flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co.com/xtG7XV5r/Screenshot-8.png"
                alt="John Doe"
                className="h-90 w-full object-fill mb-4"
              />
              <h3 className="text-xl font-semibold text-base-content">Imran Hossain</h3>
              <h3 className="text-base font-semibold mb-3 text-[var(--primary-color)]">
                Selling Agents
              </h3>
              <div className="flex gap-3 pb-8">
                <Facebook size={18} className="text-base-content" />
                <Linkedin size={18} className="text-base-content" />
                <FaXTwitter size={18} className="text-base-content" />
              </div>
            </div>
            <div className="bg-base-200 h-[auto] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300  flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co.com/nqYF5jcq/Screenshot-7.png"
                alt="John Doe"
                className="h-90 w-full object-fill mb-4"
              />
              <h3 className="text-xl font-semibold text-base-content">Hasan Mahmud</h3>
              <h3 className="text-base font-semibold mb-3 text-[var(--primary-color)]">
                Real Estate Broker
              </h3>
              <div className="flex gap-3 pb-8">
                <Facebook size={18} className="text-base-content" />
                <Linkedin size={18} className="text-base-content" />
                <FaXTwitter size={18} className="text-base-content" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyAgent;
