import React, {useEffect, useState } from "react";
import ToggleAdminButtton from "./ToggleAdminButtton";

const CoustomiseAdd=({value})=> {
    // console.log(value);
    // const [visible, setVisible] = useState(false);

    // useEffect(() => {
    //     setVisible(value); // Show/hide button based on the toggle state
    //   }, [value]);
   
  return (
    <div className=" justify-center items-center">
        <button className={`px-3  items-center justify-center font-bold text-xl bg-teal-700 rounded-md -mt-10 ${value=="false" ? "hidden" :""}`}>+</button>
    </div>
  
  );
}

export default CoustomiseAdd;
