export const getQuizzes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [
    {
      id: 1,
      title: "Javascript",
      questions: [
        {
          id: 1,
          text: "Which of the following is a primitive data type in JavaScript?",
          correctAnswer: "Boolean",
          incorrectAnswers: ["Array", "Object", "Function"],
        },
        {
          id: 2,
          text: "Which method is used to parse a JSON string into a JavaScript object?",
          correctAnswer: "JSON.parse()",
          incorrectAnswers: [
            "JSON.stringify()",
            "JSON.objectify()",
            "parse.JSON()",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "React",
      questions: [
        {
          id: 1,
          text: "What hook is used to manage state in a functional React component?",
          correctAnswer: "useState",
          incorrectAnswers: ["useEffect", "useReducer", "useRef"],
        },
        {
          id: 2,
          text: "What is the purpose of keys in React lists?",
          correctAnswer: "To help React identify which items have changed",
          incorrectAnswers: [
            "To style the list items",
            "To create unique IDs for elements",
            "To make the list sortable",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "NextJS",
      questions: [
        {
          id: 1,
          text: "Which method is used for static site generation in Next.js?",
          correctAnswer: "getStaticProps",
          incorrectAnswers: [
            "getServerSideProps",
            "useEffect",
            "componentDidMount",
          ],
        },
        {
          id: 2,
          text: "What file is used to define custom routing in Next.js?",
          correctAnswer: "pages/index.js",
          incorrectAnswers: ["routes.js", "router.js", "App.js"],
        },
      ],
    },
  ];
};

export const getMoreQuizzes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [
    {
      id: 4,
      title: "JAVA",
      questions: [
        {
          id: 1,
          text: "Which keyword is used to inherit a class in Java?",
          correctAnswer: "extends",
          incorrectAnswers: ["implements", "inherits", "instanceof"],
        },
        {
          id: 2,
          text: "What is the default value of a boolean variable in Java?",
          correctAnswer: "false",
          incorrectAnswers: ["true", "0", "null"],
        },
      ],
    },
    {
      id: 5,
      title: "C#",
      questions: [
        {
          id: 1,
          text: "Which of these is the correct way to declare a variable in C#?",
          correctAnswer: "int number = 5;",
          incorrectAnswers: ["number = int 5;", "int = 5;", "int number; = 5"],
        },
        {
          id: 2,
          text: "Which keyword is used to define a method that can be overridden in a derived class?",
          correctAnswer: "virtual",
          incorrectAnswers: ["override", "base", "abstract"],
        },
      ],
    },
  ];
};
