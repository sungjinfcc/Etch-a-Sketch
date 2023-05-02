const container = document.querySelector('.container');

function createDiv(row){
    for(let i = 0; i<row; i++){
        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        flexContainer.style.width = '100%';
        flexContainer.style.flex = 1;
        for(let j = 0; j<row; j++){
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.border = '1px solid black';
            div.style.flex = 1;
            flexContainer.appendChild(div);
        }
        container.appendChild(flexContainer);
    }
}

createDiv(16);
addMarkFunction();

function markBlack(e){
    e.target.style.backgroundColor = 'black';
}
function addMarkFunction(){
    const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach((item) => item.addEventListener('mouseover', markBlack));
}
function clearContainer(){
    container.innerHTML = "";
}
function resetAndDraw(){
    let rowNum = prompt("How many rows? (1 ~ 100)");
    if(rowNum > 100 || rowNum < 1 || !Number.isInteger(Number(rowNum))){
        rowNum = 16;
    }
    clearContainer();
    createDiv(rowNum);
    addMarkFunction();
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetAndDraw);