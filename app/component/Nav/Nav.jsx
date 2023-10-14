import React from 'react'
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex h-[80px]  bg-gradient-to-r from-[#2d2d2d] to-[#0000000e]">
      {/* Logo sorta */}
      <div className="flex-initial flex justify-center items-center px-[20px]">
        <p className="text-[white] text-2xl px-[20px]">
          {" "}
          <b className="text-white text-3xl ">P</b>rince.k
        </p>
      </div>
      {/* Navigation itself */}
      <div className="flex-1 h-[80px] flex justify-center">
        <ul className="flex justify-around items-center h-[inherit] w-[500px] ">
          <Link href="/">
            <li className="text-[white] hover:text-[#dadeda]">About</li>
          </Link>
          <Link href="/projects">
            <li className="text-[white] hover:text-[#dadeda]">Projects</li>
          </Link>
          <Link href="/achievements">
            <li className="text-[white] hover:text-[#dadeda]">Achievements</li>
          </Link>
          <Link href="/hireme">
            <li className="text-[white] hover:text-[#dadeda]">Hire Me</li>
          </Link>
        </ul>
      </div>
      {/* Download CV button */}
      <div className="flex items-center px-[30px]">
        <button className="bg-[#fc9701] rounded-md p-[10px] text-sm text-[#000]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffa216] duration-300 ">
          Download CV
        </button>
      </div>
    </nav>
  );
}

export default Nav