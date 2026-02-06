"use client";

import Hero from "./components/hero";
import BlogCard from "./components/BlogCard";

export default function Page() {
  return (
    <div >
      <Hero />
      <BlogCard className="pt-10" />
    </div>
  );
}
