let INITIAL_ROWS = 16, INITIAL_COLUMNS = 16
let BORDER_SETTINGS = "3px black solid"


const container = document.querySelector(".container")

let createGrid = function(rows, cols){
    for(let curSquare = 0; curSquare < rows*cols; curSquare ++){
        let square = document.createElement("div")
        let sizeRatio = 100.0/rows
        container.appendChild(square)
        square.style.aspectRatio = " 1 / 1"
        square.style.width = `${sizeRatio}%`
        square.style.boxSizing = "border-box"
        //Settings to prevents the borders of extending
        if (curSquare/cols < 1){
            square.style.borderTop = BORDER_SETTINGS
        }
        if (curSquare%cols === 0){
            square.style.borderLeft = BORDER_SETTINGS
        }
        square.style.borderRight = BORDER_SETTINGS
        square.style.borderBottom = BORDER_SETTINGS
    }
}

createGrid(INITIAL_ROWS, INITIAL_COLUMNS)