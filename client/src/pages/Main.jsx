import React from "react";
import Canvas from "../Components/Canvas";
import LeftMenu from "../Components/LeftMenu";

const Main = () => {
  return (
    <div className=" flex flex-1 gap-1">
      <Canvas />
      <LeftMenu />
    </div>
  );
};

export default Main;
