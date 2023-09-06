const allButtons = document.getElementsByClassName("buttons")
let results = document.getElementById("results")


const calculator = document.querySelector(".main")
const keys = calculator.querySelector(".calc-buttons")



keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log('number key!')
          }
        if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
            console.log("operator key");
        }

    }
})


