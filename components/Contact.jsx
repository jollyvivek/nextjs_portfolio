import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b41818b4-ce4d-4755-ac6b-4e4fe66e1c33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      {/* form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 md:grid-cols-2">
          <input
            type="text"
            name="Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 md:grid-cols-2">
          <input
            type="text"
            name="State"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="State"
            required
          />
          <input
            type="number"
            name="Mobile"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            placeholder="Mobile No"
            required
          />
        </div>
        <textarea
          name="Message"
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 resize-none"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submt"
          className="border-1 py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 
              text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit Now
          <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
