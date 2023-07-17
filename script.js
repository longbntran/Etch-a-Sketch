function reset () {
    return window.location.reload();
}
function initContainer (pixel = 16) {
    const container = document.querySelector(".screen");
    container.id = "screen";
    container.style.display = "grid";
    container.style.width = "500px";
    container.style.height = "500px";
    // console.log(color.value);
    setGrid(pixel);
    const colorElement = document.getElementById("color");
    let color = colorElement.value;
    let square = document.querySelectorAll(".square");
    square.forEach( square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = color;
        });
    })
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
    let square = document.querySelectorAll(".square");
    square.forEach( square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = colorPicker.value;
        });
    });
    // colorPicker.addEventListener("change", function (e) {
    //     const square = document.querySelectorAll(".square");
    //     square.addEventListener("mouseover", function (e) {
    //         square.style.backgroundColor = colorPicker.value;
    //     });
    //     // container.style.display = "none";
    //     // container.style.display = "grid";
    // });
};
function setPixel() {
    const container = document.querySelector(".screen");
    const pixel = document.querySelector("input[type=range]");
    pixel.addEventListener("change", function (e) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
            }
        initContainer(this.value);
    })
}
initContainer();
setColor();
// color.value



// create container 
// function setGridContainer (size) {
//     const container = document.createElement('div');
//     container.classList.add('container');
//     container.id = 'grid';
//     const main = document.querySelector('main');
//     main.appendChild(container);

//     for (let i = 0; i < size; i++) {
//         let row = document.createElement('div');
//         row.classList.add('row');
//         for (let j = 0; j < size; j++) {
//             let square = document.createElement('div');
//             square.classList.add('square');
//             square.id = i + '-' + j;
//             square.style.width = (99/size) + 'vw';
//             square.style.height = (99/size) + 'vw';
//             row.appendChild(square);
//         }
//         container.appendChild(row);
//     }
// }
// //create button
// function start (e) {
//     gridSize = Number(window.prompt("Enter grid length:", "16"));
//     if (gridSize>100) {
//         window.alert("Error! Grid size shouldn't exceed 100.");
//         reset()
//     }
//     else {
//         setGridContainer(gridSize);
//         console.log(gridSize);
//         const contain = document.querySelector('.container');
//         contain.addEventListener('mousemove', effect);
//     }
// }

// // create effect
// function effect (e) {
//     let square = e.target;
//     // let id = square.id;
//     square.classList.add('active');
// }
// function createButtonContainer (e) {
//     let buttonContainer = document.createElement('div');
//     buttonContainer.classList.add('button-container');
//     document.body.appendChild(buttonContainer);
//     let startButton = document.createElement('button');
//     startButton.classList.add('button');
//     startButton.innerText = 'Set Grid Size';
//     buttonContainer.appendChild(startButton);
//     startButton.addEventListener('click', start, {once: true} );
//     let resetButton = document.createElement('button');
//     resetButton.classList.add('button');
//     resetButton.innerText = 'Reset Grid Size';
//     buttonContainer.appendChild(resetButton);
//     resetButton.addEventListener('click', reset );
// }
// createButtonContainer();