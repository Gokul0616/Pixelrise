import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaSearch, FaChartLine, FaUsers, FaMobile, FaRocket, FaCheckCircle, FaCrown, FaBullhorn } from 'react-icons/fa';

export const WhatIsSEO = () => {
  const seoComponents = [
    {
      icon: FaSearch,
      title: "Keyword Research",
      description: "Finding the right keywords your customers are searching for.",
      details: ["Search Volume Analysis", "Competitor Analysis", "Long-tail Keywords", "Local Keywords"]
    },
    {
      icon: FaChartLine,
      title: "On-Page SEO",
      description: "Optimizing your website content and structure for search engines.",
      details: ["Title Tags", "Meta Descriptions", "Header Structure", "Internal Linking"]
    },
    {
      icon: FaMobile,
      title: "Technical SEO",
      description: "Ensuring your website meets search engine technical requirements.",
      details: ["Site Speed", "Mobile Responsiveness", "SSL Certificate", "XML Sitemaps"]
    },
    {
      icon: FaBullhorn,
      title: "Off-Page SEO",
      description: "Building authority and trust through external signals.",
      details: ["Link Building", "Local Citations", "Social Signals", "Online Reviews"]
    }
  ];

  const seoProcess = [
    { step: 1, title: "SEO Audit", description: "Comprehensive analysis of your current website" },
    { step: 2, title: "Keyword Strategy", description: "Research and target the right keywords" },
    { step: 3, title: "On-Page Optimization", description: "Optimize content and website structure" },
    { step: 4, title: "Technical Fixes", description: "Address technical SEO issues" },
    { step: 5, title: "Content Creation", description: "Develop SEO-optimized content" },
    { step: 6, title: "Monitoring & Reporting", description: "Track progress and adjust strategy" }
  ];

  const seoFacts = [
    "75% of users never scroll past the first page of search results",
    "SEO leads have a 14.6% close rate vs 1.7% for outbound leads",
    "61% of marketers say improving SEO is their top priority",
    "Local searches lead 50% of mobile users to visit stores within 24 hours"
  ];

  const benefits = [
    { icon: FaUsers, title: "More Website Traffic", description: "Increase organic visitors to your website" },
    { icon: FaChartLine, title: "Higher Conversion Rates", description: "Convert more visitors into customers" },
    { icon: FaCrown, title: "Brand Authority", description: "Establish your business as an industry leader" },
    { icon: FaRocket, title: "Long-term Growth", description: "Sustainable business growth over time" }
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
              WHAT IS <span className="text-yellow-400">SEO?</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Search Engine Optimization (SEO) is the practice of improving your website's visibility 
              in search engine results, helping your ideal customers find you online.
            </p>
            <div className="bg-yellow-400 text-black p-4 rounded-lg inline-block mb-6">
              <p className="font-semibold text-sm">💡 Did you know? 93% of online experiences begin with a search engine!</p>
            </div>
          </div>

          {/* What SEO Does */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              HOW SEO <span className="text-yellow-400">WORKS</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {seoComponents.map((component, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 text-black p-3 rounded-full">
                      <component.icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{component.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{component.description}</p>
                      <ul className="space-y-1">
                        {component.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-500 text-sm" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SEO Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              WHY YOUR BUSINESS <span className="text-yellow-400">NEEDS SEO</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <benefit.icon className="text-yellow-400 text-3xl mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-sm">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SEO Facts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              SEO <span className="text-yellow-400">STATISTICS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {seoFacts.map((fact, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300 text-sm">📊 {fact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SEO Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              OUR SEO <span className="text-yellow-400">PROCESS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoProcess.map((step, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Local SEO Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              LOCAL SEO FOR <span className="text-yellow-400">BUSINESSES</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4 text-sm">
                  Local SEO is crucial for businesses that serve specific geographic areas. 
                  It helps you appear in "near me" searches and Google Maps results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Google My Business Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Local Citation Building</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Review Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Location-based Keywords</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">46%</h3>
                  <p className="text-sm">of all Google searches are local</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SEO vs Paid Ads */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              SEO VS <span className="text-yellow-400">PAID ADVERTISING</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-green-500 mb-4">✅ SEO (Organic)</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm">• Long-term sustainable results</li>
                  <li className="text-gray-300 text-sm">• Builds trust and credibility</li>
                  <li className="text-gray-300 text-sm">• Cost-effective over time</li>
                  <li className="text-gray-300 text-sm">• 24/7 visibility</li>
                  <li className="text-gray-300 text-sm">• Higher click-through rates</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">⚡ Paid Ads</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm">• Immediate results</li>
                  <li className="text-gray-300 text-sm">• Requires ongoing budget</li>
                  <li className="text-gray-300 text-sm">• Results stop when ads stop</li>
                  <li className="text-gray-300 text-sm">• Limited to ad budget</li>
                  <li className="text-gray-300 text-sm">• Less trusted by users</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Ready to Improve Your Search Rankings?</h2>
            <p className="text-black mb-6 text-sm">
              Get a free SEO audit and discover how we can help your business rank higher on Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
                🔍 FREE SEO AUDIT
              </CTAButton>
              <CTAButton className="bg-white hover:bg-gray-100 text-black text-sm px-6 py-3">
                📞 TALK TO SEO EXPERT
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};