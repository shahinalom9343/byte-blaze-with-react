import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { id, cover_image, title, description, published_at, body_html } = blog;
  return (
    <div
      to={`/blog/${id}`}
      className=" mx-auto transition border-2  border-primary  border-opacity-30 group hover:no-underline focus:no-underline "
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
        <span className="text-xs ">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
