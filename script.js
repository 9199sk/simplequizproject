const question = [
    {
        question: "who was develop python?",
        answer: [
            { text: "Guido van", correct: true },
            { text: "suido Man", correct: false },
            { text: "Denis richi", correct: false },
            { text: "Sam__", correct: false },
        ]
    },
    {
        question: "who was develop C?",
        answer: [
            { text: "Guido van", correct: true },
            { text: "suido Man", correct: false },
            { text: "Denis richi", correct: true },
            { text: "Sam__", correct: false },
        ]
    },
    {
        question: "when was the develop OSI?",
        answer: [
            { text: "1985", correct: false },
            { text: "1981", correct: false },
            { text: "1984", correct: true },
            { text: "1999", correct: false },
        ]
    },
    {
        question: "what is the total length of ipv4?",
        answer: [
            { text: "32bit", correct: false },
            { text: "31bit", correct: false },
            { text: "0bit", correct: true },
            { text: "11bit", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextbtn = document.getElementsByClassName("next-qn")[0];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate()
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    });
}

function resetstate(){
    nextbtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    } else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.disabled = true;
        }
    });
    nextbtn.style.display = "block";
}
nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handleNextbutton();
    }
})

startQuiz();

