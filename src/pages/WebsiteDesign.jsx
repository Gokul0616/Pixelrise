import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaPalette, FaMobile, FaSearch, FaRocket, FaCheckCircle, FaUsers, FaTrophy, FaCrown } from 'react-icons/fa';

export const WebsiteDesign = () => {
  const designServices = [
    {
      icon: FaPalette,
      title: "Custom Visual Design",
      description: "Unique, brand-focused designs that set you apart from competitors.",
      features: ["Brand Integration", "Color Psychology", "Typography Selection", "Visual Hierarchy"]
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "Perfect experience across all devices - desktop, tablet, and mobile.",
      features: ["Mobile-First Approach", "Cross-Device Testing", "Touch-Friendly Interface", "Fast Loading"]
    },
    {
      icon: FaUsers,
      title: "User Experience (UX)",
      description: "Intuitive navigation and user flows that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Conversion Optimization", "A/B Testing"]
    },
    {
      icon: FaSearch,
      title: "SEO-Optimized Design",
      description: "Designs built with search engines in mind for better visibility.",
      features: ["Clean Code Structure", "Fast Page Speed", "Mobile Optimization", "Schema Markup"]
    }
  ];

  const designProcess = [
    { step: 1, title: "Discovery", description: "Understanding your brand, goals, and target audience" },
    { step: 2, title: "Research", description: "Analyzing competitors and industry best practices" },
    { step: 3, title: "Wireframing", description: "Creating the blueprint for your website structure" },
    { step: 4, title: "Visual Design", description: "Bringing your brand to life with stunning visuals" },
    { step: 5, title: "Prototyping", description: "Interactive prototypes for testing and feedback" },
    { step: 6, title: "Final Design", description: "Polished, pixel-perfect designs ready for development" }
  ];

  const industries = [
    { name: "Roofing Contractors", icon: "🏠", growth: "+300%" },
    { name: "Hotels & Hospitality", icon: "🏨", growth: "+400%" },
    { name: "Restaurants", icon: "🍽️", growth: "+500%" },
    { name: "Fitness Centers", icon: "💪", growth: "+600%" },
    { name: "Beauty Salons", icon: "💅", growth: "+400%" },
    { name: "Professional Services", icon: "💼", growth: "+250%" }
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
              PROFESSIONAL <span className="text-yellow-400">WEBSITE DESIGN</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Transform your business with stunning, conversion-focused website designs that 
              captivate your audience and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-sm px-6 py-3">
                🎨 VIEW PORTFOLIO
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-3">
                📞 GET FREE QUOTE
              </CTAButton>
            </div>
          </div>

          {/* Design Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <service.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              OUR DESIGN <span className="text-yellow-400">PROCESS</span>
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {designProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              INDUSTRY <span className="text-yellow-400">EXPERTISE</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h4 className="font-semibold mb-2 text-sm">{industry.name}</h4>
                  <div className="text-green-500 font-bold text-sm">{industry.growth} Growth</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 text-center mb-12"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaTrophy className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Websites Designed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">120+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaRocket className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">300%</h3>
              <p className="text-gray-300 text-sm">Average Lead Increase</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaCrown className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-300 text-sm">Satisfaction Rate</p>
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gray-800 p-8 rounded-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Professional website design starting from just $999. Get a custom quote based on your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-sm px-6 py-3">
                💬 GET FREE CONSULTATION
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-3">
                📊 VIEW PRICING PLANS
              </CTAButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};