// document.getElementById("time").innerHTML = new Date().toLocaleString();

var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var AmPm = "AM";
  if (hours > 12) {
    var AmPm = "PM";
    hours %= 12;
  }
  Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  Target_apm.innerText = `${AmPm}`;
}
clock();
setInterval(clock, 1000); // 1초마다 실행

function pink() {
  document.body.style.backgroundColor = "pink";
}
function lightblue() {
  document.body.style.backgroundColor = "lightblue";
}
function yellow() {
  document.body.style.backgroundColor = "yellow";
}
function reset() {
  document.body.style.backgroundColor = "linen";
}
function lightgreen() {
  document.body.style.backgroundColor = "lightgreen";
}

function showhtml() {
  document.getElementById("fig").src = "img/html5.jpg";
  document.getElementById("desc").innerHTML = "<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.";
}

function showcss() {
  document.getElementById("fig").src = "img/css3.jpg";
  document.getElementById("desc").innerHTML = "<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.";
}

function showjs() {
  document.getElementById("fig").src = "img/javascript.jpg";
  document.getElementById("desc").innerHTML = "<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. ";
}

function hide() {
  document.getElementById("fig").src = "";
  document.getElementById("desc").innerHTML = "";
}
