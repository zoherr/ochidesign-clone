
import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../actions/sendEmail";

function ContactInfoPage() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log("Form submitted"); // Debugging log
    const formData = new FormData(event.target);
    console.log("Form data:", Object.fromEntries(formData.entries())); // Debugging log

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }
    toast("Email sent successfully!", {
      icon: "🦁",
    });
  };

  return (
    <div
      data-scroll
      className="pt-32 pb-8 w-full NeueMontreal-Regular bg-[#F1F1F1]"
      id="work"
    >
      <p className="text-[#212121] px-8 mb-10 sm:px-16 NeueMontreal-Regular sm:my-0 my-8 text-md font-normal">
        Fill the form below:
      </p>
      <form onSubmit={handleSubmit}  mode="no-cors">
        <div className="sm:text-[3vw] px-8 sm:px-16 mt-10 leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] hover:under NeueMontreal-Regular">
          Hi! My name is
          <input
            name="senderName"
            type="text"
            placeholder="Enter your name"
            className="inline-block border-b text-center placeholder:text-xl bg-transparent border-gray-500 focus:border-[#004d43] focus:outline-none w-[25%] mx-2"
          />
          and I work with
          <input
            name="senderCompany"
            type="text"
            placeholder="Company name type here"
            className="inline-block border-b text-center placeholder:text-xl bg-transparent border-gray-500 focus:border-[#004d43] focus:outline-none w-[25%] mx-2 placeholder-sm"
          />
          <br />
          I’m looking for a partner to help me with
          <input
            name="senderGoal"
            type="text"
            placeholder="Your goal type here"
            className="inline-block border-b text-center placeholder:text-xl bg-transparent border-gray-500 focus:border-[#004d43] focus:outline-none w-[25%] mx-2 placeholder-sm"
          />
          <br />
          You can reach me at
          <input
            name="senderEmail"
            type="email"
            placeholder="name@example.com"
            className="inline-block border-b text-center placeholder:text-xl bg-transparent border-gray-500 focus:border-[#004d43] focus:outline-none w-[25%] mx-2 placeholder-sm"
          />
          to start the conversation. Optionally, I’m sharing more:
          <input
            name="message"
            placeholder="Product details type here..."
            className="inline-block border-b text-center placeholder:text-xl bg-transparent border-gray-500 focus:border-[#004d43] focus:outline-none w-[50%] mx-2 placeholder-sm"
          />
        </div>
        <div className="mt-20 w-full flex justify-center text-center">
          <button  type="submit" className="text-zinc-100 items-center gap-4 flex text-center rounded-full text-[1.2rem] py-4 px-8 bg-[#212121]">
            Inquiry Now
            <div className="bg-white h-3 w-3 rounded-full"></div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactInfoPage;
