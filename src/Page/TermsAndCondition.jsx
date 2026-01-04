import React from 'react';

const TermsAndCondition = () => {
return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-base-content/70">
            Last updated: January 04, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none text-gray-700">
          <p className="lead text-lg mb-8 text-base-content/80">
            Welcome to RENTER. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            1. Use of the Platform
          </h2>
          <p className='text-base-content/70'>
            RENTER is an online platform that connects property owners with potential tenants. We act only as an intermediary and do not own, sell, or rent any properties listed on the site.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content/70">
            <li>You must be at least 18 years old to use this platform.</li>
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You agree not to use the platform for any unlawful or prohibited activities.</li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            2. Property Listings
          </h2>
          <p className='text-base-content/70'>
            Property owners are solely responsible for the accuracy, completeness, and legality of their listings, including descriptions, photos, pricing, and availability.
          </p>
          <p className="mt-4 text-base-content/70">
            RENTER reserves the right to review, edit, or remove any listing that violates these terms or is deemed inappropriate.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            3. No Brokerage or Agency Relationship
          </h2>
          <p className='text-base-content/70'>
            RENTER does not act as a real estate agent, broker, or legal representative for either property owners or tenants. All agreements (rental contracts, payments, etc.) are made directly between the owner and the tenant.
          </p>
          <p className="mt-4 text-base-content/70">
            We are not responsible for any disputes, damages, or losses arising from such agreements.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            4. Payments and Fees
          </h2>
          <p className='text-base-content/70'>
            Searching and contacting property owners is free for tenants. RENTER does not charge tenants any fees or commissions.
          </p>
          <p className="mt-4 text-base-content/70">
            Property owners may be subject to listing or service fees as outlined during the listing process.
          </p>
          <p className="mt-4 text-base-content/70">
            All rental payments, security deposits, and advance rents are handled directly between the tenant and the property owner.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            5. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content/70">
            <li>Provide accurate and truthful information when creating listings or contacting owners.</li>
            <li>Respect the privacy and property of others.</li>
            <li>Conduct due diligence (property visits, document verification) before entering any rental agreement.</li>
            <li>Report any suspicious or fraudulent listings to us immediately.</li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            6. Limitation of Liability
          </h2>
          <p className='text-base-content/70'>
            RENTER provides the platform "as is" and makes no warranties regarding the accuracy of listings or the outcome of any rental agreement.
          </p>
          <p className="mt-4 text-base-content/70">
            We are not liable for any direct, indirect, or consequential damages arising from the use of our platform.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            7. Intellectual Property
          </h2>
          <p className='text-base-content/70'>
            All content on RENTER (logos, design, text, graphics) is owned by us or licensed to us and is protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            8. Changes to Terms
          </h2>
          <p className='text-base-content/70'>
            We may update these Terms & Conditions from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            9. Contact Us
          </h2>
          <p className='text-base-content/70'>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="mt-4 font-medium text-base-content/70">
            Email: support@renter.com<br />
            Phone: +880 1234-567890
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-base-content/70">
          <p>Thank you for using RENTER – making renting simple and transparent.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;