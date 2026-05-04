// Purpose Planner
// This is a simple example of how my app could track tasks and show progress.

// Values, Data Types, and Operations
// Store basic user info and calculate progress
const userName = "Tenille";
let completedTasks = 2;
const totalTasks = 4;
let progress = completedTasks / totalTasks;

console.log("User:", userName);
console.log("Progress:", progress);

//Stringing Characters Together
// Create a message for the user
const message = "Hey " + userName + ", let's stay on track today!";
console.log(message);

// Control Structures and Logic
// Check progress and show a message
if (progress === 1) {
    console.log("Great job! You've completed all your tasks!");
} else if (progress >= 0.5) {
    console.log("You're making progress. Keep going!");
} else {
    console.log("You've got some work to do. Stay focused.");

}

// Building Arrays
// Create a list of tasks
const tasks = ["Pray", "Journal", "Study JavaScript", "Drink water", "Plan tomorrow"];
console.log(tasks);

// Using Arrays
// Access and update tasks
console.log("First task:", tasks[0]);

tasks.push("Review goals");
console.log("Updated tasks:", tasks);


// Working With Loops
// Loop through tasks and show each one
for (const task of tasks) {
  console.log("Task:", task);
}