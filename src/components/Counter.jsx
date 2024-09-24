import { useState } from "react";
import '../index.css'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const plus =()=>{
        setCounter(counter+1);
    }
    const minus =()=>{
        setCounter(counter-1);
    }


    return (
        <div>
            <div className="">Count: {counter}</div>
            <button onMouseLeave={minus} className="text-3xl">minus -</button>
            <button onClick={plus}>plus +</button>
        </div>
    );
};

export default Counter;
