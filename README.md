# javascript-typescript-piaic-todo-list

# Command-Line Task Manager with Inquirer

This is a simple command-line task manager implemented in JavaScript using the `inquirer` library for user interaction. The task manager allows users to add tasks, delete tasks, and view their to-do list. It provides a user-friendly interface for managing tasks via the command line.

## How to Use

1. Clone this repository to your local machine.

2. Ensure you have Node.js and npm installed.

3. Install the required dependencies using the following command:

   ```bash
   npm install
4. Run the task manager using the following command:
      ```bash
   node todo.js
6. You will be prompted to select an operation:
   * Add Task: To add a new task.
   * Delete Task: To delete a task.
   * Exit: To exit the task manager.
7. If you select "Add Task," you can enter a description for the task, and it will be added to your to-do list.
8. If you select "Delete Task," you can choose a task to delete from your to-do list.
9. You can continue to add or delete tasks until you choose to exit.
10. When you exit, the task manager will display your to-do list.

## Code Structure
The code uses the <b>inquirer</b> library to create a user-friendly interface for managing tasks.
* An array named taskArray is used to store tasks.
* The main logic is contained in the userTask function, which is executed in a loop until the user chooses to exit.
* Tasks are added, deleted, and displayed in the console, each with a corresponding message in different colors for better user experience.

## Author
Nazneen Akram
