import "../index.css";
import food from "../../public/images/food.png";
const Infoblock = () => {
  return (
    <div className="w-full pt-10  bg-emerald-300 flex flex-col md:flex-row justify-evenly items-center pl-10 pr-10 ">
      <div className="min-w-[300px] max-w-[500px] pt-20">
        <div className="space-y-3">
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            ea!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eum.
          </p>
          <button className="w-[150px] h-10 rounded-2xl bg-green-500">
            Generate
          </button>
        </div>
      </div>
      <div>
        <img
          src={food}
          alt="food"
          width={500}
          height={500}
          className="w-[300px] md:w-[500px]"
        />
      </div>
    </div>
  );
};
export default Infoblock;
