const body = document.getElementById("body");

const header = document.getElementById("header");
const main = document.getElementById("main");
const toConcert = document.getElementById("toConcert");

const titleOne = document.getElementById("firstTitle");
const titleTwo = document.getElementById("secondTitle");

const letsGo = document.getElementById("letsGo");



const previousImage = document.getElementById("previousImage");
const placeImages = document.getElementById("placeImages");
const nextImage = document.getElementById("nextImage");

var index = 0;
var indexAlbum = 0;

function changeIndex() {
  titleOne.style.display = "none";
  titleTwo.style.display = "flex";
  index++;
  if (index > 1) {
    index = 0;
    titleOne.style.display = "flex";
    titleTwo.style.display = "none";
  }
}

function goToConcert() {
  header.style.display = "none";
  main.style.display = "none";
  toConcert.style.display = "none";
  galery.style.display = "flex";
}

var album = [
  "https://i.imgur.com/gLDfrLH.jpeg",
  "https://i.imgur.com/8DHfItE.png",
  "https://i.imgur.com/akSj7R5.jpeg",
  "https://i.imgur.com/AGE1odA.png",
  "https://i.imgur.com/Z6pNOQ6.png",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

placeImages.src = album[indexAlbum];

function showNextImage() {
  indexAlbum++;
  placeImages.src = album[indexAlbum];
  if (indexAlbum > album.length - 1) {
    indexAlbum = 0;
    placeImages.src = album[indexAlbum];
  }
}

function showPreviousImage() {
  indexAlbum--;
  placeImages.src = album[indexAlbum];
  if (indexAlbum < 0) {
    indexAlbum = album.length - 1;
    placeImages.src = album[indexAlbum];
  }
}

setInterval(changeIndex, 5000);

letsGo.addEventListener("click", goToConcert);
nextImage.addEventListener("click", showNextImage);
previousImage.addEventListener("click", showPreviousImage);
