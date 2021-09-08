setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hrPosition = ((hours * 360) / 12 + (minutes * (360 / 60)) / 12) + 3 / 360;
    let minPosition = ((minutes * 360) / 60 + (seconds * (360 / 60)) / 60) + 6 / 60;
    let secPosition = ((seconds * 360) / 60) + 6;
    document.getElementById('hours').style.transform = "rotate(" + hrPosition + "deg)";
    document.getElementById('minutes').style.transform = "rotate(" + minPosition + "deg)";
    document.getElementById('seconds').style.transform = "rotate(" + secPosition + "deg)";
}, 1000)