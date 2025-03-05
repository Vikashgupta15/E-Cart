import React from "react";
import { useState } from "react";
import CoustomiseAdd from "./CoustomiseAdd";

function ToggleAdminButtton({value,setvalue}) {
//   const [value, setvalue] = useState("false");
//   console.log(value);

  return (
    <div>
        
      <input
        type="checkbox"
        className="toggle"
        value={value}
        onChange={() => setvalue(value == "false" ? "true" : "false")}
      />
    </div>
  );
}

export default ToggleAdminButtton;
