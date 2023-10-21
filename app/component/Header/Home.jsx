import React from "react";
import Nav from "../Nav/Nav";

const HomeHeader = () => {
  return (
    <header className="bg-header-background h-[750px] bg-cover text-[#ffffff]">
      <Nav />

      {/* Header headline */}
      <div className="bg-gradient-to-r from-[#2d2d2d] to-[#0000000e] text-[white] px-[50px] py-[10px] w-[100%] h-[630px] flex flex-col justify-center md:px-[100px]">
        <section className="my-[20px] w-[430px]">
          <h1 className="text-6xl font-bold text-white">
            I code, build and maintain products
          </h1>
        </section>
        <section>
          <p className="text-gray-light w-[400px] font-normal ">
            Want to bring your designs to life? Go ahead and
          </p>{" "}
          <p className="text-gray-light w-[400px] font-normal">
            {"contact me. Let's bring your projects to life. "}
          </p>
        </section>
        <section className="py-[20px] w-[400px] flex">
          <button className="bg-[#e5b970] text-[#2d2d2d] p-[15px] rounded-full w-[170px] text-sm mr-[15px] transition-all hover:bg-[#ffbe56]">
            Contact me
          </button>
          <button className="border-[#e5b970] border-2 text-[#e5b970] p-[15px] rounded-full w-[170px] text-sm hover:border-[#ffbe56] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-[#ffbe56] duration-300 ">
            About me
          </button>
        </section>
      </div>
    </header>
  );
};

export default HomeHeader;
