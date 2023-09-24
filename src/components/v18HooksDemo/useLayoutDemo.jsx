import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";

const UseLayoutDemo = () => {
    const [counter, setCounter] = useState(0);

    useLayoutEffect(() => {
       console.log("Hi");
       
    }, []);
    useEffect(() => {
        console.log("Hi2");
     }, []);
    return (
        <div>
            <p>Hello {counter}</p>
            <button onClick={(e) => setCounter(counter+1)}>Update Me!</button>
        </div>
    )
};

export default UseLayoutDemo;