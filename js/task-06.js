const validationInput = document.querySelector('#validation-input');

// const validationNamber = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid')
    }
    console.log(validationInput.value.length);
    console.log(validationInput.dataset.length);
})

