import React from "react";
import BlackButton from "./BlackButton";
import NavButton from "./NavButton";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col rounded-[20px] w-fit mx-auto bg-[#25D363] mt-30 justify-center  md:p-25 p-10 align-center  contact-bg ">
        <div>
          <p className="text-[#ffffff] text-center  font-bold md:text-[48px] text-[15px] leading-[120%]">
            Your next business move <br /> is one chat away.
          </p>
          <p className="font-medium md:text-[24px] pt-3 text-[12px] text-[#ffffff] leading-[120%] text-center ">
            Trusted by 5,000+ Nigerian entrepreneurs
          </p>
        </div>
        <div className="flex justify-center flex-row gap-5 py-4">
          <div>
            <NavButton link={'#'} text={"Start on Whatsapp"} />
          </div>
          <div>
            <BlackButton link={'#'} text={"Explore on web"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
