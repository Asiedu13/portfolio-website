import React from "react";
import Image from "next/image";
import HomeHeader from "./component/Header/Home";
import ProjectCard from "./component/Card/ProjectCard";
import ProfileCard from "./component/Card/ProfileCard";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      {/* Skills display */}
      <section className="flex">
        <article className=" mx-[auto] bg-[#2d2d2d] w-[1100px] w-max-[1400px] h-[450px] absolute rounded-3xl relative bottom-[100px] border-gray-light border-4 flex">
          <div className="w-[80%] h-[inherit]">
            <header className="p-[2rem] pl-[12.5rem]">
              <h2 className="text-3xl text-white">Skills</h2>
            </header>
            <table className=" w-[90%] p-[10px] ml-[50px] text-gray-light h-[70%]">
              <tbody>
                <tr className="p-[1rem]">
                  <td className="p-[.3rem]">Javascript</td>
                  <td className="p-[.3rem]">SASS</td>
                  <td className="p-[.3rem]">Slack</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">HTML</td>
                  <td className="p-[.3rem]">Django</td>
                  <td className="p-[.3rem]">Robotics</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">CSS</td>
                  <td className="p-[.3rem]">Strategic planning</td>
                  <td className="p-[.3rem]">Micropython</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">Python</td>
                  <td>Resource management</td>
                  <td>Chess</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">CSS</td>
                  <td>Strategic planning</td>
                  <td>Micropython</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">CSS</td>
                  <td>PHP</td>
                  <td>Web design</td>
                </tr>
                <tr className="">
                  <td>Next.JS</td>
                  <td>Project Management</td>
                  <td>Laravel</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">SQL</td>
                  <td>Leadership</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">MongoDB</td>
                  <td>Analytical Skills</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">React.JS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative left-[100px] w-[660px] h-[480px] flex justify-end items-end ">
            <ProfileCard />
          </div>
        </article>
      </section>

      {/* Projects Section */}
      <section>
        <header className="flex justify-center  ">
          <h2 className="text-5xl ">Projects</h2>
        </header>
        <div className=" p-[20px] flex justify-center">
          <button>ALL</button>&nbsp; / &nbsp;
          <button>FRONTEND </button> &nbsp;/&nbsp;
          <button>BACKEND </button> &nbsp;/&nbsp;
          <button>FULLSTACK</button>&nbsp;
        </div>

        {/* Output */}
        <section className="grid grid-rows-2 grid-flow-col gap-4 px-[100px] h-[600px] w-[1200px] border-cyan border-2 mx-auto">
          <article className="w-[280px] h-[260px] border-2 border-cyan bg-header-background hover:border-4 hover:border-[#efb970] transition-all bg-contain ">
            <h2>Project 1</h2>
          </article>

          <article className="w-[280px] h-[260px] border-2 border-cyan ">
            <h2>Project 1</h2>
          </article>

          <article className="w-[280px] h-[260px] border-2 border-cyan ">
            <h2>Project 1</h2>
          </article>
          <article className="w-[280px] h-[260px] border-2 border-cyan ">
            <h2>Project 1</h2>
          </article>
          <article className="w-[280px] h-[260px] border-2 border-cyan ">
            <h2>Project 1</h2>
          </article>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
