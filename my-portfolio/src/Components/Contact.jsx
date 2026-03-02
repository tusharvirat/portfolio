import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "843e6d72-c878-48a2-bc81-d488753930bc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network Error ❌");
    }

    setLoading(false);
  };

  return (
    <section
      className="flex justify-center items-center min-h-screen bg-black px-4 mt-20 scroll-mt-20"
      id="contact"
    >
      <form
        onSubmit={onSubmit}
        className="max-w-xl w-full bg-black p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-5xl font-bold text-center text-[#676767] mb-8">
          CONTACT ME
        </h1>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-[#676767]">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="text-white w-full mt-2 h-12 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#826afb] transition duration-300 font-bold"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm text-[#676767] font-bold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="text-white w-full mt-2 h-12 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#826afb] transition duration-300 font-bold"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm text-[#676767] font-bold">
            Your Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Enter your message"
            className="text-white w-full mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#826afb] transition duration-300 resize-none font-bold"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-black font-bold py-3 rounded-lg hover:bg-[#676767] transition duration-300 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Result Message */}
        {result && (
          <p className="text-center mt-4 text-[#826afb] font-bold">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;