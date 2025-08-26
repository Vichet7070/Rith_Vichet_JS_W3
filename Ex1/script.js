const body = document.body
const result = document.getElementById("result-color")
const button = document.querySelector("button")

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// TODO: When clicking on the RANDOM COLOR button:
// TODO: -	Generate a random color
// TODO: -	Set the body background color with this color
// TODO: -	Set the color label with the value of this color

function onChange() {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    result.textContent = color;
}
button.addEventListener("click", onChange);