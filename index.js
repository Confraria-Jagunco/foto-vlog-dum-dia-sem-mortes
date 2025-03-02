const body = document.getElementById("body");

const header = document.getElementById("header");
const main = document.getElementById("main");
const toConcert = document.getElementById("toConcert");

const titleOne = document.getElementById("firstTitle");
const titleTwo = document.getElementById("secondTitle");

const letsGo = document.getElementById("letsGo");

const cover = document.getElementById("cover");
const introduction = document.getElementById("introduction");

var index = 0;

function changeIndex () {
    titleOne.style.display = "none";
    titleTwo.style.display = "flex";
    index++;
    if (index > 1) {
      index = 0;
      titleOne.style.display = "flex";
      titleTwo.style.display = "none";
    }
};

function goToPhotos () {
  header.style.display = "none";
  main.style.display = "none";
  toConcert.style.display = "none";
  cover.style.display = "flex";
}

setInterval(changeIndex, 5000);

letsGo.addEventListener("click", goToPhotos);
