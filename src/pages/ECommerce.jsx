import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaShoppingCart, FaCreditCard, FaShieldAlt, FaMobile, FaChartLine, FaUsers, FaCheckCircle, FaCog } from 'react-icons/fa';

export const ECommerce = () => {
  const ecommerceFeatures = [
    {
      icon: FaShoppingCart,
      title: "Shopping Cart & Checkout",
      description: "Seamless shopping experience with secure checkout process.",
      features: ["One-click checkout", "Guest checkout option", "Save for later", "Shopping cart recovery"]
    },
    {
      icon: FaCreditCard,
      title: "Payment Integration",
      description: "Multiple payment options for customer convenience.",
      features: ["Credit/Debit cards", "PayPal integration", "Stripe payments", "Buy now, pay later"]
    },
    {
      icon: FaShieldAlt,
      title: "Security & Trust",
      description: "Enterprise-level security for customer confidence.",
      features: ["SSL certificates", "PCI compliance", "Fraud protection", "Secure customer data"]
    },
    {
      icon: FaMobile,
      title: "Mobile Commerce",
      description: "Optimized for mobile shopping and app-like experience.",
      features: ["Mobile responsive", "Touch-friendly interface", "Mobile payments", "Progressive web app"]
    }
  ];

  const platforms = [
    { name: "Custom E-commerce", description: "Fully customized solution", price: "From $3,999", features: ["Complete customization", "Scalable architecture", "Custom features"] },
    { name: "WooCommerce", description: "WordPress-based solution", price: "From $1,999", features: ["WordPress integration", "Plugin ecosystem", "SEO friendly"] },
    { name: "Shopify", description: "All-in-one platform", price: "From $2,499", features: ["Hosted solution", "Built-in features", "App marketplace"] }
  ];

  const industries = [
    { name: "Fashion & Apparel", icon: "👗", features: ["Size guides", "Color variations", "Lookbooks"] },
    { name: "Electronics", icon: "📱", features: ["Product comparisons", "Specifications", "Warranties"] },
    { name: "Food & Beverage", icon: "🍕", features: ["Delivery zones", "Fresh products", "Subscriptions"] },
    { name: "Health & Beauty", icon: "💄", features: ["Product reviews", "Ingredient lists", "Skin type filters"] },
    { name: "Home & Garden", icon: "🏡", features: ["Room visualizers", "Bulk ordering", "Seasonal products"] },
    { name: "Sports & Fitness", icon: "⚽", features: ["Size charts", "Equipment guides", "Training programs"] }
  ];

  const process = [
    { step: 1, title: "Planning", description: "E-commerce strategy and platform selection" },
    { step: 2, title: "Design", description: "User-friendly store design and product layouts" },
    { step: 3, title: "Development", description: "Custom functionality and payment integration" },
    { step: 4, title: "Testing", description: "Thorough testing of all store functions" },
    { step: 5, title: "Launch", description: "Store deployment and payment setup" },
    { step: 6, title: "Growth", description: "Optimization and marketing integration" }
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
              E-COMMERCE <span className="text-yellow-400">SOLUTIONS</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Professional e-commerce websites that drive sales, enhance customer experience, 
              and grow your online business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-sm px-6 py-3">
                🛒 VIEW E-COMMERCE PORTFOLIO
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-3">
                💬 GET STORE QUOTE
              </CTAButton>
            </div>
          </div>

          {/* E-commerce Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {ecommerceFeatures.map((feature, index) => (
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

          {/* E-commerce Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              E-COMMERCE <span className="text-yellow-400">PLATFORMS</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{platform.description}</p>
                  <div className="text-2xl font-bold text-yellow-400 mb-4">{platform.price}</div>
                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-300 text-sm">{feature}</li>
                    ))}
                  </ul>
                  <CTAButton className="w-full text-sm">Choose Platform</CTAButton>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              INDUSTRY <span className="text-yellow-400">SOLUTIONS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-bold mb-3 text-sm">{industry.name}</h3>
                  <ul className="space-y-1">
                    {industry.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* E-commerce Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              E-COMMERCE DEVELOPMENT <span className="text-yellow-400">PROCESS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">Step {step.step}: {step.title}</h4>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* E-commerce Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 text-center mb-12"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaChartLine className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">300%</h3>
              <p className="text-gray-300 text-sm">Average Sales Increase</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-300 text-sm">E-commerce Stores Built</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaShoppingCart className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">85%</h3>
              <p className="text-gray-300 text-sm">Cart Conversion Rate</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaCog className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-gray-300 text-sm">Support & Maintenance</p>
            </div>
          </motion.div>

          {/* Features Included */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              INCLUDED <span className="text-yellow-400">FEATURES</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Product catalog management",
                "Inventory tracking",
                "Order management system",
                "Customer accounts",
                "Discount & coupon system",
                "Shipping calculator",
                "Tax management",
                "Email notifications",
                "Analytics dashboard",
                "SEO optimization",
                "Mobile responsive design",
                "Social media integration"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Ready to Launch Your Online Store?</h2>
            <p className="text-black mb-6 text-sm">
              Let's create an e-commerce solution that drives sales and grows your business online.
            </p>
            <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
              🚀 START E-COMMERCE PROJECT
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};