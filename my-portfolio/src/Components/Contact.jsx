import React from "react";

const Contact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#000000] px-4 mt-20 w-screen h-screen scroll-mt-20" id="contact">
      
      <form className="max-w-xl w-full bg-[#000000] p-8 rounded-xl shadow-lg">
        
        <h2 className="text-3xl font-bold text-center text-[#676767] mb-8">
          CONTACT FORM
        </h2>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-[#676767]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full mt-2 h-12 px-4 
                       border-2 border-gray-300 
                       rounded-lg 
                       focus:outline-none 
                       focus:border-[#826afb] 
                       transition duration-300 font-bold"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm  text-[#676767] font-bold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full mt-2 h-12 px-4 
                       border-2 border-gray-300 
                       rounded-lg 
                       focus:outline-none 
                       focus:border-[#826afb] 
                       transition duration-300 font-bold"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm  text-[#676767] font-bold">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            required
            className="w-full mt-2 px-4 py-3 
                       border-2 border-gray-300 
                       rounded-lg 
                       focus:outline-none 
                       focus:border-[#826afb] 
                       transition duration-300 resize-none font-bold"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-[#000000] font-bold 
                     py-3 rounded-lg 
                     hover:bg-[#676767] 
                     transition duration-300"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;
