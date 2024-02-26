## NodeJS/TypeScript CLI Quiz App

### Cloud Applied Project Generative AI Engineer (Batch 53 Quarter 1)

## User Instructions

### Cloning and Running the App

1. Clone the repository:

```
git clone https://github.com/<username>/quiz-app.git
```

1. Navigate into the project directory:

```
cd quiz-app
```

1. Install dependencies:

```
npm install
```

1. Run the app:

```
npm start
```

### Taking the Quiz

1. The quiz will start automatically when you run the app.
    
2. You will be presented with a multiple choice question and a list of possible answers.
    
3. Use the up/down arrow keys to select your answer and press enter.
    
4. You will be told if your answer was correct or incorrect.
    
5. After answering 5 questions, your final score will be displayed.
    

## Developer Documentation

### index.ts

This is the main entry point for the application. It does the following:

- Imports the `inquirer`, `chalk` and `questions` modules
- Defines the `startQuiz` async function
- Calls `startQuiz` to begin the quiz

The `startQuiz` function:

- Prints a welcome message
- Initializes the score to 0
- Shuffles the questions
- Loops through 5 questions
    - Uses inquirer to prompt the user
    - Checks if answer is correct and updates score
    - Prints feedback
- After loop, prints final score

### questions.ts

This module exports a `questions` array that contains the quiz questions.

Each question is an object with:

- `text` - The question text
- `options` - An array of possible answers
- `answer` - The index of the correct answer

The questions are imported into `index.ts` to be used in the quiz.

### Additional Details

- `chalk` is used to color and style the terminal output.
    
- `inquirer` displays the interactive prompts and handles the user input.
    
- Questions are shuffled so they appear in random order.