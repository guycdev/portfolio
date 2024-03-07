import React from "react";
import FlowNavigation from "./FlowNavigation";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { BsBack } from "react-icons/bs";
import { FormModal } from "@/components/form-modal";

const HomeInformation = () => {
  return (
    <div className=" h-[100%] w-[100%] flex-1 bg-bg p-3 rounded-s-md">
      <Link href="/">
        <BiHome />
      </Link>
      <FormModal />
      <div>
        <h2 className="text-5xl text-[#e2e8f0] font-semibold">Guy Cohen</h2>
        <p className="text-xl text-[#e2e8f0] ">Software Engineer</p>
        <p className="text-primary">
          Building pixel perfect UIs and scalable APIs
        </p>
      </div>
      <FlowNavigation />
    </div>
  );
};

export default React.memo(HomeInformation);
