
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

let animationFrameID;
// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");

// buttons
const btnAxis = document.querySelector(".btn-axis");
// btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");
// btnVPHP.addEventListener("click", nameVPHP);
const btnLine = document.querySelector(".btn-line");
btnLine.addEventListener("click", drawInitialLine);
const btnaDash = document.querySelector(".btn-a-dash");
btnaDash.addEventListener("click", a);
const btna = document.querySelector(".btn-a");
btna.addEventListener("click", b);
const btnbOneDash = document.querySelector(".btn-b-one-dash");
btnbOneDash.addEventListener("click", b11);
const btnThetaOne = document.querySelector(".btn-theta-one");
btnThetaOne.addEventListener("click", b1);
const btnB = document.querySelector(".btn-b");
btnB.addEventListener("click", bb);
const btnBOne = document.querySelector(".btn-b-one");
btnBOne.addEventListener("click", b2);
const btnThetaTwo = document.querySelector(".btn-theta-two");
btnThetaTwo.addEventListener("click", b22);
const btnBDash = document.querySelector(".btn-b-dash");
btnBDash.addEventListener("click", bbb);
const btnTrace = document.querySelector(".btn-trace");
btnTrace.addEventListener("click", hhhh);
const btnH = document.querySelector(".btn-h");
btnH.addEventListener("click", ha);
const btnV = document.querySelector(".btn-v");
btnV.addEventListener("click", v);

const btnA = document.querySelector('.btn-A');

const btnBB = document.querySelector('.btn-B');

const btnB1 = document.querySelector('.btn-B1');

const btnC = document.querySelector('.btn-c');

const btnNext = document.querySelector(".btn-next");

const buttonBox = document.querySelector(".practice-step-button");

const box = document.querySelector(".box");

const radioButtons = document.querySelectorAll('input[name="navigation"]');


// Add event listeners to radio buttons
radioButtons.forEach(function(radio) {
  radio.addEventListener('change', function() {
    btnNext.disabled = false;
  });
});
// btnNext.addEventListener("click", nextStep);
const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", clearcanvas);
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
// $(".tool-practice").css("pointerEvents","auto");
btnTop.classList.add("hide");

    console.log("reched here")
    quizDiv.classList.remove('hide');
    btnNext.addEventListener('click', nextButtonEventListener);
    // radio.checked = false;

    radioButtons.forEach(radio => {
      radio.checked = false;
  })

    if (animationFrameID) {
      cancelAnimationFrame(animationFrameID);
      animationFrameID = null;
  }
  circle1 = new Path2D();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
$(".canvas").css("display","none");
stepTitle.textContent = "Select the Experiment:";
btnA.classList.add('hide');
btnBB.classList.add('hide');
btnC.classList.add('hide');
btnB1.classList.add('hide');
$(buttonBox).css("display","none");
btnNext.disabled = true;
//  canvasfun1();
console.log(i);
stepNumber.textContent = "1";
document.getElementById("image").style.display = "none";
document.getElementById("image1").style.display = "none";
document.getElementById("image3").style.display = "none";

btnNext.removeEventListener('click',roti);
btnNext.addEventListener('click', nextButtonEventListener);
//  clearcanvas();
  }
}
// const submitBtn = document.getElementById('submitBtn');

let fun3Executed = false; // Flag to check if fun3 has been executed



// Add click event listener to the Next button
let nextButtonEventListener = function() {
  const option1 = document.getElementById('1').checked;
  const option2 = document.getElementById('2').checked;
  const option3 = document.getElementById('3').checked;

  if (option1) {
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
  
    // buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    stepTitle.innerHTML = "<strong>Learn how to bisect a line</strong>";
    console.log("Reached here");
    // btnReset.setAttribute("disabled",true);
    fun1();
  } else if (option2) {
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
    buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    stepTitle.innerHTML = "<strong>Learn how to bisect an angle</strong>";
    fun2();
  } else if (option3) {
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
    buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    console.log("Reached here");
    stepTitle.innerHTML = "<strong>Learn how to draw a polygon</strong>";
    fun3();
    fun3Executed = true; // Set the flag to true after fun3 is executed
    btnNext.removeEventListener('click', nextButtonEventListener);
    btnNext.addEventListener('click', roti) 
  }
};

