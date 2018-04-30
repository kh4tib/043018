// Change Icon every 1s

function fillBattery() {
    let battery = document.getElementById("battery");
    battery.innerHTML = "&#xf244";

    setTimeout(function(){
        battery.innerHTML = "&#xf243"
    }, 1000);

    setTimeout(function(){
        battery.innerHTML = "&#xf242"
    }, 2000);

    setTimeout(function(){
        battery.innerHTML = "&#xf241"
    }, 3000);

    setTimeout(function(){
        battery.innerHTML = "&#xf240"
    }, 4000);
}

// Run Animation Function
fillBattery();

// Restart Animation every 5s for Loop Effect
setInterval(fillBattery, 5000);