var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', nextQuestion)

function startGame(){
    startButton.style.display === "none"
}

const questions = [
    {
      question: 'Inside what HTML element do we put Javascript?',
      answers: [
        { text: '<script>', correct: true },
        { text: '<js>', correct: false },
        { text: '<javascript>', correct: false },
        { text: '<scripting>', correct: false }
      ]
    },
    {
      question: 'Where is the correct place to insert Javascript?',
      answers: [
        { text: 'The <body>', correct: false },
        { text: 'Both the <head> and <body>', correct: true },
        { text: 'The <head>', correct: false },
        { text: 'No where', correct: true }
      ]
    },
    {
      question: 'External Javascript Must include a <script> tag.',
      answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true }
      ]
    },
    {
      question: 'What would be used to notify a user?',
      answers: [
        { text: 'alert(...);', correct: true },
        { text: 'msg(...);', correct: false },
        { text: 'alertBox(...);', correct: false },
        { text: 'msgBox(...);', correct: false }
      ]
    },
    {
      question: 'How do you create a function in Javascript?',
      answers: [
        { text: 'function = myFunction()', correct: false },
        { text: 'function myFunction()', correct: true },
        { text: 'function:myFunction()', correct: false },
        { text: 'myFunction()', correct: false }
      ]
    },
    {
      question: 'How do you call a function?',
      answers: [
        { text: 'myFunction()', correct: true },
        { text: 'call myFunction()', correct: false },
        { text: 'call function myFunction()', correct: false },
        { text: 'function myFunction()', correct: false }
      ]
    },
    {
      question: 'What is equivalent to not equal to?',
      answers: [
        { text: '-=', correct: false },
        { text: 'not=', correct: false },
        { text: 'x=', correct: false },
        { text: '!=', correct: true }
      ]
    },
    {
      question: 'How do you start a for loop?',
      answers: [
        { text: 'for (i = 0; i <= 5; i++)', correct: true },
        { text: 'for (i = 0; i <= 5)', correct: false },
        { text: 'for i = 1 to 5', correct: false },
        { text: 'for (i <= 5; i++)', correct: false }
      ]
    },
    {
      question: 'How do you comment in Javascript?',
      answers: [
        { text: '//This is a comment', correct: true },
        { text: '"This is a comment"', correct: false },
        { text: '<!--This is a comment-->', correct: false },
        { text: '\'This is a comment', correct: false }
      ]
    },
    {
      question: 'Was this Quiz easy?',
      answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false },
   
      ]
    }
  ]