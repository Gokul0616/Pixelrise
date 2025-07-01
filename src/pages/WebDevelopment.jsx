import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaCode, FaDatabase, FaMobile, FaShieldAlt, FaRocket, FaCheckCircle, FaCog, FaCloud } from 'react-icons/fa';

export const WebDevelopment = () => {
  const developmentServices = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Modern, interactive user interfaces built with the latest technologies.",
      technologies: ["React", "Vue.js", "JavaScript", "HTML5/CSS3"],
      features: ["Responsive Design", "Interactive Elements", "Fast Loading", "Cross-Browser Compatible"]
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description: "Robust server-side solutions that power your website's functionality.",
      technologies: ["Node.js", "Python", "PHP", "MongoDB"],
      features: ["API Development", "Database Design", "Server Management", "Security Implementation"]
    },
    {
      icon: FaMobile,
      title: "Mobile-First Development",
      description: "Websites optimized for mobile devices with progressive web app features.",
      technologies: ["PWA", "Mobile Optimization", "Touch Interface", "Offline Support"],
      features: ["App-like Experience", "Push Notifications", "Offline Functionality", "Fast Performance"]
    },
    {
      icon: FaShieldAlt,
      title: "Security & Performance",
      description: "Enterprise-level security and optimization for maximum performance.",
      technologies: ["SSL Certificates", "Security Audits", "Performance Optimization", "CDN Integration"],
      features: ["Data Protection", "Speed Optimization", "Regular Updates", "Monitoring"]
    }
  ];

  const developmentProcess = [
    { step: 1, title: "Planning", description: "Technical architecture and project roadmap", icon: FaCog },
    { step: 2, title: "Development", description: "Coding your website with best practices", icon: FaCode },
    { step: 3, title: "Testing", description: "Rigorous testing across devices and browsers", icon: FaCheckCircle },
    { step: 4, title: "Deployment", description: "Launching your website to the world", icon: FaRocket },
    { step: 5, title: "Optimization", description: "Continuous improvement and monitoring", icon: FaCloud },
    { step: 6, title: "Support", description: "Ongoing maintenance and updates", icon: FaShieldAlt }
  ];

  const features = [
    "Custom CMS Integration",
    "E-commerce Functionality",
    "Payment Gateway Integration",
    "Third-party API Integration",
    "Search Engine Optimization",
    "Analytics & Tracking",
    "Contact Forms & Lead Generation",
    "Social Media Integration",
    "Multi-language Support",
    "Advanced Search Functionality",
    "User Account Systems",
    "Booking & Reservation Systems"
  ];

  const technologies = [
    { name: "React", category: "Frontend", color: "bg-blue-500" },
    { name: "Node.js", category: "Backend", color: "bg-green-500" },
    { name: "MongoDB", category: "Database", color: "bg-green-600" },
    { name: "Express.js", category: "Backend", color: "bg-gray-600" },
    { name: "Tailwind CSS", category: "Styling", color: "bg-cyan-500" },
    { name: "JavaScript", category: "Language", color: "bg-yellow-500" },
    { name: "Python", category: "Language", color: "bg-blue-600" },
    { name: "MySQL", category: "Database", color: "bg-orange-500" }
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
              PROFESSIONAL <span className="text-yellow-400">WEB DEVELOPMENT</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Custom web development solutions that bring your vision to life with cutting-edge 
              technology, robust functionality, and scalable architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-sm px-6 py-3">
                🚀 START PROJECT
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-3">
                💬 DISCUSS REQUIREMENTS
              </CTAButton>
            </div>
          </div>

          {/* Development Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {developmentServices.map((service, index) => (
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
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-yellow-400 font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-yellow-400 font-semibold mb-2 text-sm">Features:</h4>
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              DEVELOPMENT <span className="text-yellow-400">PROCESS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProcess.map((step, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-lg" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">Step {step.step}: {step.title}</h4>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies We Use */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              TECHNOLOGIES WE <span className="text-yellow-400">USE</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className={`${tech.color} w-8 h-8 rounded-full mx-auto mb-2`}></div>
                  <h4 className="font-semibold text-sm">{tech.name}</h4>
                  <p className="text-gray-400 text-xs">{tech.category}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features We Develop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              FEATURES WE <span className="text-yellow-400">DEVELOP</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                  <FaCheckCircle className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Packages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              DEVELOPMENT <span className="text-yellow-400">PACKAGES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold mb-2">Basic Development</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-4">$1,499</div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>Static Website</li>
                  <li>Contact Forms</li>
                  <li>Mobile Responsive</li>
                  <li>Basic SEO</li>
                  <li>1 Month Support</li>
                </ul>
                <CTAButton className="w-full text-sm">Choose Plan</CTAButton>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center border-2 border-yellow-400">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold mb-3">POPULAR</div>
                <h3 className="text-lg font-bold mb-2">Professional Development</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-4">$2,999</div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>Dynamic Website</li>
                  <li>CMS Integration</li>
                  <li>Database Integration</li>
                  <li>Advanced Features</li>
                  <li>3 Months Support</li>
                </ul>
                <CTAButton className="w-full text-sm">Choose Plan</CTAButton>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold mb-2">Enterprise Development</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-4">$5,999+</div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>Custom Web Application</li>
                  <li>Advanced Functionality</li>
                  <li>Third-party Integrations</li>
                  <li>Scalable Architecture</li>
                  <li>6 Months Support</li>
                </ul>
                <CTAButton className="w-full text-sm">Choose Plan</CTAButton>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Ready to Build Your Dream Website?</h2>
            <p className="text-black mb-6 text-sm">
              Let's discuss your project requirements and create a custom development solution.
            </p>
            <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
              🚀 START DEVELOPMENT
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};