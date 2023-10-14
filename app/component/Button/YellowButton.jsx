import React from 'react'

const YellowButton = ({content}) => {
  return (
    <button className="bg-[#e5b970] text-[#2d2d2d] p-[15px] h-[50px] rounded-full w-[170px] text-sm mr-[15px] transition-all hover:bg-[#ffbe56]">
      {content}
    </button>
  );
}

export default YellowButton