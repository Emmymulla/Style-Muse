import React from "react";
import { FaBrush, FaAward, FaRocketchat, FaWallet } from "react-icons/fa6";

function Pitch() {
  return (
    <>
      <div className="lg:w-[85%] md:w-full w-full h-full flex lg:flex-row md:flex-row flex-col lg:overflow-hidden md:overflow-hidden overflow-scroll items-center lg:justify-between md:justify-evenly justify-evenly ">
        {/* interiorExpertise */}
        <div className="lg:w-[24%]   md:w-[24%] w-full lg:h-[80%] md:h-[90%] h-[90%] flex flex-col items-center  justify-between  ">
          <strong className="text-[#d79b05] lg:text-5xl md:text-4xl text-3xl ">
            <FaBrush />
          </strong>
          <strong className="lg:text-xl md:text-lg text-lg text-[#1d1b1b] ">
            Interior Expertise
          </strong>

          <p className="lg:text-sm md:text-[13px] text-sm font-semibold text-[#292626]  text-center lg:tracking-normal md:tracking-tight tracking-normal lg:leading-normal md:leading-snug leading-normal">
            With years of experience in the industry, our interior design
            experts possess a deep understanding of design principles, trends,
            and techniques. We stay up-to-date with the latest innovations in
            materials, finishes, and furnishings to ensure that your space is
            not only visually stunning but also functional and timeless.
          </p>
        </div>

        {/* awardWinning */}
        <div className="lg:w-[24%] md:w-[24%] w-full lg:h-[80%] md:h-[90%] h-[90%] flex flex-col items-center  justify-between   ">
          <strong className="text-[#d79b05] lg:text-5xl md:text-4xl text-3xl ">
            <FaAward />
          </strong>
          <strong className="lg:text-xl md:text-lg text-lg text-[#1d1b1b] ">
            Award Winning
          </strong>

          <p className="lg:text-sm md:text-[13px] text-sm font-semibold text-[#292626]  text-center lg:tracking-normal md:tracking-tight tracking-normal lg:leading-normal md:leading-snug leading-normal">
            Our dedication to pushing boundaries and creating extraordinary
            spaces has earned us prestigious awards for design innovation. From
            unique architectural elements to bold color palettes, our
            award-winning designs showcase our ability to think outside the box
            and deliver truly exceptional interiors that leave a lasting
            impression.
          </p>
        </div>

        {/* freeConsultation */}
        <div className="lg:w-[24%] md:w-[24%] w-full lg:h-[80%] md:h-[90%] h-[90%] flex flex-col items-center  justify-between  ">
          <strong className="text-[#d79b05] lg:text-5xl md:text-4xl text-3xl ">
            <FaRocketchat />
          </strong>
          <strong className="lg:text-xl md:text-lg text-lg text-[#1d1b1b] ">
            Free Consultation
          </strong>

          <p className="lg:text-sm md:text-[13px] text-sm font-semibold text-[#292626]  text-center lg:tracking-normal md:tracking-tight tracking-normal lg:leading-normal md:leading-snug leading-normal">
            Our free consultations are offered without any obligation or
            commitment on your part. We want you to feel comfortable exploring
            possibilities for transforming your space without any pressure or
            expectation. Our goal is simply to give you the opportunity to
            experience first hand the expertise and passion for interior design
            team before making any decisions.
          </p>
        </div>

        {/* affordablePrice */}
        <div className="lg:w-[24%] md:w-[24%] w-full lg:h-[80%] md:h-[90%] h-[90%] flex flex-col items-center  justify-between  ">
          <strong className="text-[#d79b05] lg:text-5xl md:text-4xl text-3xl ">
            <FaWallet />
          </strong>
          <strong className="lg:text-xl md:text-lg text-lg text-[#1d1b1b] ">
            Affordable Price
          </strong>

          <p className="lg:text-sm md:text-[13px] text-sm font-semibold text-[#292626]  text-center lg:tracking-normal md:tracking-tight tracking-normal lg:leading-normal md:leading-snug leading-normal">
            We have established strong relationships with trusted suppliers who
            offer high-quality materials at competitive prices. With our
            extensive knowledge of different materials and finishes, we can help
            you select options that not only align with your design vision but
            also fit within your budget. Our goal is to ensure that every dollar
            you spend delivers maximum value and impact.
          </p>
        </div>
      </div>
    </>
  );
}

export default Pitch;
