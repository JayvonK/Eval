//All this code below is just allowing the page to have a dark mode and light mode. Ability to switch colors on the page from a button click by changing the class names of certain elements
let nav = document.getElementById("nav");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let box = document.getElementById("box");
let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let innerBox = document.getElementById("innerBox");
let innerBox2 = document.getElementById("innerBox2");

//On click the className of certain elements change, and it inherits class from the jayvon.css file, and bootstrap
btnDark.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-dark2";
    text1.className = "light";
    text2.className = "d-flex justify-content-end light";
    box.className = "col-12 col-lg-10 bg-dark1 boxHeight";
    innerBox.className = "col-12 dashSection bg-dark2 roundedCorner alpha-4 light";
    innerBox2.className = "col-12 dashSection bg-dark2 roundedCorner alpha-4 light";
})

btnLight.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-light";
    text1.className = "dark";
    text2.className = "d-flex justify-content-end dark";
    box.className = "col-12 col-lg-10 lightGreyBg boxHeight";
    innerBox.className = "col-12 dashSection bg-white roundedCorner alpha-4";
    innerBox2.className = "col-12 dashSection bg-white roundedCorner alpha-4";
})