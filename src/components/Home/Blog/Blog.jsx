import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://engineering-studies-sever.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  // console.log(post);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-20 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From <span className="text-purple-600">the blog</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt
            tasty liquor. Sweet savory food truck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* all post map  */}
          {post?.map((data, i) => (
            <BlogPost key={i} data={data}></BlogPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