btnNext.addEventListener('click', nextButtonEventListener);
// function nextStep() {
//   currentStep = data.find((step) => currentStepCount === step.step);
//   stepNumber.textContent = currentStepCount;
//   stepTitle.textContent = currentStep.title;
//   btnNext.setAttribute("disabled", true);
//   btnNext.classList.remove("blink");
//   initialSetup();
//   console.log(step.step);
// }

// function nextQuestion() {
//   if (currentQuestionIndex < currentQuestions.length - 1) {
//     currentQuestionIndex += 1;
//     displayQuestionDiv(currentQuestions[currentQuestionIndex]);
//   } else {
//     quizDiv.classList.add("hide");
//     if (currentStepCount === data.length) {
//       stepNumber.classList.add("hide");
//       stepTitle.classList.add("hide");
//       document.querySelector(".final-statement").classList.remove("hide");
//       btnNext.classList.add("hide");
//       btnNext.classList.remove("blink");
//     } else {
//       currentStepCount += 1;
//       btnNext.removeAttribute("disabled");
//       btnNext.classList.add("blink");
//     }
//   }
// }
// function drawAxis() {
//   canvas.classList.remove("hide");
//   canvas.scrollIntoView();
//   btnTop.classList.remove("hide");
//   ctx.strokeStyle = "#B9B6B1";
//   animate(50, 250, 650, 250, 0, nameAxis);
// }

// function nameAxis() {
//   ctx.font = "bold 20px Nunito sans MS";
//   ctx.fillText("X", 30, 255);
//   ctx.fillText("Y", 670, 255);
//   btnAxis.classList.add("hide");
//   nextQuestion();
// }

// function nameVPHP() {
//   ctx.fillText("HP", 69, 243);
//   ctx.fillText("VP", 69, 270);
//   btnVPHP.classList.add("hide");
//   nextQuestion();
// }

function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// function animate(x1, y1, x2, y2, ratio, cb) {
//   ratio = ratio || 0;
//   drawLine(x1, y1, x2, y2, ratio, cb);
//   if (ratio > 1) {
//     cb();
//   } else if (ratio < 1) {
//     animationStatus = true;
//     requestAnimationFrame(function () {
//       animate(x1, y1, x2, y2, ratio + 0.02, cb);
//     });
//   }
// }
function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationFrameID = requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

// function animateRecursively(x1, y1, x2, y2, ratio) {
//   ratio = ratio || 0;
//   drawLine(x1, y1, x2, y2, ratio);
//   if (ratio < 1) {
//     animationStatus = true;
//     requestAnimationFrame(function () {
//       animateRecursively(x1, y1, x2, y2, ratio + 0.02);
//     });
//   }
// }

// function initialSetup() {
//   currentStep = data.find((d) => d.step == currentStepCount);
//   stepNumber.textContent = currentStepCount;
//   stepTitle.textContent = currentStep.title;
//   currentQuestions = currentStep.questions;
//   currentQuestionIndex = 0;
//   quizDiv.classList.remove("hide");

//   displayQuestionDiv(currentQuestions[currentQuestionIndex]);
// }

// function displayQuestionDiv(questions) {
//   console.log(currentStep, currentQuestions[currentQuestionIndex]);
//   const { question, options, answer, buttonClass, circle, circleText } =
//     questions;
//   questionDiv.innerHTML = `${currentQuestionIndex + 1}. ${question}`;
//   answersDiv.innerHTML = "";
//   options.map((option, index) => {
//     answersDiv.innerHTML += `
//     <div class="input-group">
//     <input type="radio" name="${question}" id="ans${index}" class="option" onchange='checkAnswer(this, ${index}, ${answer}, ${buttonClass},${JSON.stringify(
//       circle
//     )})'>
//     <label for="rad1">${option.text}</label>
//     </div>
//     `;
//   });
//   console.log(JSON.stringify(circle));
// }

