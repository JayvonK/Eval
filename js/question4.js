let wickedCssClass = document.getElementById("wickedCssClass");
let wickedCSSBtn = document.getElementById("wickedCSSBtn");
let randomCSSBtn = document.getElementById("randomCSSBtn");
let result = document.getElementById("result");

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


wickedCSSBtn.addEventListener('click', (event) => {
    if(wickedArr.includes(wickedCssClass.value)){
        result.className = `${wickedCssClass.value} simple-box pt-5`;
    }
})

randomCSSBtn.addEventListener('click', (event) => {
    let index = Math.floor(Math.random() * wickedArr.length);
    result.className = `${wickedArr[index]} simple-box pt-5`;
})
