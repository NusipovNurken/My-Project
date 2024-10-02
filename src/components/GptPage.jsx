import Choose from "./Choose";
import Options from "./Options";

const GptPage = () => {
  return (
    <div className="  pt-[80px] flex flex-col items-center text-white">
      <div className="flex justify-center font-bold 3">Food AI</div>
      <p className=" flex justify-center max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        recusandae quae molestiae corporis id provident inventore blanditiis in
        quibusdam illo.
      </p>
      <Choose />
    </div>
  );
};

export default GptPage;
