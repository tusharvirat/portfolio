import IMG_2100 from "../assets/IMG_2100.jpg";
function Hero() {
  console.log("Hero component rendered");
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden" id="hero">
      <div className="flex flex-col mx-auto w-fit gap-16 px-4 sm:px-0">
        <h1 className="text-[#676767] font-black text-4xl sm:text-6xl md:text-9xl tracking-wide font-sans text-center">
          HI, I'M TUSHAR
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <span className="w-full md:w-auto">
            <p className="text-[#676767] font-bold text-center leading-7 text-sm sm:text-lg md:text-xl uppercase font-mono">
              I design and develop responsive web applications <br />
              using modern technologies while continuously <br />
              improving my problem-solving skills.
            </p>
          </span>

          <div>
            <img 
              src={IMG_2100}
              alt="profile picture"
              className="h-90 w-60 object-cover rounded-4xl"
            />

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
