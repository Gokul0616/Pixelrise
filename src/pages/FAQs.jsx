import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '../components';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaClock, FaDollarSign, FaRocket, FaShieldAlt } from 'react-icons/fa';

export const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    { id: 'general', name: 'General', icon: FaQuestionCircle },
    { id: 'pricing', name: 'Pricing', icon: FaDollarSign },
    { id: 'process', name: 'Process', icon: FaRocket },
    { id: 'timeline', name: 'Timeline', icon: FaClock },
    { id: 'support', name: 'Support', icon: FaShieldAlt }
  ];

  const faqs = {
    general: [
      {
        question: "What makes Pixel Rise Web Co different from other web design agencies?",
        answer: "We specialize in industry-specific solutions with a proven track record of 120+ successful projects. Our focus is on delivering measurable results - not just beautiful designs. We offer personal 1-on-1 consultation, industry expertise, and ongoing support that many agencies don't provide."
      },
      {
        question: "Do you work with businesses outside your main industries?",
        answer: "Yes! While we specialize in roofing, hospitality, restaurants, fitness, and beauty industries, we've successfully worked with businesses across various sectors. Our expertise in conversion-focused design translates well to any industry."
      },
      {
        question: "Can you help improve my existing website instead of building a new one?",
        answer: "Absolutely! We offer website redesign and optimization services. We can improve your existing site's performance, update the design, enhance SEO, and add new functionality while preserving what's already working well."
      },
      {
        question: "Do you provide website hosting and domain services?",
        answer: "Yes, we offer reliable website hosting with 99.9% uptime guarantee, SSL certificates, regular backups, and 24/7 technical support. We can also help you secure and manage your domain name."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "All our websites are built with a mobile-first approach, ensuring perfect functionality across all devices. With 58% of web traffic coming from mobile devices, this is a standard feature in all our projects."
      }
    ],
    pricing: [
      {
        question: "How much does a website cost?",
        answer: "Our websites start from $999 for basic business websites. The final cost depends on your specific requirements, features needed, and complexity. We provide detailed quotes after understanding your needs during our free consultation."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans to make our services accessible. We typically require 50% upfront and 50% upon completion, but can customize payment schedules based on your business needs."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No hidden costs ever! We provide transparent pricing upfront. The only additional costs might be for premium plugins, third-party services (like payment processors), or additional features you request after project start."
      },
      {
        question: "What's included in the website price?",
        answer: "Our standard package includes custom design, responsive development, basic SEO setup, contact forms, social media integration, 30 days of support, and training on how to update your content."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 100% satisfaction guarantee. If you're not completely happy with our work within the first 30 days, we'll provide a full refund. Your success is our priority."
      }
    ],
    process: [
      {
        question: "What's your website design and development process?",
        answer: "Our 6-step process includes: 1) Discovery & consultation, 2) Research & strategy, 3) Design & wireframing, 4) Development & testing, 5) Launch & optimization, 6) Support & maintenance. Each step involves your feedback and approval."
      },
      {
        question: "How involved will I be in the design process?",
        answer: "Very involved! We believe in collaborative design. You'll review and approve wireframes, provide feedback on designs, test functionality, and approve the final website before launch. Your input is crucial to our success."
      },
      {
        question: "Can I make changes during the development process?",
        answer: "Yes, we encourage feedback and minor adjustments throughout the process. Major changes might affect timeline and cost, which we'll discuss transparently. We include reasonable revisions in our packages."
      },
      {
        question: "What information do you need from me to get started?",
        answer: "We'll need your brand assets (logo, images, content), business information, goals, target audience details, and examples of websites you like. Don't worry - we'll guide you through gathering everything needed."
      },
      {
        question: "Will you help with website content and copywriting?",
        answer: "Yes! We can help optimize your existing content or create new content that's SEO-friendly and conversion-focused. Professional copywriting is available as an add-on service for more comprehensive content needs."
      }
    ],
    timeline: [
      {
        question: "How long does it take to build a website?",
        answer: "Typical timeline is 2-6 weeks depending on complexity. Small business sites: 1-2 weeks, medium complexity: 3-4 weeks, e-commerce or complex sites: 5-8 weeks. We also offer 24-hour emergency delivery for urgent needs."
      },
      {
        question: "Can you deliver my website faster if needed?",
        answer: "Yes! We offer expedited delivery options including our famous 24-hour emergency service. Rush jobs may include additional fees, but we're committed to meeting urgent deadlines when needed."
      },
      {
        question: "What can delay the project timeline?",
        answer: "Common delays include waiting for content/images from clients, extensive revision requests, or major scope changes. We'll communicate any potential delays immediately and work to minimize impact on your timeline."
      },
      {
        question: "When will my website go live?",
        answer: "Your website goes live after final approval, content upload, and testing. We schedule the launch at a convenient time for your business and provide full training on managing your new site."
      },
      {
        question: "What happens if the project takes longer than expected?",
        answer: "If delays are on our end, we'll work overtime to meet deadlines at no extra cost. If delays are due to client requirements changes, we'll discuss timeline adjustments transparently."
      }
    ],
    support: [
      {
        question: "What kind of support do you provide after the website launches?",
        answer: "We provide 30 days of free support after launch, including bug fixes, minor content updates, and training. Extended support packages are available for ongoing maintenance, updates, and technical assistance."
      },
      {
        question: "How do I update content on my website?",
        answer: "We build user-friendly content management systems and provide comprehensive training. Most clients can easily update text, images, and basic content. We also offer content update services if you prefer us to handle it."
      },
      {
        question: "What if something breaks on my website?",
        answer: "We provide 24/7 emergency support for critical issues. During the initial 30-day period, all fixes are free. After that, emergency support and maintenance packages are available to keep your site running smoothly."
      },
      {
        question: "Do you provide website backups?",
        answer: "Yes! All our hosting packages include automated daily backups with 30-day retention. We also create manual backups before any major updates or changes to ensure your data is always safe."
      },
      {
        question: "Can you help with SEO and digital marketing after the website is built?",
        answer: "Absolutely! We offer ongoing SEO services, Google Ads management, social media marketing, and other digital marketing services to help grow your online presence and business after your website launches."
      }
    ]
  };

  const currentFAQs = faqs[activeCategory];

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get answers to common questions about our web design services, process, 
              pricing, and support. Can't find what you're looking for? Contact us directly!
            </p>
          </div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveIndex(null);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeCategory === category.id
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="text-sm" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-12"
          >
            {currentFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
                  <div className="bg-yellow-400 text-black p-2 rounded-full">
                    {activeIndex === index ? 
                      <FaChevronUp className="text-sm" /> : 
                      <FaChevronDown className="text-sm" />
                    }
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 text-center mb-12"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">24/7</h3>
              <p className="text-gray-300 text-sm">Emergency Support</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">100%</h3>
              <p className="text-gray-300 text-sm">Satisfaction Guarantee</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">30</h3>
              <p className="text-gray-300 text-sm">Days Free Support</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">2-6</h3>
              <p className="text-gray-300 text-sm">Weeks Delivery</p>
            </div>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-lg text-center mb-8"
          >
            <h2 className="text-xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Can't find the answer you're looking for? Our team is here to help! 
              Get in touch and we'll answer any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-sm px-6 py-3">
                💬 ASK A QUESTION
              </CTAButton>
              <CTAButton className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-3">
                📞 SCHEDULE CALL
              </CTAButton>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-sm">📧 Email Support</h3>
              <p className="text-gray-400 text-xs">Get detailed answers via email</p>
              <p className="text-yellow-400 text-xs mt-2">Response within 2 hours</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-sm">📞 Phone Consultation</h3>
              <p className="text-gray-400 text-xs">Speak directly with our experts</p>
              <p className="text-yellow-400 text-xs mt-2">Free 15-minute consultation</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-sm">💬 Live Chat</h3>
              <p className="text-gray-400 text-xs">Quick answers to urgent questions</p>
              <p className="text-yellow-400 text-xs mt-2">Available business hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};