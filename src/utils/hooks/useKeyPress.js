const { useState, useEffect } = require("react");

function useKeyPress(keycode) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    if (e.keyCode == keycode) {
      setKeyPressed(true);
    }
  }
  // function upHandler(e) {
  //   if (e.keyCode == keycode) {
  //     setKeyPressed(false);
  //   }
  // }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);
  }, []);

  return [keyPressed, setKeyPressed];
}

export default useKeyPress;
