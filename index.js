// Select the inputs 
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const year = document.querySelector("#year")

// Select the divs of inputs to add error messages
const dayDiv = document.querySelector(".day")
const monthDiv = document.querySelector(".month")
const yearDiv = document.querySelector(".year")

// Select to labels of inpts to show error changes
const dayLabel = document.querySelector("#dayLabel")
const monthLabel = document.querySelector("#monthLabel")
const yearLabel = document.querySelector("#yearLabel")

// Select the spans that will replace with the lived days,months,years
const showDays = document.querySelector("#showDays")
const showMonths = document.querySelector("#showMonths")
const showYears = document.querySelector("#showYears")

// Select the div that spans are located in
const bottom = document.querySelector(".bottom")

// Select the calculate button to add eventlisteners
const button = document.querySelector(".calculate")

// Get the current times
const now = new Date()
const currentDay = now.getDate()
const currentMonth = now.getMonth() + 1 
const currentYear = now.getFullYear()
// Create a variable that contains true/false; in case of there are any errors, stop the calculation
let isAllRight = true

// Add an eventlistener to "day" input that will make some error changes when the day is not in the range of 1-31 
day.addEventListener("change", (e)=>{
    e.preventDefault()
    let numberStrDay = e.target.value
    let numberDay = Number(numberStrDay)
    let pElems = dayDiv.querySelectorAll("p")     // Look at the div of "day" input for a p element (we will show error messages on p elements)
    console.log(numberDay)
    if (numberDay<32 && numberDay>0){       // Check the input value is in the range
        if (pElems.length>0){       // Make sure that there are no error messages shown to user
            pElems[0].remove()      // If there is, remove it because it's in the range
            day.style.borderColor="rgba(62, 61, 61, 0.3)"
            day.style.borderWidth="1px"
            isAllRight = true
        } else {
            console.log("day is ok")
        }
    } else {
        if (pElems.length>0){      // If input is not in the range but error message is already shown
            console.log("error has already shown")
        } else{       // If input is not in the range but no error message is shown, show it
            console.log("day is invalid")
            let pDay = createP("day")
            dayDiv.appendChild(pDay)
            day.style.borderColor="red"
            day.style.borderWidth="2px"
            isAllRight = false
        }
    }
})

// Add an eventlistener to "month" input that will make some error changes when the month is not in the range of 1-12
month.addEventListener("change", (e)=>{
    e.preventDefault()
    let numberStrMonth = e.target.value
    let numberMonth = Number(numberStrMonth)
    let pElems = monthDiv.querySelectorAll("p")     // Look at the div of "month" input for a p element (we will show error messages on p elements)
    console.log(numberMonth)
    if (numberMonth<13 && numberMonth>0){       // Check the input value is in the range
        if (pElems.length>0){       // Make sure that there are no error messages shown to user
            pElems[0].remove()      // If there is, remove it because it's in the range
            month.style.borderColor="rgba(62, 61, 61, 0.3)"
            month.style.borderWidth="1px"
            isAllRight = true
        } else {
            console.log("month is ok")
        }
    } else {
        if (pElems.length>0){       // If input is not in the range but error message is already shown
            console.log("error has already shown")
        } else{         // If input is not in the range but no error message is shown, show it
            console.log("month is invalid")
            let pMonth =createP("month")
            monthDiv.appendChild(pMonth)
            month.style.borderColor="red"
            month.style.borderWidth="2px"
            isAllRight = false
        }
        
    }
})

// Add an eventlistener to "year" input that will make some error changes when the year is in the future
// (now is 2023, user can enter 2023 as birth year but if the user enter a date that is in the future we will carry that later)
year.addEventListener("change", (e)=>{
    e.preventDefault()
    let numberStrYear = e.target.value
    let numberYear = Number(numberStrYear)
    let pElems = yearDiv.querySelectorAll("p")      // Look at the div of "year" input for a p element (we will show error messages on p elements)
    console.log(numberYear)
    if (numberYear<=currentYear){      // Check the input value is not more than current year (user will be able to enter now's year)
        if (pElems.length>0){       // Make sure that there are no error messages shown to user
            pElems[0].remove()      // If there is, remove it because it's in the range
            year.style.borderColor="rgba(62, 61, 61, 0.3)"
            year.style.borderWidth="1px"
            isAllRight = true
        } else {
            console.log("year is ok")
        }
    } else{
        if (pElems.length>0){       // If input is not in the range but error message is already shown
            console.log("error has already shown")
        } else {        // If input is not in the range but no error message is shown, show it
            console.log("year is invalid")
            let pYear = createP("year")
            yearDiv.appendChild(pYear)
            year.style.borderColor="red"
            year.style.borderWidth="2px"
            isAllRight = false
        }
    }
})

