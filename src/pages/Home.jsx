import Hero from "../components/Hero";
import wave from "../assets/wave.svg";
const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)] relative">
      <Hero></Hero>
      <img src={wave} className="w-full absolute bottom-0" alt="" />
    </div>
  );
};

export default Home;
