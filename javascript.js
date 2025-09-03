let INITIAL_ROWS = 16, INITIAL_COLUMNS = 16
let BORDER_SETTINGS = "2px black solid"


const container = document.querySelector(".container")
const sizeField = document.querySelector(".sizeField")
const submitButton = document.querySelector(".submitButton")

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

function getRandomColor(opacity = 0){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue}, ${opacity+0.1})`;
}

function setSize(rows, cols){
    container.innerHTML = ""
    createGrid(rows, cols)
}

container.addEventListener('mouseover', function(event){
    if (event.target.classList.contains("square")){
        const curBackground = window.getComputedStyle(event.target).backgroundColor.split(/[^0-9.]+/); 
        event.target.style.backgroundColor = getRandomColor(parseFloat(curBackground[4]))
    }
})

submitButton.addEventListener('click', function(event){
    let dimensions = sizeField.value.split("x")
    if (dimensions.every(elem => /^\d+$/.test(elem)) && dimensions.length === 2){
        setSize(dimensions[0], dimensions[1])
    }
    else{
        alert("Invalid input, please follow the example's format")
    }
})

createGrid(INITIAL_ROWS, INITIAL_COLUMNS)