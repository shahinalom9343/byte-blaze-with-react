import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome To Byte{" "}
            <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
              Blaze
            </span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-2 justify-center ">
            <Link to="/blogs">
              <button className="btn btn-primary font-semibold text-xl">
                See Blogs
              </button>
            </Link>
            <Link to="/bookmarks">
              <button className="btn btn-primary font-semibold text-xl">
                Bookmarks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
