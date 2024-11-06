const dateInput = document.getElementById('date');
const result = document.getElementById("result");
dateInput.addEventListener('click', function() {
        this.showPicker(); // Opens the date picker when the input is clicked
     });


function getDate() {
    let birthdate = new Date(dateInput.value); // Get the selected birth date

    if (!birthdate.getTime()) {
        result.innerHTML = "Please select a valid date."; // Handle invalid date cases
        return;
    }

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let date = new Date();

    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

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
        let daysInPrevMonth = getDaysInMonth(y2, m2 - 1); // Use helper function to get days in the previous month
        d3 = daysInPrevMonth + d2 - d1;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
    dateInput.innerHTML = ""
}

// Helper function to get the number of days in a given month/year
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
