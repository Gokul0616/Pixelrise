import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaMobile, FaRocket, FaUsers, FaSearch, FaCheckCircle, FaTachometerAlt, FaHeart, FaBolt } from 'react-icons/fa';

export const MobileWebsites = () => {
  const mobileFeatures = [
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Designed primarily for mobile devices, then adapted for desktop.",
      features: ["Touch-friendly interface", "Thumb-friendly navigation", "Mobile gestures", "Portrait & landscape"]
    },
    {
      icon: FaTachometerAlt,
      title: "Lightning Fast Speed",
      description: "Optimized for fast loading on mobile networks and devices.",
      features: ["Compressed images", "Minified code", "CDN integration", "Lazy loading"]
    },
    {
      icon: FaHeart,
      title: "User Experience",
      description: "Intuitive and engaging mobile user experience.",
      features: ["Easy navigation", "Readable text", "Accessible buttons", "Smooth scrolling"]
    },
    {
      icon: FaBolt,
      title: "Progressive Web App",
      description: "App-like experience with advanced mobile features.",
      features: ["Offline functionality", "Push notifications", "Home screen install", "App-like interface"]
    }
  ];

  const mobileStats = [
    { stat: "58%", description: "of web traffic comes from mobile devices" },
    { stat: "53%", description: "of users abandon sites that take over 3 seconds to load" },
    { stat: "61%", description: "of users are unlikely to return to a mobile site they had trouble accessing" },
    { stat: "40%", description: "will visit a competitor's site instead" }
  ];

  const benefits = [
    {
      icon: FaUsers,
      title: "Better User Engagement",
      description: "Mobile-optimized sites keep users engaged longer",
      metric: "+45% time on site"
    },
    {
      icon: FaSearch,
      title: "Improved SEO Rankings",
      description: "Google prioritizes mobile-friendly websites",
      metric: "+35% search visibility"
    },
    {
      icon: FaRocket,
      title: "Higher Conversion Rates",
      description: "Mobile-optimized sites convert better",
      metric: "+67% more conversions"
    },
    {
      icon: FaMobile,
      title: "Increased Accessibility",
      description: "Reach customers anywhere, anytime",
      metric: "+200% mobile reach"
    }
  ];

  const mobileOptimizations = [
    "Responsive Grid System",
    "Touch-Optimized Buttons",
    "Mobile Navigation Menu",
    "Compressed Image Delivery",
    "Accelerated Mobile Pages (AMP)",
    "Voice Search Optimization",
    "Mobile Payment Integration",
    "Location-Based Features",
    "Social Media Integration",
    "Mobile Analytics Tracking",
    "Cross-Device Synchronization",
    "Offline Content Access"
  ];

  const deviceTypes = [
    { device: "Smartphones", percentage: "91%", description: "Primary mobile browsing device" },
    { device: "Tablets", percentage: "67%", description: "Secondary browsing device" },
    { device: "Smartwatches", percentage: "23%", description: "Emerging browsing platform" },
    { device: "Smart TVs", percentage: "34%", description: "Growing web browsing platform" }
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
              MOBILE-FRIENDLY <span className="text-yellow-400">WEBSITES</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Create exceptional mobile experiences that engage users, improve SEO rankings, 
              and drive conversions across all devices and screen sizes.
            </p>
            <div className="bg-yellow-400 text-black p-4 rounded-lg inline-block mb-6">
              <p className="font-semibold text-sm">📱 Mobile traffic now accounts for over 58% of all web traffic!</p>
            </div>
          </div>

          {/* Mobile Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12"
          >
            {mobileStats.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">{item.stat}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Mobile Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {mobileFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <feature.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.features.map((item, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              MOBILE OPTIMIZATION <span className="text-yellow-400">BENEFITS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <benefit.icon className="text-yellow-400 text-3xl mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-sm">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs mb-3">{benefit.description}</p>
                  <div className="text-green-500 font-bold text-sm">{benefit.metric}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Device Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              DEVICE <span className="text-yellow-400">COMPATIBILITY</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deviceTypes.map((device, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{device.percentage}</h3>
                  <h4 className="font-semibold mb-2 text-sm">{device.device}</h4>
                  <p className="text-gray-400 text-xs">{device.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Optimization Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              MOBILE OPTIMIZATION <span className="text-yellow-400">FEATURES</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mobileOptimizations.map((optimization, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                  <FaCheckCircle className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">{optimization}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile vs Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              MOBILE VS <span className="text-yellow-400">DESKTOP</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">📱 Mobile Experience</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm">• Touch-based navigation</li>
                  <li className="text-gray-300 text-sm">• Vertical scrolling focus</li>
                  <li className="text-gray-300 text-sm">• Thumb-friendly interface</li>
                  <li className="text-gray-300 text-sm">• Simplified navigation</li>
                  <li className="text-gray-300 text-sm">• Fast loading priority</li>
                  <li className="text-gray-300 text-sm">• Location-aware features</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-400 mb-4">🖥️ Desktop Experience</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm">• Mouse and keyboard navigation</li>
                  <li className="text-gray-300 text-sm">• Hover interactions</li>
                  <li className="text-gray-300 text-sm">• Multiple columns layout</li>
                  <li className="text-gray-300 text-sm">• Complex navigation menus</li>
                  <li className="text-gray-300 text-sm">• Rich media content</li>
                  <li className="text-gray-300 text-sm">• Detailed information display</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Progressive Web App Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              PROGRESSIVE WEB APP <span className="text-yellow-400">(PWA)</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4 text-sm">
                  Transform your website into an app-like experience with Progressive Web App technology. 
                  PWAs combine the best of web and mobile apps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Install on home screen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Work offline</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">Push notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">App-like performance</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">50%</h3>
                  <p className="text-sm">higher engagement with PWAs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Ready to Go Mobile-First?</h2>
            <p className="text-black mb-6 text-sm">
              Let's create a mobile-optimized website that delivers exceptional user experience across all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
                📱 GET MOBILE AUDIT
              </CTAButton>
              <CTAButton className="bg-white hover:bg-gray-100 text-black text-sm px-6 py-3">
                🚀 START MOBILE PROJECT
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};