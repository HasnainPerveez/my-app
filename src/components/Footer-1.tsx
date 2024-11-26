import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div
      className="flex justify-between items-center w-full h-[228px] bg-[#F7F7F7]">
        <div className="flex w-[325px] h-[68px]">
            <h1 className="font-bold text-[24px] leading-[33.6px] text-[#000000]]">Trusted by 2000+ companies worldwide.</h1>
        </div>
        <div className="flex">
        <Image className="px-2"
            src="/images/Logo/Airbnb Logo-1.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
                  <Image className="px-2"
            src="/images/Logo/Airbnb Logo-2.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
                  <Image className="px-2"
            src="/images/Logo/Airbnb Logo-3.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
                  <Image className="px-2"
            src="/images/Logo/Airbnb Logo-4.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
                  <Image className="px-2"
            src="/images/Logo/Airbnb Logo-5.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
                  <Image className="px-2"
            src="/images/Logo/Airbnb Logo-6.svg"
            alt="alt"
            width={123.8}
            height={38.52}
          />
        </div>
      </div>
  );
}

export default Footer;
