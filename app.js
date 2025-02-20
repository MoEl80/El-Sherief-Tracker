document.getElementById("workoutForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const reps = document.getElementById("reps").value;
  const barbellWeight = document.getElementById("barbellWeight").value;
  const plateWeight = document.getElementById("plateWeight").value;
  const date = document.getElementById("date").value;

  // Calculate total weight
  const totalWeight = (plateWeight * 2) + parseFloat(barbellWeight);

  // Create a new list item for the workout
  const li = document.createElement("li");
  li.textContent = `${date} - ${exercise}: ${sets} sets x ${reps} reps @ Total Weight: ${totalWeight} kg`;

  // Append the new list item to the history list
  document.getElementById("historyList").appendChild(li);

  // Clear the form
  document.getElementById("workoutForm").reset();
});