// If the "day" input is empty and user tried to calculate (when user clicks on the button), we will make some changes that shown as an error 
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let pElems = dayDiv.querySelectorAll("p")       // Look at the div of "day" input for a p element (we will show error messages on p elements)
    if (day.value==""){         // Check the "day" input is empty or not
        if (pElems.length>0){       // If the error is shown
            console.log("error has already shown")
        } else{              // If the error is not shown, show it
            console.log("day is empty")
            let pDay = createP(null,true)
            dayDiv.appendChild(pDay)
            day.style.borderColor="red"
            day.style.borderWidth="2px"
        }
    } else{         // If the input is not empty
        if (pElems.length>0){       // If the input is not empty and there is error, we need to remove it
            pElems[0].remove()
            day.style.borderColor="rgba(62, 61, 61, 0.3)"
            day.style.borderWidth="1px"
        } else {
            console.log("day is ok")
        }
    }
})

// If the "month" input is empty and user tried to calculate (when user clicked on the button), we will make some changes that shown as an error 
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let pElems = monthDiv.querySelectorAll("p")     // Look at the div of "month" input for a p element (we will show error messages on p elements)
    if (month.value==""){       // Check the "month" input is empty or not
        if (pElems.length>0){       // If the error is shown
            console.log("error has already shown")
        } else {           // If the error is not shown, show it
            console.log("month is empty")
            let pMonth = createP(null, true)
            monthDiv.appendChild(pMonth)
            month.style.borderColor="red"
            month.style.borderWidth="2px"
        }
    } else{     // If the input is not empty
        if(pElems.length>0){        // If the input is not empty and there is error, we need to remove it
            pElems[0].remove()
            month.style.borderColor="rgba(62, 61, 61, 0.3)"
            month.style.borderWidth="1px"
        } else{
        console.log("month is okey")
        }
    }
})

// If the "year" input is empty and user tried to calculate (when user clicked on the button), we will make some changes that shown as an error 
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let pElems = yearDiv.querySelectorAll("p")      // Look at the div of "year" input for a p element (we will show error messages on p elements)
    if (year.value==""){       // Check the "year" input is empty or not
        if (pElems.length>0){       // If the error is shown
            console.log("error has already shown")
        } else {           // If the error is not shown, show it
            console.log("year is empty")
            let pYear = createP(null, true)
            yearDiv.appendChild(pYear)
            year.style.borderColor="red"
            year.style.borderWidth="2px"
        }
    } else{     // If the input is not empty
        if (pElems.length>0){        // If the input is not empty and there is error, we need to remove it
            pElems[0].remove()
            year.style.borderColor="rgba(62, 61, 61, 0.3)"
            year.style.borderWidth="1px"
        } else {
        console.log("year is okey")
        }
    }
})

