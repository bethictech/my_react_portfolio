import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 2)))
      .catch((error) => console.log(error.message));
  });

  return (
    <section className="bg-primary text-[#FAFAD2] px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-green-200 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((item) => {
          console.log(item);

          return (
            <div>
              <img src={item.cover_image} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#B48B7D] text-[#732E17] font-semibold px-6 py-3 hover:bg-transparent hover:text-[#FFDAB9] "
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
