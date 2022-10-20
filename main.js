var clock = document.getElementById('clock');
setInterval(function () {
    var date = new Date();
    clock.innerText = date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}, 1000);
