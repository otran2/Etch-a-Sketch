let INITIAL_ROWS = 16, INITIAL_COLUMNS = 16
let BORDER_SETTINGS = "2px black solid"


const container = document.querySelector(".container")

function createGrid(rows, cols){
    //Ratio of size for the individual squares
    let sizeRatio = 100.0/rows
    for(let curSquare = 0; curSquare < rows*cols; curSquare ++){
        let square = document.createElement("div")
        square.className = "square"
        square.style.width = `${sizeRatio}%`
        //Settings to prevent the borders from extending
        if (curSquare/cols < 1){
            square.style.borderTop = BORDER_SETTINGS
        }
        if (curSquare%cols === 0){
            square.style.borderLeft = BORDER_SETTINGS
        }
        container.appendChild(square)
    }
}

createGrid(INITIAL_ROWS, INITIAL_COLUMNS)