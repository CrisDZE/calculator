const numberPad = document.getElementById("number-pad")
const numberButtons = numberPad.getElementsByTagName("button")

const operatorPad = document.getElementById("operator-pad")
const operatorButtons = operatorPad.getElementsByTagName("button")

const clear = document.getElementById("clear")
const output = document.getElementById("output")

let selectedValuesToShow = []
let selectedValues = []
let calculated = ""

//Limpia los valores
clear.addEventListener("click", () => {
    selectedValuesToShow = []
    selectedValues = []
    calculated = ""
    output.textContent = '0'
})

//añade los numeros a selected
for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => 
        {
            
        selectedValuesToShow.push(numberButtons[i].value)
        handleNumberButton(numberButtons[i].value)
        displayOutput()
        console.log(selectedValues)
    })
}

//añade los operadores a selected
for (let i = 0; i < operatorButtons.length; i++){
    //cuando se presiona el =
    if(operatorButtons[i].value === "="){
        operatorButtons[i].addEventListener("click", () => {
            if (selectedValues.length === 0){
                return
            } else if (selectedValues[1] === '/' && selectedValues[2] === 0){
                output.textContent = "vuelve a intentar dividir entre 0 picha"
                selectedValuesToShow = []
                selectedValues = []
                calculated = ""
            } else {
            while(selectedValues.length === 3){
                calculated = operate(selectedValues[0], selectedValues[1], selectedValues[2])
                selectedValues = [calculated]
            }            
            console.log(calculated)

            selectedValues = [calculated]
            console.log(selectedValues)
            displayOutputCalculated()
            selectedValuesToShow = [calculated]
        }})
    // cuando se presionan otros operadores
    } else {
        operatorButtons[i].addEventListener("click", () => 
            {
                while(selectedValues.length === 3){
                    calculated = operate(selectedValues[0], selectedValues[1], selectedValues[2])
                    selectedValues = [calculated]
                }
            selectedValues.push(operatorButtons[i].value)
            selectedValuesToShow.push(operatorButtons[i].value)
            console.log(selectedValues)
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

//maneja el boton de numeros
function handleNumberButton(value){

    if (typeof selectedValues[selectedValues.length - 1] === 'number'){
        selectedValues[selectedValues.length - 1] = parseInt(selectedValues[selectedValues.length - 1] + value)
        console.log("funciona")
    } else {
        selectedValues.push(parseInt(value))
        console.log("no funciona", value)
    }
}

//muestra el output
function displayOutput(){
    output.textContent = selectedValuesToShow.join('')
}

function displayOutputCalculated(){
    output.textContent = calculated
}
