/*
You will be prompted to select an operation
Add Task: To add a new task.
Delete Task: To delete a task.
Exit: To exit the task manager.

If you select "Add Task," you can enter a description for the task, and it will be added to your to-do list.
If you select "Delete Task," you can choose a task to delete from your to-do list.
You can continue to add or delete tasks until you choose to exit.
When you exit, the task manager will display your to-do list.
*/

import inquirer from 'inquirer';
import chalk from 'chalk';

const taskArray = [];

const userTask = async () => {
  while (true) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'operator',
        message: 'Select the operation you want to perform:',
        choices: ['Add Task', 'Delete Task', 'Exit'],
      },
    ]);

    if (answer.operator === 'Exit') {
      console.log('Goodbye!');
      
      taskArray.forEach((task, index) => {
        if (taskArray.length===0){console.log(chalk.magenta(`No tasks have been added`))}
        else{
            console.log(`Task ${index + 1}`);
            console.log(chalk.blue(`${task}`));        
        }        
  });
      break;
    } else if (answer.operator === 'Add Task') {
      const taskPrompt = await inquirer.prompt([
        {
          type: 'input',
          name: 'task',
          message: 'Enter the task:',
        },
      ]);
      const task = taskPrompt.task;
      taskArray.push(task);
      console.log(chalk.green(`Task "${task}" has been added to your TO DO List`));
    } else if (answer.operator === 'Delete Task') {
      if (taskArray.length === 0) {
        console.log(chalk.bgWhite('Task list is empty.'));
      } else {
        const deletePrompt = await inquirer.prompt([
          {
            type: 'list',
            name: 'taskToDelete',
            message: 'Select the task to delete:',
            choices: taskArray,
          },
        ]);
        const taskToDelete = deletePrompt.taskToDelete;
        taskArray.splice(taskArray.indexOf(taskToDelete), 1);
        console.log(chalk.redBright(`Task "${taskToDelete}" deleted from your TO DO List`));
      }
    }
  }
};

userTask();