// If user entered an invalid day. For example (30 April 2020) or (29 February 2020)
button.addEventListener("click",(e)=>{
    let numMonth = month.value
    if (numMonth==4 || numMonth==6 || numMonth==9 || numMonth==11){   // Check if months are 30-days months
        if (day.value==31){     // If it is 30-days month, user shouldn't enter 31 as day, but 31 is in the range for day input, so we will show the error in here 
            console.log("Must be a valid day")
            dayLabel.style.color="red"
            monthLabel.style.color="red"
            yearLabel.style.color="red"
            day.style.borderColor="red"
            month.style.borderColor="red"
            year.style.borderColor="red"
            day.style.borderWidth="2px"
            month.style.borderWidth="2px"
            year.style.borderWidth="2px"
            let errorP = createP(null,null,true)
            dayDiv.appendChild(errorP)
            
        } else {
            if (window.getComputedStyle(dayLabel).getPropertyValue("color")=="rgb(255, 0, 0)"){
                dayLabel.style.color="black"
                monthLabel.style.color="black"
                yearLabel.style.color="black"
                month.style.borderColor="rgba(62, 61, 61, 0.3)"
                year.style.borderColor="rgba(62, 61, 61, 0.3)"
            } else {
                console.log("Date is valid")
            }
        }
    } else if (numMonth==2){        // Check if month is february
        let numYear = year.value
        let numDay= day.value
        if (numYear%4==0 && numDay>29 && numDay<32){    // If it is a year that is a multiple of 4, in which February has 29 days; the user cannot enter 30 and 31 as days.
            console.log("Must be a valid day")
            dayLabel.style.color="red"
            monthLabel.style.color="red"
            yearLabel.style.color="red"
            day.style.borderColor="red"
            month.style.borderColor="red"
            year.style.borderColor="red"
            day.style.borderWidth="2px"
            month.style.borderWidth="2px"
            year.style.borderWidth="2px"
            let errorP = createP(null,null,true)
            dayDiv.appendChild(errorP)
        } else if (numYear%4!=0 && numDay>28 && numDay<32){     // Unless it is a multiple of 4, in which February has 28 days, the user cannot enter 28, 30 and 31 days.
            console.log("Must be a valid day")
            dayLabel.style.color="red"
            monthLabel.style.color="red"
            yearLabel.style.color="red"
            day.style.borderColor="red"
            month.style.borderColor="red"
            year.style.borderColor="red"
            day.style.borderWidth="2px"
            month.style.borderWidth="2px"
            year.style.borderWidth="2px"
            let errorP = createP(null,null,true)
            dayDiv.appendChild(errorP)
        } else {        // If it is february but the entered day is in the range, we need to look that there is any  error message is shown
            if (window.getComputedStyle(dayLabel).getPropertyValue("color")=="rgb(255, 0, 0)"){     // Check the day label is red or not, to be sure there is no error
                dayLabel.style.color="black"
                monthLabel.style.color="black"
                yearLabel.style.color="black"
                month.style.borderColor="rgba(62, 61, 61, 0.3)"
                year.style.borderColor="rgba(62, 61, 61, 0.3)"
            } else {
                console.log("Date is valid")
            }
        }
    } else {        // If user entered a valid day and there is an error message, we need to remove it
        if (window.getComputedStyle(dayLabel).getPropertyValue("color")=="rgb(255, 0, 0)"){
            dayLabel.style.color="black"
            monthLabel.style.color="black"
            yearLabel.style.color="black"
            month.style.borderColor="rgba(62, 61, 61, 0.3)"
            year.style.borderColor="rgba(62, 61, 61, 0.3)"
        } else {
            console.log("Date is valid")
        }
    }
})

