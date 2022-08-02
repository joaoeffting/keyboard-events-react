import { useRef, useEffect } from "react";

const KEYS = {
  UP: ["ArrowUp", "w", "W"],
  DOWN: ["ArrowDown", "s", "S"],
  LEFT: ["ArrowLeft", "a", "A"],
  RIGHT: ["ArrowRight", "d", "D"],
};

const NUMBER_OF_JUMPS = 20;

const PLAYER_DIMENSIONS = {
  width: 20,
  height: 20,
};

export const Player = ({ containerInfo }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const leftOffLimit = containerInfo.width - PLAYER_DIMENSIONS.width;
  const bottomOffLimit =
    containerInfo.height - PLAYER_DIMENSIONS.height - NUMBER_OF_JUMPS;

  const handleKeyDown = (e) => {
    if (playerRef.current) {
      if (KEYS.UP.includes(e.key)) {
        const topValue = parseInt(playerRef.current.style.top);
        if (topValue === 0) {
          return;
        }
        playerRef.current.style.top = topValue - NUMBER_OF_JUMPS + "px";
        return;
      }

      if (KEYS.DOWN.includes(e.key)) {
        const topValue = parseInt(playerRef.current.style.top);
        if (topValue > bottomOffLimit) {
          return;
        }
        playerRef.current.style.top = topValue + NUMBER_OF_JUMPS + "px";
        return;
      }

      if (KEYS.LEFT.includes(e.key)) {
        const leftValue = parseInt(playerRef.current.style.left);
        if (leftValue === 0) {
          return;
        }
        playerRef.current.style.left = leftValue - NUMBER_OF_JUMPS + "px";
        return;
      }

      if (KEYS.RIGHT.includes(e.key)) {
        const leftValue = parseInt(playerRef.current.style.left);
        if (leftValue >= leftOffLimit) {
          return;
        }
        playerRef.current.style.left = leftValue + NUMBER_OF_JUMPS + "px";
        return;
      }
    }
  };
  return (
    <div
      ref={playerRef}
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: `${PLAYER_DIMENSIONS.width}px`,
        height: `${PLAYER_DIMENSIONS.height}px`,
        border: "1px solid black",
      }}
    ></div>
  );
};
