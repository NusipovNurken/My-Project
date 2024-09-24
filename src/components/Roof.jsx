import React from "react";
import Roo from "../../public/images/Roo.png";
const Roof = () => {
  return (
    <div className="w-[100%] min-h-[300px] bg-slate-400 flex flex-col items-center  ">
      <div className="flex justify-evenly w-[100%]">
        <img src={Roo} alt="Roo" width={300} height={300} />
        <div className="flex items-center w-[300px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          quae!
        </div>
      </div>

      <button className="w-[150px] h-[40px] bg-yellow-400 rounded-2xl">
        button
      </button>
    </div>
  );
};

export default Roof;
