// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});

// To-Do List functionality (as plain text below input)
document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskDisplay = document.createElement('p');
  taskDisplay.textContent = taskText;

  document.getElementById('taskDisplayArea').appendChild(taskDisplay);
  taskInput.value = '';
});
