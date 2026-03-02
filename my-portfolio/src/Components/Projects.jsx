
const Project = () => {
  return (
    <div className="flex flex-row  mt-50 w-screen h-screen scroll-mt-20" id="projects">
      <div className="flex flex-col justify-center ">
        <h1 className="font-bold text-5xl -rotate-90 text-[#676767] ">
          PROJECTS
        </h1>
      </div>
      <div className="w-0.5 h-auto bg-gray-600 "></div>
      <div className="ml-10 mr-10 flex flex-col gap-20 items-center justify-center">
        <div >
          <div className="flex flex-row justify-between pr-8">
            <h1 className="text-[#676767] font-bold text-3xl ">Stopwatch</h1>
            <h1 className="text-[#676767] font-bold text-1xl ">2025</h1>
          </div>
          <p className="text-[#676767] italic font-semibold  text-base">
            Created a weather forecast application using HTML, CSS and
            JavaScript that displays real-time weather information. Integrated a
            third-party weather API to fetch live data based on city input
            provided by the user. Designed the frontend with responsive CSS to
            present temperature, humidity, and condition icons in a userfriendly
            layout.
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-between pr-8">
            <h1 className="text-[#676767] font-bold text-3xl ">Portfolio</h1>
            <h1 className="text-[#676767] font-bold text-1xl ">2025</h1>
          </div>
          <p className="text-[#676767] italic font-semibold text-1xl text-base">
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
