"use client";

import { use } from 'react';
import OpenBlog from '../../components/openblog';
import { getBlogById } from '../../components/blogData';

export default function BlogPage({ params }) {
  // Unwrap the params promise in Next.js 15+
  const resolvedParams = use(params);
  const blogId = resolvedParams.id;
  
  // Get the blog data based on the ID from the URL
  const blog = getBlogById(blogId);
  
  return <OpenBlog  blog={blog} />;
}
