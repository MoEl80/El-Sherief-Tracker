document.getElementById('workoutForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const exercise = document.getElementById('exercise').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;
  const weight = document.getElementById('weight').value;
  const date = document.getElementById('date').value;

  // Create a new list item for the workout
  const li = document.createElement('li');
  li.textContent = `${date} - ${exercise}: ${sets} sets x ${reps} reps @ ${weight} kg`;

  // Append the new list item to the history list
  document.getElementById('historyList').appendChild(li);

  // Clear the form
  document.getElementById('workoutForm').reset();
});
