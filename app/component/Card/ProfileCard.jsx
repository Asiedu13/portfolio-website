import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="wrapper">
      <div className="card ">
        {/* <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> */}
        <Image
          src={"/media/imgs/profile_img.jpeg"}
          width={500}
          height={500}
          alt="Picture of the author"
          className="border-[15px] border-gray-light border-solid"
        />

        <div className="info">
          <h1>Prince Asiedu</h1>
          <p>
            Lorem Ipsum is simply dummy text from the printing and typeseting
            industry
          </p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
