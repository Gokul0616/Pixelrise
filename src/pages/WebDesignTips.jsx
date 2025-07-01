import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components';
import { FaPalette, FaUsers, FaMobile, FaRocket, FaCheckCircle, FaLightbulb, FaEye, FaCog } from 'react-icons/fa';

export const WebDesignTips = () => {
  const designTips = [
    {
      category: "User Experience",
      icon: FaUsers,
      tips: [
        {
          title: "Keep Navigation Simple",
          description: "Use clear, intuitive navigation that users can understand immediately.",
          importance: "Critical"
        },
        {
          title: "Optimize Loading Speed",
          description: "Ensure your website loads in under 3 seconds to prevent user abandonment.",
          importance: "Critical"
        },
        {
          title: "Use White Space Effectively",
          description: "White space improves readability and helps users focus on important content.",
          importance: "High"
        },
        {
          title: "Make CTAs Stand Out",
          description: "Use contrasting colors and clear text for call-to-action buttons.",
          importance: "High"
        }
      ]
    },
    {
      category: "Visual Design",
      icon: FaPalette,
      tips: [
        {
          title: "Maintain Color Consistency",
          description: "Use a consistent color palette throughout your website for brand recognition.",
          importance: "High"
        },
        {
          title: "Choose Readable Fonts",
          description: "Select fonts that are easy to read across all devices and screen sizes.",
          importance: "Critical"
        },
        {
          title: "Use High-Quality Images",
          description: "Invest in professional photography or high-quality stock images.",
          importance: "Medium"
        },
        {
          title: "Implement Visual Hierarchy",
          description: "Guide users through your content with size, color, and positioning.",
          importance: "High"
        }
      ]
    },
    {
      category: "Mobile Design",
      icon: FaMobile,
      tips: [
        {
          title: "Design Mobile-First",
          description: "Start with mobile design, then scale up to desktop for better performance.",
          importance: "Critical"
        },
        {
          title: "Use Touch-Friendly Buttons",
          description: "Make buttons at least 44px in height for easy touch interaction.",
          importance: "High"
        },
        {
          title: "Optimize Images for Mobile",
          description: "Compress images and use responsive images for faster mobile loading.",
          importance: "High"
        },
        {
          title: "Test on Real Devices",
          description: "Always test your design on actual mobile devices, not just simulators.",
          importance: "Medium"
        }
      ]
    },
    {
      category: "Performance",
      icon: FaRocket,
      tips: [
        {
          title: "Minimize HTTP Requests",
          description: "Combine CSS and JavaScript files to reduce server requests.",
          importance: "High"
        },
        {
          title: "Enable Browser Caching",
          description: "Set up caching to improve repeat visitor experience.",
          importance: "High"
        },
        {
          title: "Optimize CSS and JavaScript",
          description: "Minify and compress your code files for faster loading.",
          importance: "Medium"
        },
        {
          title: "Use Content Delivery Network",
          description: "Implement CDN to serve content from servers closest to users.",
          importance: "Medium"
        }
      ]
    }
  ];

  const quickTips = [
    "Use consistent branding throughout your website",
    "Make your contact information easily accessible",
    "Include social proof like testimonials and reviews",
    "Optimize your website for search engines",
    "Use analytics to track user behavior",
    "Keep your content fresh and updated",
    "Ensure accessibility for all users",
    "Test your website regularly across browsers",
    "Use clear and compelling headlines",
    "Include a search function for large websites",
    "Make your footer informative and useful",
    "Use breadcrumb navigation for complex sites"
  ];

  const commonMistakes = [
    {
      mistake: "Auto-playing videos or music",
      solution: "Let users choose when to play media content",
      impact: "High"
    },
    {
      mistake: "Pop-ups on mobile devices",
      solution: "Use less intrusive methods like slide-ins or banners",
      impact: "High"
    },
    {
      mistake: "Unclear navigation labels",
      solution: "Use descriptive, commonly understood terms",
      impact: "Medium"
    },
    {
      mistake: "Too many font styles",
      solution: "Limit to 2-3 font families maximum",
      impact: "Medium"
    },
    {
      mistake: "Missing contact information",
      solution: "Include multiple ways to contact you",
      impact: "High"
    },
    {
      mistake: "Broken links and images",
      solution: "Regularly audit your website for broken elements",
      impact: "High"
    }
  ];

  const designTools = [
    { name: "Figma", category: "Design", description: "Collaborative interface design tool" },
    { name: "Adobe XD", category: "Design", description: "UI/UX design and prototyping" },
    { name: "Sketch", category: "Design", description: "Digital design toolkit" },
    { name: "Canva", category: "Graphics", description: "Easy graphic design platform" },
    { name: "Unsplash", category: "Images", description: "High-quality free stock photos" },
    { name: "Google Fonts", category: "Typography", description: "Free web fonts library" },
    { name: "Coolors", category: "Colors", description: "Color palette generator" },
    { name: "TinyPNG", category: "Optimization", description: "Image compression tool" }
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
              WEB DESIGN <span className="text-yellow-400">TIPS</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Professional web design tips and best practices to create stunning, 
              user-friendly websites that convert visitors into customers.
            </p>
          </div>

          {/* Design Tips by Category */}
          <div className="space-y-8 mb-12">
            {designTips.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 text-black p-3 rounded-full mr-4">
                    <category.icon className="text-xl" />
                  </div>
                  <h2 className="text-xl font-bold">{category.category} Tips</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm">{tip.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          tip.importance === 'Critical' ? 'bg-red-500 text-white' :
                          tip.importance === 'High' ? 'bg-yellow-400 text-black' :
                          'bg-blue-500 text-white'
                        }`}>
                          {tip.importance}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              QUICK <span className="text-yellow-400">TIPS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-800 p-4 rounded-lg">
                  <FaLightbulb className="text-yellow-400 text-sm mt-1" />
                  <span className="text-gray-300 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Common Mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              COMMON <span className="text-yellow-400">MISTAKES</span> TO AVOID
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="grid lg:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-red-400 mb-1 text-sm">❌ {item.mistake}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.impact === 'High' ? 'bg-red-500 text-white' : 'bg-yellow-400 text-black'
                      }`}>
                        {item.impact} Impact
                      </span>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-green-400 mb-1 text-sm">✅ Solution:</h4>
                      <p className="text-gray-300 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              RECOMMENDED <span className="text-yellow-400">TOOLS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designTools.map((tool, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                  <h3 className="font-bold mb-1 text-sm">{tool.name}</h3>
                  <p className="text-yellow-400 text-xs mb-2">{tool.category}</p>
                  <p className="text-gray-400 text-xs">{tool.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Principles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              FUNDAMENTAL DESIGN <span className="text-yellow-400">PRINCIPLES</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <FaEye className="text-yellow-400 text-3xl mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm">Visual Hierarchy</h3>
                <p className="text-gray-400 text-xs">Guide users through content with size, color, and position</p>
              </div>
              <div className="text-center">
                <FaUsers className="text-yellow-400 text-3xl mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm">User-Centered</h3>
                <p className="text-gray-400 text-xs">Design with your target audience's needs and behaviors in mind</p>
              </div>
              <div className="text-center">
                <FaCog className="text-yellow-400 text-3xl mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm">Functionality</h3>
                <p className="text-gray-400 text-xs">Ensure every element serves a purpose and works properly</p>
              </div>
              <div className="text-center">
                <FaCheckCircle className="text-yellow-400 text-3xl mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm">Consistency</h3>
                <p className="text-gray-400 text-xs">Maintain uniform design patterns throughout the website</p>
              </div>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              WEB DESIGN <span className="text-yellow-400">CHECKLIST</span>
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Mobile responsive design",
                  "Fast loading speed (< 3 seconds)",
                  "Clear navigation menu",
                  "Contact information visible",
                  "SEO-optimized content",
                  "Social media integration",
                  "SSL certificate installed",
                  "Analytics tracking setup",
                  "Cross-browser compatibility",
                  "Accessibility compliance",
                  "Error page customization",
                  "Regular backup system"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-black mb-4">Need Professional Web Design?</h2>
            <p className="text-black mb-6 text-sm">
              Let our expert team create a stunning, high-converting website for your business.
            </p>
            <CTAButton className="bg-black hover:bg-gray-800 text-yellow-400 text-sm px-6 py-3">
              🎨 GET PROFESSIONAL DESIGN
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
};