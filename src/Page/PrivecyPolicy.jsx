import React from 'react';

const PrivecyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-base-content/70">
            Last updated: January 04, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none text-gray-700">
          <p className="lead text-lg mb-8 text-base-content">
            At RENTER, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and services.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            1. Information We Collect
          </h2>
          <p className='text-base-content/70'>We collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and profile photo when you create an account or contact property owners.
            </li>
            <li>
              <strong>Property Information:</strong> Details you provide when listing a property (address, photos, rent amount, amenities, etc.).
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and device information (automatically collected).
            </li>
            <li>
              <strong>Cookies and Tracking Data:</strong> We use cookies to improve your experience, remember login status, and analyze site traffic.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className='text-base-content/70'>We use your information to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content">
            <li>Provide and improve our services (e.g., connect tenants with property owners).</li>
            <li>Verify accounts and prevent fraud.</li>
            <li>Send important updates, notifications, or promotional messages (you can opt out anytime).</li>
            <li>Analyze website usage and improve user experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            3. Sharing Your Information
          </h2>
          <p className='text-base-content/70'>We do not sell your personal information. We may share it only in these cases:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content">
            <li>With property owners when you express interest in their listing (e.g., your name and phone number).</li>
            <li>With service providers (e.g., hosting, analytics, email services) who are bound by confidentiality.</li>
            <li>When required by law or to protect our rights and safety.</li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            4. Data Security
          </h2>
          <p className='text-base-content/70'>
            We use industry-standard security measures (encryption, secure servers, firewalls) to protect your data. However, no online system is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            5. Your Rights and Choices
          </h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base-content">
            <li>Access, update, or delete your personal information from your account settings.</li>
            <li>Opt out of promotional emails using the unsubscribe link.</li>
            <li>Disable cookies in your browser settings (may affect site functionality).</li>
            <li>Request data deletion by contacting us (subject to legal requirements).</li>
          </ul>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            6. Third-Party Links
          </h2>
          <p className='text-base-content/70'>
            Our website may contain links to third-party sites (e.g., social media, payment gateways). We are not responsible for their privacy practices.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            7. Children's Privacy
          </h2>
          <p className='text-base-content/70'>
            Our services are not intended for individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            8. Changes to This Policy
          </h2>
          <p className='text-base-content/70'>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.
          </p>

          <h2 className="text-2xl font-bold text-base-content mt-10 mb-4">
            9. Contact Us
          </h2>
          <p className='text-base-content/70'>
            If you have any questions about this Privacy Policy or your data, please contact us:
          </p>
          <p className="mt-4 font-medium text-base-content">
            Email: privacy@renter.com<br />
            Phone: +880 1234-567890<br />
            Address: Dhaka, Bangladesh
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-base-content/70">
          <p>Thank you for trusting RENTER with your information.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivecyPolicy;