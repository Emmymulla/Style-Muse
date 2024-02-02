import React from "react";
import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa6";

function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      text: "The team transformed my living space into a sanctuary. Their attetion to detail and innovative design truly made my house feel like a home.",
      author: "Jane Doe ",
      position: "Homeowner",
      location: "Lagos",
    },

    {
      id: 2,
      text: "I'm in awe of the work! The designers managed to capture both comfort and style in their design,making my office space a place I look forward to working in everyday.",
      author: "John Smith",
      position: "Entrepreneur",
      location: "Abuja",
    },

    {
      id: 3,
      text: "Their vision for my apartment was breathtaking. They curated a space that reflects my personality perfectly. I highly recommend their services!",
      author: "Emily Johnson",
      position: "Artist",
      location: "Port Hacourt",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [current, testimonials.length]);
  return (
    <>
      <div className="w-[70vw] lg:h-[55vh] md:h-[55vh] h-[60vh] flex flex-col items-center justify-evenly text-white  ">
        <strong className=" text-6xl font-extrabold text-[#d79d05] ">
          <FaQuoteRight />
        </strong>
        <p className="text-xl font-semibold text-center">
          {testimonials[current].text}
        </p>
        <p className=" font-medium ">
          {testimonials[current].author}, {testimonials[current].position}
        </p>
        <p>{testimonials[current].location}</p>
      </div>
    </>
  );
}

export default TestimonialSlider;
