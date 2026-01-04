import React from "react";
import { DollarSign, Camera, Target, Users, FileText, HeadphonesIcon } from "lucide-react";

const PropertySelling = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Property Selling Service
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/80 leading-relaxed">
            We help you sell your property at the right price and as quickly as possible.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-200 to-transparent"></div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: DollarSign, title: "Market Price Valuation", desc: "Accurate and profitable pricing based on current market rates in your area." },
            { icon: Camera, title: "Professional Photography", desc: "High-quality photos and videos for attractive listings." },
            { icon: Target, title: "Targeted Marketing", desc: "Promotion across online platforms, social media, and our buyer database." },
            { icon: Users, title: "Qualified Buyer Matching", desc: "Connecting you with financially capable and interested buyers." },
            { icon: FileText, title: "Legal & Documentation Support", desc: "Full assistance with sale agreements, registration, and tax matters." },
            { icon: HeadphonesIcon, title: "End-to-End Support", desc: "We're with you from viewings to final handover." },
          ].map((service, i) => (
            <div key={i} className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{service.title}</h3>
              <p className="text-base-content/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-base-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
            Contact Us Today to Sell Your Property
          </h2>
          <a href="/contact" className="btn bg-[var(--primary-color)] text-white hover:bg-orange-600 px-10 py-4 text-lg">
            Get in Touch for Selling
          </a>
        </div>
      </section>
    </div>
  );
};

export default PropertySelling;