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

function resolveAfter30Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 30000);
    });
}
  
async function asyncCall() {
    alert('calling');
    const result = await resolveAfter30Seconds();
    alert(result);
    asyncCall();
    // Expected output: "resolved"
}
  
asyncCall();