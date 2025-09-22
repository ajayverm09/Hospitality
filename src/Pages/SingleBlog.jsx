// SingleBlogPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import { blogs } from '../Components/BlogsData';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchBlog = () => {
      const foundBlog = blogs.find(b => b.id === parseInt(id));
      setBlog(foundBlog);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
        <Link to="/blogs" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Blog Image */}
      <div className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${blog.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h1>
            <div className="flex items-center justify-center text-white text-sm md:text-base">
              <div className="flex items-center mr-6">
                <FaUser className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to All Blogs
          </Link>
        </div>
        
        {/* Additional Image at the top of content */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-gray-700 font-bold">{blog.author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{blog.author}</h3>
                <p className="text-sm text-gray-600">Medical Expert</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;