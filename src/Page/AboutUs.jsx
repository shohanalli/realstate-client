import React from "react";
import { Home, Users, Shield, Clock, MapPin, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About RENTER
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/80 leading-relaxed">
            We are revolutionizing the way people find and rent homes in Bangladesh —
            making the process simple, transparent, and stress-free.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-200 to-transparent"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
            Our Story
          </h2>
          <p className="text-lg text-base-content/60 leading-relaxed max-w-3xl mx-auto">
            RENTER was founded in 2023 with a simple idea: renting a home shouldn't be complicated or full of hidden surprises. 
            We noticed that tenants often faced unreliable listings, dishonest brokers, and lack of transparency — while property owners struggled to find trustworthy renters quickly.
          </p>
          <p className="text-lg text-base-content/60 leading-relaxed mt-6 max-w-3xl mx-auto">
            Today, RENTER is the fastest-growing rental platform in Bangladesh, connecting thousands of tenants with verified property owners — all without brokerage fees for renters.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-base rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-shadow">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[var(--primary-color)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Mission</h3>
            <p className="text-base-content/70 leading-relaxed">
              To make renting homes in Bangladesh fair, transparent, and accessible for everyone — eliminating middlemen and building direct trust between tenants and owners.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-base rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl transition-shadow">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-10 h-10 text-[var(--primary-color)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Vision</h3>
            <p className="text-base-content/70 leading-relaxed">
              To become the most trusted and preferred platform for renting homes across Bangladesh, where every tenant finds their perfect home and every owner finds reliable renters.
            </p>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Transparency", desc: "Verified listings and direct owner contact — no hidden fees or brokers." },
              { icon: Users, title: "Trust", desc: "We verify owners and encourage honest communication between both parties." },
              { icon: Clock, title: "Speed", desc: "Find and move into your new home faster with real-time listings." },
              { icon: MapPin, title: "Local Focus", desc: "Deep understanding of Bangladesh's cities and neighborhoods." },
              { icon: Heart, title: "Customer First", desc: "Tenants search for free — we put renters at the heart of everything." },
              { icon: Home, title: "Quality", desc: "Only verified, high-quality properties make it to our platform." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-xl p-8 text-center hover:translate-y-[-8px] transition-transform shadow-md"
              >
                <value.icon className="w-12 h-12 text-[var(--primary-color)] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                  {value.title}
                </h4>
                <p className="text-base-content/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--primary-color)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold">10,000+</h3>
              <p className="text-xl mt-2">Happy Tenants</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold">5,000+</h3>
              <p className="text-xl mt-2">Verified Properties</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold">50+</h3>
              <p className="text-xl mt-2">Cities Covered</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold">Zero</h3>
              <p className="text-xl mt-2">Brokerage for Tenants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-xl text-base-content/70 mb-10">
            Join thousands of renters who have already found their perfect home with RENTER.
          </p>
          <div className="flex flex-col gap-6 justify-center">
            <a
              href="/all-property"
              className="btn bg-[var(--primary-color)] text-white hover:bg-orange-600 px-10 py-4 text-lg"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;