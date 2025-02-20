console.log("app.js loaded");

function updateTotalWeight() {
  const barbellWeight = parseFloat(document.getElementById("barbellWeight").value) || 0;
  const plateWeight = parseFloat(document.getElementById("plateWeight").value) || 0;
  const totalWeight = (plateWeight * 2) + barbellWeight;
  console.log("Calculated total weight:", totalWeight); // Debug log
  document.getElementById("totalWeightDisplay").textContent = `Total Weight: ${totalWeight} kg`;
}

document.getElementById("barbellWeight").addEventListener("input", updateTotalWeight);
document.getElementById("barbellWeight").addEventListener("change", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("input", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("change", updateTotalWeight);

document.getElementById("workoutForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  const barbellWeight = document.getElementById("barbellWeight").value;
  const plateWeight = document.getElementById("plateWeight").value;
  const date = document.getElementById("date").value;

  // Calculate total weight for display in workout history
  const totalWeight = (plateWeight * 2) + parseFloat(barbellWeight);
  
  // Create a new list item for the workout
  const li = document.createElement("li");
  li.textContent = `${date} - ${exercise}: ${sets} sets x ${reps} reps @ Total Weight: ${totalWeight} kg`;

  // Append the new list item to the history list
  document.getElementById("historyList").appendChild(li);

  // Clear the form and reset total weight display
  document.getElementById("workoutForm").reset();
  document.getElementById("totalWeightDisplay").textContent = "Total Weight: 0 kg";
});
