interface Question {
    text: string;
    options: string[];
    answer: number;
}

export const questions: Question[] = [
    {
        text: "What does TypeScript offer over JavaScript?",
        options: [
            "Optional static typing",
            "Automatic memory management",
            "Built-in testing framework",
            "Native mobile app development"
        ],
        answer: 0
    },
    {
        text: "Which keyword is used to declare a variable in TypeScript?",
        options: [
            "var",
            "let",
            "const",
            "def"
        ],
        answer: 2
    },
    {
        text: "What is the purpose of the 'any' type in TypeScript?",
        options: [
            "To represent a value that could be of any type",
            "To represent an undefined value",
            "To declare a constant value",
            "To represent a boolean value"
        ],
        answer: 0
    },
    {
        text: "What is the difference between 'let' and 'const' in TypeScript?",
        options: [
            "They are the same",
            "'let' can be reassigned, 'const' cannot",
            "'const' can be reassigned, 'let' cannot",
            "'let' is for numbers, 'const' is for strings"
        ],
        answer: 1
    },
    {
        text: "Which of the following is a valid TypeScript variable name?",
        options: [
            "_myVariable",
            "123variable",
            "my variable",
            "variable!"
        ],
        answer: 0
    },
    {
        text: "What is the syntax for defining a function in TypeScript?",
        options: [
            "function myFunction() {}",
            "def myFunction() {}",
            "void myFunction() {}",
            "func myFunction() {}"
        ],
        answer: 0
    },
    {
        text: "What does the 'interface' keyword do in TypeScript?",
        options: [
            "Declares a new class",
            "Defines a set of related methods",
            "Defines a type with a set of properties",
            "Creates a loop in the code"
        ],
        answer: 2
    },
    {
        text: "Which operator is used for string concatenation in TypeScript?",
        options: [
            "+",
            "-",
            "*",
            "/"
        ],
        answer: 0
    },
    {
        text: "What is the purpose of the 'extends' keyword in TypeScript?",
        options: [
            "To create a new class",
            "To import modules",
            "To inherit properties and methods from a parent class",
            "To define an interface"
        ],
        answer: 2
    },
    {
        text: "What is the output of typeof 'hello' in TypeScript?",
        options: [
            "string",
            "number",
            "boolean",
            "undefined"
        ],
        answer: 0
    },
    {
        text: "Which TypeScript feature allows you to enforce strict null checking?",
        options: [
            "Nullish coalescing",
            "Optional chaining",
            "Strict mode",
            "Nullable types"
        ],
        answer: 3
    },
    {
        text: "What is the purpose of the 'as' keyword in TypeScript?",
        options: [
            "To declare a variable",
            "To create an alias for a type",
            "To define a class",
            "To import a module"
        ],
        answer: 1
    },
    {
        text: "Which TypeScript feature allows you to define a type that can be one of several types?",
        options: [
            "Union types",
            "Intersection types",
            "Generic types",
            "Conditional types"
        ],
        answer: 0
    },
    {
        text: "What is the TypeScript equivalent of JavaScript's 'NaN'?",
        options: [
            "null",
            "undefined",
            "NaN",
            "Infinity"
        ],
        answer: 2
    },
    {
        text: "What does the 'declare' keyword do in TypeScript?",
        options: [
            "Declares a new variable",
            "Declares a new function",
            "Declares a type without defining it",
            "Declares a new class"
        ],
        answer: 2
    },
    {
        text: "What is the purpose of the 'readonly' modifier in TypeScript?",
        options: [
            "To make a property private",
            "To prevent a property from being reassigned",
            "To make a property required",
            "To define a constant"
        ],
        answer: 1
    },
    {
        text: "Which TypeScript feature allows you to define an interface with optional properties?",
        options: [
            "Abstract classes",
            "Type assertion",
            "Indexed access types",
            "Optional properties"
        ],
        answer: 3
    },
    {
        text: "What is the syntax for declaring a tuple type in TypeScript?",
        options: [
            "[type1, type2]",
            "(type1, type2)",
            "{type1, type2}",
            "<type1, type2>"
        ],
        answer: 0
    },
    {
        text: "What is the purpose of the 'never' type in TypeScript?",
        options: [
            "To represent a value that never occurs",
            "To represent a type that can be anything",
            "To represent an empty value",
            "To represent a function that never returns"
        ],
        answer: 3
    },
    {
        text: "Which TypeScript feature allows you to create reusable code components?",
        options: [
            "Modules",
            "Classes",
            "Interfaces",
            "Generics"
        ],
        answer: 3
    }
];
