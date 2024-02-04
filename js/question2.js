//Simply making our html elements accessible
let studentName = document.getElementById("studentName");
let aBtn = document.getElementById("aBtn");
let bBtn = document.getElementById("bBtn");
let cBtn = document.getElementById("cBtn");
let dBtn = document.getElementById("dBtn");
let eBtn = document.getElementById("eBtn");
let fBtn = document.getElementById("fBtn");
let gBtn = document.getElementById("gBtn");
let hBtn = document.getElementById("hBtn");
let iBtn = document.getElementById("iBtn");
let jBtn = document.getElementById("jBtn");
let kBtn = document.getElementById("kBtn");
let lBtn = document.getElementById("lBtn");
let mBtn = document.getElementById("mBtn");
let nBtn = document.getElementById("nBtn");
let oBtn = document.getElementById("oBtn");
let pBtn = document.getElementById("pBtn");
let qBtn = document.getElementById("qBtn");
let rBtn = document.getElementById("rBtn");
let sBtn = document.getElementById("sBtn");
let tBtn = document.getElementById("tBtn");
let uBtn = document.getElementById("uBtn");
let vBtn = document.getElementById("vBtn");
let wBtn = document.getElementById("wBtn");
let xBtn = document.getElementById("xBtn");
let yBtn = document.getElementById("yBtn");
let zBtn = document.getElementById("zBtn");
let firstNameBtn = document.getElementById("firstNameBtn");
let lastNameBtn = document.getElementById("lastNameBtn");

//Creating a student array that will hold the first and last name of certain students
let studentArr = [];

//Creating a bool variable called fName, that will be true, if the user wants to search by first name, and will be false if user wants to search by last name
let fName = true;

//Just two simple click events for my first name button and last name button, that changes the fName bool value
firstNameBtn.addEventListener('click', (event) => {
    fName = true;
})

lastNameBtn.addEventListener('click', (event) => {
    fName = false;
})

//Basic async function that fetches data from my students list
const student = async () => {
    const promise = await fetch('../data/students.json');
    const data = await promise.json();
    return data.studentList;
}

//Making another async funtion that has one parameter and will search through the fetched data based off of the value of the paremeter
const searchName = async (letter) => {
    studentArr = [];
    let arr = await student();

    //The if else statement is to check whether or not the user wants to search by last name or first name
    if (fName) {
        //Using map function to iterate through the array, and checking whether or not the first letter of the student's name is equal to the parameter that's passed through
        arr.map(student => {
            if (student.firstName[0].toLowerCase() === letter) {
                studentArr.push(student.firstName + " " + student.lastName)
            }
        })
    } else {
        //Same thing as above, using map function to iterate through the array, but it will check the first letter of the student's last name
        arr.map(student => {
            if (student.lastName[0].toLowerCase() === letter) {
                studentArr.push(student.firstName + " " + student.lastName)
            }
        })
    }

    //This if else statement, is what populates the student's names onto the website, and if no student's names are in the array, it will show "No Student" on the website
    if (studentArr.length !== 0) {
        studentName.textContent = studentArr.join(", ");
    } else {
        studentName.textContent = "No Student";
    }
}

//All the event listeners below are click events for all the buttons a through z in the website, and depending on the letter of the click, it will pass in a certain paremeter inside of the searchName function
aBtn.addEventListener('click', async (event) => {
    searchName('a');
})

bBtn.addEventListener('click', async (event) => {
    searchName('b');
})

cBtn.addEventListener('click', async (event) => {
    searchName('c');
})

dBtn.addEventListener('click', async (event) => {
    searchName('d');
})

eBtn.addEventListener('click', async (event) => {
    searchName('e');
})

fBtn.addEventListener('click', async (event) => {
    searchName('f');
})

gBtn.addEventListener('click', async (event) => {
    searchName('g');
})

hBtn.addEventListener('click', async (event) => {
    searchName('h');
})

iBtn.addEventListener('click', async (event) => {
    searchName('i');
})

jBtn.addEventListener('click', async (event) => {
    searchName('j');
})

kBtn.addEventListener('click', async (event) => {
    searchName('k');
})

lBtn.addEventListener('click', async (event) => {
    searchName('l');
})

mBtn.addEventListener('click', async (event) => {
    searchName('m');
})

nBtn.addEventListener('click', async (event) => {
    searchName('n');
})

