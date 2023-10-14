import React from 'react'
import HomeHeader from "./component/Header/Home";
import profilePic from "../public/media/imgs/profile_img.jpeg";

const HomePage = () => {
  return (
    <div>
      <header>
        <div>
          <nav>
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Achievements</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default HomePage