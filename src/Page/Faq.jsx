import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
const Faq = () => {
const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I list my property for rent on RENTER?",
      answer:
        "First, register or log in to your account. Then go to the 'Add Property' section and fill in all details about your property (photos, rent amount, location, amenities, etc.). Our team will review and approve it, after which your listing will go live.",
    },
    {
      question: "Do tenants have to pay any fees to use RENTER?",
      answer:
        "No, searching for properties and contacting owners is completely free for tenants. We do not charge any hidden fees or commissions from renters.",
    },
    {
      question: "How reliable is the property information?",
      answer:
        "We verify every listing. Owner identity, ownership documents, and property photos are reviewed by our team. However, we always recommend that you personally visit the property and verify documents before signing any agreement.",
    },
    {
      question: "In which areas do you provide services?",
      answer:
        "Currently, we operate in major cities across Bangladesh including Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, and Barisal. We are expanding to more areas soon.",
    },
    {
      question: "Who receives the advance or security deposit?",
      answer:
        "You pay the advance and security deposit directly to the property owner. RENTER does not handle any financial transactions — we only connect tenants with owners.",
    },
    {
      question: "Can I schedule a property viewing?",
      answer:
        "Yes! On each property page, there is a 'Contact Owner' button. You can directly message or call the owner to fix a convenient viewing time.",
    },
    {
      question: "Are bachelors, families, or students allowed?",
      answer:
        "It depends entirely on the owner's preference. Each listing clearly mentions whether bachelors, families, students, or small families are acceptable.",
    },
    {
      question: "Who should I contact if I face any issues?",
      answer:
        "We have 24/7 customer support. You can reach us through the 'Help & Support' or 'Contact Us' section on the website via email, chat, or phone.",
    },
  ];


    return (
       <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about renting and listing properties on RENTER. Still have questions? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-base-200 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[var(--primary-color)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Didn't find your answer? We're here to help.
          </p>
          <a
            href="/contact"
            className="btn my-button"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    );
};

export default Faq;