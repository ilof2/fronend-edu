let canvas = document.getElementById("my-canvas");
generate_colors()
let ctx = canvas.getContext("2d");
let coord = {
    x: 0,
    y: 0
}

ctx.beginPath();
ctx.moveTo(0, 0)

canvas.addEventListener("mousedown", (start_evt) => {
    start(start_evt)
})
addEventListener("resize", (event) => {
    resize()
})
canvas.addEventListener("mouseup", (stop) => {
    document.removeEventListener('mousemove', draw);
})
canvas.addEventListener("click", (event) => {
    reposition(event);
    draw(event)
})

function draw (evt){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.moveTo(coord.x, coord.y);
    reposition(evt);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

function start(event){
    document.addEventListener('mousemove', draw);
    reposition(event);
}

function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }

function resize (){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
resize()
function changeColor (color){
    console.log(color)
    ctx.strokeStyle = color;
}

function generate_colors(){
    const colors = document.querySelector("#colors")
    for (let i = 15; i > 0; i--){
        let color_div = document.createElement("div")
        console.log(i + i + i)
        b = (255 - (5 * i * Math.PI) | 0)
        r = (i  * 5 * Math.PI) | 0
        g = ((Math.pow((r - b) * 0.06, 2))) | 0
        color_div.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`)
        color_div.setAttribute("onclick", `changeColor('rgb(${r}, ${g}, ${b})')`)
        colors.appendChild(color_div)
    }
}