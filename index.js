const titleOne = document.getElementById("firstTitle");
const titleTwo = document.getElementById("secondTitle");

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

setInterval(changeIndex, 5000);