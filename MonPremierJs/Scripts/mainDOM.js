const RANGE_MIN = 0;
const RANGE_MAX = 255;

let red = document.getElementById("redRange");
let green = document.getElementById("greenRange");
let blue = document.getElementById("blueRange");
let button = document.getElementById("refreshButton");
let resulte = document.getElementById("result");

if (!red) console.error("Attention, nous ne retrouvons pas 'redRange'")
else if (!green) console.error("Attention, nous ne retrouvons pas 'greenRange'")
else if (!blue) console.error("Attention, nous ne retrouvons pas 'blueRange'")
else {
    red.min = RANGE_MIN;
    red.max = RANGE_MAX
    green.min = RANGE_MIN;
    green.max = RANGE_MAX
    blue.min = RANGE_MIN;
    blue.max = RANGE_MAX;
}

function getHexColor()
{
    let red_hex = convertHex(parseInt(red.value));
    let green_hex = convertHex(parseInt(green.value));
    let blue_hex = convertHex(parseInt(blue.value));
    
    result.value=`#${red_hex}${green_hex}${blue_hex}`;
}

function convertHex(number)
{
    if (number<16) return`0${number.toString(16)}`
    return number.toString(16);
}