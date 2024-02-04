//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity


//Using document.getElementById to let js be able to access our html elements
let api = document.getElementById("api");
let response = document.getElementById("response");
let val1 = document.getElementById("val1");
let select = document.getElementById("select");

//Created a variable in the global scope to be used as a sort of checking system later on
let value = "";

//Creating basic async functions for each api, where we fetch certain data from the api
const GetTimer = async () => {
    const promise = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
    const data = await promise.json();
    return `Temperature is ${data.dataseries[0].temp2m} degrees celsius`;
}

const GetAgify = async () => {
    const promise = await fetch('https://api.agify.io?name=Jt');
    const data = await promise.json();
    return `Name: ${data.name}, Age: ${data.age}`;
}

const GetBored = async () => {
    const promise = await fetch('https://www.boredapi.com/api/activity');
    const data = await promise.json();
    return data.activity;
}

//Using addEventListener to create an async function that will run when the user clicks the api element
api.addEventListener('click', async (event) => {
    //Creating if, else if, and else statements, where based off of the criteria I set for api.value, it will change the textContent of the response element in the website

    //This if statement, that encapsulates the main other statements, is basically checking whether or not the user's selected input is already selected, so that it doesn't run the api's twice
    if (api.value !== value) {
        if (api.value === "1") {
            response.textContent = await GetTimer();
            response.className = "responseTxt";
            value = api.value;
        } else if (api.value === "2") {
            response.textContent = await GetAgify();
            response.className = "responseTxt";
            value = api.value;
        } else if (api.value === "3") {
            response.textContent = await GetBored();
            response.className = "responseTxt";
            value = api.value;
        }//This else is checking if no api's are selected
         else {
            response.textContent = "NO API SELECTED";
            response.className = "responseTxt";
            value = api.value;
        }
    }
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
})

btnLight.addEventListener('click', (event) => {
    nav.className = "navbar navbar-light bg-light";
    text1.className = "dark";
    text2.className = "d-flex justify-content-end dark";
    box.className = "col-sm-10 lightGreyBg boxHeight";
    innerBox.className = "col-12 dashSection bg-white roundedCorner alpha-4";
    innerBox2.className = "col-12 dashSection bg-white roundedCorner alpha-4";
})