oBtn.addEventListener('click', async (event) => {
    searchName('o');
})

pBtn.addEventListener('click', async (event) => {
    searchName('p');
})

qBtn.addEventListener('click', async (event) => {
    searchName('q');
})

rBtn.addEventListener('click', async (event) => {
    searchName('r');
})

sBtn.addEventListener('click', async (event) => {
    searchName('s');
})

tBtn.addEventListener('click', async (event) => {
    searchName('t');
})

uBtn.addEventListener('click', async (event) => {
    searchName('u');
})

vBtn.addEventListener('click', async (event) => {
    searchName('v');
})

wBtn.addEventListener('click', async (event) => {
    searchName('w');
})

xBtn.addEventListener('click', async (event) => {
    searchName('x');
})

yBtn.addEventListener('click', async (event) => {
    searchName('y');
})

zBtn.addEventListener('click', async (event) => {
    searchName('z');
})


//All this code below is just allowing the page to have a dark mode and light mode. Ability to switch colors on the page from a button click by changing the class names of certain elements
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
    aBtn.className = "btn btn-default border border-primary light";
    bBtn.className = "btn btn-default border border-primary light";
    cBtn.className = "btn btn-default border border-primary light";
    dBtn.className = "btn btn-default border border-primary light";
    eBtn.className = "btn btn-default border border-primary light";
    fBtn.className = "btn btn-default border border-primary light";
    gBtn.className = "btn btn-default border border-primary light";
    hBtn.className = "btn btn-default border border-primary light";
    iBtn.className = "btn btn-default border border-primary light";
    jBtn.className = "btn btn-default border border-primary light";
    kBtn.className = "btn btn-default border border-primary light";
    lBtn.className = "btn btn-default border border-primary light";
    mBtn.className = "btn btn-default border border-primary light";
    nBtn.className = "btn btn-default border border-primary light";
    oBtn.className = "btn btn-default border border-primary light";
    pBtn.className = "btn btn-default border border-primary light";
    qBtn.className = "btn btn-default border border-primary light";
    rBtn.className = "btn btn-default border border-primary light";
    sBtn.className = "btn btn-default border border-primary light";
    tBtn.className = "btn btn-default border border-primary light";
    uBtn.className = "btn btn-default border border-primary light";
    vBtn.className = "btn btn-default border border-primary light";
    wBtn.className = "btn btn-default border border-primary light";
    xBtn.className = "btn btn-default border border-primary light";
    yBtn.className = "btn btn-default border border-primary light";
    zBtn.className = "btn btn-default border border-primary light";
})

btnLight.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-light";
    text1.className = "dark";
    text2.className = "d-flex justify-content-end dark";
    box.className = "col-sm-10 lightGreyBg boxHeight";
    innerBox.className = "col-12 dashSection bg-white roundedCorner alpha-4";
    innerBox2.className = "col-12 dashSection bg-white roundedCorner alpha-4";
    aBtn.className = "btn btn-default border border-primary ";
    bBtn.className = "btn btn-default border border-primary ";
    cBtn.className = "btn btn-default border border-primary ";
    dBtn.className = "btn btn-default border border-primary ";
    eBtn.className = "btn btn-default border border-primary ";
    fBtn.className = "btn btn-default border border-primary ";
    gBtn.className = "btn btn-default border border-primary ";
    hBtn.className = "btn btn-default border border-primary ";
    iBtn.className = "btn btn-default border border-primary ";
    jBtn.className = "btn btn-default border border-primary ";
    kBtn.className = "btn btn-default border border-primary ";
    lBtn.className = "btn btn-default border border-primary ";
    mBtn.className = "btn btn-default border border-primary ";
    nBtn.className = "btn btn-default border border-primary ";
    oBtn.className = "btn btn-default border border-primary ";
    pBtn.className = "btn btn-default border border-primary ";
    qBtn.className = "btn btn-default border border-primary ";
    rBtn.className = "btn btn-default border border-primary ";
    sBtn.className = "btn btn-default border border-primary ";
    tBtn.className = "btn btn-default border border-primary ";
    uBtn.className = "btn btn-default border border-primary ";
    vBtn.className = "btn btn-default border border-primary ";
    wBtn.className = "btn btn-default border border-primary ";
    xBtn.className = "btn btn-default border border-primary ";
    yBtn.className = "btn btn-default border border-primary ";
    zBtn.className = "btn btn-default border border-primary ";
})