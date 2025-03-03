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
  "https://i.imgur.com/XcplBPJ.jpeg",
  "https://i.imgur.com/Z6pNOQ6.png",
  "https://i.imgur.com/jWCNcE3.png",
  "https://i.imgur.com/D0B7KXP.jpeg",
  "https://i.imgur.com/gujVs9l.png",
  "https://i.imgur.com/g2mW82V.png",
  "https://i.imgur.com/srjr1i6.jpeg",
  "https://i.imgur.com/6TRRKWR.jpeg",
  "https://i.imgur.com/QefjpXy.jpeg",
  "https://i.imgur.com/GPjd2s2.png",
  "https://i.imgur.com/1LG8mDt.png",
  "https://i.imgur.com/GUVbtzR.jpeg",
  "https://i.imgur.com/sxR1SGw.jpeg",
  "https://i.imgur.com/ZUf03wj.jpeg",
  "https://i.imgur.com/gz0gmsm.jpeg",
  "https://i.imgur.com/sNmVv9s.png",
  "https://i.imgur.com/3yCWXWA.png",
  "https://i.imgur.com/yz6PXCI.jpeg",
  "https://i.imgur.com/AklbLXm.jpeg",
  "https://i.imgur.com/aAhXz4y.jpeg",
  "https://i.imgur.com/KP8hc6O.png",
  "https://i.imgur.com/a7zsJEC.png",
  "https://i.imgur.com/wk7eho3.jpeg",
  "https://i.imgur.com/3on4I52.jpeg",
  "https://i.imgur.com/w17DTuo.jpeg",
  "https://i.imgur.com/l7YmN65.jpeg",
  "https://i.imgur.com/UP3poQm.jpeg",
  "https://i.imgur.com/yIkUpRf.png",
  "https://i.imgur.com/ho1GKny.jpeg",
  "https://i.imgur.com/JXNU4iA.png",
  "https://i.imgur.com/8wiwGDX.png",
  "https://i.imgur.com/uNN4ssY.jpeg"
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
