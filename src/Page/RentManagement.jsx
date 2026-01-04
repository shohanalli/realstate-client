import React from "react";
import { Home, Shield, Clock, Users, Phone, CheckCircle } from "lucide-react";

const RentManagement = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
             Rent Management Service
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/80 leading-relaxed">
              We fully manage your rental property so you can enjoy regular income without any hassle.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-200 to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Tenant Screening & Placement", desc: "We find reliable tenants and verify their identity and financial capability." },
            { icon: Shield, title: "Legal Agreement Preparation", desc: "We prepare secure and legally compliant rental agreements." },
            { icon: Home, title: "Rent Collection", desc: "We collect monthly rent and deposit it directly into your bank account." },
            { icon: Clock, title: "Property Maintenance", desc: "We handle minor repairs and regular property inspections." },
            { icon: CheckCircle, title: "Annual Reporting", desc: "We provide detailed income-expense reports and tax documentation." },
            { icon: Phone, title: "24/7 Support", desc: "Immediate assistance for any issues from tenants or owners." },
          ].map((feature, index) => (
            <div key={index} className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{feature.title}</h3>
              <p className="text-base-content/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-base-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
            Hand Over Your Property to Us — Stay Worry-Free
          </h2>
          <a href="/contact" className="btn bg-[var(--primary-color)] text-white hover:bg-orange-600 px-10 py-4 text-lg">
            Contact Us for This Service
          </a>
        </div>
      </section>
    </div>
  );
};

export default RentManagement;