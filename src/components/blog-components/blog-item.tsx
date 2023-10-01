import React from "react";
import { blogs } from "@/lib/data";
import BlogBoilerplate from "./blog-boilerplate";

export default function BlogItem() {
  return (
    <div className="px-0 w-full" id="blogs">
      {blogs.map((blog, index) => (
        <React.Fragment key={index}>
          <BlogBoilerplate {...blog} />
        </React.Fragment>
      ))}
    </div>
  );
}