// function checkAnswer(ele, index, answer, buttonClass, circle) {
//   const optionSelected = ele.parentNode;
//   optionSelected.classList.remove("wrong");
//   optionSelected.classList.remove("correct");
//   if (index === answer) {
//     optionSelected.classList.add("correct");
//     validateAnswer.innerHTML = "Right answer👍";
//     answersDiv.appendChild(validateAnswer);
//     if (buttonClass != null) buttonClass.classList.remove("hide");
//     if (circle) {
//       cirX = circle.x;
//       cirY = circle.y;
//       cirText = currentQuestions[currentQuestionIndex].circleText;
//       currentFunction = currentQuestions[currentQuestionIndex].func;
//       createCircle();
//     }
//   } else {
//     clearCircle();
//     optionSelected.classList.add("wrong");
//     if (buttonClass != null) buttonClass.classList.add("hide");
//     validateAnswer.innerHTML = "Worng answer, please check the options again👎";
//     answersDiv.appendChild(validateAnswer);
//   }
//   console.log
// }
function ciRest(){
  cirX = 0;
  cirY = 0;

}
function resetAll() {
  ctx.clearRect(0, 0, 750, 500);
  ctx.setLineDash([]);
  currentStepCount = 1;
  currentStep;
  currentQuestions;
  currentQuestionIndex = 0;
  currentFunction = null;
  circle1 = new Path2D();
  cirX = 0;
  cirY = 0;
  cirText = "";
  initialSetup();
  document.querySelectorAll(".btn").forEach((b) => b.classList.add("hide"));
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("hide");
  btnReset.classList.remove("hide");
  stepNumber.classList.remove("hide");
  stepTitle.classList.remove("hide");
  document.querySelector(".final-statement").classList.add("hide");
  canvas.classList.add("hide");
}

function movetoTop() {
  practiceDiv.scrollIntoView();
}

let circle1 = new Path2D(),
  currentFunction;
let cirX = 0,
  cirY = 0,
  cirText = "";
