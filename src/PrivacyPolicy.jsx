import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './components'; // Assuming CTAButton is in a separate file
import { Header, Footer } from './components'; // Assuming Header and Footer are imported

export const PrivacyPolicy = () => {
  return (
    <>
      <main className="py-12 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              PRIVACY <span className="text-yellow-400">POLICY</span>
            </h1>
            <p className="text-gray-300 text-sm">
              Last Updated: June 30, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                At Pixel Rise Web Co, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, disclose, and safeguard your data when you visit our website (pixelrisewebco.com) or engage with our services, including web design, development, and hosting. By using our website or services, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We collect information to provide and improve our services. The types of information we may collect include:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Personal Information:</strong> Information you provide directly, such as your name, email address, phone number, company name, and project details when filling out contact forms, scheduling consultations, or requesting quotes.</li>
                <li><strong>Usage Data:</strong> Automatically collected data, including IP address, browser type, operating system, referring URLs, pages visited, time spent on the site, and clickstream data.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance user experience, analyze site performance, and deliver personalized content. Cookies may include essential cookies (required for site functionality), analytics cookies (to track usage), and marketing cookies (for targeted ads).</li>
                <li><strong>Client-Provided Content:</strong> Information or materials (e.g., images, text) you submit for website development projects.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Service Delivery:</strong> To respond to inquiries, process project requests, and deliver web design, development, and hosting services.</li>
                <li><strong>Communication:</strong> To send project updates, respond to support requests, or provide marketing communications (e.g., newsletters) with your consent.</li>
                <li><strong>Analytics and Improvement:</strong> To analyze website usage, monitor performance, and enhance user experience.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, or legal processes.</li>
                <li><strong>Marketing:</strong> To promote our services, such as showcasing your project in our portfolio (with your permission).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to improve your experience on our website. Types of cookies include:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality, such as navigation and form submissions.</li>
                <li><strong>Analytics Cookies:</strong> Collect data on how users interact with our site (e.g., Google Analytics).</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver personalized ads based on your interests.</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                You can manage cookie preferences through your browser settings or our cookie consent popup (if applicable). Disabling cookies may limit some website features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">5. Sharing Your Information</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We do not sell, rent, or trade your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors (e.g., hosting providers, analytics tools like Google Analytics, payment processors) who assist in operating our website and services, bound by confidentiality agreements.</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">6. Data Security</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We implement industry-standard security measures, including encryption (e.g., SSL/TLS), secure servers, and access controls, to protect your data. However, no online transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">7. Data Retention</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. For example, contact form data may be retained for up to 2 years to support ongoing client relationships, while analytics data may be anonymized and stored indefinitely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">8. Your Rights</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Depending on your jurisdiction (e.g., India, EU under GDPR, or California under CCPA), you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your data, subject to legal obligations.</li>
                <li><strong>Restriction:</strong> Request restriction of data processing in certain cases.</li>
                <li><strong>Data Portability:</strong> Request your data in a machine-readable format.</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications or certain data processing (e.g., analytics).</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                To exercise these rights, contact us at pixelrisewebco@gmail.com. We will respond within 30 days or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">9. Children’s Privacy</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we learn that we have collected such data, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your data may be processed or stored in servers located outside your country (e.g., in India or the United States). We ensure that such transfers comply with applicable data protection laws, using safeguards like Standard Contractual Clauses where required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">11. Third-Party Analytics</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use third-party analytics tools (e.g., Google Analytics) to understand website usage. These tools may collect anonymized data about your interactions. For more information, review the privacy policies of these providers:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><a href="https://policies.google.com/privacy" className="text-yellow-400 hover:underline">Google Analytics Privacy Policy</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">12. Third-Party Links</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our website may link to third-party sites (e.g., social media platforms like Instagram or LinkedIn). We are not responsible for their privacy practices or content. Please review their policies before engaging.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">13. Changes to This Policy</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">14. Contact Us</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                For questions, concerns, or to exercise your data rights, contact us at:
              </p>
              <p className="text-gray-300 text-sm mt-2">
                <strong>Email:</strong> pixelrisewebco@gmail.com<br />
                <strong>Address:</strong> Chennai, Tamilnadu, India<br />
                <strong>Phone:</strong> +91 9443914436
              </p>
            </section>

            <div className="text-center">
              <CTAButton className="text-sm px-6 py-3">
                📞 CONTACT US
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};