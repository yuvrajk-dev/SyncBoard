import Canvas from "../Components/Canvas";
import LeftMenu from "../Components/LeftMenu";

const CanvasContainer = () => {
  return (
    <div className=" flex flex-1 gap-1">
      <Canvas />
      <LeftMenu />
    </div>
  );
};

export default CanvasContainer;
