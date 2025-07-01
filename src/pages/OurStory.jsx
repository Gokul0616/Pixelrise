import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaCrown, FaRocket, FaHeart, FaUsers, FaTrophy } from 'react-icons/fa';

export const OurStory = () => {
  return (
  <main className="py-12 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto overflow-hidden"
        >
          {/* Hero Section */}
          <div className="text-center mb-12 max-w-full">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              OUR <span className="text-yellow-400">STORY</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From humble beginnings to becoming a trusted partner for 120+ businesses across industries.
            </p>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaRocket className="text-yellow-400 text-2xl mr-3" />
                <h2 className="text-xl font-bold">The Beginning</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Pixel Rise Web Co was born from a simple yet powerful belief: every business deserves a 
                stunning digital presence that drives real results. What started as a passion project 
                quickly evolved into a mission to transform how businesses connect with their customers online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaHeart className="text-yellow-400 text-2xl mr-3" />
                <h2 className="text-xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                We don't just build websites – we craft digital experiences that tell your story, 
                engage your audience, and drive measurable business growth. Our mission is to make 
                professional web design accessible to businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaTrophy className="text-yellow-400 text-2xl mr-3" />
                <h2 className="text-xl font-bold">Our Achievement</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Today, we're proud to have partnered with 120+ businesses across industries including 
                roofing, hospitality, restaurants, fitness centers, and beauty salons. Each project 
                has taught us something new and reinforced our commitment to excellence.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 text-center mt-12 mb-8"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaTrophy className="text-yellow-400 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Websites Delivered</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-yellow-400 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">120+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaCrown className="text-yellow-400 text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Ready to be Part of Our Story?</h2>
            <p className="text-gray-300 mb-6 text-sm">
              Let's create something amazing together that your customers will love.
            </p>
            <CTAButton className="text-sm px-6 py-3">
              🚀 START YOUR PROJECT
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};