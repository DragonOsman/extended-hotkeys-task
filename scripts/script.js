"use strict";

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener("keydown", event => {
    // add key to set
    pressed.add(event.code);

    // check if all key codes are in set (all needed keys pressed)
    for (const code of codes) {
      if (!pressed.has(code)) {
        // no, so return for now until we have all keys
        return;
      }
    }

    // now we have all keys, so run the function passed in
    func();
  });

  document.addEventListener("keyup", () => {
    for (const code of codes) {
      pressed.delete(code);
    }
  });
}

runOnKeys(() => alert("hello"), "KeyQ", "KeyW");
