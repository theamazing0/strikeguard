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
  document.getElementById("time-elapsed").classList.add("visually-hidden");
  document.getElementById("distance-km").classList.remove("visually-hidden");
  document.getElementById("distancekmlabel").innerHTML = kmDistance.toFixed(2);
  if (kmDistance < 2) {
    document.getElementById("danger").innerHTML =
      "High risk of direct strikes, ground current, and side flashes.";
    document.getElementById("action").innerHTML =
      "Seek immediate shelter in a sturdy building or a metal-topped vehicle.";
  } else if (kmDistance < 5) {
    document.getElementById("danger").innerHTML =
      "Decreased but still significant risk of indirect strikes and electrical surges.";
    document.getElementById("action").innerHTML =
      "Move indoors and avoid using corded electronics and plumbing.";
  } else if (kmDistance < 8) {
    document.getElementById("danger").innerHTML =
      "Lower immediate risk, but still a potential for sudden changes in storm intensity.";
    document.getElementById("action").innerHTML =
      "Stay alert and ready to seek shelter, and monitor the storm's progress.";
  } else {
    document.getElementById("danger").innerHTML =
      "Minimal direct risk, but important to be aware of storm movement.";
    document.getElementById("action").innerHTML =
      "Continue outdoor activities with caution, but have a plan to find shelter quickly if needed.";
  }
});

document.getElementById("repeat-btn").addEventListener("click", function (e) {
  document.getElementById("retry").classList.add("visually-hidden");
  document.getElementById("lightning").classList.remove("visually-hidden");
  document.getElementById("time-elapsed").classList.remove("visually-hidden");
  document.getElementById("distance-km").classList.add("visually-hidden");
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("milliseconds").innerHTML = "00";
});
