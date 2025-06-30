import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGoogle, 
  FaYoutube,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCrown,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaTrophy,
  FaHeart,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaDollarSign,
  FaCalendarAlt,
  FaBuilding,
  FaTools
} from 'react-icons/fa';

// Emergency Marquee Component (Footer Only)
const EmergencyMarquee = () => {
  return (
    <div className="bg-red-600 text-white py-1.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>

        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        <span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span><span className="text-xs font-semibold mx-4">
          🚨 EMERGENCY WEBSITE DELIVERY WITHIN 24 HOURS! 🚨
        </span>
        
      </div>
    </div>
  );
};

// CTA Button Component
const CTAButton = ({ className = "", children, onClick, to = "/contact" }) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors btn-hover text-sm ${className}`}
    >
      {children}
    </motion.button>
  );

  if (to && !onClick) {
    return (
      <Link to={to}>
        {content}
      </Link>
    );
  }

  return content;
};

// Infinite Marquee Component
const InfiniteMarquee = ({ children, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-marquee-infinite whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full">
              <FaCrown className="text-black text-lg" />
            </div>
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-red-500">PIXEL RISE</span>
              </h1>
              <p className="text-xs text-yellow-400 -mt-1">WEB CO</p>
            </div>
          </Link>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-1 bg-yellow-400 px-3 py-1.5 rounded-full">
            <a href="https://facebook.com" className="text-black hover:text-blue-600 transition-colors">
              <FaFacebook size={16} />
            </a>
            <a href="https://instagram.com/pixelrisewebco" className="text-black hover:text-pink-600 transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="https://google.com" className="text-black hover:text-red-600 transition-colors">
              <FaGoogle size={16} />
            </a>
            <a href="https://youtube.com" className="text-black hover:text-red-600 transition-colors">
              <FaYoutube size={16} />
            </a>
            <a href="https://in.linkedin.com/company/pixelrise-web-co-a07440371" className="text-black hover:text-blue-800 transition-colors">
              <FaLinkedin size={16} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-white">
              <FaPhone className="text-yellow-400 text-sm" />
              <span className="text-xs">+1 (407) 641-3731</span>
            </div>
          </div>

          {/* Schedule Call Button */}
          <CTAButton className="hidden lg:block text-xs px-3 py-1.5">
            📅 SCHEDULE CALL
          </CTAButton>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block border-t border-gray-800">
          <div className="flex items-center justify-center space-x-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-medium transition-colors hover:text-yellow-400 ${
                  location.pathname === item.path 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-800"
            >
              <div className="py-3 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-xs font-medium transition-colors hover:text-yellow-400 ${
                      location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <CTAButton className="w-full mt-3 text-xs">
                  📅 SCHEDULE CALL
                </CTAButton>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-black py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                TRANSFORMING
                <br />
                <span className="text-yellow-400">BUSINESSES</span> THROUGH
                <br />
                DIGITAL EXCELLENCE
              </h1>
              
              <div className="flex items-center space-x-2 text-xs">
                <span>WHERE INNOVATION MEETS</span>
                <span className="text-yellow-400 font-bold">RESULTS</span>
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-yellow-400"
                >
                  ⭐
                </motion.span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <FaUsers className="text-yellow-400 text-xs" />
                  <span className="text-xs">MORE TRAFFIC</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <FaTrophy className="text-yellow-400 text-xs" />
                  <span className="text-xs">BETTER LEADS</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <FaRocket className="text-yellow-400 text-xs" />
                  <span className="text-xs">GROW BUSINESS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-1.5 rounded-full">
                <FaShieldAlt className="text-yellow-400 text-sm" />
              </div>
              <span className="text-xs">100% SATISFACTION GUARANTEED</span>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
              <div className="flex -space-x-1">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108755-2616c56e4d98?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={12} />
                  ))}
                </div>
                <p className="text-xs text-gray-300">
                  <span className="font-bold">5/5</span> 120+ HAPPY CLIENTS
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton className="flex-1 text-sm">
                🚀 GET STARTED NOW
              </CTAButton>
              <CTAButton className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black text-sm">
                📞 CALL NOW
              </CTAButton>
            </div>
          </motion.div>

          {/* Right Content - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=500&h=300&fit=crop" 
                  alt="Professional Website" 
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -right-8 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1553169507-38833977274b?w=150&h=200&fit=crop" 
                  alt="Mobile Website" 
                  className="w-24 h-36 object-cover rounded-lg shadow-xl border-2 border-white"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-8 -right-4 bg-yellow-400 text-black p-2 rounded-full shadow-lg"
              >
                <span className="font-bold text-xs">24H</span>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 left-8 bg-green-500 text-white p-1.5 rounded-full shadow-lg"
              >
                <FaStar size={12} />
              </motion.div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 left-4 bg-gray-800 p-3 rounded-lg shadow-xl max-w-xs"
            >
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Michael" 
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={10} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">Michael</p>
                  <p className="text-xs text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-xs text-gray-300">
                "Pixel Rise Web Co delivered exactly what we needed. Professional, fast, and reliable!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 'rapid-response',
      title: "RAPID RESPONSE",
      image: "https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=400&h=300&fit=crop",
      category: "Roofing"
    },
    {
      id: 'columbus-roofing',
      title: "COLUMBUS ROOFING",
      image: "https://images.unsplash.com/photo-1553169507-38833977274b?w=400&h=300&fit=crop",
      category: "Roofing"
    },
    {
      id: 'vanguard-hotel',
      title: "VANGUARD HOTEL",
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=400&h=300&fit=crop",
      category: "Hotel"
    },
    {
      id: 'tsm-restaurant', 
      title: "TSM RESTAURANT",
      image: "https://images.unsplash.com/photo-1591882592683-b68044f837b0?w=400&h=300&fit=crop",
      category: "Restaurant"
    },
    {
      id: 'gravity-fitness',
      title: "GRAVITY FITNESS",
      image: "https://images.unsplash.com/photo-1596357395328-bb8ef99affbb?w=400&h=300&fit=crop",
      category: "Gym"
    },
    {
      id: 'royal-beauty',
      title: "ROYAL BEAUTY",
      image: "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?w=400&h=300&fit=crop",
      category: "Beauty Parlor"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-3">
            PORTFOLIO
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block text-yellow-400 ml-2"
            >
              👑
            </motion.span>
          </h2>
          <p className="text-yellow-400 text-sm font-semibold">ENGINEERING SUCCESS, ONE PROJECT AT A TIME</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform perspective-1000"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-yellow-400 text-xs">{item.category}</p>
                </div>
              </div>
              <div className="p-3">
                <Link 
                  to={`/project/${item.id}`}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1.5 rounded-lg transition-colors text-center text-xs"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <h3 className="text-lg font-bold underline decoration-yellow-400 decoration-2 mb-4">
            AND 100+ MORE IN PORTFOLIO
          </h3>
          <CTAButton className="text-sm">
            🔥 VIEW ALL PROJECTS
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "HOW DOES THE WEBSITE DESIGN PROCESS WORK WITH PIXEL RISE WEB CO?",
      answer: "Our website design process is comprehensive and client-focused. We start with a discovery call to understand your business needs, target audience, and goals. Then we create wireframes, design mockups, develop the website, and provide ongoing support."
    },
    {
      question: "HOW LONG DOES IT TAKE TO DESIGN A WEBSITE?",
      answer: "Typically, a complete website design and development project takes 2-6 weeks depending on the complexity and features required. We work efficiently while ensuring quality and attention to detail. For emergency projects, we can deliver within 24 hours!"
    },
    {
      question: "CAN YOU HELP ME UPDATE MY EXISTING WEBSITE?",
      answer: "Absolutely! We offer website redesign and update services. Whether you need a complete overhaul or minor improvements, we can help enhance your existing website's performance and appearance."
    },
    {
      question: "DO YOU OFFER WEBSITE HOSTING SERVICES?",
      answer: "Yes, we provide reliable website hosting services with 99.9% uptime guarantee, SSL certificates, regular backups, and 24/7 technical support to keep your website running smoothly."
    },
    {
      question: "HOW DO YOU ENSURE MY WEBSITE IS OPTIMIZED FOR SEARCH ENGINES?",
      answer: "We implement SEO best practices from the ground up, including optimized page structures, meta tags, site speed optimization, mobile responsiveness, and content optimization to help your website rank better in search results."
    },
    {
      question: "HOW DO I GET STARTED WITH PIXEL RISE WEB CO?",
      answer: "Getting started is easy! Simply schedule a free consultation call with us, and we'll discuss your project requirements, timeline, and provide you with a customized proposal for your web design needs."
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-gray-300 text-sm">EMPOWERING INFORMED DECISIONS THROUGH TRANSPARENCY</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-white text-sm">{faq.question}</span>
                <div className="bg-red-600 p-1.5 rounded-full">
                  {activeIndex === index ? <FaChevronUp className="text-white text-xs" /> : <FaChevronDown className="text-white text-xs" />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <CTAButton className="text-sm">
            💬 ASK A QUESTION
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

// CTA Section with Infinite Marquee
const CTASection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-yellow-400 to-yellow-600">
      <div className="container mx-auto px-4">
        <InfiniteMarquee className="py-2">
          <div className="flex items-center space-x-6">
            <FaCrown className="text-black text-2xl" />
            <h2 className="text-black text-xl lg:text-3xl font-bold whitespace-nowrap">
              ELEVATE YOUR BUSINESS TO INDUSTRY LEADERSHIP
            </h2>
            <FaCrown className="text-black text-2xl" />
            <h2 className="text-black text-xl lg:text-3xl font-bold whitespace-nowrap mx-6">
              ELEVATE YOUR BUSINESS TO INDUSTRY LEADERSHIP
            </h2>
          </div>
        </InfiniteMarquee>
        
        <div className="text-center mt-6">
          <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-8 py-3">
            👑 CLAIM YOUR DIGITAL DOMINANCE
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

// Service Detail Component
export const ServiceDetail = () => {
  const { serviceType } = useParams();
  
  const serviceData = {
    'roofing': {
      title: "Roofing Website Design",
      description: "Specialized websites for roofing contractors that convert visitors into qualified leads.",
      image: "https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=800&h=400&fit=crop",
      features: [
        "Emergency Contact Forms",
        "Before/After Project Galleries",
        "Service Area Maps",
        "Insurance Claims Support",
        "Weather Damage Assessment Tools",
        "Mobile-First Design",
        "Lead Generation Optimization",
        "Customer Review Integration"
      ],
      benefits: [
        "300% increase in qualified leads",
        "Faster response to emergency calls", 
        "Professional brand image",
        "Competitive advantage"
      ],
      packages: [
        { name: "Basic", price: "$999", features: ["5 Pages", "Contact Forms", "Mobile Responsive"] },
        { name: "Professional", price: "$1,999", features: ["10 Pages", "Gallery", "SEO Optimization", "Lead Forms"] },
        { name: "Premium", price: "$2,999", features: ["Unlimited Pages", "Custom Features", "Priority Support", "Marketing Tools"] }
      ]
    },
    'hotel': {
      title: "Hotel Website Design",
      description: "Luxury hotel websites that showcase your property and drive direct bookings.",
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=800&h=400&fit=crop",
      features: [
        "Online Booking System",
        "Virtual Room Tours", 
        "Amenity Showcases",
        "Multi-language Support",
        "Guest Review Platform",
        "Event Booking System",
        "Concierge Services",
        "Payment Integration"
      ],
      benefits: [
        "400% increase in direct bookings",
        "Reduced dependency on booking platforms",
        "Enhanced guest experience",
        "Higher revenue per booking"
      ],
      packages: [
        { name: "Basic", price: "$1,499", features: ["Booking System", "5 Pages", "Mobile Design"] },
        { name: "Professional", price: "$2,999", features: ["Virtual Tours", "Multi-language", "10 Pages"] },
        { name: "Premium", price: "$4,999", features: ["Custom Features", "Full Integration", "Premium Support"] }
      ]
    },
    'restaurant': {
      title: "Restaurant Website Design", 
      description: "Appetizing restaurant websites that bring customers through your doors.",
      image: "https://images.unsplash.com/photo-1591882592683-b68044f837b0?w=800&h=400&fit=crop",
      features: [
        "Online Menu Display",
        "Table Reservation System",
        "Food Delivery Integration",
        "Chef's Special Updates",
        "Event Booking",
        "Customer Loyalty Program",
        "Photo Galleries",
        "Social Media Integration"
      ],
      benefits: [
        "500% increase in online orders",
        "More table reservations",
        "Enhanced customer engagement",
        "Increased repeat customers"
      ],
      packages: [
        { name: "Basic", price: "$1,199", features: ["Menu Display", "Contact Info", "Mobile Design"] },
        { name: "Professional", price: "$2,499", features: ["Reservations", "Online Ordering", "Gallery"] },
        { name: "Premium", price: "$3,999", features: ["Full Integration", "Loyalty Program", "Custom Features"] }
      ]
    },
    'beauty': {
      title: "Beauty Parlor Website Design",
      description: "Elegant websites for beauty salons and parlors that attract new clients.",
      image: "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?w=800&h=400&fit=crop",
      features: [
        "Online Appointment Booking",
        "Service Price Lists",
        "Before/After Galleries",
        "Beauty Tips Blog",
        "Product Sales Integration",
        "Staff Profiles",
        "Customer Reviews",
        "Loyalty Rewards System"
      ],
      benefits: [
        "400% increase in appointments",
        "Higher customer retention",
        "Increased product sales",
        "Professional brand image"
      ],
      packages: [
        { name: "Basic", price: "$899", features: ["Appointment Booking", "Service List", "Mobile Design"] },
        { name: "Professional", price: "$1,799", features: ["Gallery", "Blog", "Staff Profiles"] },
        { name: "Premium", price: "$2,999", features: ["E-commerce", "Loyalty Program", "Custom Features"] }
      ]
    },
    'gym': {
      title: "Gym & Fitness Website Design",
      description: "Dynamic fitness websites that motivate visitors to join your gym.",
      image: "https://images.unsplash.com/photo-1596357395328-bb8ef99affbb?w=800&h=400&fit=crop",
      features: [
        "Membership Registration",
        "Class Scheduling System",
        "Trainer Profiles",
        "Workout Plans",
        "Progress Tracking",
        "Nutrition Guidance",
        "Equipment Showcase",
        "Member Portal"
      ],
      benefits: [
        "600% increase in new members",
        "Better class management",
        "Improved member retention",
        "Enhanced member experience"
      ],
      packages: [
        { name: "Basic", price: "$1,299", features: ["Membership Info", "Class Schedule", "Mobile Design"] },
        { name: "Professional", price: "$2,599", features: ["Member Portal", "Trainer Profiles", "Booking System"] },
        { name: "Premium", price: "$4,299", features: ["Full Management", "Custom App", "Premium Features"] }
      ]
    },
    'custom': {
      title: "Custom Web Solutions",
      description: "Tailored web solutions for any industry or business type.",
      image: "https://images.unsplash.com/photo-1614127938540-a1139bee1841?w=800&h=400&fit=crop",
      features: [
        "Custom Development",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
        "Database Design",
        "Third-party Integrations",
        "Security Implementation",
        "Performance Optimization"
      ],
      benefits: [
        "Unique competitive advantage",
        "Perfect fit for your business",
        "Scalable solutions",
        "Full ownership and control"
      ],
      packages: [
        { name: "Basic", price: "$2,999", features: ["Custom Design", "Basic Features", "Mobile Responsive"] },
        { name: "Professional", price: "$5,999", features: ["Advanced Features", "Integrations", "CMS"] },
        { name: "Premium", price: "$9,999", features: ["Enterprise Solution", "Full Custom", "Premium Support"] }
      ]
    }
  };

  const service = serviceData[serviceType];

  if (!service) {
    return (
      <main className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-3">Service Not Found</h1>
          <p className="text-gray-300 mb-6 text-sm">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Service Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-3">{service.title}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{service.description}</p>
          </div>

          {/* Service Image */}
          <div className="mb-8">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Features & Benefits */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaTrophy className="text-yellow-400 text-sm" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-yellow-400 mb-6 text-center">Pricing Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.packages.map((pkg, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-yellow-400 mb-4">{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-300 text-sm">{feature}</li>
                    ))}
                  </ul>
                  <CTAButton className="w-full text-sm">
                    Choose Plan
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="px-6 py-3 text-sm">
                🚀 START PROJECT
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 text-sm">
                💬 GET QUOTE
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

// Project Detail Component
export const ProjectDetail = () => {
  const { projectId } = useParams();
  
  const projectData = {
    'rapid-response': {
      title: "Rapid Response Roofing",
      category: "Roofing Contractor",
      image: "https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=800&h=500&fit=crop",
      description: "A comprehensive roofing contractor website featuring emergency services, detailed service pages, and lead generation forms.",
      features: [
        "Emergency Contact System",
        "Before/After Gallery", 
        "Service Area Mapping",
        "Customer Reviews Integration",
        "Mobile-First Design",
        "SEO Optimized"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      timeline: "Completed in 3 weeks",
      clientTestimonial: {
        text: "Pixel Rise Web Co transformed our online presence. We've seen a 300% increase in leads since launch!",
        author: "John Smith, Owner"
      },
      stats: {
        "Increase in Leads": "+300%",
        "Page Load Speed": "2.1s",
        "Mobile Score": "98/100",
        "SEO Score": "95/100"
      }
    },
    'columbus-roofing': {
      title: "Columbus Roofing Company",
      category: "Roofing Services",
      image: "https://images.unsplash.com/photo-1553169507-38833977274b?w=800&h=500&fit=crop",
      description: "Professional roofing company website with advanced project showcases and customer management system.",
      features: [
        "Project Portfolio Showcase",
        "Quote Request System",
        "Insurance Claims Support",
        "Weather Damage Assessment",
        "Customer Portal",
        "Live Chat Integration"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Bootstrap"],
      timeline: "Completed in 4 weeks",
      clientTestimonial: {
        text: "Outstanding work! The website has helped us establish credibility and attract high-quality leads.",
        author: "Maria Garcia, Operations Manager"
      },
      stats: {
        "Conversion Rate": "+250%",
        "User Engagement": "+180%",
        "Mobile Traffic": "78%",
        "Customer Satisfaction": "4.9/5"
      }
    },
    'vanguard-hotel': {
      title: "Vanguard Luxury Hotel",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=800&h=500&fit=crop",
      description: "Elegant hotel website with booking system, virtual tours, and guest services integration.",
      features: [
        "Online Booking System",
        "Virtual Room Tours",
        "Amenity Showcases",
        "Guest Reviews Platform",
        "Multi-language Support",
        "Concierge Services"
      ],
      technologies: ["React", "Node.js", "Stripe API", "Tailwind CSS"],
      timeline: "Completed in 5 weeks",
      clientTestimonial: {
        text: "The website perfectly captures our luxury brand. Bookings have increased significantly!",
        author: "David Chen, Hotel Manager"
      },
      stats: {
        "Direct Bookings": "+400%",
        "Revenue Growth": "+320%",
        "Guest Satisfaction": "4.8/5",
        "Return Visitors": "+150%"
      }
    },
    'tsm-restaurant': {
      title: "TSM Fine Dining Restaurant",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1591882592683-b68044f837b0?w=800&h=500&fit=crop",
      description: "Sophisticated restaurant website with online ordering, reservations, and menu management.",
      features: [
        "Online Menu Display",
        "Table Reservations",
        "Food Delivery Integration",
        "Chef's Special Updates",
        "Event Booking",
        "Customer Loyalty Program"
      ],
      technologies: ["React", "Node.js", "MySQL", "PayPal API"],
      timeline: "Completed in 3 weeks",
      clientTestimonial: {
        text: "Our online presence has never been better. The ordering system works flawlessly.",
        author: "Chef Antonio Rodriguez"
      },
      stats: {
        "Online Orders": "+500%",
        "Reservations": "+280%",
        "Customer Base": "+200%",
        "Revenue": "+350%"
      }
    },
    'gravity-fitness': {
      title: "Gravity Fitness Center",
      category: "Fitness & Health",
      image: "https://images.unsplash.com/photo-1596357395328-bb8ef99affbb?w=800&h=500&fit=crop",
      description: "Dynamic fitness center website with membership management, class scheduling, and trainer profiles.",
      features: [
        "Membership Registration",
        "Class Scheduling System",
        "Trainer Profiles",
        "Workout Plans",
        "Progress Tracking",
        "Nutrition Guidance"
      ],
      technologies: ["React", "Firebase", "Stripe", "Material-UI"],
      timeline: "Completed in 4 weeks",
      clientTestimonial: {
        text: "The website has revolutionized how we manage memberships and classes. Highly recommended!",
        author: "Sarah Johnson, Gym Owner"
      },
      stats: {
        "New Members": "+600%",
        "Class Bookings": "+450%",
        "Member Retention": "+90%",
        "App Downloads": "+800%"
      }
    },
    'royal-beauty': {
      title: "Royal Beauty Parlor",
      category: "Beauty & Wellness",
      image: "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?w=800&h=500&fit=crop",
      description: "Elegant beauty parlor website with appointment booking, service catalogs, and beauty tips blog.",
      features: [
        "Online Appointment Booking",
        "Service Price Lists",
        "Before/After Galleries",
        "Beauty Tips Blog",
        "Product Sales",
        "Loyalty Rewards"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      timeline: "Completed in 3 weeks",
      clientTestimonial: {
        text: "Perfect representation of our salon's elegance. Appointments have doubled since launch!",
        author: "Priya Patel, Salon Owner"
      },
      stats: {
        "Appointments": "+400%",
        "Product Sales": "+250%",
        "Client Retention": "+180%",
        "Social Engagement": "+300%"
      }
    }
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <main className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-3">Project Not Found</h1>
          <p className="text-gray-300 mb-6 text-sm">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Project Header */}
          <div className="text-center mb-8">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
              {project.category}
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold mt-3 mb-4">{project.title}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{project.description}</p>
          </div>

          {/* Project Image */}
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {Object.entries(project.stats).map(([key, value], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-1">{value}</h3>
                <p className="text-gray-300 text-xs">{key}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies & Timeline */}
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Timeline</h3>
                  <p className="text-gray-300 flex items-center text-sm">
                    <FaClock className="mr-2 text-yellow-400 text-xs" />
                    {project.timeline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">Client Testimonial</h2>
            <blockquote className="text-lg text-gray-300 italic mb-3">
              "{project.clientTestimonial.text}"
            </blockquote>
            <cite className="text-yellow-400 font-semibold text-sm">
              — {project.clientTestimonial.author}
            </cite>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Let us create a stunning website for your business that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="px-6 py-3 text-sm">
                🚀 START YOUR PROJECT
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 text-sm">
                💬 GET QUOTE
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

// Home Page
export const Home = () => {
  return (
    <main>
      <HeroSection />
      <PortfolioSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

// About Page
export const About = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              ABOUT <span className="text-yellow-400">PIXEL RISE WEB CO</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              PIONEERING DIGITAL TRANSFORMATION FOR VISIONARY ENTERPRISES. 
              We architect cutting-edge web solutions that propel businesses into 
              market leadership through strategic design and innovative technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=500&h=300&fit=crop" 
                alt="Our Team" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-yellow-400">EXCELLENCE THROUGH INNOVATION</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Founded on the principle of transformational digital excellence, 
                Pixel Rise Web Co has emerged as the definitive partner for enterprises 
                seeking to establish commanding market presence through superior web solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Our specialized expertise spans high-impact industries including construction, 
                hospitality, culinary arts, wellness, and fitness. We don't just create websites – 
                we engineer digital ecosystems that drive measurable business growth.
              </p>
              <CTAButton className="text-sm">
                🤝 WORK WITH US
              </CTAButton>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaTrophy className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Websites Delivered</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">120+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaStar className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">5.0</h3>
              <p className="text-gray-300 text-sm">Average Rating</p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton className="text-sm px-6 py-3">
              🎯 GET YOUR WEBSITE NOW
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

// Services Page
export const Services = () => {
  const services = [
    {
      id: 'roofing',
      title: "Roofing Websites",
      description: "Specialized websites for roofing contractors that convert visitors into leads.",
      image: "https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=400&h=250&fit=crop",
      features: ["Lead Generation Forms", "Before/After Galleries", "Service Area Maps", "Mobile Optimization"]
    },
    {
      id: 'hotel',
      title: "Hotel Websites",
      description: "Luxury hotel websites that showcase your property and drive bookings.",
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=400&h=250&fit=crop",
      features: ["Booking Integration", "Virtual Tours", "Amenity Showcases", "Multi-language Support"]
    },
    {
      id: 'restaurant',
      title: "Restaurant Websites",
      description: "Appetizing restaurant websites that bring customers through your doors.",
      image: "https://images.unsplash.com/photo-1591882592683-b68044f837b0?w=400&h=250&fit=crop",
      features: ["Online Menu", "Reservation System", "Photo Galleries", "Online Ordering"]
    },
    {
      id: 'beauty',
      title: "Beauty Parlor Websites",
      description: "Elegant websites for beauty salons and parlors that attract new clients.",
      image: "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?w=400&h=250&fit=crop",
      features: ["Appointment Booking", "Service Catalogs", "Before/After Photos", "Staff Profiles"]
    },
    {
      id: 'gym',
      title: "Gym & Fitness Websites",
      description: "Dynamic fitness websites that motivate visitors to join your gym.",
      image: "https://images.unsplash.com/photo-1596357395328-bb8ef99affbb?w=400&h=250&fit=crop",
      features: ["Membership Plans", "Class Schedules", "Trainer Profiles", "Progress Tracking"]
    },
    {
      id: 'custom',
      title: "Custom Web Solutions",
      description: "Tailored web solutions for any industry or business type.",
      image: "https://images.unsplash.com/photo-1614127938540-a1139bee1841?w=400&h=250&fit=crop",
      features: ["Custom Development", "E-commerce", "CMS Integration", "API Development"]
    }
  ];

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            OUR <span className="text-yellow-400">SERVICES</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            We specialize in creating high-converting websites for service-based businesses. 
            Our expertise spans multiple industries, delivering results that matter.
          </p>
          <CTAButton className="text-sm">
            🎯 GET STARTED TODAY
          </CTAButton>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500 text-xs" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/service/${service.id}`}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center block text-sm"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 text-sm">Let's discuss your project and create something amazing together.</p>
          <CTAButton className="text-sm px-6 py-3">
            🚀 START YOUR PROJECT
          </CTAButton>
        </div>
      </div>
    </main>
  );
};

