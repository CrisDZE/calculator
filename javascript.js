const numberPad = document.getElementById("number-pad")
const numberButtons = numberPad.getElementsByTagName("button")

const operatorPad = document.getElementById("operator-pad")
const operatorButtons = operatorPad.getElementsByTagName("button")

const output = document.getElementById("output")

let selectedValues = []
let calculated = ""

//añade los numeros a selected
for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => 
        {selectedValues.push(parseInt(numberButtons[i].value))
        displayOutput()}
    )
}

//añade los operadores a selected
for (let i = 0; i < operatorButtons.length; i++){
    if(operatorButtons[i].value === "="){
        operatorButtons[i].addEventListener("click", () => {
            calculated = operate(selectedValues[0], selectedValues[1], selectedValues[2])
            console.log(calculated)

            selectedValues = [calculated]
            console.log(selectedValues)
            displayOutput()
        })
    } else {
        operatorButtons[i].addEventListener("click", () => 
            {selectedValues.push(operatorButtons[i].value)
            displayOutput()}
        )
    }
}

//Detects numbers and operator (3 total) and returns the calculation
function operate (number1, operator, number2) {
    switch (operator) {
        case "+":
            return number1 + number2;
            break;
            
        case "-":
            return number1 - number2;
            break;

        case "*":
            return number1 * number2;
            break;
        case "/":
            return number1 / number2;
            break;
        default:
            console.log("Cris didn't made me for this.")
            return calculated
            break;
    }
}

//muestra selected en el output
function displayOutput(){
    output.textContent = selectedValues.join(' ')
}

//Detects when are selected 3 values and use the function operate()
// and resets the selected array with the calculation
/*while (selectedValues.length === 3){
    calculated = operate(selectedValues[0], selectedValues[1], selectedValues[2])
    selectedValues = [calculated]
}*/