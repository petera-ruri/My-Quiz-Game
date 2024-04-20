// Variables //
let level = 0
let score = 0;
let newQuestionArray = [
    {
        title: "Which planet is known as the red planet?",
        answers: [{
            title: "Mars",
            isCorrect: true
        }, {
            title: "Earth",
            isCorrect: false
        },
        {
            title: "Venus",
            isCorrect: false
        },
        {
            title: "Jupiter",
            isCorrect: false
        },
        {
            title: "Saturn",
            isCorrect: false
        }]
    },
    {
        title: "Who painted the Mona Lisa",
        answers: [{
            title: "Leonardo da Vinci",
            isCorrect: true
        }, {
            title: "Ethan Montgomery",
            isCorrect: false
        },
        {
            title: "Sophia Patel",
            isCorrect: false
        },
        {
            title: "Liam Johnson",
            isCorrect: false
        },
        {
            title: "Ava Ramirez",
            isCorrect: false
        }
        ]
    }, {
        title: "In which year did World War II end?",
        answers: [{
            title: "1945",
            isCorrect: true
        }, {
            title: "1946",
            isCorrect: false
        },
        {
            title: "1947",
            isCorrect: false
        },
        {
            title: "1948",
            isCorrect: false
        },
        {
            title: "1949",
            isCorrect: false
        }
        ]
    }, {
        title: "What is the tallest mountain in the world?",
        answers: [{
            title: "Mount everest",
            isCorrect: true
        }, {
            title: "Mount fuji",
            isCorrect: false
        },
        {
            title: "Mount kilimanjaro",
            isCorrect: false
        },
        {
            title: "Mount Cook",
            isCorrect: false
        },
        {
            title: "Mount Ruapehu",
            isCorrect: false
        }
        ]
    }, {
        title: "What is the chemical formula for water?",
        answers: [{
            title: "H2O",
            isCorrect: true
        }, {
            title: "CO2",
            isCorrect: false
        },
        {
            title: "N2O",
            isCorrect: false
        },
        {
            title: "H2SO4",
            isCorrect: false
        },
        {
            title: "H2S",
            isCorrect: false
        }
        ]
    }, {
        title: "What is the capital of India?",
        answers: [{
            title: "Delhi",
            isCorrect: true
        }, {
            title: "Mumbai",
            isCorrect: false
        },
        {
            title: "Chennai",
            isCorrect: false
        },
        {
            title: "Kolkata",
            isCorrect: false
        },
        {
            title: "Bangalore",
            isCorrect: false
        }
        ]
    }, {
        title: "Who was the first woman to win a Nobel Prize?",
        answers: [{
            title: "Marie Curie",
            isCorrect: true
        }, {
            title: "Albert Einstein",
            isCorrect: false
        },
        {
            title: " Nikola Tesla",
            isCorrect: false
        },
        {
            title: "Isaac Newton",
            isCorrect: false
        },
        {
            title: "Nelson Mandela",
            isCorrect: false
        }
        ]
    },
    {
        title: "What is the chemical formula for gold?",
        answers: [{
            title: "Au",
            isCorrect: true
        }, {
            title: "Ag",
            isCorrect: false
        },
        {
            title: "Cu",
            isCorrect: false
        },
        {
            title: "Zn",
            isCorrect: false
        },
        {
            title: "Fe",
            isCorrect: false
        }]
    },
    {
        title: "What is the capital of France?",
        answers: [{
            title: "Paris",
            isCorrect: true
        }, {
            title: "London",
            isCorrect: false
        },
        {
            title: "Berlin",
            isCorrect: false
        },
        {
            title: "Madrid",
            isCorrect: false
        },
        {
            title: "Rome",
            isCorrect: false
        }]
    },
    {
        title: "What is the capital of Germany?",
        answers: [{
            title: "Berlin",
            isCorrect: true
        }, {
            title: "London",
            isCorrect: false
        },
        {
            title: "Paris",
            isCorrect: false
        },
        {
            title: "Madrid",
            isCorrect: false
        },
        {
            title: "Rome",
            isCorrect: false
        }]
    },
    {
        title: "When was the Declaration of Independence signed?",
        answers: [{
            title: "1776",
            isCorrect: true
        }, {
            title: "1783",
            isCorrect: false
        },
        {
            title: "1792",
            isCorrect: false
        },
        {
            title: "1800",
            isCorrect: false
        },
        {
            title: "1810",
            isCorrect: false
        }]
    },
    {
        title: "Who was the first president of the United States?",
        answers: [{
            title: "George Washington",
            isCorrect: true
        }, {
            title: "Thomas Jefferson",
            isCorrect: false
        },
        {
            title: "Abraham Lincoln",
            isCorrect: false
        },
        {
            title: "Alexander Hamilton",
            isCorrect: false
        },
        {
            title: "Benjamin Franklin",
            isCorrect: false
        }]
    },
    {
        title: "Who wrote the classic novel 'Pride and Prejudice'?",
        answers: [{
            title: "Margaret Atwood",
            isCorrect: true
        }, {
            title: "Emily Bronte",
            isCorrect: false
        },
        {
            title: "Emily Dickinson",
            isCorrect: false
        },
        {
            title: "Jane Austen",
            isCorrect: false
        }]
    },
    {
        title: "What is the name of the longest river in the world?",
        answers: [{
            title: "Amazon",
            isCorrect: true
        }, {
            title: "Nile",
            isCorrect: false
        },
        {
            title: "Yangtze",
            isCorrect: false
        },
        {
            title: "Mississippi",
            isCorrect: false
        },
        {
            title: "Ganges",
            isCorrect: false
        }]
    },
    {
        title: "What is the capital of Japan?",
        answers: [{
            title: "Tokyo",
            isCorrect: true
        }, {
            title: "Seoul",
            isCorrect: false
        },
        {
            title: "Osaka",
            isCorrect: false
        },
        {
            title: "Beijing",
            isCorrect: false
        },
        {
            title: "Kyoto",
            isCorrect: false
        }]
    },
    {
        title: "What is the currency of Japan?",
        answers: [{
            title: "Yen",
            isCorrect: true
        }, {
            title: "Euro",
            isCorrect: false
        },
        {
            title: "Dollar",
            isCorrect: false
        },
        {
            title: "Pound",
            isCorrect: false
        },
        {
            title: "Ruble",
            isCorrect: false
        }]
    },
    {
        title: "Who is the author of the classic novel 'Pride and Prejudice'?",
        answers: [{
            title: "Jane Austen",
            isCorrect: true
        }, {
            title: "Emily Bronte",
            isCorrect: false
        },
        {
            title: "Margaret Atwood",
            isCorrect: false
        },
        {
            title: "Emily Dickinson",
            isCorrect: false
        }]
    },
    {
        title: "What is the currency of Canada?",
        answers: [{
            title: "Dollar",
            isCorrect: true
        }, {
            title: "Pound",
            isCorrect: false
        },
        {
            title: "Yen",
            isCorrect: false
        },
        {
            title: "Euro",
            isCorrect: false
        },
        {
            title: "Ruble",
            isCorrect: false
        }]
    }
]


