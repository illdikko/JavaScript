const RANGE_MIN = 0;
const RANGE_MAX = 255;
const html_tr = document.querySelector("table tr");
const html_redRange = document.querySelector("#red");
const html_greenRange = document.querySelector("#green");
const html_blueRange = document.querySelector("#blue");


html_redRange.min = RANGE_MIN;
html_greenRange.min = RANGE_MIN;
html_blueRange.min = RANGE_MIN;
html_redRange.max = RANGE_MAX;
html_greenRange.max = RANGE_MAX;
html_blueRange.max = RANGE_MAX;


// const html_colorRange = document.querySelectorAll("input[type=range]");


const print = function () {

    html_tr.innerHTML = "";
    let step_red = parseInt(html_redRange.value) / 9;
    let step_green = parseInt(html_greenRange.value) / 9;
    let step_blue = parseInt(html_blueRange.value) / 9;

    for (let i = 0; i < 10; i++) {
        html_tr.innerHTML += "<td><div></div></td>";
        let td = document.querySelector("table td:last-child");
        td.style.backgroundColor = generate(
                                            Math.round(step_red * i),
                                            Math.round(step_green * i),
                                            Math.round(step_blue * i)
                                            );
    }
};

const generate = function (red,green,blue) {
    return (`rgb(${red},${green},${blue})`);
}
