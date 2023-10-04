let mainWrapper = document.getElementsByClassName('main-wrapper')[0];


function createBoard(row = 8, column = 8) {
    let board = document.createElement('div');
    for (let i = 0; i < row; i++) {
        let newrow = document.createElement('div');
        newrow.classList.add('row');
        for (let j = 0; j < column; j++) {
            let newcol = document.createElement('div');
            const classLeftTopDiagonalSub = `left${i - j}`;
            const classRightTopDiagonalSub = `right${i + j}`;
            newcol.setAttribute('id', `${i}${j}`)
            newcol.classList.add('box', classLeftTopDiagonalSub, classRightTopDiagonalSub);
            newcol.innerText = `${i}${j}`;
            if ((i + j) % 2 == 0) {
                newcol.classList.add('white');
            }
            else {
                newcol.classList.add('black');
            }
            newcol.addEventListener('click', green);
            newrow.appendChild(newcol);
        }
        board.appendChild(newrow)
    }
    let mainWrapper = document.querySelector('.main-wrapper');
    while (mainWrapper.hasChildNodes()) {
        mainWrapper.removeChild(mainWrapper.firstChild);
    }
    console.log(mainWrapper.hasChildNodes());
    mainWrapper.appendChild(board);
}


function green(e) {
    console.log(e.target.classList)
    const left = e.target.classList[1];
    const right = e.target.classList[2];
    console.log((left));
    const leftCols = document.querySelectorAll(`.${left}`);
    const rightCols = document.querySelectorAll(`.${right}`);
    console.log(leftCols);
    console.log(rightCols);
    for (let i = 0; i < leftCols.length; i++) {
        leftCols[i].classList.add('red');
    }
    for (let i = 0; i < rightCols.length; i++) {
        rightCols[i].classList.add('red');
    }

    setTimeout(() => {
        for (let i = 0; i < leftCols.length; i++) {
            leftCols[i].classList.remove('red');
        }
        for (let i = 0; i < rightCols.length; i++) {
            rightCols[i].classList.remove('red');
        }
    }, 5000);


}



createBoard(20, 8);