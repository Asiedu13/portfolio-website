import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = ({name, desc, liveLink, codeLink, img}) => {
  return (
    <div className="wrapper">
      <div className="card">
        <Image src={img} width={400} height={300} />
        <div className="info">
          <h1>{name}</h1>
          <p>
           {desc}
          </p>
          <Link href={liveLink}>
            <button>Live site</button>
          </Link>
          <Link href={codeLink}>
            <button>View code</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;