// (function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {question: "Who was the first woman to win a Nobel Prize?",
    answers: {
      a: "Marie Curie",
      b: "Michelle Obama",
      c: "Mariah Carey",
      d: "Mother Teresa"
      },
      correctAnswer: "a"
    },
    {
      question: "How many people have won a Nobel Prize?",
      answers: {
        a: "53",
        b: "10,000",
        c: "919",
        d: "991"
      },
      correctAnswer: "c"
    },
    {
      question: "Which Nobel prize category has the highest percentage of female laureates?",
      answers: {
        a: "Peace",
        b: "Literature",
        c: "Physics",
        d: "Medicine"
      },
      correctAnswer: "b"
    }
  ];

  // // display quiz right away
  // buildQuiz();

  // on submit, show results
  // submitButton.addEventListener("click", showResults);
//     })();
// );

//   quizContainer.innerHTML = output.join('');
// }

// function showResults(){}

// buildQuiz();

// submitButton.addEventListener('click', showResults);
