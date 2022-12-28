const form = document.querySelector('.login-form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const { elements: {email, password} } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
    
//     console.log(`Email: ${email.value}, Password: ${password.value}`);

//     event.currentTarget.reset();
// })

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  }

  if (formData.email === "" || formData.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);

  event.currentTarget.reset();
})
