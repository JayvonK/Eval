let wickedCssClass = document.getElementById("wickedCssClass");
let wickedCSSBtn = document.getElementById("wickedCSSBtn");
let randomCSSBtn = document.getElementById("randomCSSBtn");
let result = document.getElementById("result");
let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");
let dropdown3 = document.getElementById("dropdown3");
let dropdown4 = document.getElementById("dropdown4");
let dropdown5 = document.getElementById("dropdown5");
let dropdown6 = document.getElementById("dropdown6");
let dropdown7 = document.getElementById("dropdown7");
let dropdown8 = document.getElementById("dropdown8");
let dropdown9 = document.getElementById("dropdown9");
let dropdown10 = document.getElementById("dropdown10");
let dropdown11 = document.getElementById("dropdown11");
let dropdown12 = document.getElementById("dropdown12");
let dropdown13 = document.getElementById("dropdown13");
let dropdown14 = document.getElementById("dropdown14");
let dropdown15 = document.getElementById("dropdown15");
let dropdown16 = document.getElementById("dropdown16");
let dropdown17 = document.getElementById("dropdown17");
let dropdown18 = document.getElementById("dropdown18");
let dropdown19 = document.getElementById("dropdown19");
let dropdown20 = document.getElementById("dropdown20");
let dropdown21 = document.getElementById("dropdown21");

let wickedClass = "";


let wickedArr = ["barrelRoll",
    "fadeIn",
    "floater",
    "heartbeat",
    "pulse",
    "rollerLeft",
    "rollerRight",
    "rotateIn",
    "rotateInLeft",
    "rotateInRight",
    "rotation",
    "shake",
    "sideToSide",
    "slideDown",
    "slideLeft",
    "slideRight",
    "slideUp",
    "spinner",
    "wiggle",
    "zoomer",
    "zoomerOut"]

const ChangeClass = (name) => {
    if(wickedArr.includes(name)){
        result.className = `${name} simple-box pt-5`;
    }
}

wickedCSSBtn.addEventListener('click', (event) => {
    ChangeClass(wickedCssClass.value);
})

randomCSSBtn.addEventListener('click', (event) => {
    let index = Math.floor(Math.random() * wickedArr.length);
    result.className = `${wickedArr[index]} simple-box pt-5`;
})

let nav = document.getElementById("nav");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let box = document.getElementById("box");
let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let innerBox = document.getElementById("innerBox");
let innerBox2 = document.getElementById("innerBox2");

btnDark.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-dark2";
    text1.className = "light";
    text2.className = "d-flex justify-content-end light";
    box.className = "col-sm-10 bg-dark1 boxHeight";
    innerBox.className = "col-12 dashSection bg-dark2 roundedCorner alpha-4 light";
    innerBox2.className = "col-12 dashSection bg-dark2 roundedCorner alpha-4 light";
})

btnLight.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-light";
    text1.className = "dark";
    text2.className = "d-flex justify-content-end dark";
    box.className = "col-sm-10 lightGreyBg boxHeight";
    innerBox.className = "col-12 dashSection bg-white roundedCorner alpha-4";
    innerBox2.className = "col-12 dashSection bg-white roundedCorner alpha-4";
})

dropdown1.addEventListener('click', (event) => {
    ChangeClass("barrelRoll");
})
dropdown2.addEventListener('click', (event) => {
    ChangeClass("fadeIn");
})
dropdown3.addEventListener('click', (event) => {
    ChangeClass("floater");
})
dropdown4.addEventListener('click', (event) => {
    ChangeClass("heartBeat");
})
dropdown5.addEventListener('click', (event) => {
    ChangeClass("pulse");
})
dropdown6.addEventListener('click', (event) => {
    ChangeClass("rollerLeft");
})
dropdown7.addEventListener('click', (event) => {
    ChangeClass("rollerRight");
})
dropdown8.addEventListener('click', (event) => {
    ChangeClass("rotateIn");
})
dropdown9.addEventListener('click', (event) => {
    ChangeClass("rotateInLeft");
})
dropdown10.addEventListener('click', (event) => {
    ChangeClass("rotateInRight");
})
dropdown11.addEventListener('click', (event) => {
    ChangeClass("rotation");
})
dropdown12.addEventListener('click', (event) => {
    ChangeClass("shake");
})
dropdown13.addEventListener('click', (event) => {
    ChangeClass("sideToSide");
})
dropdown14.addEventListener('click', (event) => {
    ChangeClass("slideDown");
})
dropdown15.addEventListener('click', (event) => {
    ChangeClass("slideLeft");
})
dropdown16.addEventListener('click', (event) => {
    ChangeClass("slideRight");
})
dropdown17.addEventListener('click', (event) => {
    ChangeClass("slideUp");
})
dropdown18.addEventListener('click', (event) => {
    ChangeClass("spinner");
})
dropdown19.addEventListener('click', (event) => {
    ChangeClass("wiggle");
})
dropdown20.addEventListener('click', (event) => {
    ChangeClass("zoomer");
})
dropdown21.addEventListener('click', (event) => {
    ChangeClass("zoomerOut");
})