// Portfolio Page
export const Portfolio = () => {
  const portfolioItems = [
    {
      id: 'rapid-response',
      title: "RAPID RESPONSE ROOFING",
      category: "Roofing",
      image: "https://images.unsplash.com/photo-1699154581577-ce92c7a86638?w=500&h=300&fit=crop",
      description: "A modern roofing website with lead generation forms and service showcases."
    },
    {
      id: 'columbus-roofing',
      title: "COLUMBUS ROOFING CO",
      category: "Roofing", 
      image: "https://images.unsplash.com/photo-1553169507-38833977274b?w=500&h=300&fit=crop",
      description: "Professional roofing contractor website with portfolio and testimonials."
    },
    {
      id: 'vanguard-hotel',
      title: "VANGUARD LUXURY HOTEL",
      category: "Hotel",
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?w=500&h=300&fit=crop",
      description: "Elegant hotel website with booking system and virtual tours."
    },
    {
      id: 'tsm-restaurant',
      title: "TSM FINE DINING",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1591882592683-b68044f837b0?w=500&h=300&fit=crop",
      description: "Sophisticated restaurant website with online menu and reservations."
    },
    {
      id: 'gravity-fitness',
      title: "GRAVITY FITNESS CENTER",
      category: "Gym",
      image: "https://images.unsplash.com/photo-1596357395328-bb8ef99affbb?w=500&h=300&fit=crop",
      description: "Dynamic fitness website with membership plans and class schedules."
    },
    {
      id: 'royal-beauty',
      title: "ROYAL BEAUTY PARLOR",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?w=500&h=300&fit=crop",
      description: "Elegant beauty salon website with appointment booking system."
    }
  ];

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            OUR <span className="text-yellow-400">PORTFOLIO</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Explore our showcase of successful websites across different industries. 
            Each project represents our commitment to excellence and results.
          </p>
          <CTAButton className="text-sm">
            🎯 START YOUR PROJECT
          </CTAButton>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                <Link 
                  to={`/project/${item.id}`}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors inline-block text-sm"
                >
                  View Project Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <CTAButton className="text-sm px-6 py-3">
            🚀 GET YOUR WEBSITE NOW
          </CTAButton>
        </div>
      </div>
    </main>
  );
};

