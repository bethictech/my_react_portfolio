import React, { useState } from "react";

import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const ContactFormWithServer = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%]  mx-auto text-[#FAFAD2]">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] inline-block mx-auto border-green-200 pb-2">
          {translations.contact.me}
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex items-center justify-between w-full mb-4">
              <label htmlFor="name" className="text-left w-1/4">
                {translations.contact.name} :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-3/4 px-3 py-2 border border-[#FAFAD2] rounded-md focus:outline-none focus:border-green-200 bg-[#071511] text-white"
                required
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <label htmlFor="email" className="text-left w-1/4">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-3/4 px-3 py-2 border border-[#FAFAD2] rounded-md focus:outline-none focus:border-green-200 bg-[#071511] text-white"
                required
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <label htmlFor="message" className="text-left w-1/4">
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-3/4 px-3 py-2 border border-[#FAFAD2] rounded-md focus:outline-none focus:border-green-200 bg-[#071511] text-white"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-accent  border-2 border-[#071511] text-[#071511] font-semibold  px-6 py-3 hover:bg-transparent hover:border-[#FAFAD2] hover:text-[#FAFAD2]"
          >
            {translations.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormWithServer;
