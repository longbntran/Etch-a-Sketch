// function createButton () {
//     let button = document.createElement('button');
//     button.classList.add('button');
//     button.innerText = 'Set Grid Size';
//     document.body.appendChild(button);
//     button.addEventListener('click', start, {once: true} );
// }
// function createResetButton () {
//     let button = document.createElement('button');
//     button.classList.add('button');
//     button.innerText = 'Reset Grid Size';
//     document.body.appendChild(button);
//     button.addEventListener('click', reset );
// }
function reset () {
    return window.location.reload();
}
// create container 
function setGridContainer (size) {
    // window.location.reload();
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'grid';
    const body = document.querySelector('body');
    body.appendChild(container);
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.id = i + '-' + j;
            square.style.width = (99/size) + 'vw';
            square.style.height = (99/size) + 'vw';
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
//create button
function start (e) {
    gridSize = Number(window.prompt("Enter grid length:", "16"));
    if (gridSize>100) {
        window.alert("Error! Grid size shouldn't exceed 100.");
        reset()
    }
    else {
        setGridContainer(gridSize);
        console.log(gridSize);
        const contain = document.querySelector('.container');
        contain.addEventListener('mousemove', effect);
    }
}

// create effect
function effect (e) {
    let square = e.target;
    // let id = square.id;
    square.classList.add('active');
}
function createButtonContainer (e) {
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    document.body.appendChild(buttonContainer);
    let startButton = document.createElement('button');
    startButton.classList.add('button');
    startButton.innerText = 'Set Grid Size';
    buttonContainer.appendChild(startButton);
    startButton.addEventListener('click', start, {once: true} );
    let resetButton = document.createElement('button');
    resetButton.classList.add('button');
    resetButton.innerText = 'Reset Grid Size';
    buttonContainer.appendChild(resetButton);
    resetButton.addEventListener('click', reset );
}
createButtonContainer();