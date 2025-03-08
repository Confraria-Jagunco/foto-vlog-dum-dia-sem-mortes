const body = document.getElementById("body");

const header = document.getElementById("header");
const cover = document.getElementById("cover");
const toConcert = document.getElementById("toConcert");

const titleOne = document.getElementById("firstTitle");
const titleTwo = document.getElementById("secondTitle");

const letsGo = document.getElementById("letsGo");

const previousImage = document.getElementById("previousImage");
const placeImages = document.getElementById("placeImages");
const nextImage = document.getElementById("nextImage");

const divKillButton = document.getElementById("divKillButton");
const killButton = document.getElementById("killButton");

const thanks = document.getElementById("thanks");
const writerProfile = document.getElementById("writerProfile");
const footer = document.getElementById("footer");

const album = [
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
  "https://i.imgur.com/8wiwGDX.png"
];

alert("Para uma experiência melhor, use a tela na horizontal, caso o Usuário esteja no celular, ou a tela maximizada. Obrigado.");

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
  cover.style.display = "none";
  toConcert.style.display = "none";
  galery.style.display = "flex";
}

placeImages.src = album[indexAlbum];

function showNextImage() {
  indexAlbum++;
  placeImages.src = album[indexAlbum];
  if (indexAlbum > album.length - 1) {
    divKillButton.style.display = "flex";
    galery.style.display = "none";
  } else if (indexAlbum != 0) {
    previousImage.style.display = "flex";
  } else {
    previousImage.style.display = "none";
  }
}

function showPreviousImage() {
  indexAlbum--;
  placeImages.src = album[indexAlbum];
  if (indexAlbum < 0) {
    indexAlbum = album.length - 1;
    placeImages.src = album[indexAlbum];
  } else if (indexAlbum != 0) {
    previousImage.style.display = "flex";
  } else {
    previousImage.style.display = "none";
  }
}

function goToFinal() {
  divKillButton.style.display = "none";
  body.style.height = "100%";
  galery.style.display = "none";
  header.style.display = "flex";
  header.style.position = "relative";
  thanks.style.display = "flex";
  writerProfile.style.display = "flex";
  footer.style.display = "flex";
}

setInterval(changeIndex, 5000);

letsGo.addEventListener("click", goToConcert);
nextImage.addEventListener("click", showNextImage);
previousImage.addEventListener("click", showPreviousImage);
killButton.addEventListener("click", goToFinal);
