import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaSearch, FaPalette, FaCode, FaRocket, FaCheckCircle, FaHandshake } from 'react-icons/fa';

export const OurProcess = () => {
  const processSteps = [
    {
      icon: FaHandshake,
      title: "Discovery & Consultation",
      description: "We start with a comprehensive consultation to understand your business, goals, and target audience.",
      details: ["Business analysis", "Competitor research", "Goal setting", "Timeline planning"]
    },
    {
      icon: FaSearch,
      title: "Research & Strategy",
      description: "Deep dive into your industry and market to create a tailored strategy for your website.",
      details: ["Market research", "User personas", "Content strategy", "SEO planning"]
    },
    {
      icon: FaPalette,
      title: "Design & Wireframing",
      description: "Create stunning visuals and user experience that represents your brand perfectly.",
      details: ["Wireframe creation", "Visual design", "Brand integration", "User experience design"]
    },
    {
      icon: FaCode,
      title: "Development & Testing",
      description: "Build your website with clean, efficient code and rigorous testing for optimal performance.",
      details: ["Frontend development", "Backend integration", "Mobile optimization", "Cross-browser testing"]
    },
    {
      icon: FaRocket,
      title: "Launch & Optimization",
      description: "Deploy your website and monitor performance, making adjustments for maximum impact.",
      details: ["Site deployment", "Performance monitoring", "SEO optimization", "Analytics setup"]
    },
    {
      icon: FaCheckCircle,
      title: "Support & Maintenance",
      description: "Ongoing support to ensure your website continues to perform at its best.",
      details: ["Regular updates", "Security monitoring", "Performance optimization", "Content updates"]
    }
  ];

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              OUR <span className="text-yellow-400">PROCESS</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our proven 6-step process ensures your website not only looks amazing but delivers 
              real business results from day one.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-400 text-black p-3 rounded-full mr-4">
                      <step.icon className="text-xl" />
                    </div>
                    <div>
                      <span className="text-yellow-400 font-semibold text-sm">STEP {index + 1}</span>
                      <h2 className="text-xl font-bold">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-800 p-8 rounded-lg text-center">
                    <step.icon className="text-yellow-400 text-6xl mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">Professional execution at every step</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Typical Project Timeline</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">1-2 Weeks</div>
                <p className="text-gray-300 text-sm">Small Business Websites</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">3-4 Weeks</div>
                <p className="text-gray-300 text-sm">Medium Complexity Sites</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">5-8 Weeks</div>
                <p className="text-gray-300 text-sm">Complex E-commerce Sites</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h2 className="text-xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Let's discuss your project and walk you through our process.
            </p>
            <CTAButton className="text-sm px-6 py-3">
              📅 SCHEDULE CONSULTATION
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};