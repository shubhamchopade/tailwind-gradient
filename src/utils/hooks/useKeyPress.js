const { useState, useEffect } = require("react");

function useKeyPress(keycode) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    e.preventDefault();
    // if (e.keyCode == keycode) {
    //   setKeyPressed(true);
    // }
  }
  function upHandler(e) {
    e.preventDefault();
    if (e.keyCode == keycode) {
      setKeyPressed((prev) => !prev);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}

export default useKeyPress;
