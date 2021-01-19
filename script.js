
//create grid

const gridContainer = document.querySelector('#grid');



for (var i = 0; i < 4; i++) { 
    let promptText = document.createElement('div');
    promptText.id = i;
    promptText.classList.add('promptText'+i);
    gridContainer.appendChild(promptText);
    for (var j = 0; j < 4; j++) { 
        let promptTextCol = document.createElement('span');
        promptTextCol.id = i;
        promptTextCol.classList.add('promptTextCol'+i);
        promptTextCol.textContent = "TestCol";
        promptText.appendChild(promptTextCol);
    }
}
