var upPressed = false;
var downPresed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false

function Keyup(event) {
  var player = document.getElementById('player');
    if (event.keyCode == 37) {
    leftPressed = false;
    lastPressed = 'left';
    }
    if (event.keyCode == 38) {
      rightPressed = false;
      lastPressed = 'right'
      }
    if (event.keyCode == 39) {
    upPressed = false;
    lastPressed = 'right';
    }
    if (event.keyCode == 40) {
    downPressed = false;
    lastPressed = 'down';
    }
    player.className = 'Character stand ' + lastPressed;
   }
 function move(){
   var player = document.getElementById('player');
   var positionLeft = player.offsetLeft;
   var positionTop = player.offsetTop;
   if (downPressed) {
     player.style.top = positionTop+1 + 'px';
     player.className = 'character walk down';
   }
   if (upPressed) {
    player.style.top = positionTop-1 + 'px';
    player.className = 'character walk up';
  }
  if (leftPressed) {
    player.style.left = positionLeft-1 + 'px';
    player.className = 'character walk left';
  }
  if (rightPressed) {
    player.style.left = positionLeft+1 + 'px';
    player.className = 'character walk right';
  }

 }
 function myKeyDown(event) {
  if (event.keyCode == 37) {
  leftPressed = true;
  }
  if (event.keyCode == 38) {
  upPressed = true;
  }
  if (event.keyCode == 40) {
  downPressed = true;
  }
  if (event.keyCode == 39) {
  rightPressed = true;
  }
 }
 function setHead0() {
   var player = document.getElementById('player')
   player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head0.png)';
 }
 function setHead1() {
  var player = document.getElementById('player')
  player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head1.png)';
}
function setHead2() {
  var player = document.getElementById('player')
  player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head2.png)';
}
function setHead3() {
  var player = document.getElementById('player')
  player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head3.png)';
}
function setHead4() {
  var player = document.getElementById('player')
  player.getElementsByClassName('head')[0].style.backgroundImage = 'url(images/head4.png)';
}
function setBody0() {
  var player = document.getElementById('player')
  player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body0.png)';
}
function setBody1() {
  var player = document.getElementById('player')
  player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body1.png)';
}
function setBody2() {
  var player = document.getElementById('player')
  player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body2.png)';
}
function setBody3() {
  var player = document.getElementById('player')
  player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body3.png)';
}
function setBody4() {
  var player = document.getElementById('player')
  player.getElementsByClassName('body')[0].style.backgroundImage = 'url(images/body4.png)';
}

function myLoadFunction(){
  var player = document.getElementById('player');

  var head0 = document.getElementById('head0');
  head0.addEventListener('click', setHead0);

  var head1 = document.getElementById('head1');
  head1.addEventListener('click', setHead1);

  var head2 = document.getElementById('head2');
  head0.addEventListener('click', setHead2);

  var head3 = document.getElementById('head3');
  head0.addEventListener('click', setHead3);

  var head4 = document.getElementById('head4');
  head0.addEventListener('click', setHead4);

  var body0 = document.getElementById('body0');
  head0.addEventListener('click', setBody0);

  var body1 = document.getElementById('body1');
  head1.addEventListener('click', setBody1);

  var body2 = document.getElementById('body2');
  head2.addEventListener('click', setBody2);

  var body3 = document.getElementById('body3');
  head3.addEventListener('click', setBody3);

  var body4 = document.getElementById('body4');
  head4.addEventListener('click', setBody4);

  timeout = setInterval(move, 10);
  document.addEventListener('keydown', myKeyDown);
  document.addEventListener('keyup', Keyup)
}
document.addEventListener('DOMContentLoaded', myLoadFunction);