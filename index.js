// Purpose Planner
// This is not a complete application.
// This file shows examples of Unit 0 JavaScript skills that could be used to build features in my Purpose Planner app.
// The app helps users track tasks, habits, and progress.

// -----------------------------
// Values, Data Types, and Operations
// -----------------------------

// Pseudocode:
// Store the user's name.
// Store the number of completed tasks.
// Store the total number of tasks.
// Divide completed tasks by total tasks to calculate progress.

const userName = "Tenille";
let completedTasks = 3;
const totalTasks = 5;
const hasPremiumAccount = false;

let progress = completedTasks / totalTasks;
let progressPercent = progress * 100;

console.log("User:", userName);
console.log("Completed Tasks:", completedTasks);
console.log("Total Tasks:", totalTasks);
console.log("Progress Percent:", progressPercent + "%");
console.log("Premium Account:", hasPremiumAccount);

// -----------------------------
// Stringing Characters Together
// -----------------------------

// Pseudocode:
// Use the user's name and progress to create a personalized message.
// Display the message in the console.

const welcomeMessage = `Hey ${userName}, you have completed ${completedTasks} out of ${totalTasks} tasks today.`;

console.log(welcomeMessage);

// -----------------------------
// Control Structures and Logic
// -----------------------------

// Pseudocode:
// Check the user's progress.
// If all tasks are complete, show a celebration message.
// If at least half are complete, show encouragement.
// Otherwise, remind the user to keep going.

if (progress === 1) {
    console.log("Great job! You completed everything on your list today.");
} else if (progress >= 0.5) {
    console.log("You are making progress. Keep going!");
} else {
    console.log("You still have time to complete more tasks today.");
}

// -----------------------------
// Building Arrays
// -----------------------------

// Pseudocode:
// Create an array to store multiple tasks in one place.
// Each task represents something the user wants to complete.

const tasks = [
    "Pray",
    "Journal",
    "Study JavaScript",
    "Drink water",
    "Plan tomorrow"
];

console.log("Original Task List:", tasks);

// -----------------------------
// Using Arrays
// -----------------------------

// Pseudocode:
// Access the first task using its index.
// Add a new task to the array using push.
// Update one task by changing its value at a specific index.

console.log("First Task:", tasks[0]);

tasks.push("Review goals");
tasks[2] = "Complete LaunchCode assignment";

console.log("Updated Task List:", tasks);

// -----------------------------
// Working With Loops
// -----------------------------

// Pseudocode:
// Loop through the task list.
// Display each task with a number so the user can clearly see their list.

for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}