const container = document.querySelector('.container');

let rowNum = 64;

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

createDiv(rowNum);

function markBlack(e){
    e.target.style.backgroundColor = 'black';
}

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach((item) => item.addEventListener('mouseover', markBlack));