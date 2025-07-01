import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaStar, FaQuoteLeft, FaBuilding, FaUtensils, FaDumbbell, FaCut, FaHotel } from 'react-icons/fa';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      company: "Rapid Response Roofing",
      role: "Owner",
      icon: FaBuilding,
      rating: 5,
      text: "Pixel Rise Web Co transformed our online presence completely. We've seen a 300% increase in leads since launch! Their attention to detail and understanding of the roofing industry is exceptional.",
      results: "+300% Leads",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      company: "Columbus Roofing Company",
      role: "Operations Manager",
      icon: FaBuilding,
      rating: 5,
      text: "Outstanding work! The website has helped us establish credibility and attract high-quality leads. The team was professional, responsive, and delivered exactly what we needed.",
      results: "+250% Conversions",
      image: "https://images.unsplash.com/photo-1494790108755-2616c56e4d98?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      company: "Vanguard Luxury Hotel",
      role: "Hotel Manager",
      icon: FaHotel,
      rating: 5,
      text: "The website perfectly captures our luxury brand. Bookings have increased significantly, and guests consistently compliment our online presence. Worth every penny!",
      results: "+400% Bookings",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Chef Antonio Rodriguez",
      company: "TSM Fine Dining Restaurant",
      role: "Head Chef & Owner",
      icon: FaUtensils,
      rating: 5,
      text: "Our online presence has never been better. The ordering system works flawlessly, and we've seen a massive increase in both reservations and takeout orders.",
      results: "+500% Online Orders",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      company: "Gravity Fitness Center",
      role: "Gym Owner",
      icon: FaDumbbell,
      rating: 5,
      text: "The website has revolutionized how we manage memberships and classes. New member sign-ups have increased dramatically, and our existing members love the new booking system.",
      results: "+600% New Members",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      company: "Royal Beauty Parlor",
      role: "Salon Owner",
      icon: FaCut,
      rating: 5,
      text: "Perfect representation of our salon's elegance. Appointments have doubled since launch, and the online booking system has made scheduling so much easier for both us and our clients.",
      results: "+400% Appointments",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
    }
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
              CLIENT <span className="text-yellow-400">TESTIMONIALS</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our 120+ satisfied clients 
              have to say about working with Pixel Rise Web Co.
            </p>
          </div>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 text-center mb-12"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2">5.0</h3>
              <p className="text-gray-300 text-sm">Average Rating</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">120+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">100%</h3>
              <p className="text-gray-300 text-sm">Satisfaction Rate</p>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg relative"
              >
                <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-4 text-sm italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.results}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    <p className="text-yellow-400 text-xs font-medium">{testimonial.company}</p>
                  </div>
                  <testimonial.icon className="text-yellow-400 text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg"
          >
            <h2 className="text-xl font-bold text-black mb-4">Join Our Success Stories</h2>
            <p className="text-black mb-6 text-sm">
              Ready to become our next success story? Let's create something amazing together.
            </p>
            <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
              🚀 START YOUR PROJECT
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};