// Contact Page
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'roofing',
    budget: '',
    timeline: '',
    projectType: '',
    message: '',
    hearAboutUs: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            CONTACT <span className="text-yellow-400">US</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Ready to transform your business with a stunning website? 
            Get in touch with us today for a free consultation.
          </p>
          <CTAButton className="text-sm px-6 py-3">
            📞 CALL NOW FOR FREE QUOTE
          </CTAButton>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-yellow-400 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1 text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1 text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 text-sm">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1 text-sm">Current Website (if any)</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1 text-sm">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="roofing">Roofing Website</option>
                    <option value="hotel">Hotel Website</option>
                    <option value="restaurant">Restaurant Website</option>
                    <option value="beauty">Beauty Parlor Website</option>
                    <option value="gym">Gym Website</option>
                    <option value="custom">Custom Solution</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce Website</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-1 text-sm">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="">Select Type</option>
                    <option value="new">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ecommerce">E-commerce Store</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1 text-sm">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="">Select Budget</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-plus">$10,000+</option>
                    <option value="discuss">Prefer to Discuss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-1 text-sm">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP (24 hours)</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1 text-sm">How did you hear about us?</label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="">Select Option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertising">Online Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-1 text-sm">Preferred Contact Method</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                    <option value="any">Any Method</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white mb-1 text-sm">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              <CTAButton type="submit" className="w-full text-sm">
                Send Message
              </CTAButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Get In Touch</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">Email</p>
                    <p className="text-gray-300 text-sm">pixelrisewebco@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">Phone</p>
                    <p className="text-gray-300 text-sm">+1 (407) 641-3731</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">Address</p>
                    <p className="text-gray-300 text-sm">Nationwide Service, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Follow Us</h2>
              <div className="flex space-x-3">
                <a href="https://instagram.com/pixelrisewebco" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="https://in.linkedin.com/company/pixelrise-web-co-a07440371" className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="https://facebook.com" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <FaFacebook className="text-white" />
                </a>
                <a href="https://youtube.com" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Operating Hours</h2>
              <p className="text-white mb-2 text-sm">24/7 Available</p>
              <p className="text-gray-300 text-xs mb-4">Send us a message anytime</p>
              <CTAButton className="text-sm">
                📅 SCHEDULE INTRO CALL
              </CTAButton>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Why Choose Us?</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaRocket className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">24-Hour Emergency Delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaShieldAlt className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTrophy className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">500+ Successful Projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaStar className="text-green-500 text-sm" />
                  <span className="text-gray-300 text-sm">5-Star Average Rating</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <>
      <EmergencyMarquee />
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-yellow-400 font-bold text-sm mb-3">QUICK LINKS</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Services</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Portfolio</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Contact</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-yellow-400 font-bold text-sm mb-3">HELP</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-xs">Terms Of Service</a></li>
              </ul>
            </div>

            {/* Logo & Description */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-3">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full">
                  <FaCrown className="text-black text-lg" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">
                    <span className="text-red-500">PIXEL RISE</span>
                  </h1>
                  <p className="text-xs text-yellow-400 -mt-1">WEB CO</p>
                </div>
              </Link>
              <p className="text-gray-300 text-xs mb-3">
                A HIGHLY CONVERTING WEBSITE DESIGN FOR YOUR BUSINESS. THAT'S A PROMISE.
              </p>
              <CTAButton className="text-xs px-3 py-1.5">
                📅 SCHEDULE CALL
              </CTAButton>
            </div>

            {/* Contact */} 
            <div>
              <h3 className="text-yellow-400 font-bold text-sm mb-3">CONTACT</h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-xs">
                  <strong>Email:</strong> pixelrisewebco@gmail.com
                </p>
                <p className="text-gray-300 text-xs">
                  <strong>Address:</strong> Nationwide Service, USA
                </p>
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2 text-xs">SOCIAL MEDIA</h4>
                  <div className="flex space-x-2">
                    <a href="https://facebook.com" className="text-gray-300 hover:text-blue-600 transition-colors">
                      <FaFacebook size={16} />
                    </a>
                    <a href="https://instagram.com/pixelrisewebco" className="text-gray-300 hover:text-pink-600 transition-colors">
                      <FaInstagram size={16} />
                    </a>
                    <a href="https://google.com" className="text-gray-300 hover:text-red-600 transition-colors">
                      <FaGoogle size={16} />
                    </a>
                    <a href="https://youtube.com" className="text-gray-300 hover:text-red-600 transition-colors">
                      <FaYoutube size={16} />
                    </a>
                    <a href="https://in.linkedin.com/company/pixelrise-web-co-a07440371" className="text-gray-300 hover:text-blue-800 transition-colors">
                      <FaLinkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-3">
                All Rights Reserved. The imitation, duplication, and or copy of any of our media as a representation of your own is a criminal offense and will be prosecuted.
              </p>
              <div className="bg-red-600 py-2 px-3 rounded">
                <p className="text-white text-xs">
                  Website Designed With ❤️ by <strong>Pixel Rise Web Co</strong> - Creating Digital Success Stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};