// Finally, we covered almost all of the errors, now we are going to calculate the age according to inputs and current date
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let yearsLived = "--"
    let monthsLived = "--"
    let daysLived = "--"
    if (year.value < currentYear){

        if (month.value>currentMonth){
            console.log("bizden ilerde")
            yearsLived = currentYear - year.value - 1
            monthsLived = currentMonth - month.value + 12
            if (currentDay >= day.value){
                daysLived = currentDay - day.value
            } else {
                monthsLived -= 1
                daysLived = currentDay - day.value + 30
            }
        } else if (month.value==currentMonth){
            console.log("ayni ayda")
            if (day.value>currentDay){
                console.log("bizden ilerde")
                yearsLived = currentYear - year.value - 1
                monthsLived = currentMonth - month.value + 11
                daysLived = currentDay - day.value + 30

            } else if (day.value==currentDay){
                console.log("ayni günde , doğum günü")
                yearsLived = currentYear - year.value
                monthsLived = currentMonth - month.value
                daysLived = currentDay - day.value
            } else {
                console.log("bizden geride")
                yearsLived = currentYear - year.value
                monthsLived = currentMonth - month.value
                daysLived = currentDay - day.value
            }
        } else {
            console.log("bizden geride")
            yearsLived = currentYear - year.value
            monthsLived = currentMonth - month.value
            if (currentDay < day.value){
                monthsLived -= 1
                daysLived = currentDay - day.value +30
            } else {
                daysLived = currentDay - day.value
            }
        }

    } else if (year.value == currentYear){

        console.log("bizimle ayni yilda")

        if (month.value < currentMonth){

            yearsLived = currentYear - year.value
            if (day.value > currentDay) {
                monthsLived = currentMonth - month.value - 1
                daysLived = currentDay - day.value + 30
            } else {
                monthsLived = currentMonth - month.value
                daysLived = currentDay - day.value
            }

        } else if (month.value == currentMonth){
            yearsLived = currentYear - year.value
            monthsLived = currentMonth - month.value
            if (day.value <= currentDay){
                daysLived = currentDay - day.value
            } else {
                console.log("yil ayni, ay ayni, gün ilerde")
                let warningP = createP("date")
                monthDiv.appendChild(warningP)
                yearsLived = "- -"
                monthsLived = "- -"
                daysLived = "- -"
            }
        } else {
            console.log("ayni yil ay olarak ilerde")
            let warningP = createP("date")
            monthDiv.appendChild(warningP)
            yearsLived = "- -"
            monthsLived = "- -"
            daysLived = "- -"
        }

    } else {
        console.log("bizden çook ilerde")
        let warningP = createP("date")
        monthDiv.appendChild(warningP)
        yearsLived = "- -a"
        monthsLived = "- -"
        daysLived = "- -"
    }
    if (isAllRight) { // if there is no error shown, display the calculated age
        showYears.textContent = yearsLived + "  " 
        showMonths.textContent = monthsLived + "  "
        showDays.textContent = daysLived + "  "
    }
    

    if (monthsLived==0 && daysLived==0){     // Check If today is user's birthday, if it is show a message
        console.log("happy birthday")
        let bottomP = createP(null,null,null,"birthday",null)
        bottom.appendChild(bottomP)
    } else if (monthsLived==11){        // Check If there is less than a month to user's birthday, if it is show how many days left to birthday
        console.log("doğum günü yaklaşiyor")
        let howManyDays = 30 - daysLived
        let bottomP = createP(null,null,null, "toBirthday", howManyDays)
        if (bottom.querySelector("p")){
            bottom.querySelector("p").remove()
        }
        bottom.appendChild(bottomP)
    } else {   // If today is not user's birthday and there isn't less than a month
        if (bottom.querySelector("p")){  // Check if there is a message shown, if there is remove it
            bottom.querySelector("p").remove()
        }
    }
})

/*
    In the bottom I have added another age calculation method but it's a little bit hard to read and understand for someone else.
    I prefer the above method.
*/

function createP(str, boolean, boolean2, boolean3, howManyDays){
    const p = document.createElement("p")
    if (boolean2){
        p.textContent = "Must be a valid day !"
        p.style.position="relative"
        p.style.top="-190px"
    } else if (boolean3=="toBirthday"){
        p.textContent = howManyDays==1 ? "*" + howManyDays + " day to your birthday" : "*" + howManyDays + " days to your birthday"
        p.style.position="relative"
        p.style.top="-190px"
    } else if (boolean3=="birthday") {
        p.textContent = "Happy birthday !!!"
    }
    else {
        p.textContent = boolean ? "This field is required !" : "Please enter a valid "+ str +" !"
    }
    p.style.color="red"
    p.style.fontSize="0.8rem"
    return p
}

/**
 * button.addEventListener("click",(e)=>{
    e.preventDefault();
    let yearsLived = currentYear - year.value;
    let monthsLived = currentMonth - month.value;
    let daysLived = currentDay - day.value;
    if (month.value > currentMonth) {
        yearsLived--;
        monthsLived += 12;
        if (currentDay < day.value) {
            monthsLived--;
            daysLived += 30;
        }
    } else if (month.value == currentMonth && day.value > currentDay) {
        yearsLived--;
        monthsLived += 11;
        daysLived += 30;
    }
    showYears.textContent = yearsLived + "  ";
    showMonths.textContent = monthsLived + "  ";
    showDays.textContent = daysLived + "  ";
    if (monthsLived == 0 && daysLived == 0) {
        let bottomP = createP(null,null,null,"birthday",null);
        bottom.appendChild(bottomP);
    } else if (monthsLived == 11) {
        let howManyDays = 30 - daysLived;
        let bottomP = createP(null,null,null, "toBirthday", howManyDays);
        bottom.appendChild(bottomP);
    }
});
 */