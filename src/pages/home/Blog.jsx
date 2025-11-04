import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blog1.png",
      title: "I want a NEW job, where to start?",
      date: "May 11, 2024",
    },
    {
      id: 2,
      image: "/images/blog2.png",
      title: "How to prepare for a job interview?",
      date: "April 9, 2024",
    },
    {
      id: 3,
      image: "/images/blog3.png",
      title:
        "Starting a new adventure: What do people do when they quit their jobs and go on sabbatical?",
      date: "March 15, 2024",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <span className="text-[17px] text-primary font-normal font-sans">
            Blog & NEWS
          </span>
          <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
            From the world of the labor market:
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              {/* Image */}
              <div className="w-full h-[350px] overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-secondary leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
