
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
// const btnLine = document.querySelector(".btn-line");
// btnLine.addEventListener("click", drawInitialLine);
// const btnaDash = document.querySelector(".btn-a-dash");
// btnaDash.addEventListener("click", a);
// const btna = document.querySelector(".btn-a");
// btna.addEventListener("click", b);
// const btnbOneDash = document.querySelector(".btn-b-one-dash");
// btnbOneDash.addEventListener("click", b11);
// const btnThetaOne = document.querySelector(".btn-theta-one");
// btnThetaOne.addEventListener("click", b1);
// const btnB = document.querySelector(".btn-b");
// btnB.addEventListener("click", bb);
// const btnBOne = document.querySelector(".btn-b-one");
// btnBOne.addEventListener("click", b2);
// const btnThetaTwo = document.querySelector(".btn-theta-two");
// btnThetaTwo.addEventListener("click", b22);
// const btnBDash = document.querySelector(".btn-b-dash");
// btnBDash.addEventListener("click", bbb);
// const btnTrace = document.querySelector(".btn-trace");
// btnTrace.addEventListener("click", hhhh);
// const btnH = document.querySelector(".btn-h");
// btnH.addEventListener("click", ha);
// const btnV = document.querySelector(".btn-v");
// btnV.addEventListener("click", v);

const btnA = document.querySelector('.btn-A');

const btnBB = document.querySelector('.btn-B');

const btnB1 = document.querySelector('.btn-B1');

const btnC = document.querySelector('.btn-c');

const btnNext = document.querySelector(".btn-next");

const buttonBox = document.querySelector(".practice-step-button");

const box = document.querySelector(".box");

const dropDown = document.querySelector('.shapeDrop');


const radioButtons = document.querySelectorAll('input[name="navigation"]');

const taskTitle = document.querySelector(".task-title");

// radioButtons.style.cursor= "pointer";

radioButtons.forEach(function(radio) {
 
  radio.addEventListener('change', function() {
    btnNext.disabled = false;
    btnReset.disabled = false;
    console.log(radio.value);
    if (radio.value === 'third') {
      console.log("radio visible")
      dropDown.classList.remove('hide');
  } else {
    console.log("radio non visible")

    dropDown.classList.add('hide');
  }
  }); 

});

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
    taskTitle.textContent = "Objective";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    taskTitle.textContent = "Solution";
    $(stepTitle).css("margin-left","5rem");
    stepNumber.classList.add('hide');
btnTop.classList.add("hide");

    console.log("reched here")
    quizDiv.classList.remove('hide');
    btnNext.addEventListener('click', nextButtonEventListener);
  
    radioButtons.forEach(radio => {
      radio.checked = false;
    
  })

  circle1 = new Path2D();
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
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

btnNext.removeEventListener('click',handleDropdownChange);
btnNext.addEventListener('click', nextButtonEventListener);
//  clearcanvas();
  }
}

let fun3Executed = false; // Flag to check if fun3 has been executed

let canExecute = false;



let nextButtonEventListener = function() {
  const option1 = document.getElementById('1').checked;
  const option2 = document.getElementById('2').checked;
  const option3 = document.getElementById('3').checked;

  if (option1) {
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
  
    // buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    $(stepTitle).css("margin-left","0");
    stepTitle.innerHTML = "<strong>Learn how to bisect a line</strong>";
    console.log("Reached here");
    stepNumber.classList.remove('hide');
    // btnReset.setAttribute("disabled",true);
    fun1();
  } else if (option2) {
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
    buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    stepTitle.innerHTML = "<strong>Learn how to bisect an angle</strong>";
    stepNumber.classList.remove('hide');
    $(stepTitle).css("margin-left","0");


    fun2();
  } else if (option3) {
    // dropdownContainer.style.display = 'block';
    // $(dropdownContainer).css("display", "block");
    quizDiv.classList.add('hide');
    $(".canvas").css("display", "block");
    buttonBox.classList.remove('hide');
    btnNext.disabled = true;
    console.log("Reached here");
    stepTitle.innerHTML = "<strong>Learn how to draw a polygon</strong>";
    stepNumber.classList.remove('hide');
    $(stepTitle).css("margin-left","0");


    fun3();

    fun3Executed = true; // Set the flag to true after fun3 is executed
    btnNext.removeEventListener('click', nextButtonEventListener);
    btnNext.addEventListener('click', handleDropdownChange); 
  }
};

btnNext.addEventListener('click', nextButtonEventListener);

function handleDropdownChange() {
  const selectedShape = document.getElementById('shapeDropdown').value;


  if (selectedShape === 'hexagon') {
    console.log("hexagon");
    
     roti();
  } else if (selectedShape === 'pentagon') {
    console.log("pentagon");

      roti1();
  }

}


function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}


function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationFrameID = requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}




