const prizes = [
  {
    id: 0,
    msg: "Instant cash up to ₹10,000",
  },
  {
    id: 1,
    msg: "2 Perfumes at ₹599",
  },
  {
    id: 2,
    msg: "Flat ₹7,777 welcome bonus",
  },
  {
    id: 3,
    msg: "bonus up to ₹45,000 ",
  },
  {
    id: 4,
    msg: "free hair wax cream",
  }
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum = Math.random() * 5;
  prizeNum = Math.floor(prizeNum);
  console.log(prizeNum);
  return prizeNum;
}



function removeClass() {
  prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");


  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  $(".pop-up-content").fadeIn();

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    // document.getElementById("arrow").classList.add("float");
    activeBtn = false;
  }, 2000);

  prizeText = prizes[prize].msg;

  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
  $(".pop-up").fadeIn();
}

function spin() {
  activeBtn = true;
  audio.play();

  //   document.getElementById("spinner").classList.remove("shake");
  // document.getElementById("arrow").classList.remove("float");
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;

  setTimeout(removeClass, 3000);
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
