import React, { useState } from "react";

export default function Paint() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return <div id="area" onPointerMove={e=>{
let area=document.getElementById("area");
let areaWidth=area.innerWidth;

    let differX=(window.innerWidth-800)/2;
    let differY=window.innerHeight-100;
    console.log(areaWidth);

    setPosition({x:e.clientX-differX,y:e.clientY-100})
  }} style={{
    position:"relative",
    width:"800px",
    height:"70vh",
    margin:"auto",
    marginTop:"100px",
    border:"10px solid deepskyblue"
  }}>

    <div style={{
        position:"absolute",
        backgroundColor:"red",
        borderRadius:"50%",
        transform:`translate(${position.x}px,${position.y}px)`,
        left:0,
        top:0,
        width:"30px",
        height:"30px"
    }}></div>

  </div>;
}
