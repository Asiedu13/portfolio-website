"use client";
import { useState, useEffect } from "react";
import HomeHeader from "./component/Header/Home";
import ProjectCard from "./component/Card/ProjectCard";
import ProfileCard from "./component/Card/ProfileCard";
import ProjectsData from "./data/projectsData.json";
import YellowButton from "./component/Button/YellowButton";
import Footer from "./component/Footer";

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
        <section>
          <div className="grid grid-rows-2 grid-flow-col gap-8 h-[800px] w-[1250px] mx-auto overflow-hidden">
            {projects.map((project) => (
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
            ))}
          </div>
          <div className="flex justify-center">
            <YellowButton content={"View More"} />
          </div>
        </section>
      </section>

      {/* Hire me banner */}
      <section className="flex justify-between py-[1rem] px-[5rem] h-[200px] items-center bg-yellow mt-[100px] ">
        <div>
          <h3 className="text-2xl text-gray-dark mb-[25px]">
            Want to work with me?
          </h3>
          <p className="font-normal text-gray-dark text-sm">
            Always feel free to contact & hire me
          </p>
        </div>
        <div className="pr-[100px]">
          <button className="w-[220px] h-[80px] bg-gray-dark text-yellow rounded-md">
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
