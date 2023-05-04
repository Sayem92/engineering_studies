import React, { useEffect, useState } from "react";
import Skeleton3Col from "../../Loader/Skeleton/Skeleton3Col";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    setLoading(true);
    fetch("http://localhost:5000/blog")
=======
    fetch("https://engineering-studies-sever.vercel.app/blog")
>>>>>>> 36e81dba4ffef4bd2118dcf1ba9a9316618fc341
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  // console.log(post);

  if(loading){
    return <Skeleton3Col></Skeleton3Col>
  }
  

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
