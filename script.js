
//create grid

const gridContainer = document.querySelector('#grid');

var amountOfSquares = 16;

buildgrid()

const button = document.querySelector('#clearGrid');

button.addEventListener('click', () => {
    rebuildGrid()
});

function rebuildGrid() {
    //amountOfSquares = prompt("How many squares?", 16);
    console.log(amountOfSquares);
    let colSpans = document.querySelectorAll('span');
    [].forEach.call(colSpans, function(el) {
        el.classList.remove("mouseInSpan");
    });
}

function buildgrid() {

    for (var i = 0; i < 4; i++) { 
        let rowDiv = document.createElement('div');
        rowDiv.id = i;
        rowDiv.classList.add('rowDiv');
        gridContainer.appendChild(rowDiv);
        for (var j = 0; j < 4; j++) { 
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