import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  function colorHandler (childColor){
    const randomColor = getRandomColor();
    setColor(randomColor)
    setChildColor(childColor)
  }


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={colorHandler} color={childColor} />
      <Child onChangeColor={colorHandler} color={childColor} />
    </div>
  );
}

export default Parent;
