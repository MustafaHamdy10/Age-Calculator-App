
// Initialize the date input with the current date

let userInput = document.getElementById("date");

// Set the maximum date to the current date

userInput.max = new Date().toISOString().split("T")[0];

// Get the result element

let result=document.getElementById("result");

// Make a function to calculate the age .
function calculateAge() {

    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3=y2-y1;

    if (m2 >= m1) {

        m3 = m2 - m1;

    } else {
        
        y3--;

        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {

        d3 = d2 - d1;

    } else {

        m3--;

        d3 = daysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {

        m3 = 11;

        y3--;
    }

    result.innerHTML = 
    `You're <span>${y3}</span> years,
     <span>${m3}</span> months,
    <span>${d3}</span> days old.`;
};

// Make a function to get the days in a month .
function daysInMonth(month, year) {

    return new Date(year, month, 0).getDate();

};

