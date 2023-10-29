import React from "react";
import Link from "next/link";
import Image from "next/image";


const ProjectCard = ({name, desc, liveLink, codeLink, img, tags, keyValue}) => {
  return (
    <div className="wrapper w-[inherit]" key={keyValue}>
      <div className="card">
        <Image src={img} width={400} height={300} alt={ name} />
        <div className="info">
          <h1>{name}</h1>
          <p>{desc}</p>
          <a target="_blank" href={liveLink}>
            <button>Live site</button>
          </a>
          <a target="_blank" href={codeLink}>
            <button>View code</button>
          </a>
          <div className="mt-[10px]">{tags ? tags.map((tag, index) => <span key={index}>#{tag}</span>) : " "}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
