import React from "react";
import { FaInstagram, FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Link from "next/link";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div className="">
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
      <div className="items-center justify-center text-black dark:text-white mt-8">
        <h1 className="text-3xl font-medium capitalize mb-8 text-center">Connect Now</h1>
      
      </div>
    </div>
  );
}