function ciRest(){
  cirX = 0;
  cirY = 0;

}
function resetAll() {
  btnReset.disabled = true;
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
  btnReset.setAttribute("disabled", true);
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
    // ctx.fill();

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
  ctx.fillStyle = "black"; // or any other color
  ctx.font = "bold 15px nunito,sans-serif ";
  ctx.fillText("Note: Click on the compass to draw an arc", 130, 20);
  // ctx.beginPath();
  // ctx.fill();
  // ctx.fillText("A",147,220);
     document.getElementById("image").style.display = "block";
    //  document.getElementById("blick").style.visibility="hidden";   
 }

 function visiblia()
 {
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  clearCircle();
  circle1 = new Path2D();
     document.getElementById("image1").style.display = "block";
    //  ctx.fillStyle = "black"; // or any other color
    //  ctx.font = "bold 20px Comic Sans MS";
    //  ctx.fillText("Note: Click on the compass to draw an arc", 130, 190);
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
  console.log(canvas.width,canvas.height);

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
                btnNext.setAttribute('disabled',true);
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
       var p=0;
       function roti1() {
        if (p == 0) {
            ctx.beginPath();
            ctx.font = 'bold 20px comic sans MS';
            ctx.arc(300 - 50, 400 - 100, 100, Math.PI, 0);
            ctx.stroke();
            ctx.beginPath();
        
            stepNumber.textContent = "2";
            stepTitle.innerHTML = "Draw a semicircle with <b>AB</b> as diameter";
            ctx.closePath();
        } else if (p == 1) { 
             ctx.beginPath();
            ctx.arc(169,241, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.moveTo(219, 204);
            ctx.arc(219,204, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
              ctx.moveTo(280, 204);
            ctx.arc(280, 204, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
             ctx.moveTo(330, 241);
            ctx.arc(330, 241, 3, 0, 2 * Math.PI);
            
            ctx.fill();
      
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(250, 300);
           ctx.arc(250, 300, 3, 0, 2 * Math.PI);
           
           ctx.fill();
     
           ctx.closePath();
            stepNumber.textContent = "3";
            stepTitle.innerHTML = "For n sided, divide the semicircle in n parts";
        } else if (p == 2) {
            ctx.beginPath();
            ctx.moveTo(201, 150);
            ctx.lineTo(250, 300);
         
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(313, 100);
            ctx.lineTo(250, 300);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(385, 200);
            ctx.lineTo(250, 300);
            ctx.stroke();
            ctx.closePath();
            ctx.fillText("D", 190, 203);
            ctx.fillText("E", 260, 195);
            ctx.fillText("F", 330, 233);
            ctx.fillText("O", 250, 320);
            stepNumber.textContent = "4";
            stepTitle.innerHTML = "Join the center to three parts of the semi-circle";
        } else if (p == 3) {
            ctx.beginPath();
            ctx.arc(350, 300, 100,-Math.PI / 2.2, -Math.PI / 2.7);
            ctx.stroke();
            ctx.closePath();
            stepNumber.textContent = "5";
            stepTitle.innerHTML = "Using <b>OB</b> as the radius, draw an arc from <b>B</b> that intersects the extention of <b>OF</b>";
        }
        
   
         else if (p == 4) {
            ctx.beginPath();
            ctx.arc(219, 204, 100,315 * Math.PI / 180, 330 * Math.PI / 180);           
                 ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(313, 150);
            ctx.arc(299, 144, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();

            stepNumber.textContent = "6";
            stepTitle.innerHTML = "Using <b>OB</b> as radius, draw an arc from <b>D</b> that intersects the extention of <b>OE</b>";
        } 
      
         else {
            ctx.strokeStyle = "#000080";
            ctx.lineWidth = 2;
            stepNumber.textContent = "7";
            stepTitle.innerHTML = "Join the vertices to complete the Polygon";
            btnNext.setAttribute('disabled',true);
            animate(299, 144, 269 - 100 * Math.cos(Math.PI / 3), 291 - 100 * Math.sin(Math.PI / 3));
            animate(299, 144, 329 + 100 * Math.cos(Math.PI / 3), 291 - 100 * Math.sin(Math.PI / 3));
            // animate(301 - 100 * Math.cos(Math.PI / 3), 214 - 100 * Math.sin(Math.PI / 3), 301 + 100 * Math.cos(Math.PI / 3), 214 - 100 * Math.sin(Math.PI / 3));
            animate(379, 204, 301 + 100 * Math.sin(Math.PI / 6), 214 + 100 * Math.cos(Math.PI / 6));// right side
            animate(301 + 100 * Math.sin(Math.PI / 6), 214 + 100 * Math.cos(Math.PI / 6), 201 + 100 * Math.sin(Math.PI / 6), 214 + 100 * Math.cos(Math.PI / 6));
            animate(201 + 100 * Math.sin(Math.PI / 6), 214 + 100 * Math.cos(Math.PI / 6), 219, 204); // left side
            console.log("laststep", p);
        }
        p++;
        console.log(p);
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
    img.style.left="37.5%";
    img.style.top="42.5%";
    clearCircle();
    ctx.fillStyle = "black"; // or any other color
    ctx.font = "bold 15px nunito,sans-serif ";
    ctx.fillText("Note: Click on the compass to draw an arc", 130, 20);
    circle1 = new Path2D();

 }
 function visibleia1()
 {     var img = document.getElementById('image3');
      //  document.getElementById('blick6').style.visibility="hidden";    
       img.style.display = "block";
       img.style.left="34%";
       img.style.top="22.5%";
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
  p=0;
 }
 function clearcanvas()
 {
  document.getElementById('shapeDropdown').selectedIndex = 0;
  dropDown.classList.add('hide');
  btnTop.classList.add("hide");
  stepNumber.classList.add('hide');
  $(stepTitle).css("margin-left","5rem");

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

p=0;
 stepTitle.textContent = "Select the Experiment:";
 btnA.classList.add('hide');
 btnBB.classList.add('hide');
 btnC.classList.add('hide');
 btnB1.classList.add('hide');
$(buttonBox).css("display","none");
 btnNext.disabled = true;
 btnReset.disabled = true;
//  canvasfun1();
 console.log(i);
 stepNumber.textContent = "1";
 document.getElementById("image").style.display = "none";
 document.getElementById("image1").style.display = "none";
 document.getElementById("image3").style.display = "none";

btnNext.removeEventListener('click',handleDropdownChange);
btnNext.addEventListener('click', nextButtonEventListener);
console.log("clearcavas")
circle1 = new Path2D();
 }
    var p;
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
