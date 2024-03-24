import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/404.jpg";
const SingleBlog = ({ blog, handleDelete, deletable }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <div className="flex relative ">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 group hover:no-underline focus:no-underline bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || PlaceholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-primary absolute -top-5 -right-5"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default SingleBlog;
