// Log a message to confirm the script is loaded
console.log("app.js loaded");

// Function to calculate and update total weight dynamically
function updateTotalWeight() {
  // Get numeric values from inputs (or 0 if empty)
  const barbellWeight = parseFloat(document.getElementById("barbellWeight").value) || 0;
  const plateWeight = parseFloat(document.getElementById("plateWeight").value) || 0;
  
  // Calculate total weight: barbellWeight + (2 * plateWeight)
  const totalWeight = (plateWeight * 2) + barbellWeight;
  
  // Update the dynamic display element's text
  document.getElementById("totalWeightDisplay").textContent = `Total Weight: ${totalWeight} kg`;
}

// Attach event listeners to the weight inputs so the total updates immediately
document.getElementById("barbellWeight").addEventListener("input", updateTotalWeight);
document.getElementById("barbellWeight").addEventListener("change", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("input", updateTotalWeight);
document.getElementById("plateWeight").addEventListener("change", updateTotalWeight);

// Handle the form submission to add the workout details to the history list
document.getElementById("workoutForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Gather values from the form
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  const barbellWeightInput = document.getElementById("barbellWeight").value;
  const plateWeightInput = document.getElementById("plateWeight").value;
  const date = document.getElementById("date").value;
  
  // Calculate total weight for the workout entry
  const totalWeight = (parseFloat(plateWeightInput) * 2) + parseFloat(barbellWeightInput);
  
  // Create a new list item with the workout details
  const li = document.createElement("li");
  li.textContent = `${date} - ${exercise}: ${sets} sets x ${reps} reps @ Total Weight: ${totalWeight} kg`;
  
  // Append the new workout entry to the history list
  document.getElementById("historyList").appendChild(li);
  
  // Reset the form and the dynamic display
  document.getElementById("workoutForm").reset();
  document.getElementById("totalWeightDisplay").textContent = "Total Weight: 0 kg";
});
