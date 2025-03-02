const body = document.getElementById("bodyHtml");

const titleOne = document.getElementById("firstTitle");
const titleTwo = document.getElementById("secondTitle");

const letsGo = document.getElementById("letsGo");

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
  body.style.display = "none";
}

setInterval(changeIndex, 5000);

letsGo.addEventListener("click", goToPhotos);
