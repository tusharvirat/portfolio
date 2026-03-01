import IMG_2100 from "../assets/IMG_2100.jpg";
function Hero() {
  console.log('Hero component rendered');
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col mx-auto w-fit gap-16 px-4 sm:px-0">
        <h1 className="text-[#C0C0C0] font-black text-4xl sm:text-6xl md:text-9xl tracking-wide font-sans text-center">
          HI, I'M TUSHAR
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <span className="w-full md:w-auto">
            <p className="text-[#C0C0C0] font-bold text-center leading-7 text-sm sm:text-lg md:text-xl uppercase font-mono">
              I design and develop responsive web applications <br />
              using modern technologies while continuously <br />
              improving my problem-solving skills.
            </p>
          </span>

          <img
            src={IMG_2100}
            alt="profile picture"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-white shadow-lg transition-all duration-900"
          />

          <span className="w-full md:w-auto flex justify-center">
            <button className="text-[#C0C0C0] bg-red-800 font-bold text-sm sm:text-base rounded-4xl py-2 px-4">
              RESUME
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
