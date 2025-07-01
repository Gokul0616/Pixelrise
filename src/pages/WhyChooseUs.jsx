import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaCrown, FaRocket, FaShieldAlt, FaUsers, FaTrophy, FaHeart, FaCheckCircle, FaClock, FaStar, FaHandshake } from 'react-icons/fa';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaCrown,
      title: "Industry Expertise",
      description: "5+ years of experience creating high-converting websites across multiple industries.",
      highlights: ["120+ Happy Clients", "500+ Projects Delivered", "Industry Specialists", "Proven Track Record"]
    },
    {
      icon: FaRocket,
      title: "Results-Driven Approach",
      description: "We focus on delivering measurable results that grow your business and increase revenue.",
      highlights: ["300% Average Lead Increase", "Higher Conversion Rates", "Improved SEO Rankings", "Better User Engagement"]
    },
    {
      icon: FaShieldAlt,
      title: "100% Satisfaction Guarantee",
      description: "Your satisfaction is our priority. We don't stop until you're completely happy with the results.",
      highlights: ["Money-Back Guarantee", "Unlimited Revisions", "Post-Launch Support", "Quality Assurance"]
    },
    {
      icon: FaClock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality. Emergency delivery available.",
      highlights: ["24-Hour Emergency Option", "2-6 Week Standard Delivery", "Milestone-Based Progress", "On-Time Guarantee"]
    }
  ];

  const differentiators = [
    {
      us: "Personal 1-on-1 consultation",
      others: "Generic templates and approaches"
    },
    {
      us: "Industry-specific expertise",
      others: "One-size-fits-all solutions"
    },
    {
      us: "Ongoing support and maintenance",
      others: "Build and abandon approach"
    },
    {
      us: "Performance-focused development",
      others: "Design-only focus"
    },
    {
      us: "SEO built-in from the start",
      others: "SEO as an afterthought"
    },
    {
      us: "Mobile-first responsive design",
      others: "Desktop-first approach"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "Pixel Rise Web Co transformed our online presence. We've seen a 300% increase in leads!",
      author: "John Smith",
      company: "Rapid Response Roofing",
      result: "+300% Leads"
    },
    {
      quote: "Outstanding work! The website has helped us establish credibility and attract quality leads.",
      author: "Maria Garcia", 
      company: "Columbus Roofing",
      result: "+250% Conversions"
    },
    {
      quote: "The website perfectly captures our luxury brand. Bookings have increased significantly!",
      author: "David Chen",
      company: "Vanguard Hotel",
      result: "+400% Bookings"
    }
  ];

  const processAdvantages = [
    {
      step: "Discovery",
      advantage: "We deeply understand your business before starting",
      icon: FaUsers
    },
    {
      step: "Strategy",
      advantage: "Custom strategy based on your goals and industry",
      icon: FaRocket
    },
    {
      step: "Design",
      advantage: "Unique designs that reflect your brand perfectly",
      icon: FaCrown
    },
    {
      step: "Development",
      advantage: "Clean, fast, and SEO-optimized code",
      icon: FaShieldAlt
    },
    {
      step: "Testing",
      advantage: "Rigorous testing across all devices and browsers",
      icon: FaCheckCircle
    },
    {
      step: "Support",
      advantage: "Ongoing support to ensure continued success",
      icon: FaHeart
    }
  ];

  const guarantees = [
    "100% satisfaction guarantee or money back",
    "Unlimited revisions until you're happy",
    "24/7 emergency support available",
    "Post-launch support and maintenance",
    "SEO-optimized from day one",
    "Mobile-responsive across all devices",
    "Fast loading speeds guaranteed",
    "Security and backup protection"
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
              WHY CHOOSE <span className="text-yellow-400">PIXEL RISE WEB CO</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Not just another web design agency. We're your dedicated partner in creating 
              exceptional digital experiences that drive real business growth.
            </p>
          </div>

          {/* Main Reasons */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <reason.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{reason.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {reason.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Us vs Others */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              PIXEL RISE WEB CO VS <span className="text-yellow-400">OTHERS</span>
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">✅ Pixel Rise Web Co</h3>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-400 mb-2">❌ Other Agencies</h3>
                </div>
              </div>
              <div className="space-y-3">
                {differentiators.map((diff, index) => (
                  <div key={index} className="grid lg:grid-cols-2 gap-4 p-3 bg-gray-700 rounded-lg">
                    <div className="text-green-400 text-sm">✅ {diff.us}</div>
                    <div className="text-red-400 text-sm">❌ {diff.others}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Client Results */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              REAL CLIENT <span className="text-yellow-400">RESULTS</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {testimonialHighlights.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.author}</h4>
                      <p className="text-yellow-400 text-xs">{testimonial.company}</p>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              OUR PROCESS <span className="text-yellow-400">ADVANTAGES</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processAdvantages.map((process, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                  <process.icon className="text-yellow-400 text-3xl mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-sm">{process.step}</h3>
                  <p className="text-gray-400 text-xs">{process.advantage}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              OUR <span className="text-yellow-400">GUARANTEES</span>
            </h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaShieldAlt className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 text-center mb-12"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaTrophy className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Websites Delivered</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">120+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaStar className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">5.0</h3>
              <p className="text-gray-300 text-sm">Average Rating</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaHandshake className="text-yellow-400 text-2xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-300 text-sm">Satisfaction Rate</p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Ready to Experience the Difference?</h2>
            <p className="text-black mb-6 text-sm">
              Join 120+ successful businesses who chose Pixel Rise Web Co for their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
                🚀 START YOUR PROJECT
              </CTAButton>
              <CTAButton className="bg-white hover:bg-gray-100 text-black text-sm px-6 py-3">
                📞 SCHEDULE CONSULTATION
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};