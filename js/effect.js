let sun_box = document.querySelector('.sun-box');
let body = document.querySelector('body');
sun_box.onclick = function() {
    body.classList.toggle('dark');
}