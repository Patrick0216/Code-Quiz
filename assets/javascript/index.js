//start screen with rules
let startpannel = document.querySelector("#startpannel");
let start = document.querySelector("#start");
//quiz screen with questions
let quizpannel1 = document.querySelector("#quizpannel1");
let quizpannel2 = document.querySelector("#quizpannel2");
let nextQ = document.querySelector("#nextQ");
let Qprompt = document.getElementById("#Qprompt");
//answers

let questions = [{
    Qprompt: "What does HTML stand for?",
    answer1: "Hyperlinks and Text Markup Language",
    answer2: "Hyper Text Markup Language",
    answer3: "Hyper Text Making Language",
    answer4: "Hyper Text Mark Language",
    answer: 1
},
            {
	Qprompt: "What does CSS stand for?",
    answer1: "Colorful StyleSheet",
    answer2: "Creative Style Sheet",
    answer3: "Cascading Style Sheet",
    answer4: "Computer Style Sheet",
    answer: 2

}];

let answer = Array [
	"answer1",
 	"answer2",
 	"answer3",
 	"answer4"
]

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");


start.addEventListener("click", () => {
    startpannel.style.display = "none";
    quizpannel1.style.display = "block";
});

nextQ.addEventListener("click", () => {
    quizpannel1.style.display = "none";
    quizpannel2.style.display = "block";
});

answer1.addEventListener("click", () => {
    console.log(answer);
});


/*---------------------------------------------------------
Global Score variable
	var score = 100

Global questions array


	-> multiple arrays, questions / answers | might be tough to work with
	-> array of objects
		[
			{
				question: "A very useful tool....",
				answers: [
					"answer 1",
					"answer 2",
					"answer 3",
					"answer 4"
				],
				correct: 2
			}
		]

Start the quiz
	-> Start the timer
	-> Call function to render first question
- A way to select a question to render
	-> If last question -> End game
- Render a single question to the page
	-> take the selected question, build a text object and 4 buttons or links
		-> button/link should have a data-attr that notes which index it is so I can track the correctness later
	-> Add elements to page, listen for button/link clicks
		-> Go to Question Response action
Question Response action
	- Answer question right action
		-> Add points to score
		-> Render the next question
	- Answer question wrong action
		-> Remove time from timer
		-> Render the next question
Check if response is correct?
End game action
	-> Stop the timer
	-> Render Score to screen, with form for high score list
Start Timer
Stop Timer
Form - submit Score
	-> On submit
		-> save in localStorage
		-> Go to high scores page
Second HTML page that renders a Score list
	- Scores need to be stored in localStorage
white_check_mark
eyes
raised_hands
React
Reply
-----------------------------------------------------*/




