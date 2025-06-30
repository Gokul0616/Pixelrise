import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './components'; // Assuming CTAButton is in a separate file
import { Header, Footer } from './components'; // Assuming Header and Footer are imported

export const TermsOfService = () => {
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
              TERMS OF <span className="text-yellow-400">SERVICE</span>
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
              <h2 className="text-xl font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                By accessing or using the services of Pixel Rise Web Co, including our website (pixelrisewebco.com), web design, development, hosting, or related services, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">2. Services Provided</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pixel Rise Web Co offers web design, development, hosting, maintenance, and related digital services for businesses, as outlined in project agreements or proposals. Services may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Custom website design and development.</li>
                <li>Website hosting with 99.9% uptime guarantee.</li>
                <li>SEO optimization and marketing integrations.</li>
                <li>Emergency website delivery within 24 hours (where applicable).</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                We reserve the right to modify, suspend, or discontinue services at our discretion with prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Provide accurate, complete, and timely information required for project execution.</li>
                <li>Ensure all content (e.g., images, text) provided does not infringe on third-party rights, including copyrights or trademarks.</li>
                <li>Make timely payments as per the agreed schedule.</li>
                <li>Comply with all applicable laws and regulations in your use of our services.</li>
                <li>Maintain the confidentiality of any login credentials provided for website management.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Payments for services are due as specified in the project agreement or invoice. Key terms include:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Payments are typically required in installments (e.g., 50% deposit, 50% upon completion).</li>
                <li>Late payments may incur a 5% late fee per month or the maximum allowed by law.</li>
                <li>All prices are exclusive of applicable taxes (e.g., GST in India), which are the client’s responsibility.</li>
                <li>Emergency services (e.g., 24-hour delivery) may incur additional fees, as outlined in the agreement.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Upon full payment, clients receive ownership of the delivered website’s design and content, except for:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Third-party tools, software, or plugins, which remain licensed under their respective terms.</li>
                <li>Proprietary code or templates owned by Pixel Rise Web Co, which are licensed for use solely on the delivered website.</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Clients grant Pixel Rise Web Co a non-exclusive, royalty-free license to showcase completed projects in our portfolio, marketing materials, or case studies, unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">6. Client Content Ownership</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Clients retain ownership of all content (e.g., logos, images, text) provided to us for use in projects. You represent and warrant that you have the necessary rights to use and provide such content. Pixel Rise Web Co is not liable for any claims arising from client-provided content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">7. Service Level Agreements (SLAs)</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                For hosting and maintenance services, we guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>99.9% website uptime, excluding scheduled maintenance.</li>
                <li>Response to support requests within 24 hours during business days (Monday–Friday, 9 AM–5 PM IST).</li>
                <li>Emergency website delivery within 24 hours, subject to project scope and agreement.</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Specific SLAs will be detailed in the project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">8. Refunds and Cancellations</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Refunds and cancellations are subject to the following:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Cancellations before project start may receive a full refund of any deposit, minus administrative fees (up to 10%).</li>
                <li>No refunds are provided for work completed or services rendered (e.g., design mockups, development hours).</li>
                <li>Hosting services may be canceled with 30 days’ written notice; no refunds for partial billing periods.</li>
                <li>Emergency delivery fees are non-refundable once work begins.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">9. Confidentiality</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pixel Rise Web Co will treat all client-provided information (e.g., business plans, financial data) as confidential and will not disclose it to third parties except as required to deliver services or comply with legal obligations. Clients agree to maintain the confidentiality of any proprietary information provided by Pixel Rise Web Co.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Pixel Rise Web Co is not liable for indirect, incidental, consequential, or punitive damages (e.g., loss of profits, data, or business opportunities) arising from the use of our services.</li>
                <li>Our total liability is limited to the amount paid by the client for the specific service.</li>
                <li>We do not guarantee uninterrupted, error-free, or secure operation of websites or hosting services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">11. Termination</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>By Client:</strong> With 30 days’ written notice, subject to payment for all services rendered.</li>
                <li><strong>By Pixel Rise Web Co:</strong> If the client breaches these terms (e.g., non-payment, misuse of services) and fails to remedy the breach within 14 days of notice.</li>
                <li>Upon termination, clients must pay for all services provided up to the termination date.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">12. Acceptable Use</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Clients agree not to use our services for:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li>Illegal activities or content that violates applicable laws.</li>
                <li>Content that is defamatory, obscene, or infringes on third-party rights.</li>
                <li>Actions that harm our servers or network (e.g., malware, excessive traffic).</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Violation of this policy may result in immediate termination of services without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">13. Force Majeure</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pixel Rise Web Co is not liable for delays or failure to perform services due to circumstances beyond our control, including natural disasters, power outages, cyber-attacks, or government actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">14. Dispute Resolution</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Any disputes arising from these Terms of Service will be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-2">
                <li><strong>Negotiation:</strong> Parties will attempt to resolve disputes amicably within 30 days.</li>
                <li><strong>Arbitration:</strong> If unresolved, disputes will be settled by binding arbitration in Chennai, Tamilnadu, under the Arbitration and Conciliation Act, 1996 (India).</li>
                <li><strong>Jurisdiction:</strong> Any legal proceedings will be conducted in the courts of Chennai, Tamilnadu, India.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">15. Governing Law</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                These Terms of Service are governed by the laws of Tamilnadu, India, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">16. Changes to Terms</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We may update these Terms of Service to reflect changes in our services or legal requirements. Updates will be posted on this page with a revised "Last Updated" date. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">17. Contact Us</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                For questions about these Terms of Service, contact us at:
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