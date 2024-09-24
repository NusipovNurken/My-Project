import React from "react";
import fo from "../../public/images/bogner-james-bond-07.jpg";
const Block = () => {
  return (
    <div className="w-full h-[300px] bg-yellow-500  flex   justify-evenly items-center pl-10 ">
      <img src={fo} width={320} height={320} className="rounded-2xl" alt="fo" />
      <div className="space-y-3 p-20">
        <h1 className="text-xl font-bold ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          tempora?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          aperiam.
        </p>
        <button className="w-[100px] h-[40px] bg-blue-700 rounded-s-2xl ">
          home
        </button>
      </div>
    </div>
  );
};

export default Block;
