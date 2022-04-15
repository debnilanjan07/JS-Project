
const clock = () => {
    let time = new Date();
    let am_pm = "";
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let hours = document.getElementsByClassName("hour");
    let minutes = document.getElementsByClassName("minute");
    let seconds = document.getElementsByClassName("second");
    let am = document.getElementsByClassName("ampm");

    if (hour >= 12) {
        am_pm = "PM";
    }
    if (hour >= 0 && hours < 12) {
        am_pm = "AM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    hours[0].innerText = hour;
    minutes[0].innerText = minute;
    seconds[0].innerText = second;
    am[0].innerText = am_pm;
}

function setAlarm() {
    let timing = document.getElementsByClassName("timing");
    let wakeup = document.getElementById("wakeup");
    let lunch = document.getElementById("lunch");
    let tea = document.getElementById("tea");
    let night = document.getElementById("night");
    let time = new Date();
    let hours = time.getHours();

    timing[0].innerText = wakeup.options[wakeup.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = tea.options[tea.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;

    if ((hours === parseInt(wakeup.value))) {
        let greeting = document.getElementById("goodmorning");
        let message = document.getElementById("greeting");
        let image = document.getElementById("greeting-image");
        image.src = "./morning.jpg";
        message.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        greeting.innerText = "GOOD MORNING!! WAKEUP!!";
    }

    if ((hours === parseInt(lunch.value))) {
        let greeting = document.getElementById("goodmorning");
        let message = document.getElementById("greeting");
        let image = document.getElementById("greeting-image");
        image.src = "./lunch.jpg";
        message.innerText = "LET'S HAVE SOME LUNCH !!";
        greeting.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }

    if ((hours === parseInt(tea.value))) {
        let greeting = document.getElementById("goodmorning");
        let message = document.getElementById("greeting");
        let image = document.getElementById("greeting-image");
        image.src = "./evening.png";
        message.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        greeting.innerText = "GOOD EVENING!!";
    }

    if ((hours === parseInt(night.value))) {
        let greeting = document.getElementById("goodmorning");
        let message = document.getElementById("greeting");
        let image = document.getElementById("greeting-image");
        image.src = "./night.png";
        message.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        greeting.innerText = "GOOD NIGHT!!";
    }
}

clock();
setInterval(clock, 1000);