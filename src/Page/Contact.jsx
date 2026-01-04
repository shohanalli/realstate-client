import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/80 leading-relaxed">
            We're here to help! Get in touch with us for any questions, support, or feedback.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-200 to-transparent"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-base-100 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Office Address</h3>
            <p className="text-base-content/70">
              House 12, Road 5<br />
              Dhanmondi, Dhaka 1205<br />
              Bangladesh
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Phone</h3>
            <p className="text-base-content/70">
              <a href="tel:+8801234567890" className="hover:text-[var(--primary-color)] transition">
                +880 1234-567890
              </a>
              <br />
              <span className="text-sm">(Sat - Thu, 9AM - 8PM)</span>
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Email</h3>
            <p className="text-base-content/70">
              <a href="mailto:support@renter.com" className="hover:text-[var(--primary-color)] transition">
                support@renter.com
              </a>
              <br />
              <a href="mailto:info@renter.com" className="hover:text-[var(--primary-color)] transition">
                info@renter.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-base-content/70 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="input input-bordered w-full bg-base-100"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-base-content/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="input input-bordered w-full bg-base-100"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="input input-bordered w-full bg-base-100"
                  placeholder="Property inquiry / Support / Feedback"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content/70 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  required
                  className="textarea textarea-bordered w-full bg-base-100"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-[var(--primary-color)] text-white hover:bg-orange-600 px-10 py-4 text-lg flex items-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Google Map Embed */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
              Find Us on Map
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 lg:h-full">
              <iframe
                title="RENTOR Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.545003085955!2d90.37794831545642!3d23.763889894575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a57e6dd9%3A0x7f6d6f0b8e1b1b0a!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours Note */}
      <section className="py-12 bg-base-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-base-content/70">
            <p className="text-lg">
              Our support team is available <strong>Saturday to Thursday, 9:00 AM - 8:00 PM</strong>. 
              We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;