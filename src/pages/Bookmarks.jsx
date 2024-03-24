import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utilities/localStorage";
import SingleBlog from "./SingleBlog";
import NoData from "./NoData";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1) return <NoData></NoData>;
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <SingleBlog
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Bookmarks;
