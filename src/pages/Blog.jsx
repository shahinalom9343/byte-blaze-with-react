import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";
import { saveBlog } from "../utilities/localStorage";
const Blog = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const handleBookmark = (blog) => {
    // console.log(blog);
    saveBlog(blog);
  };
  // console.log(blog);
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-5">
      <article className="space-y-2">
        <div className="space-y-6">
          <h1 className="text-xl font-bold ">{blog.title}</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
            <div className="flex items-center md:space-x-2">
              <img
                src="https://source.unsplash.com/75x75/?portrait"
                alt=""
                className="w-4 h-4 border rounded-full "
              />
              <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              4 min read • 1,570 views
            </p>
          </div>
        </div>
        <div>
          <p>Insert the actual text content here...</p>
        </div>
      </article>
      {/* tabs */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
        <Link
          to="/"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border"
          } rounded-t-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Content</span>
        </Link>
        <Link
          to={`author`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border"
          } rounded-t-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
        <div onClick={() => handleBookmark(blog)} className="cursor-pointer">
          <IoBookmarks size={30} className="text-purple-500" />
        </div>
      </div>
      <Outlet></Outlet>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
          {blog.tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline  "
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
