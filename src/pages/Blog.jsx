import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaCalendarAlt, FaUser, FaEye, FaComments, FaArrowRight, FaTags } from 'react-icons/fa';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Web Design Trends for 2025",
      excerpt: "Discover the latest web design trends that will dominate 2025, from AI-powered interfaces to sustainable design practices.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      author: "Pixel Rise Team",
      date: "January 15, 2025",
      category: "Web Design",
      readTime: "5 min read",
      views: "2.1k",
      comments: 18,
      tags: ["Design", "Trends", "2025", "UI/UX"]
    },
    {
      id: 2,
      title: "The Complete Guide to Website SEO in 2025",
      excerpt: "Master the latest SEO techniques and algorithms to boost your website's search engine rankings and organic traffic.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      author: "SEO Expert",
      date: "January 12, 2025",
      category: "SEO",
      readTime: "8 min read",
      views: "3.4k",
      comments: 25,
      tags: ["SEO", "Google", "Rankings", "Traffic"]
    },
    {
      id: 3,
      title: "Why Mobile-First Design is Critical for Business Success",
      excerpt: "Learn why mobile-first design approach is essential for modern businesses and how it impacts user experience and conversions.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop",
      author: "Mobile Expert",
      date: "January 10, 2025",
      category: "Mobile Design",
      readTime: "6 min read",
      views: "1.8k",
      comments: 12,
      tags: ["Mobile", "Responsive", "UX", "Business"]
    },
    {
      id: 4,
      title: "E-commerce Website Optimization: Boost Your Sales by 300%",
      excerpt: "Proven strategies to optimize your e-commerce website for higher conversions and increased revenue.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "E-commerce Specialist",
      date: "January 8, 2025",
      category: "E-commerce",
      readTime: "10 min read",
      views: "4.2k",
      comments: 32,
      tags: ["E-commerce", "Conversion", "Sales", "Optimization"]
    },
    {
      id: 5,
      title: "Web Development Best Practices for 2025",
      excerpt: "Stay ahead with the latest web development practices, frameworks, and technologies that developers are using in 2025.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      author: "Dev Team",
      date: "January 5, 2025",
      category: "Development",
      readTime: "7 min read",
      views: "2.9k",
      comments: 19,
      tags: ["Development", "JavaScript", "React", "Best Practices"]
    },
    {
      id: 6,
      title: "How to Choose the Right Web Design Agency",
      excerpt: "A comprehensive guide to selecting the perfect web design agency for your business needs and budget.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      author: "Business Consultant",
      date: "January 3, 2025",
      category: "Business",
      readTime: "9 min read",
      views: "1.5k",
      comments: 8,
      tags: ["Agency", "Business", "Selection", "Tips"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 42 },
    { name: "Web Design", count: 15 },
    { name: "SEO", count: 12 },
    { name: "Development", count: 8 },
    { name: "E-commerce", count: 5 },
    { name: "Business", count: 2 }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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
              PIXEL RISE <span className="text-yellow-400">BLOG</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in web design, 
              development, SEO, and digital marketing.
            </p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-4 text-sm">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaUser className="text-xs" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaEye className="text-xs" />
                      <span>{featuredPost.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {featuredPost.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-xs flex items-center space-x-1">
                      <span>Read More</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    index === 0
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Regular Posts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaUser className="text-xs" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FaEye className="text-xs" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaComments className="text-xs" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded font-semibold text-xs">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg text-center mb-8"
          >
            <h2 className="text-xl font-bold text-black mb-4">Stay Updated with Our Latest Posts</h2>
            <p className="text-black mb-6 text-sm">
              Subscribe to our newsletter and get the latest web design tips, SEO insights, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-black text-sm flex-1"
              />
              <button className="bg-black hover:bg-gray-800 text-yellow-400 px-6 py-2 rounded-lg font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Load More */}
          <div className="text-center">
            <CTAButton className="text-sm px-6 py-3">
              📚 LOAD MORE POSTS
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};