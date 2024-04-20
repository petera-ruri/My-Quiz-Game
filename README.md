# My-Quiz-Game

Document Type Declaration (DOCTYPE):
Include <!DOCTYPE html> at the very beginning of your HTML file to declare that the document is an HTML5 document.
HTML Document Structure:
Start with <html lang="en"> to define the root element of the HTML document and specify the language as English.
Head Section:
Inside the <head> section, include:
Link to an external CSS file using <link rel="stylesheet" href="styles.css">.
Meta tags for specifying character set (<meta charset="UTF-8">) and viewport settings (<meta name="viewport" content="width=device-width, initial-scale=1.0">).
Title of the page using <title>Quiz Me</title>.
Body Content:
Within the <body> section:
Wrap all content in a <div class="container"> to provide a container for styling and organization.
Content Elements:
Include an <h1> heading with the title "Quiz Me" (<h1 id="title">Quiz Me</h1>).
Create a <div> with the id "question" to hold the quiz questions (<div id="question">).
Add a <p> element with "Start" text for starting the quiz, and assign an onclick attribute to call the "start()" function when clicked.
Use <h2> heading with "Next Question" text for displaying the next question, and assign an onclick attribute to call the "showQuestion()" function when clicked.
Add an <h2> heading with "Answers" text to label the answer options.
Include <button> elements with the class "answer-btn" to represent the answer options.
JavaScript File:
Include <script src="script.js"></script> at the end of the body to link an external JavaScript file named "script.js".
Closing Tags:
Close the <body> and <html> tags at the end of the document (</body> and </html>).
