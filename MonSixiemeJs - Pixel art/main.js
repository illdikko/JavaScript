const picker = document.querySelectorAll(".picker");
let currentColor;
const html_currentColor = document.querySelector(".currentColor");


const colorPick = function (elem)
{
    currentColor = elem.style.backgroundColor;
    html_currentColor.style.backgroundColor = currentColor;
}

const color = function(elem) 
{
    elem.style.backgroundColor = currentColor;    
}



picker[0].style.backgroundColor = "#FF0000";
picker[1].style.backgroundColor = "#FFFF00";
picker[2].style.backgroundColor = "#0000FF";
picker[3].style.backgroundColor = "#008000";
picker[4].style.backgroundColor = "#FFFFFF";
picker[5].style.backgroundColor = "#808080";
picker[6].style.backgroundColor = "#FF4500";
picker[7].style.backgroundColor = "#FF69B4";
picker[8].style.backgroundColor = "#663399";
picker[9].style.backgroundColor = "#000000";


