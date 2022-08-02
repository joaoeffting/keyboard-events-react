import { useRef } from "react";
import { Player } from "./Player";

const CONTAINER_INFO = {
  width: 500,
  height: 500,
};

function App() {
  return (
    <div
      className="App"
      style={{
        width: `${CONTAINER_INFO.width}px`,
        height: `${CONTAINER_INFO.height}px`,
        border: "1px solid red",
      }}
    >
      <Player containerInfo={CONTAINER_INFO} />
    </div>
  );
}

export default App;
