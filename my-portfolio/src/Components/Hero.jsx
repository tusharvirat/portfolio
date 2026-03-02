import IMG_2100 from "../assets/IMG_2100.jpg";

function Hero() {
  return (
<div className="bg-black w-screen min-h-screen overflow-x-hidden flex items-center" id="hero">      <div className="flex flex-col w-full gap-8 sm:gap-12 md:gap-16 py-12">

        {/* Heading - full width */}
        <h1 className="text-[#676767] font-black text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wide font-sans text-center w-full px-4">
          HI, I'M TUSHAR
        </h1>

        {/* Content Row - same width alignment as heading */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-6 w-full px-4 sm:px-10 md:px-16 lg:px-24">

          {/* Text */}
          <span className="w-full md:w-1/2">
            <p className="text-[#676767] font-bold text-center leading-7 text-sm sm:text-base md:text-lg lg:text-xl uppercase font-mono">
              I design and develop responsive web applications
              using modern technologies while continuously
              improving my problem-solving skills.
            </p>
          </span>

          {/* Image */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={IMG_2100}
              alt="profile picture"
              className="h-64 w-44 sm:h-72 sm:w-52 md:h-80 md:w-56 lg:h-90 lg:w-60 object-cover rounded-3xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
