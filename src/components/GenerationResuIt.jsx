import React from "react";

function GenerationResuIt({ generatedText, urlOfImage }) {
  return (
    <div className="w-full bg-white m-1   flex  rounded-3xl">
      <div className=" w-[70%] pt-5 p-2 pb-20 rounded-3xl text-blue-700 text-[25px]">
        {generatedText}
      </div>
      <div className=" w-[30%]">
        <img src={urlOfImage} alt="imageUrl" height={500} className="rounded-full p-[10px]" />
      </div>
    </div>
  );
}

export default GenerationResuIt;
