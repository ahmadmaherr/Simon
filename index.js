var colors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userChosenColor = [];
var level = 0;
var started = false;

var width = $(window).width();
    if (width <= 480) {
      $("body").click(function(){
          if (!started){
            $("h1").text("level "+ level);
            startSquence();
            started = true;
            }

      });

    } else {
      $("body").keypress(function(){
          if (!started){
            $("h1").text("level "+ level);
            tartSquence();
            started = true;
            }

      });
    }



function startSquence(){
  userChosenColor = [];
  $("h1").text("level "+ level);
  x = Math.floor(Math.random()*4);
var randomChosenColour = colors[x];
  gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userClick = $(this).attr("id");
  userChosenColor.push(userclick);


  var audio = new Audio("sounds/" + userClick + ".mp3");
  audio.play();
checkAnswer(userChosenColor.length-1)
});

function checkAnswer(level){
if(gamePattern[level] === userChosenColor[level])
{
  if(gamePattern.length === userChosenColor.length)
{
  setTimeout(function () {
    startSquence();
  }, 1000);

  level++
}
  else {
  started = false;
  level = 0;
  gamePattern = [];
  var audio = new Audio("sounds/" + "wrong" + ".mp3");
  audio.play();
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  }


}}
