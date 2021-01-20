
//create grid

const gridContainer = document.querySelector('#grid');

var amountOfSquares = 16;

buildgrid()

const button = document.querySelector('#clearGrid');

button.addEventListener('click', () => {
    clearGrid()
    buildgrid()
});

function clearGrid() {
    let userìnput = prompt("How many columns?", 16)
    amountOfSquares = Math.min(parseInt(userìnput),100);
    let colSpans = document.querySelectorAll('span');
    [].forEach.call(colSpans, function(el) {
        el.classList.remove("mouseInSpan");
        el.parentNode.removeChild(el); 
    });
    let rowDivs = document.querySelectorAll(".rowDiv");
    [].forEach.call(rowDivs, function(el) {
        el.parentNode.removeChild(el); 
    });
}

function buildgrid() {

    let squareSize = (800 / amountOfSquares) + "px";
    var r = document.querySelector(':root');
    r.style.setProperty('--squareSize', squareSize);

    for (let i = 0; i < amountOfSquares; i++) { 
        let rowDiv = document.createElement('div');
        rowDiv.id = i;
        rowDiv.classList.add('rowDiv');
        gridContainer.appendChild(rowDiv);
        for (let j = 0; j < amountOfSquares; j++) { 
            let colSpan = document.createElement('span');
            colSpan.id = i*10+j;
            colSpan.classList.add('colSpan');
            colSpan.addEventListener('mouseover', () => {
                colSpan.classList.add('mouseInSpan');
            });
            rowDiv.appendChild(colSpan);
        };
    };
};