// BlogsPage.js
import React from "react";
import BlogCard from "../Components/BlogCard";
import { blogs } from "../Components/BlogsData";
import { FaCalendarAlt, FaStethoscope } from "react-icons/fa";

const BlogsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8 animate-fadeIn"
        style={{
          backgroundImage: `url('https://www.spruzup.com/assets/img/service/healthwellness-blogs.webp')`,
        }}
      >
        {/* Gradient + Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-orange-600 opacity-80 animate-fadeIn"></div>
        <div className="absolute inset-0 bg-black/20 animate-fadeIn"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-800 text-sm font-semibold mb-6 animate-slideDown">
            <FaStethoscope />
            <span>Health Education Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-slideDown">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-10 animate-slideDown">
            Stay informed with the latest health tips, medical insights, and
            wellness advice from our expert healthcare team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp">
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Explore Articles
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideDown">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <FaCalendarAlt />
              <span>Latest Health Insights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-slideDown">
              Recent Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slideDown">
              Discover our latest articles covering a wide range of health
              topics, from preventive care to treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default BlogsPage;