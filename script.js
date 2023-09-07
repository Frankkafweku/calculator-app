const allButtons = document.getElementsByClassName("buttons")
let results = document.getElementById("results")

const calculator = document.querySelector(".main")
const keys = calculator.querySelector(".calc-buttons")

let firstValue = ''
let operator = ''
let secondValue = ''

function calculate(n1, operator, n2) {
    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = results.textContent

        Array.from(key.parentNode.children)
            .forEach(operation => operation.classList.remove('pressed'))

        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if (displayedNum === "0" ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                results.textContent = keyContent
            } else {
                results.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKeyType = 'number'
        }

        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            // Add custom attribute
            key.classList.add("pressed")

            if (firstValue && operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            ) {
                const calcValue = calculate(firstValue, operator, displayedNum)
                results.textContent = calcValue
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                firstValue = displayedNum
            }

            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            operator = action
        }

        if (action === "decimal") {
            if (!displayedNum.includes('.')) {
                results.textContent = displayedNum + "."
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                results.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'
        }

        if (action === "clear") {
            console.log("delete");
            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === "calculate") {
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                results.textContent = calculate(firstValue, operator, displayedNum)
            }

            calculator.dataset.modValue = displayedNum
            calculator.dataset.previousKeyType = 'calculate'
        }
    }
})
