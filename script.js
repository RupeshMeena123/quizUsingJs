// function hovering(e){
//     if(e.type === 'mouseover'){
//             e.target.setAttribute('style','background-color:lightblue; ');
//     }
//     else if(e.type === 'mouseout'){
//             e.target.setAttribute('style','background-color: ; ');
//     }
// }

// let p = document.querySelectorAll('.ans');
// let btns = document.querySelectorAll('.btn');
// btns.forEach((btn) => {
// btn.addEventListener('mouseover',hovering);
// btn.addEventListener('mouseout',hovering);
// });


// const btn = document.getElementById("next-btn");
let nextbtn = document.getElementById("nextContainer");
function showNextButton(){
    nextbtn.style.display = "flex";
    nextButtons.style.display = "block";
}

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
             {text: "Berlin",correct: false },
             {text: "Madrid",correct: false },
             {text: "Paris",correct: true },
             {text: "Rome",correct: false }
         ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            { text: "Venus", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct:true}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Leo Tolstoy", correct: false},
            {text: "Mark Twain", correct: false}
        ]
    }

]

const quesElement = document.getElementById("question");
const answerButtons = document.getElementById("ans");
const nextButtons = document.getElementById("next-btn");

nextButtons.addEventListener("click", () => {
    currentQuesIndex++;

    if (currentQuesIndex < questions.length) {
        showQuestion();
    } else {
        quesElement.innerHTML = `Quiz Finished! <br> Score: ${score}/${questions.length}`;
        answerButtons.innerHTML = "";
        nextbtn.style.display = "none";
        nextButtons.style.display = "none";
    }
});


let currentQuesIndex = 0;
let score = 0;

function startQuiz(){
   currentQuesIndex = 0;
   score = 0;
   nextButtons.innerHTML = "Move On";
   showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    quesElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButtons.style.display = "none";
    nextbtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.style.backgroundColor = "green";
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.style.backgroundColor = "red";
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });

   showNextButton();
}
startQuiz();