const form = document.getElementById('form-numbers')
const fieldA = document.querySelector('#field-a')
const fieldB = document.querySelector('#field-b')
let validForm = false

function validateNumbers(numberFieldA, numberFieldB) {
    const numberA = parseInt(numberFieldA)
    const numberB = parseInt(numberFieldB)
 
    return numberB > numberA ? true : false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const messageContainer = document.querySelector('.message')
    const successMessage = `O campo B possui o número maior que o campo A. Válido.` 
    const errorMessage = `O campo B não possui um número maior que o campo A. Inválido.`
    
    validForm = validateNumbers(fieldA.value, fieldB.value)
    if (validForm) {
        messageContainer.classList.remove('error-message')
        messageContainer.classList.add('success-message')
        messageContainer.textContent = successMessage
        messageContainer.style.display = 'block'
        fieldA.classList.remove('error-input')
        fieldB.classList.remove('error-input')
        form.reset()
    } else {
        messageContainer.classList.remove('success-message')
        messageContainer.classList.add('error-message')
        messageContainer.textContent = errorMessage
        messageContainer.style.display = 'block'
        fieldA.classList.add('error-input')
        fieldB.classList.add('error-input')
    }
})