const Project = () => {
  return (
    <div className="flex flex-row w-screen scroll-mt-20 bg-black py-16 sm:py-24" id="projects">

      {/* Rotated Title - same fixed width as Skills */}
      <div className="flex flex-col justify-center items-center w-10 sm:w-16 md:w-20 lg:w-24 shrink-0">
        <h1 className="font-bold text-lg sm:text-3xl md:text-5xl -rotate-90 text-[#676767] whitespace-nowrap">
          PROJECTS
        </h1>
      </div>

      {/* Vertical Divider - with top and bottom margin for break */}
      <div className="w-0.5 bg-gray-600 my-10 sm:my-16"></div>

      {/* Projects Content */}
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 justify-center py-12 w-full pl-3 sm:pl-5 pr-4 sm:pr-8 md:pr-10">

        {/* Project 1 */}
        <div className="w-full">
          <div className="flex flex-row justify-between mb-2">
            <h1 className="text-[#676767] font-bold text-xl sm:text-2xl md:text-3xl">Stopwatch</h1>
            <h1 className="text-[#676767] font-bold text-sm sm:text-base md:text-xl">2025</h1>
          </div>
          <p className="text-[#676767] italic font-semibold text-xs sm:text-sm md:text-base leading-6 sm:leading-7">
            Created a weather forecast application using HTML, CSS and
            JavaScript that displays real-time weather information. Integrated a
            third-party weather API to fetch live data based on city input
            provided by the user. Designed the frontend with responsive CSS to
            present temperature, humidity, and condition icons in a user-friendly
            layout.
          </p>
        </div>

        {/* Project 2 */}
        <div className="w-full">
          <div className="flex flex-row justify-between mb-2">
            <h1 className="text-[#676767] font-bold text-xl sm:text-2xl md:text-3xl">Portfolio</h1>
            <h1 className="text-[#676767] font-bold text-sm sm:text-base md:text-xl">2025</h1>
          </div>
          <p className="text-[#676767] italic font-semibold text-xs sm:text-sm md:text-base leading-6 sm:leading-7">
            Developed a personal portfolio website using React and Tailwind CSS
            to showcase my projects and skills. Implemented a responsive design
            to ensure optimal viewing across devices. Utilized React components
            to create a dynamic and interactive user interface, allowing
            visitors to easily navigate through my work and contact information.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Project;