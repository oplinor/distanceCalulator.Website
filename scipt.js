
function calculateFare() {
  let km = parseFloat(document.getElementById("distance").value);
  let total;

  if (isNaN(km) || km < 0) {
    document.getElementById("result").textContent = "Please enter a valid distance.";
    return;
  }

  if (km <= 1) {
    total = 3000;
  } else {
    total = 3000 + (km - 1) * 1200;
  }

  document.getElementById("result").textContent = "Total: " + total.toFixed(0) + " riel";
}
