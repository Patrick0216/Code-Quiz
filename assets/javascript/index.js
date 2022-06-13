//Global Score variable
var score = 0;

//Global question varibles

var question1 = "hello dis is a test";
var question2 = "hello dis is anoda test";
var question3 = "uh anoda one";
var question4 = "um hi there";
var question5 = "ok bye dork";

//Global questions array

const array_questions = [		
		question1, 
		question2, 
		question3, 
		question4, 
		question5
];

//Array question1 answers
const array_question1ans = [
	"this is a test?",
	"this is not a test?",
	"why are you asking me questions?",
	"uhhh... whats going on?"
];

const array_question2ans = [
	"this is a test?",
	"this is not a test?",
	"why are you asking me questions?",
	"uhhh... whats going on?"
];

const array_question3ans = [
	"this is a test?",
	"this is not a test?",
	"why are you asking me questions?",
	"uhhh... whats going on?"
];

const array_question4ans = [
	"this is a test?",
	"this is not a test?",
	"why are you asking me questions?",
	"uhhh... whats going on?"
];

const array_question5ans = [
	"this is a test?",
	"this is not a test?",
	"why are you asking me questions?",
	"uhhh... whats going on?"
];


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




