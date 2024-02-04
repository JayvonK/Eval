//Basic usage of document.getElementById() to allow the html elements be accessible in the js file
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

//Creating a varibale to store the name of a wickedCssClass
let wickedClass = "";

//Creating an array variable to hold all of the wickedCss classes
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

//This function's purpose is to change the className of the box in the website to give it an animation from wicked css
const ChangeClass = (name) => {
    //Takes in a paremeter and checks if the paremeter is included in the wickedArr, and if it's included inside of the array, then it will change the box's animation
    if(wickedArr.includes(name)){
        result.className = `${name} simple-box pt-5`;
    }
}

//Creating an event listener that will run off of the user's click, and it will pass through the user's input into the ChangeClass function
wickedCSSBtn.addEventListener('click', (event) => {
    ChangeClass(wickedCssClass.value);
})

//Creating another event listener that runs off of the user's click, and it uses math.random to grab a value that's within the wickedArr's index, uses that index in bracket notation to add an animation class to the box
randomCSSBtn.addEventListener('click', (event) => {
    let index = Math.floor(Math.random() * wickedArr.length);
    result.className = `${wickedArr[index]} simple-box pt-5`;
})

//Again creating event listeners, that will change the box's animation class off of the user's click. Each event listener has different values of wicked css class names that they pass into the paremeter of the function.
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

//All this code below is just allowing the page to have a dark mode and light mode. Ability to switch colors on the page from a button click
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