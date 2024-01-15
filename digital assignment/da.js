const input = document.querySelectorAll(".flex input");
const message = document.getElementsByClassName("message");
const btn = document.getElementById("submit");
const inputRadio = document.querySelectorAll(".flex input[type='radio']");

const inputPassword = document.querySelectorAll(".flex input[type='password']");

const inputCheckbox = document.querySelectorAll(".flexinput[type='checkbox']");
const inputSelect = document.querySelector("select");
const clearBtn = document.getElementById("reset");
const inputZip = document.querySelector("#zipcode");
function validate(e) {
if (e.target.value == "") {
document.querySelector(`.${e.target.id}`).classList.add("display");
e.target.classList.add("alert");
} else {
document.querySelector(`.${e.target.id}`).classList.remove("display");
e.target.classList.remove("alert");
}
}
for (let i = 0; i < input.length; i++) {
if (
input[i].type == "text" ||
input[i].type == "password" ||
input[i].type == "email"
) {
input[i].addEventListener("blur", (e) => validate(e));
}
}
function submitValidate(e) {
e.preventDefault();
if (!inputRadio[0].checked && !inputRadio[1].checked) {
document.querySelector(`.${inputRadio[0].name}`).classList.add("display");
} else {
document
.querySelector(`.${inputRadio[0].name}`)
.classList.remove("display");
}
if (
!inputCheckbox[0].checked ||
!inputCheckbox[1].checked ||
!inputCheckbox[2].checked
) {
document
.querySelector(`.${inputCheckbox[0].name}`)
.classList.add("display");
} else {
document
.querySelector(`.${inputCheckbox[0].name}`)
.classList.remove("display");
}
if (inputSelect.value == "") {
document.querySelector(`.${inputSelect.id}`).classList.add("display");
inputSelect.classList.add("alert");
} else {
document.querySelector(`.${inputSelect.id}`).classList.remove("display");
inputSelect.classList.remove("alert");
}
if (inputPassword[0].value != inputPassword[1].value) {
document.querySelector(".notMatching").classList.add("display");
inputPassword[1].classList.add("alert");
} else {
document.querySelector(".notMatching").classList.remove("display");
inputPassword[1].classList.remove("alert");
}
}
btn.addEventListener("click", (e) => submitValidate(e));
inputPassword[0].addEventListener("blur", (e) => {
if (e.target.value.length > 1 && (e.target.value.length < 6 ||
e.target.value.length > 8)) {
document.querySelector(".length").classList.add("display");
inputPassword[0].classList.add("alert");
} else {
document.querySelector(".length").classList.remove("display");
inputPassword[0].classList.remove("alert");
}
});
inputPassword[1].addEventListener("blur", (e) => {
if (e.target.value.length > 1 && (e.target.value.length < 6 ||
e.target.value.length > 8)) {
document.querySelector(".length1").classList.add("display");
inputPassword[1].classList.add("alert");
} else {
document.querySelector(".length1").classList.remove("display");
inputPassword[1].classList.remove("alert");
}
});
inputZip.addEventListener("blur", (e) => {
const res = /^[0-9]+$/;
if (!res.test(e.target.value) && e.target.value.length > 0) {
document.querySelector(".numOnly").classList.add("display");
inputZip.classList.add("alert");
} else {
document.querySelector(".numOnly").classList.remove("display");
inputZip.classList.remove("alert");
}
});