document.getElementById('workoutForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const exercise = document.getElementById('exercise').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;
  const weight = document.getElementById('weight').value;
  
  // Create a new list item with the workout details
  const listItem = document.createElement('li');
  listItem.textContent = `${exercise} - ${sets} sets x ${reps} reps at ${weight} lbs`;

  // Append the new workout to the history list
  document.getElementById('historyList').appendChild(listItem);

  // Clear the form inputs for the next entry
  event.target.reset();
});