function drawInitialLine() {
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.moveTo(300, 250);
  ctx.lineTo(300, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.moveTo(300, 250);
  ctx.lineTo(300, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.moveTo(300, 300);
  ctx.setLineDash([10, 5]);
  ctx.lineTo(500, 300);
  ctx.stroke();
  ctx.moveTo(300, 200);
  ctx.lineTo(500, 200);
  ctx.stroke();

  ctx.fillText("a'", 280 - 5, 200 + 5);
  ctx.fillText("a", 280 - 5, 295 + 5);
  ctx.closePath();
  btnLine.classList.add("hide");
  nextQuestion();
}

function a() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(300, 200);
  ctx.lineTo(406, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(300, 200, 40, -Math.PI / 4, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([10, 3]);
  ctx.moveTo(230, 94);
  ctx.lineTo(486, 94);
  ctx.stroke();
  ctx.fillStyle = "#000";
  ctx.fillText("b1'", 406, 70);
  ctx.fillText("θ", 337, 185);
  ctx.fillText("Locus of a", 500, 190);
  ctx.fillText("Locus of b'", 500, 93);
  clearCircle();
  ctx.closePath();
  btnaDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(300, 300);
  ctx.lineTo(430, 375);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(300, 300, 40, 0, Math.PI / 6);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([10, 3]);
  ctx.moveTo(230, 375);
  ctx.lineTo(486, 375);
  ctx.stroke();
  clearCircle();
  ctx.fillText("ϕ", 340, 320);
  ctx.fillText("b1", 410, 400);
  ctx.fillText("Locus of a'", 500, 295);
  ctx.fillText("Locus of b", 500, 370);
  ctx.closePath();
  btna.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b11() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(406, 94);
  ctx.lineTo(406, 300);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  btnbOneDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b1() {
  ctx.beginPath();
  ctx.arc(300, 300, 106, 0, Math.PI / 4);
  ctx.stroke();
  clearCircle();
  ctx.fillText("b", 370, 400);
  ctx.closePath();
  btnThetaOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function bb() {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.strokeWidth = "2";
  ctx.moveTo(300, 300);
  ctx.lineTo(375, 375);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 300, 55, 0, Math.PI / 4);
  ctx.stroke();
  clearCircle();
  ctx.fillText("β", 360, 328);
  ctx.closePath();
  btnB.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function b2() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.setLineDash([]);
  ctx.moveTo(430, 375);
  ctx.lineTo(430, 200);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  btnBOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b22() {
  ctx.beginPath();
  ctx.arc(300, 200, 130, -Math.PI / 3.27, 0);
  ctx.stroke();
  clearCircle();
  ctx.font = "14px comic sans MS";
  ctx.fillText("b'", 370, 80);
  ctx.closePath();
  btnThetaTwo.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function bbb() {
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.moveTo(300, 200);
  ctx.lineTo(375, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 200, 55, -Math.PI / 3.19, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("α", 350, 170);
  ctx.closePath();
  btnBDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function hhhh() {
  ctx.beginPath();
  ctx.arc(265, 250, 3, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.moveTo(300, 200);
  ctx.lineTo(250, 271);
  ctx.stroke();
  ctx.closePath();
  ctx.font = "14px comic sans MS";
  ctx.fillText("h", 285, 240);
  btnTrace.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function ha() {
  ctx.beginPath();
  ctx.arc(250, 250, 3, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.moveTo(300, 300);
  ctx.lineTo(250, 250);
  ctx.stroke();
  ctx.font = "14px comic sans MS";
  ctx.fillText("v", 230, 240);
  ctx.closePath();
  btnH.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function v() {
  ctx.beginPath();
  ctx.arc(250, 271, 3, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.moveTo(250, 271);
  ctx.lineTo(250, 250);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(250, 93);
  ctx.lineTo(250, 370);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(265, 265, 3, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.moveTo(265, 250);
  ctx.lineTo(265, 265);
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(265, 93);
  ctx.lineTo(265, 370);
  ctx.stroke();
  btnV.classList.add("hide");
  circle1 = new Path2D();
  ctx.font = "14px comic sans MS";
  ctx.fillText("HT", 220, 270);
  ctx.fillText("VT", 275, 270);
  ctx.closePath();
  nextQuestion();
}

function createCircle() {
  console.log(cirText);
  console.log(cirX);
  ctx.beginPath();
  if (cirText == "b1'") {
    circle1.arc(cirX, cirY, 20, 0, 2 * Math.PI);
  } else circle1.arc(cirX, cirY, 16, 0, 2 * Math.PI);
  ctx.fillStyle = "#417472";
  ctx.fill(circle1);
  ctx.fillStyle = "#fff";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } else ctx.fillText(cirText, cirX - 7, cirY + 5);
  ctx.closePath();
}

function clearCircle() {
  console.log(cirText);
  console.log(cirX);

  if (cirText == "b1'") {
    ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
  } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
  ctx.fillStyle = "#000";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } 
  else if (cirText != "⨀") {
    ctx.fillText(cirText, cirX - 7, cirY + 5);
  }
}
function fun1(){
  console.log("help me go forward")
  btnA.removeAttribute("disabled");
  btnA.classList.remove('hide');
  btnBB.classList.remove('hide');
  btnTop.classList.remove("hide");

  $(buttonBox).css("display","flex");


  drawShape();

  }
  function fun3(){
    
    ctx.clearRect(0, 0, 750, 400);
    btnNext.disabled = false;
    // btnNext.addEventListener('click', () => {
    //   roti();
    fun3Executed = true;
    // btnNext.disabled = false; 
    // });
  btnTop.classList.remove("hide");

    box.classList.add('hide');
    document.getElementById('image1').style.display = "none";

    canvasfun1();

    }

function fun2(){
  btnB1.classList.remove('hide');
  btnC.classList.remove('hide');
  $(buttonBox).css("display","flex");
  btnTop.classList.remove("hide");

  btnB1.removeAttribute("disabled");

  canvasfun();
}
function drawShape()
  {
         
      ctx.clearRect(0, 0, 550, 400);
      ctx.beginPath();
      ctx.moveTo(150,190);
      ctx.lineTo(420,190);
      ctx.strokeStyle = "black";
      ctx.lineWidth=1;
      ctx.stroke();
      ctx.font = "20px comic sans MS";
      ctx.closePath();
      ctx.beginPath()
      ctx.moveTo(150,190);
      ctx.arc(150,190,3,0,2*(Math.PI));
      ctx.fill();
      ctx.moveTo(420,190);
      ctx.arc(420,190,3,0,2*(Math.PI));
      ctx.fill();
      
      cirX = 147;
      cirY = 215;
      cirText = "A";

        createCircle();
     
       btnBB.setAttribute("disabled",true);
      console.log(canvas.getcontext);

  } 
 function rotateimage(){
  ciRest()
    var img = document.getElementById('image');
    img.style.transformOrigin='bottom left';
    img.style.transform = 'rotate(30deg)';
    img.style.opacity='0.5';
    setTimeout(function() {
    img.style.display = "none";
    img.style.transform = 'rotate(-30deg)';
    }, 600);

    ctx.beginPath();
    ctx.arc(150, 192, 130, -(Math.PI/5), Math.PI/5);
    ctx.stroke();
    ctx.closePath();
    console.log(cirX,"roatatew");
    btnA.setAttribute("disabled",true);
    btnBB.removeAttribute("disabled");

    cirX = 423;
    cirY = 215;
    cirText = "B";
   
        createCircle();

        console.log(cirX,"B");


}

function rotateimage1(){
var img = document.getElementById('image1');
img.style.transformOrigin='bottom right';
img.style.transform = 'rotate(-60deg)';
img.style.opacity='1';
btnBB.setAttribute("disabled",true);

setTimeout(function() {
  img.style.display = "none";

}, 700);

ctx.strokeStyle = "black";
ctx.font = "20px comic sans MS";
ctx.beginPath();
ctx.arc(400, 192, 130,4*(Math.PI)/5, 6*Math.PI/5);
ctx.stroke();
ctx.closePath();
setTimeout(function(){
ctx.beginPath();
ctx.moveTo(275,120);
ctx.lineTo(275,260);
ctx.stroke();
ctx.closePath();
ctx.moveTo(275,190);
ctx.arc(275,190,3,0,2*(Math.PI));
ctx.stroke();
ctx.font = "bold 20px comic sans MS";
ctx.fillText("C", 288, 175);},900);

btnReset.setAttribute("disabled",true);
$(".tool-practice").css("pointerEvents","none");
setTimeout(function(){
  // document.querySelector(".tool-practice").style.pointerEvents = "none";

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.moveTo(150,190);
ctx.lineTo(275,190);
ctx.stroke();
ctx.moveTo(275,190);
ctx.arc(275,190,3,0,2*(Math.PI));
ctx.stroke();
ctx.fill();
ctx.moveTo(150,190);
ctx.arc(150,190,3,0,2*(Math.PI));
ctx.fill();
ctx.fillText("A", 130, 190);
ctx.fillText("C", 285, 190);
ctx.fillText("AC is the bisection of line AB",150,280);
console.log('dislaynNone');
$(buttonBox).css("display","none");
btnReset.removeAttribute("disabled");
$(".tool-practice").css("pointerEvents","auto");

img.style.transform = 'rotate(30deg)';
},4000)

}

function re(){

  clearcanvas();
  canvasfun1();
  document.getElementById("title1").style.visibility="visible";
  document.getElementById("image4").style.visibility="visible";
  document.getElementById("titlestep").style.visibility="visible";
  document.getElementById("stepnumber").style.visibility="visible";
  document.getElementById("text").style.visibility="visible";
  document.getElementById("text").innerHTML="Draw a Line equal to diameter of Polygon";
  document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";


}
 function visibleia()
 {
  clearCircle();
  circle1 = new Path2D();
  // ctx.beginPath();
  // ctx.fill();
  // ctx.fillText("A",147,220);
     document.getElementById("image").style.display = "block";
    //  document.getElementById("blick").style.visibility="hidden";   
 }

 function visiblia()
 {
  clearCircle();
  circle1 = new Path2D();
     document.getElementById("image1").style.display = "block";
    //  document.getElementById("blick").style.visibility="hidden";
 }

 function canvasfun(){
  // document.getElementById('blick2').style.visibility="visible";
  //      var canvas = document.getElementById("mycanvas1");        
       j=0;                
      //  if (canvas.getContext) {
      //  var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0,0,550,400);
      ctx.moveTo(50,300);
      ctx.lineTo(400,50);
      ctx.moveTo(50,300);
      ctx.lineTo(430,300);
      ctx.strokeStyle = "black";
      ctx.lineWidth=1;
      ctx.stroke();
      ctx.font = "20px comic sans MS";       
      ctx.closePath();
      ctx.beginPath()
    
      ctx.arc(50,300,3,0,2*(Math.PI));
      ctx.fill();
      ctx.arc(50,300,140,-(Math.PI)/5.1,0);
      ctx.stroke();
      ctx.closePath();
      ctx.fillText("A",25,305);
      ctx.fillText("B",435,305);
      ctx.fillText("C",410,45);

      btnC.setAttribute("disabled",true);
      cirX = 450;
      cirY = 300;
      cirText = "B";
      createCircle();
       

     
    
 }
 var m=0;
 function roti(){
    // var canvas=document.getElementById("mycanvas2");
    // var ctx = canvas.getContext('2d');`
    // var img=document.getElementById("image4");
    if(i==0){
        ctx.beginPath();
        ctx.font='bold 20px comic sans MS';
        ctx.arc(300-50,400-100,100,(Math.PI),0);
        ctx.stroke();
        stepNumber.textContent = "2";
        stepTitle.innerHTML="Draw a semicircle";
        // document.getElementById("text").innerHTML="Draw a semicircle";
        // ctx.Text("Draw a semicircle", 100,100);
        //  document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";

        ctx.closePath(); }
       else if(i==1){
         
        ctx.beginPath();
        ctx.arc(213-50,350-100,3,0,2*Math.PI);
        ctx.fill();
        ctx.moveTo(250-50,313-100);
         ctx.arc(250-50,313-100,3,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(300-50,300-100);
            ctx.arc(300-50,300-100,3,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
    
            ctx.beginPath();
        ctx.moveTo(350-50,314-100);
        ctx.arc(350-50,313-100,3,0,2*Math.PI);
        ctx.fill();
            ctx.beginPath();
            ctx.moveTo(386-50,350-100);
            ctx.arc(386-50,350-100,3,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
            stepNumber.textContent = "3";
            stepTitle.innerHTML = "For n sided,divide the semicircle in n parts";
        //     document.getElementById("text").innerHTML="For n sided,divide the semicircle in n parts";
        //  document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
            }
    else if(i==2){
      ctx.beginPath();
    ctx.moveTo(300-50,400-100);
    ctx.lineTo(250-50,313-100);
    ctx.stroke();
    ctx.fillText("D",190,203);
    stepNumber.textContent = "4";
    stepTitle.innerHTML = "Join the center to any part on the circle";
    // document.getElementById("text").innerHTML="Join the center to any part on the circle";
    //      document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
    
    }
              else if(i==3){
            ctx.beginPath();
            ctx.arc(250-50,313-100,60,Math.PI/8,Math.PI/4);
            ctx.stroke();
            ctx.closePath();
            stepNumber.textContent = "5";
            stepTitle.innerHTML = "Bisect this Line ";
        //     document.getElementById("text").innerHTML="Bisect this Line ";
        //  document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
            
              }
              else if(i==4){
            ctx.beginPath();
        ctx.arc(300-50,400-100,60,-Math.PI/1.8,-Math.PI/2.3);
        ctx.stroke();
        ctx.closePath();
        stepNumber.textContent = "6";
        
              }
              else if(i==5){
                ctx.beginPath();
                ctx.moveTo(275-50,356-100);
                ctx.lineTo(351-50,314-100);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(350-50,400-100);
                ctx.lineTo(351-50,314-100);
                ctx.stroke();
                ctx.fillText("C",300,200);
                stepNumber.textContent = "7";
                stepTitle.innerHTML = "Draw a perpendicular to the baseline";
        //         document.getElementById("text").innerHTML="Draw a perpendicular to the baseline";
        //  document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
              }
              else if(i==6){
                ctx.arc(351-50,314-100,100,0,2*Math.PI);
                ctx.stroke();
                ctx.closePath();
                stepNumber.textContent = "8";
                stepTitle.innerHTML = "Draw a circle with centre C";
        //         document.getElementById("text").innerHTML="Draw a circle with centre C";
        //  document.getElementById("stepnumber").innerHTML="&nbsp;7&nbsp;";
              }
              else if(i==7){
                ctx.beginPath();
                ctx.arc(201,214,100,1.5*Math.PI+Math.PI/7,1.5*Math.PI+Math.PI/5);
                ctx.stroke();
                ctx.closePath()
                ctx.beginPath();
                ctx.arc(401,214,100,1.5*Math.PI-Math.PI/5,1.5*Math.PI-Math.PI/7);
                ctx.stroke();
                ctx.closePath()
                stepNumber.textContent = "9";
                stepTitle.innerHTML = "Create an arc from every vertice on Circle";
        //         document.getElementById("text").innerHTML="Create an arc from every vertice on Circle";
        //  document.getElementById("stepnumber").innerHTML="&nbsp;8&nbsp;";
              }
              else{
                // btnNext.disabled = true ;
                ctx.strokeStyle="#000080";
                ctx.lineWidth=2;
                stepNumber.textContent = "10";
                stepTitle.innerHTML = "Join the vertices to complete the Polygon";
                // document.getElementById("text").innerHTML="Join the vertices to complete the Polygon";
                // document.getElementById("stepnumber").innerHTML="&nbsp;9&nbsp;";
                animate(201,214,301-100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(401,214,301+100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(301-100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3),301+100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(301+100,214,301+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6));
                animate(301+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6),201+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6));
                animate(201+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6),201,214);
             
                console.log("laststep",i);
              }
              i++;
           
              console.log(i); 
       }
 var j=0;
 function rotateimagea()
 {
     var img = document.getElementById('image3');
    //  var canvas = document.getElementById('mycanvas1');        
    //  var ctx = canvas.getContext('2d');
     img.style.transformOrigin='bottom left';
     if(j==0)
     {
     img.style.transform = 'rotate(-60deg)';
     
     ctx.strokeStyle = "black";
     ctx.font = "20px comic sans MS";
     ctx.beginPath();
     ctx.arc(190,300,100,-(Math.PI)/3,-(Math.PI)/8);

     ctx.stroke();
     ctx.closePath();
    //  document.getElementById('blick6').style.visibility="visible";
     setTimeout(function() {
      img.style.transform = 'rotate(180deg)';
      img.style.display = "none";

    }, 500);
   
    btnC.removeAttribute("disabled");
    btnB1.setAttribute("disabled",true);
    cirX = 420;
    cirY = 45;
    cirText = "C";
    createCircle();

     }
     else if(j==1){
      btnC.setAttribute("disabled",true);
      img.style.transform = 'rotate(60deg)';
      ctx.beginPath();
      ctx.arc(163,220,100,-(Math.PI)/8,(Math.PI)/8);
      ctx.stroke();
      ctx.save();
      setTimeout(function(){ 
      ctx.strokeStyle = "black";
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.moveTo(50,300);
      ctx.lineTo(400, 187);
      ctx.stroke();
    ctx.fillText("D",400,187);
    ctx.restore();
      img.style.display = "none";
      $(buttonBox).css("display","none");
      img.style.transform="rotate(-5deg)";
      ctx.fillText("∠DAB is the bisection of ∠BAC",70,370);},900);

     }
      else{
        j=0;
      }
      ++j;
 }
 function visibli1()
 {
    var img =document.getElementById('image3');
    img.style.display = "block";
    // document.getElementById('blick2').style.visibility="hidden";
    img.style.left="35%";
    img.style.top="44%";
    clearCircle();
    circle1 = new Path2D();

 }
 function visibleia1()
 {     var img = document.getElementById('image3');
      //  document.getElementById('blick6').style.visibility="hidden";    
       img.style.display = "block";
       img.style.left="31%";
       img.style.top="27%";
       img.style.transform="rotate(-20deg)";
       clearCircle();
       circle1 = new Path2D();
 }
 function canvasfun1(){
  // var canvas=document.getElementById("mycanvas2");
  // var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.font='bold 20px comic sans MS';
  ctx.strokeStyle="black";
  ctx.lineWidth=1;
  ctx.clearRect(0,0,600,400);
  ctx.moveTo(200-50,400-100);
  ctx.lineTo(400-50,400-100);
  ctx.stroke();
  ctx.fillText("A",130,305);
  ctx.fillText("B",360,305);

  i=0;
 }
 function clearcanvas()
 {
  btnTop.classList.add("hide");
  $(".tool-practice").css("pointerEvents","auto");
  btnNext.addEventListener('click', nextButtonEventListener);

  if (animationFrameID) {
    cancelAnimationFrame(animationFrameID);
    animationFrameID = null;
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
  // displayDiv('tool-practice');
  displayDiv({ classList: { contains: function(className) { return className === "tool-practice"; }} });
  radioButtons.forEach(radio => {
    radio.checked = false;
});

 stepTitle.textContent = "Select the Experiment:";
 btnA.classList.add('hide');
 btnBB.classList.add('hide');
 btnC.classList.add('hide');
 btnB1.classList.add('hide');
$(buttonBox).css("display","none");
 btnNext.disabled = true;
//  canvasfun1();
 console.log(i);
 stepNumber.textContent = "1";
 document.getElementById("image").style.display = "none";
 document.getElementById("image1").style.display = "none";
 document.getElementById("image3").style.display = "none";

btnNext.removeEventListener('click',roti);
btnNext.addEventListener('click', nextButtonEventListener);
console.log("clearcavas")
circle1 = new Path2D();
 }
 
    var i;
    var w=0;
/*

//  Listen for mouse moves
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  console.log(
    "hii",
    event.clientX - rect.left,
    event.clientY - rect.top,
    event.screenX,
    event.screenY
  );
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle1, event.clientX, event.clientY)) {
    if (cirText == "b1'") {
      ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
    } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
    ctx.fillStyle = "#000";
    if (cirText == "b1'") {
      ctx.fillText(cirText, cirX - 9, cirY + 5);
    } else if (cirText != "⨀") {
      ctx.fillText(cirText, cirX - 7, cirY + 5);
    }
    circle1 = new Path2D();
    currentFunction();
    nextQuestion();
  }
});

*/
