const cardListBox = document.querySelector(".card-list-box").childNodes;
cardListBox.forEach((child) => {
  console.log(child);
});
cardListBox[3].addEventListener("mouseover", function () {
  this.childNodes[1].childNodes[3].src = "./images/name_sin.png";
});
cardListBox[3].addEventListener("mouseout", function () {
  this.childNodes[1].childNodes[3].src = "./images/name2_sin.png";
});
cardListBox[5].addEventListener("mouseover", function () {
  this.childNodes[1].childNodes[3].src = "./images/name_ji.png";
});
cardListBox[5].addEventListener("mouseout", function () {
  this.childNodes[1].childNodes[3].src = "./images/name2_ji.png";
});
cardListBox[7].addEventListener("mouseover", function () {
  this.childNodes[1].childNodes[3].src = "./images/name_ju.png";
});
cardListBox[7].addEventListener("mouseout", function () {
  this.childNodes[1].childNodes[3].src = "./images/name2_ju.png";
});
cardListBox[9].addEventListener("mouseover", function () {
  this.childNodes[1].childNodes[3].src = "./images/name_sun.png";
});
cardListBox[9].addEventListener("mouseout", function () {
  this.childNodes[1].childNodes[3].src = "./images/name2_sun.png";
});
