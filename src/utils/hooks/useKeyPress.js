const { useState, useEffect } = require("react");

function useKeyPress(keycode) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    e.preventDefault();
    if (e.keyCode == keycode) {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);
  }, []);

  return [keyPressed, setKeyPressed];
}

export default useKeyPress;
