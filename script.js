
//create grid

const gridContainer = document.querySelector('#grid');



for (var i = 0; i < 4; i++) { 
    let rowDiv = document.createElement('div');
    rowDiv.id = i;
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);
    for (var j = 0; j < 4; j++) { 
        let colSpan = document.createElement('span');
        colSpan.id = i;
        colSpan.classList.add('colSpan');
        colSpan.textContent = "TestCol";
        rowDiv.appendChild(rowDiv);
    }
}
