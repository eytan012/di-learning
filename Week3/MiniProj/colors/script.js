let board = document.querySelector('.board')

function createBoard(){
    for (let i=0;i<=1000;i++){
        let divs = document.createElement('div')
        board.appendChild(divs)
    }
}
createBoard()