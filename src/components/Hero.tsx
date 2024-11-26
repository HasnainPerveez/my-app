import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <div className="w-full h-[800px] flex justify-between items-center gap-6">
        <div className="w-[640px] h-[300px] pr-[60px] pl-[80px]">
          <h1 className="w-[500px] font-bold text-[56px] leading-[67.2px">
            Learn new skills online with ease
          </h1>
          <p className="w-[500px] font-normal text-[18px] leading-[27px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex gap-6 pt-[16px]">
            <Button
              className="w-[178px] h-[48px] rounded bg-black border-[1px] border-black font-normal text-[16px] leading-[24px] text-white"
              variant="outline"
            >
              Start learning now
            </Button>
            <Button
              className="w-[164px] h-[48px] rounded border-[1px] border-black font-normal text-[16px] leading-[24px]"
              variant="outline"
            >
              Explore Courses
            </Button>
          </div>
        </div>
        <div className="">
          <Image
            className="w-[640px] h-[900px] "
            src="/images/Placeholder/Image.svg"
            alt="alt"
            width={640}
            height={900}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
