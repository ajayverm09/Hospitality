// BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link 
      to={`/blog/${blog.id}`}
      className="block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
          Read More
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;