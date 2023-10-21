import React from 'react'
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between h-[80px] bg-gradient-to-r from-[#2d2d2d] to-[#0000000e]">
      {/* Logo sorta */}
      <div className="flex-initial flex justify-center items-center px-[20px]">
        <p className="text-[white] text-2xl px-[20px]">
          {" "}
          <b className="text-white text-3xl ">P</b>rince.k
        </p>
      </div>
      {/* Navigation itself */}
      <div className="group/item w-[200px] h-[fit-content] right-[0px] flex flex-col absolute md:flex-row md:relative justify-between md:w-[900px] md:h-[80px] md:bg-[transparent]  my-[10px]">
        <button className="group/item h-[60px] md:hidden bg-[#2d2d2d] rounded-xl ">
          Menu
        </button>
        <ul className="flex flex-col h-[000px] w-[200px] invisible group-hover/item:visible group-hover/item:h-[inherit] md:flex md:flex-row md:w-[600px] md:items-center md:justify-around md:h-[80px] md:visible bg-[#2d2d2d] md:bg-[transparent]">
          <Link href="/">
            <li className="text-[white] hover:text-[#dadeda] h-[50px] flex justify-center md:h-[inherit]">
              About
            </li>
          </Link>
          <Link href="/projects">
            <li className="text-[white] hover:text-[#dadeda] h-[50px] flex justify-center md:h-[inherit]">
              Projects
            </li>
          </Link>
          <Link href="/achievements">
            <li className="text-[white] hover:text-[#dadeda] h-[50px] flex justify-center md:h-[inherit]">
              Achievements
            </li>
          </Link>
          <Link href="/hireme">
            <li className="text-[white] hover:text-[#dadeda] h-[50px] flex justify-center md:h-[inherit]">
              Hire Me
            </li>
          </Link>
        </ul>
        {/* Download CV button */}
        <div className="items-center px-[30px] h-[0px] flex justify-center invisible group-hover/item:visible group-hover/item:h-[inherit] py-[.2rem] md:visible md:h-[inherit] md:py-[0] bg-[#2d2d2d] rounded-b-xl md:bg-[transparent]">
          <button className="bg-[#fc9701] rounded-md p-[10px] text-sm text-[#000]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffa216] duration-300 ">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav