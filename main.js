function sendEmail() {
    email.send({
    Host : "smtp.gmail.com",
    Username : "<devlogapi@gmail.com>",
    Password : "<devlogapi123>",
    To : '<mcmxhd@gmail.com>',
    From : "<devlogapi@gmail.com>",
    Subject : "Today is " + day + " The " + date.getMonth() + ths + space + month + "<, Here are the crunched numbers>",
    Body : "<boobs?>",
    }).then(
        message => alert ("mail sent successfully")
    );
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let space = " "
let months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" ]
let th = ["st", "nd", "rd", "th", "th","th","th","th","th","th","st", "nd", "rd", "th", "th","th","th","th","th","th","st", "nd", "rd", "th", "th","th","th","th","th","th","st",]
let date = new Date();
let day = days[date.getDay()];
let month = months[date.getMonth()]
let ths = th[date.getDay()-1]
document.getElementById("whatdayisit").innerHTML = "Today is " + day + " The " + date.getMonth() + ths + space + month;
