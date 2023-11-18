var startTime;
function updateLabel() {
  let elapsedTime = Date.now() - startTime;
  console.log("e" + elapsedTime);
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  console.log("es" + elapsedSeconds);
  elapsedTime -= elapsedSeconds * 1000;
  const elapsedDisplayedMilli = Math.floor(elapsedTime / 10);
  console.log("edm" + elapsedDisplayedMilli);

  document.getElementById("seconds").innerHTML = elapsedSeconds
    .toString()
    .padStart(2, "0");
  document.getElementById("milliseconds").innerHTML = elapsedDisplayedMilli
    .toString()
    .padStart(2, "0");
}

document.getElementById("timer-btn").addEventListener("click", function (e) {
  startTime = Date.now();
  console.log(startTime);
  setInterval(updateLabel, 10);
});
