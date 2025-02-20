// Quick check to confirm the script loads
console.log("app.js loaded");

// Calculate and update the total weight display
function updateTotalWeight() {
  const barbellWeight = parseFloat(document.getElementById("barbellWeight").value) || 0;
  const plateWeight = parseFloat(document.getElementById("plateWeight").value) || 0;
  const totalWeight = barbellWeight + (plateWeight * 2);

  console.log("Calculated total weight:", totalWeight); // Debugging log
  document.getElementById("totalWeightDisplay").textContent = `Total Weight: ${totalWeight} kg`;
}

// Listen for changes in the barbell/plate inputs
document.getElementById("barbellWeight").addEventListener("input", updateTotalWeight);
document.getElementById("barbellWeight").addEventListener("change", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("input", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("change", updateTotalWeight);

// When the form is submitted
document.getElementById("workoutForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get all values
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  const barbellWeightInput = parseFloat(document.getElementById("barbellWeight").value) || 0;
  const plateWeightInput = parseFloat(document.getElementById("plateWeight").value) || 0;
  const date = document.getElementById("date").value;

  // Calculate total weight
  const totalWeight = barbellWeightInput + (plateWeightInput * 2);

  // Create a new list item for the workout
  const li = document.createElement("li");
  li.textContent = `${date} - ${exercise}: ${sets} sets x ${reps} reps @ Total Weight: ${totalWeight} kg`;

  // Append to history
  document.getElementById("historyList").appendChild(li);

  // Reset the form
  document.getElementById("workoutForm").reset();

  // Reset the total weight display to 0
  document.getElementById("totalWeightDisplay").textContent = "Total Weight: 0 kg";
});
