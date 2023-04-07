import React, { useRef } from "react";

const Box = () => {
  const elementRef = useRef();
  
  const handleClickRef = () => {
    const div = elementRef.current
    console.log('Measurements:', div.getBoundingClientRect())
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleClickRef}>Measure</button>
    </div>
  );
}

export default Box;
