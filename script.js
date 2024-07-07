document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        validateForm ();
    });

    form.addEventListener('input', () => {
        validateForm(false);
    });

    function validateForm(showErrors = true) {
        let isValid = true;

        //validate full name
        if(fullName.value.length <5){
            if (showErrors) fullName.classList.add('is-invalid');
            isValid = false;
        } else {
            fullName.classList.remove('is-invalid');
        }

        //validate email
        if(!email.value.includes('@')){
            if (showErrors) email.classList.add('is-invalid');
            isValid = false;
        } else{
            email.classList.remove('is-invalid');
        }

        //validate phone number
        const phoneNumberPattern = /^[0-9]{10}$/;
        if(phone.value === '123456789'|| !phoneNumberPattern.test(phone.value)){
            if (showErrors) phone.classList.add('is-invalid');
            isValid = false;
        } else {
            phone.classList.remove('is-invalid');
        }

        //Validate password 
        if(password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value === fullName.value){
            if (showErrors) password.classList.add('is-invalid');
            isValid = false;
        } else{
            password.classList.remove('is-invalid');
        }

        //validate confirm password
        if(password.value !== confirmPassword.value){
            if (showErrors) confirmPassword.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
        }

        if (isValid && showErrors) {
            alert('Form submitted successfully!');
            form.reset();
        }
    }

});