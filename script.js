const allButtons = document.getElementsByClassName("buttons")
let results = document.getElementById("results")


const calculator = document.querySelector(".main")
const keys = calculator.querySelector(".calc-buttons")




keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = results.textContent

        Array.from(key.parentNode.children)
        .forEach(operation => operation.classList.remove('pressed'))

        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if(displayedNum === "0" || previousKeyType === 'operator'){
                results.textContent =  keyContent
            } else { results.textContent = displayedNum + keyContent}
          }

        if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
            key.classList.add("pressed")
             // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if(action === "decimal"){
           results.textContent =  displayedNum + "."
        }
         
        if (action === "clear"){
            console.log("delete");
        }

        if (action === "calculate"){
            const firstValue = calculator.dataset.firstValue
            const operatorc = calculator.dataset.operator
            const secondValue = displayedNum
            results.textContent = calculate(firstValue, operator, secondValue)
        }

        

    }
})


