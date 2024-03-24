import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl">No Bookmark Found!!!</h1>
      <Link to="/blogs" className="bg-slate-400 text-white px-4 py-2">
        Go to Blogs
      </Link>
    </div>
  );
};

export default NoData;
