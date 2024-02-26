/*
Quiz System
The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.

Create a GitHub repository for the project and submit its URL in the project submission form.
*/

import inquirer from 'inquirer';
import chalk from 'chalk';
import { questions } from './questions.js';

// Start the quiz
async function startQuiz() {
    console.log(chalk.blue('Welcome to the quiz!'));

    let score = 0;

    // Shuffle the questions array
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // Select the first 5 questions
    const selectedQuestions = shuffledQuestions.slice(0, 5);

    for (const question of selectedQuestions) {
        const { text, options, answer } = question;

        const userAnswer = await inquirer.prompt([
            {
                name: 'option',
                type: 'list',
                message: chalk.yellowBright(text),
                choices: options
            }
        ]);

        if (userAnswer.option === options[answer]) {
            score++;
            console.log(chalk.bgGreenBright('Correct!'));
        } else {
            console.log(chalk.bgRedBright('Incorrect!'));
        }
    }

    console.log(chalk.magentaBright(`You scored ${score} out of ${selectedQuestions.length}`));
}

// Start the quiz
startQuiz();
