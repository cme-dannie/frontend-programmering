function runCallbackHell() {
  console.log("Before calling setTimeout for the first time");
  setTimeout(() => {
    console.log("Before calling setTimeout for the second time");
    setTimeout(() => {
      console.log("Before calling setTimeout for the third and last time");
      setTimeout(() => {
        console.log("Can you see me all the way in here?");
      }, 3000);
    }, 2000);
  }, 1000);
}

runCallbackHell();
