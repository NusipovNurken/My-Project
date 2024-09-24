import { useEffect, useState } from "react";

const Options = ({ setTextFromOptionsComponent }) => {
    
    const [timeFood, setTimeFood] = useState("");
    const [timeMeal, setTimeMeal] = useState("");
    const [timeDinner, setTimeDinner] = useState("");
    const [timeSnack, setTimeSnack] = useState("");
    const [timeBreakfast, setTimeBreakfast] = useState("");
    const [timeLunch, setTimeLunch] = useState("");
  

  const changeTextOptions = () => {
    setTextFromOptionsComponent(
      `${timeFood}, ${timeMeal}, ${timeDinner}, ${timeBreakfast}, ${timeSnack}, ${timeLunch}`
    );
  };

  useEffect(() => {
    changeTextOptions();
  }, [timeFood, timeMeal, timeDinner, timeSnack, timeBreakfast, timeLunch]);

  return (
    <div className="w-full flex flex-col items-center justify-center  h-[300px] bg-gray-400  ">
      <div className="text-center mb-10  text-black">
        <h3 className="font-bold"> Options</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="flex space-x-20">
        <div className="flex flex-col gap-5 text-black ">
          <div className="flex flex-col">
            <label for="dish">What dish you want to cook?</label>
            <select
              name="dish"
              id="dish"
              onChange={(e) => setTimeFood(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2 pl-10"
            >
              <option value="завтрак">завтрак</option>
              <option value="обед">обед</option>
              <option value="ужин">ужин</option>
              <option value="перекус">перекус</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label for="cuisine">World cuisine </label>
            <select
              name="cuisine"
              id="cuisine"
              onChange={(e) => setTimeMeal(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2 pl-5"
            >
              <option value="Европейская кухня">Европейская кухня</option>
              <option value="Азиатская кухня">Азиатская кухня</option>
              <option value="Восточная кухня">Восточная кухня</option>
              <option value="Италянская кухня">Италянская кухня</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-black">
          <div className="flex flex-col">
            <label for="TimeDinner">Are you a good cook?</label>
            <select
              name="TimeDinner"
              id="TimeDinner"
              onChange={(e) => setTimeDinner(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2 pl-10"
            >
              <option value="Новичок">Новичок</option>
              <option value="Повар">Повар</option>
              <option value="Су-шеф">Су-шеф</option>
              <option value="Шеф повар">Шеф повар</option>
            </select>
          </div>
          <div className="text-black flex flex-col">
            <label for="timeSnack">Are you a good cook?</label>
            <select
              name="timeSnack"
              id="timeSnack"            >
              <option value="Medium rare-46 до 50">Medium rare </option>
              <option value="Medium- от 52 до 57">Medium </option>
              <option value="Medium Well-от 60 до 65">Medium Well</option>
              <option value="Well Done - от 65 до 70">Medium Done</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-black">
            <h5 className="pl-10">End of dish</h5>
            <input
              onChange={(e) => setTimeLunch(e.target.value)}
              type="text"

              onChange={(e) => setTimeSnack(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2 pl-5"
              className="w-[200px] h-[35px] rounded-2xl  border-black border-2 pl-4"
              placeholder="select type of dish"
            />
          </div>
          <div className="text-black ">
            <h5 className="pl-10">Ban ingredients</h5>
            <input
              onChange={(e) => setTimeBreakfast(e.target.value)}
              type="text"
              className="w-[200px] h-[35px] rounded-2xl border-black border-2 pl-4"
              placeholder="enter banned ingredients"
            />
          </div>
        </div>
      </div>

      {/* <button className="w-[300px] h-[40px] bg-green-600 rounded-2xl mt-3">
        Generate Dish {timeFood}
      </button> */}
    </div>
  );
};
export default Options;
