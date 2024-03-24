import ScaleLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)] ">
      <ScaleLoader size={150}></ScaleLoader>
    </div>
  );
};

export default Loader;
