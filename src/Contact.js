import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaRocket,
  FaShieldAlt,
  FaTrophy,
  FaStar
} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Updated CTAButton Component
const CTAButton = ({
  className = "",
  children,
  onClick,
  to = "/contact",
  disableScroll = false,
  type = "button"
}) => {
  const scrollToTop = () => {
    if (!disableScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClick = (e) => {
    scrollToTop();
    if (onClick) onClick(e);
  };

  const content = (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`
        bg-red-600 hover:bg-red-700 text-white
        px-4 py-2 rounded-lg font-semibold
        transition-colors btn-hover text-sm
        ${className}
      `}
    >
      {children}
    </motion.button>
  );

  // If no onClick, wrap in Link
  if (to && !onClick) {
    return (
      <Link to={to} onClick={scrollToTop}>
        {content}
      </Link>
    );
  }

  return content;
};

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const { name, email, message } = formData;

  // Basic validation: Require name, email, and message
  if (!name.trim() || !email.trim() || !message.trim()) {
    toast.error('Please fill in Name, Email, and Project Details before submitting.', {
      style: {
        background: '#1F2937',
        color: '#F3F4F6',
        border: '1px solid #DC2626',
        borderRadius: '8px',
      },
      duration: 3000,
    });
    return;
  }

  setIsSubmitting(true);

  try {
    // Prepare the data for Firebase
    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      website: formData.website.trim(),
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      projectType: formData.projectType,
      message: formData.message.trim(),
      hearAboutUs: formData.hearAboutUs,
      preferredContact: formData.preferredContact,
      submittedAt: serverTimestamp(),
      status: 'new'
    };

    // Add document to Firebase Firestore
    await addDoc(collection(db, 'contact-submissions'), submissionData);

    // Success notification
    toast.success('Message sent successfully! We\'ll get back to you soon.', {
      style: {
        background: '#1F2937',
        color: '#F3F4F6',
        border: '1px solid #10B981',
        borderRadius: '8px',
      },
      iconTheme: { primary: '#10B981', secondary: '#F3F4F6' },
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '', email: '', phone: '', company: '',
      website: '', service: 'roofing', budget: '',
      timeline: '', projectType: '', message: '',
      hearAboutUs: '', preferredContact: 'email'
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Error notification
    toast.error('Failed to send message. Please try again or contact us directly.', {
      style: {
        background: '#1F2937',
        color: '#F3F4F6',
        border: '1px solid #DC2626',
        borderRadius: '8px',
      },
      duration: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main className="py-12">
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />

      {/* Hidden mailto link */}
      <a
        href="/"
        ref={mailRef}
        style={{ display: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        mailto
      </a>

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
            <h2 className="text-xl font-bold text-yellow-400 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                {['name','email'].map(field => (
                  <div key={field}>
                    <label className="block text-white mb-1 text-sm">
                      {field.charAt(0).toUpperCase()+field.slice(1)} *
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Phone & Company */}
              <div className="grid md:grid-cols-2 gap-4">
                {['phone','company'].map(field => (
                  <div key={field}>
                    <label className="block text-white mb-1 text-sm">
                      {field.charAt(0).toUpperCase()+field.slice(1).replace(/([A-Z])/g,' $1')}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Website */}
              <div>
                <label className="block text-white mb-1 text-sm">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              {/* Dropdowns */}
              {[
                { name: 'service', label: 'Service Needed', opts: [
                  ['roofing','Roofing Website'],['hotel','Hotel Website'],
                  ['restaurant','Restaurant Website'],['beauty','Beauty Parlor Website'],
                  ['gym','Gym Website'],['custom','Custom Solution'],
                  ['redesign','Website Redesign'],
                //   ['ecommerce','E-commerce Website']
                ]},
                { name: 'projectType', label: 'Project Type', opts: [
                  ['','Select Type'],['new','New Website'],['redesign','Website Redesign'],
                  ['maintenance','Website Maintenance'],['seo','SEO Optimization'],
                //   ['ecommerce','E-commerce Store']
                ]},
                { name: 'budget', label: 'Budget Range', opts: [
                  ['','Select Budget'],['under-1k','Under $1,000'],['1k-3k','$1,000 - $3,000'],
                  ['3k-5k','$3,000 - $5,000'],['5k-10k','$5,000 - $10,000'],
                  ['10k-plus','$10,000+'],['discuss','Prefer to Discuss']
                ]},
                { name: 'timeline', label: 'Timeline', opts: [
                  ['','Select Timeline'],['asap','ASAP (24 hours)'],['1-week','Within 1 week'],
                  ['2-weeks','Within 2 weeks'],['1-month','Within 1 month'],['flexible','Flexible']
                ]},
                { name: 'hearAboutUs', label: 'How did you hear about us?', opts: [
                  ['','Select Option'],['google','Google Search'],['social','Social Media'],
                  ['referral','Referral'],['advertising','Online Advertising'],['other','Other']
                ]},
                { name: 'preferredContact', label: 'Preferred Contact Method', opts: [
                  ['email','Email'],['phone','Phone Call'],['text','Text Message'],['any','Any Method']
                ]}
              ].map(({ name, label, opts }) => (
                <div className="grid md:grid-cols-2 gap-4" key={name}>
                  <div>
                    <label className="block text-white mb-1 text-sm">{label}</label>
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    >
                      {opts.map(([val, txt]) => (
                        <option key={val} value={val}>{txt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-white mb-1 text-sm">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>

              {/* Submit */}
              <CTAButton
                type="submit"
                className="w-full text-sm"
                disableScroll
                onClick={handleSubmit}
              >
                Send Message
              </CTAButton>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Get In Touch</h2>
              {[
                { icon: FaEnvelope, label: 'Email', value: 'pixelrisewebco@gmail.com' },
                { icon: FaPhone, label: 'Phone', value: '+91 9443914436' },
                { icon: FaMapMarkerAlt, label: 'Address', value: 'Chennai, Tamilnadu.' }
              ].map(({ icon: Icon, label, value }) => (
                <div className="flex items-center space-x-3 mb-3" key={label}>
                  <Icon className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Follow Us</h2>
              <div className="flex space-x-3">
                <a href="https://instagram.com/pixelrisewebco" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="https://in.linkedin.com/in/pixelrise-web-co-a07440371" className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
                {/* <a href="https://facebook.com" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <FaFacebook className="text-white" />
                </a>
                <a href="https://youtube.com" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                  <FaYoutube className="text-white" />
                </a> */}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Operating Hours</h2>
              <p className="text-white mb-2 text-sm">24/7 Available</p>
              <p className="text-gray-300 text-xs mb-4">Send us a message anytime</p>
              <CTAButton className="text-sm">📅 SCHEDULE INTRO CALL</CTAButton>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Why Choose Us?</h2>
              <ul className="space-y-2">
                {[
                  { icon: FaRocket, text: '24-Hour Emergency Delivery' },
                  { icon: FaShieldAlt, text: '100% Satisfaction Guarantee' },
                  { icon: FaTrophy, text: '500+ Successful Projects' },
                  { icon: FaStar, text: '5-Star Average Rating' }
                ].map(({ icon: Icon, text }) => (
                  <li className="flex items-center space-x-2" key={text}>
                    <Icon className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
