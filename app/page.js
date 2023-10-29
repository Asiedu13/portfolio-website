"use client";
import { useState, useEffect } from "react";
import HomeHeader from "./component/Header/Home";
// import ProjectCard from "./component/Card/ProjectCard";
import ProfileCard from "./component/Card/ProfileCard";
import ProjectsData from "./data/projectsData.json";
import YellowButton from "./component/Button/YellowButton";
import Footer from "./component/Footer";

import dynamic from "next/dynamic";

// Client Components:
const ProjectCard = dynamic(() => import("./component/Card/ProjectCard"));

const HomePage = () => {
  const [projects, setProjects] = useState([...ProjectsData]);

  function filterProjects(filter) {
    if (filter !== "ALL") {
      const filteredProjects = ProjectsData.filter((project) =>
        project.type.includes(filter)
      );
      setProjects(filteredProjects);
    }
    else {
      setProjects( ProjectsData );
    }
  }

  return (
    <div className="w-[100vw]">
      <HomeHeader />
      {/* Skills display */}
      <section className="w-[100%] h-[600px] mb-[15rem] flex items-start relative bottom-[100px] md:bottom-[0px] md:flex-row md:w-[inherit] md:m-[0px]">
        <article className="mx-[auto] bg-[#2d2d2d] py-[1rem] w-[inherit] flex flex-col md:w-[1100px] md:w-max-[1400px] md:h-[450px] rounded-3xl relative md:bottom-[100px] border-gray-light border-4 md:flex md:flex-row-reverse">
          <div className="relative h-[350px] flex justify-end items-start md:top-[0px] md:w-[660px] md:h-[480px] md:items-end">
            <ProfileCard />
          </div>
          <div className="w-[90%] md:w-[90%] h-[inherit]">
            <header className="p-[1rem] md:p-[2rem] md:pl-[12.5rem]">
              <h2 className="text-3xl text-white">Skills</h2>
            </header>
            <table className="w-[100%] relative px-[50px] ml-[20px] md:ml-[50px] text-gray-light h-[70%] md:top-[0px]">
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
                  <td className="p-[.3rem]">React.JS</td>
                </tr>
                <tr className="">
                  <td className="p-[.3rem]">MongoDB</td>
                  <td>Analytical Skills</td>
                </tr>
                <tr className=""></tr>
                <tr className=""></tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {/* Projects Section */}
      <section className=" md:mt-[0px]">
        <header className="flex justify-center">
          <h2 className="text-5xl ">Projects</h2>
        </header>
        <div className=" p-[20px] flex justify-center">
          <button onClick={() => filterProjects("ALL")}>ALL</button>&nbsp; /
          &nbsp;
          <button onClick={() => filterProjects("FRONTEND")}>
            FRONTEND{" "}
          </button>{" "}
          &nbsp;/&nbsp;
          <button onClick={() => filterProjects("BACKEND")}>
            BACKEND{" "}
          </button>{" "}
          &nbsp;/&nbsp;
          <button onClick={() => filterProjects("FULLSTACK")}>FULLSTACK</button>
          &nbsp;
        </div>

        {/* Output */}
        <section className="w-[95%] md:w-[100%] flex items-center justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-rows-2 gap-8 h-5/6 w-4/5 md:w-[1250px] overflow-hidden">
            {projects ? (
              projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard
                    keyValue={project.id}
                    name={project.name}
                    img={project.img}
                    desc={project.desc}
                    liveLink={project.liveLink}
                    codeLink={project.codeLink}
                    tags={project.tags}
                  />
                </div>
              ))
            ) : (
              <p>No projects found</p>
            )}
          </div>
          <div className="flex justify-center mt-[20px]">
            <YellowButton content={"View More"} />
          </div>
        </section>
      </section>

      {/* Hire me banner */}
      <section className="flex flex-col justify-between py-[4rem] md:px-[6rem] h-fit items-center bg-yellow mt-[100px] md:flex-row ">
        <div>
          <h3 className="text-2xl text-gray-dark mb-[2px]">
            Want to work with me?
          </h3>
          <p className="font-normal pb-[20px] text-gray-dark text-sm md:py-[0px]">
            Always feel free to contact & hire me
          </p>
        </div>
        <div className="md:pr-[100px]">
          <button className="w-[220px] h-[60px] md:w-[220px] md:h-[80px] bg-gray-dark text-yellow rounded-md">
            Hire me
          </button>
        </div>
      </section>
      {/* Testimonials section */}
      <section className="h-[400px]"></section>

      <Footer />
    </div>
  );
};

export default HomePage;
