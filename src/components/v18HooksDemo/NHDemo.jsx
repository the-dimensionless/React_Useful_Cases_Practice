import { useEffect, useState } from "react";
import EventCapture from "./EventCaptureDemo";
import UseLayoutDemo from "./useLayoutDemo";

const NHDemo = () => {
  const [noOfChocs, setNoOfChocs] = useState(1);
  const [chocPrice, setChocPrice] = useState(1);

  const addChoc = () => {
    setChocPrice(num2 => num2 + 1);
  }

  useEffect(() => {
    setNoOfChocs(noOfChocs => noOfChocs+1);
    setChocPrice(4);
  }, [setChocPrice]);

    return (
       <div style={{padding: '10px'}}>
         {/* <p>Hi Hello</p> */}
         {/* <EventCapture /> */}
         {/* <UseLayoutDemo /> */}

        <div>
          Chocos: {noOfChocs}
          <p>Price: {chocPrice} </p>

          <button onClick={addChoc} >Add Chocs</button>
        </div>

       </div>
    )
};

export default NHDemo;