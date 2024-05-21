// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

/*
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(8, 19, 92, 0.9)), to(rgba(8, 19, 92, 0.9))), url(../images/michael.jpg);
  background-image: -webkit-linear-gradient(left, rgba(8, 19, 92, 0.9), rgba(8, 19, 92, 0.9)), url(../images/michael.jpg);
  background-image: -moz-linear-gradient(left, rgba(8, 19, 92, 0.9), rgba(8, 19, 92, 0.9)), url(../images/michael.jpg);
  background-image: -o-linear-gradient(left, rgba(8, 19, 92, 0.9), rgba(8, 19, 92, 0.9)), url(../images/michael.jpg);
  background-image: linear-gradient(to right, rgba(8, 19, 92, 0.9), rgba(8, 19, 92, 0.9)), url(../images/michael.jpg);
*/

// Credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// I don't properly understand how async works
// so it was a delightful surprise to have this work the first time

function progressSlideshow(){
    slideshowState += 1;
    if(slideshowState >= slideshowSize){
        slideshowState = 0;
    }
    let heroArea = document.getElementsByClassName("hero_area")[0];
    heroArea.style.backgroundImage = `linear-gradient(to right, rgba(8, 19, 92, 0.9), rgba(8, 19, 92, 0.9)), url(../images/slideshow${slideshowState}.jpg)`;
}

function changeBackgroundAndWait() {
    progressSlideshow();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('timeout expired.');
      }, 30000);
    });
}
  
async function asyncBackgroundSlideshow() {
    console.log('changing background...');
    const result = await changeBackgroundAndWait();
    console.log(result);
    asyncBackgroundSlideshow();
    // Expected output: "resolved"
}

// Fuck you I'm using a global variable
var slideshowSize = 2;
var slideshowState = slideshowSize - 1;
asyncBackgroundSlideshow();