// Display Questions //
let currentQuestion = newQuestionArray[level];
document.getElementById('question').innerHTML = currentQuestion.title


// Created a function for shuffling questions and answers //
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(currentQuestion.answers);
shuffleArray(newQuestionArray[1].answers);
shuffleArray(newQuestionArray[2].answers);
shuffleArray(newQuestionArray[3].answers);
shuffleArray(newQuestionArray[4].answers);
shuffleArray(newQuestionArray[5].answers);
shuffleArray(newQuestionArray[6].answers);
shuffleArray(newQuestionArray[7].answers);
shuffleArray(newQuestionArray[8].answers);
shuffleArray(newQuestionArray[9].answers);



// Display Answers //
currentQuestion.answers.forEach((answer, index) => {
    const buttons = document.querySelectorAll('.answer-btn');
    if (index < newQuestionArray.length) {
        buttons[index].innerHTML = answer.title
    }

    
    // Event Listener to check answers //
    answerEventListener = document.querySelectorAll('.answer-btn')[index].addEventListener('click', () => {

        if (currentQuestion.answers[index].isCorrect === true) {
            document.querySelectorAll('.answer-btn')[index].style.backgroundColor = 'green'
            score++;
        } else {
            document.querySelectorAll('.answer-btn')[index].style.backgroundColor = 'red'
            
        }
        
        if (currentQuestion.answers[index].isCorrect === false) {
            alert('Game Over')
            document.getElementById('question').innerHTML = `You scored: ${score}<br>Restarting in 3 seconds...`
            setTimeout(() => {
                document.location.reload();
              }, 3000);
        }
    })
})

// Next question and reset answers //
function showQuestion() {

    shuffleArray(newQuestionArray)
    currentQuestion = newQuestionArray[level];
    document.getElementById('question').innerHTML = currentQuestion.title
    currentQuestion.answers.forEach((answer, index) => {
        document.querySelectorAll('.answer-btn')[index].innerHTML = answer.title
        document.querySelectorAll('.answer-btn')[index].style.backgroundColor = 'white'

    })
}