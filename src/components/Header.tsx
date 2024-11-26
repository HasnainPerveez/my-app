import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <div className="w-full h-[54px] flex justify-between items-center border-b-[1px] border-black ">
        <div className="ml-[50px] flex">
          <p>Phone Number: 956 742 455 678</p>
          <hr className="border-[1.5px] border-gray-950 h-[30px] w-[1px] mx-4" />
          <p>Email:info@ddsgnr.com</p>
        </div>
        <div className="mr-[50px] flex gap-6">
          <Image
            src="/images/header/facebook.svg"
            alt="alt"
            width={10}
            height={18}
          />
          <Image
            src="/images/header/instagram.svg"
            alt="alt"
            width={18}
            height={18}
          />
          <Image
            src="/images/header/twit.svg"
            alt="alt"
            width={18}
            height={15.3}
          />
          <Image
            className=""
            src="/images/header/linkdin.svg"
            alt="alt"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className="h-[72px] flex justify-between items-center border-b-[1px] border-gray-500">
        <div className="ml-[50px] flex ">
          <Image
            className="w-[130.6px] h-[41px]"
            src="/images/Ddsgnr Library.svg"
            alt="alt"
            width={130.6}
            height={41}
          />
        </div>
        <div className="flex">
          <ul className="flex gap-5">
            <li className="underline underline-offset-[10px]">
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Courses</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Achievement</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Testimonial</Link>
            </li>
          </ul>
          <div className=" mr-[50px] flex pl-6 gap-3">
          <Button className="flex rounded " variant="outline">
            Login
          </Button>
          <Button className="flex rounded bg-black text-white" variant="outline">
            Sign Up
          </Button>
        </div>
        </div>
        {/* <div className="flex">
          <Button className="flex" variant="outline">
            Login
          </Button>
          <Button className="flex" variant="outline">
            Sign Up
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
