function initContainer (pixel = 16) {
    const container = document.querySelector(".screen");
    container.id = "screen";
    container.style.display = "grid";
    container.style.width = "500px";
    container.style.height = "500px";
    // console.log(color.value);
    setGrid(pixel);
    setColor();
    // key.forEach(key => key.addEventListener("transitionend",removeTransition));
    // square.addEventListener("mouseover", function (e) {
    //     square.style.backgroundColor = color;
    // });
}
function setGrid (pixel) {
    let size = pixel;
    const container = document.querySelector(".screen");
    container.style.gridTemplateColumns = "repeat("+ size + ", 1fr)";
    container.style.gridTemplateRows = "repeat("+ size + ", 1fr)";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.className = "square";
            square.style.width = 500/size + "px";
            square.style.height = 500/size + "px";
            square.style.backgroundColor = "#DEFBC2";
            container.appendChild(square);
        }
    }
}
function setColor () {
    const colorPicker = document.querySelector("input[type=color]");
    let screen = document.querySelector(".screen");
    let isDown =false;
    screen.addEventListener("mousedown", function (e) {
        isDown = true;
        e.target.style.backgroundColor = colorPicker.value;
    });
    screen.addEventListener('mouseleave', () => {
        isDown = false;
    });

    screen.addEventListener('mouseup', () => {
        isDown = false;
    });

    screen.addEventListener('mousemove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        console.log(isDown ? 'true' : 'false');
        e.target.style.backgroundColor = colorPicker.value;
    });
};
function setPixel() {
    const container = document.querySelector(".screen");
    const pixel = document.querySelector("input[type=range]");
    pixel.addEventListener("change", function (e) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
            }
        initContainer(this.value);
        setColor();
    })
}
initContainer();
setColor();
setPixel();
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function (e) {
    let container = document.querySelector(".screen");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
        }
    const pixel = document.querySelector("input[type=range]").value;
    initContainer(pixel);
    setColor();
});
