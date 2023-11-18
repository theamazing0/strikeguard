var startTime;
function updateLabel() {
  let elapsedTime = Date.now() - startTime;
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  elapsedTime -= elapsedSeconds * 1000;
  const elapsedDisplayedMilli = Math.floor(elapsedTime / 10);

  document.getElementById("seconds").innerHTML = elapsedSeconds
    .toString()
    .padStart(2, "0");
  document.getElementById("milliseconds").innerHTML = elapsedDisplayedMilli
    .toString()
    .padStart(2, "0");
}

document
  .getElementById("lightning-btn")
  .addEventListener("click", function (e) {
    document.getElementById("lightning").classList.add("visually-hidden");
    document.getElementById("thunder").classList.remove("visually-hidden");
    startTime = Date.now();
    stopwatchInterval = setInterval(updateLabel, 10);
  });

document.getElementById("thunder-btn").addEventListener("click", function (e) {
  clearInterval(stopwatchInterval);
  document.getElementById("thunder").classList.add("visually-hidden");
  document.getElementById("retry").classList.remove("visually-hidden");
  const kmDistance = (Date.now() - startTime) / 3000;
  startTime = 0;
  console.log(kmDistance);
});

document.getElementById("repeat-btn").addEventListener("click", function (e) {
  document.getElementById("retry").classList.add("visually-hidden");
  document.getElementById("lightning").classList.remove("visually-hidden");
  document.getElementById("time-elapsed").classList.add("visually-hidden")
  document.getElem
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("milliseconds").innerHTML = "00";
});
