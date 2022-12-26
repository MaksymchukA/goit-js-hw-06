const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (inputChangeName) => {
    // inputChangeName.preventDefault();
    if (inputChangeName.currentTarget.value !== "") {
       return nameOutput.textContent = inputChangeName.currentTarget.value
    } else {
       return nameOutput.textContent = "Anonymous";
    }
});

