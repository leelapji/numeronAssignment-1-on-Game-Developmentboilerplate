// Iteration 2: Generate 2 random number and display it on the screen
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let time = 5;
let score = 0;
function generateNumbers() {
  let num_1 = Math.round(Math.random() * 100);
  let num_2 = Math.round(Math.random() * 100);
  time = 5
  number1.innerText = num_1;
  number2.innerText = num_2;
}
 
generateNumbers()
// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
