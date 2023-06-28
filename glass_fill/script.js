const glasses = document.querySelectorAll(".elem");

function glassClick(evt) {
    let lvl = Number(this.getAttribute("lvl"));
    lvl += 24
    console.log(lvl);
    if(lvl <= 96){
        this.style.backgroundPosition = "0 " + lvl + "%";
        this.setAttribute("lvl", lvl)
    }else{
        this.style.cursor = "not-allowed"
    }
}

glasses.forEach( glass => {
    glass.addEventListener("click", glassClick)
})