import hero from "../assets/hero.png";
// import hero3 from "../assets/hero3.jpg";

const Hero = () => {
  return (
    <div>
      <img src={hero} alt="" className="w-full max-h-[600px] object-cover" />
    </div>
  );
};

export default Hero;
