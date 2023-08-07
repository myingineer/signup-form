// Getting all the input fields
const firstName = document.querySelector('.js-first-name-input');
const lastName = document.querySelector('.js-last-name-input');
const emailAddress = document.querySelector('.js-email-address-input');
const password = document.querySelector('.js-password-input');

// Getting the Button
const subscribeBtn = document.querySelector('.js-submit-btn');

// Getting all error messages
const fnameError = document.querySelector('.fname-error');
const lnameError = document.querySelector('.lname-error');
const emailAddressError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

// Getting the error photos
const fPicError = document.querySelector('.error1');
const lPicError = document.querySelector('.error2');
const ePicError = document.querySelector('.error3');
const pPicError = document.querySelector('.error4');

// Function to show error
function setInputError(inputElement, pic, message) {
    inputElement.style.display = 'block';
    pic.style.display = 'block';
    inputElement.innerHTML = message;
};

// Function to remove error
function clearInputError(inputElement, pic, message) {
    inputElement.style.display = 'none';
    pic.style.display = 'none';
    inputElement.innerHTML = message;
};

// Showing First Name Validation Error Messages
firstName.addEventListener("blur", e => {
    if (e.target.id === "signupFirstname" && e.target.value === '') {
        setInputError(fnameError, fPicError, 'First Name cannot be empty');
    }
    else if (e.target.id === "signupFirstname" && !isNaN(e.target.value) && typeof value !== 'string') {
        setInputError(fnameError, fPicError, 'First Name cannot be a number/symbol');
    };
});

// Removing First Name validation Error Messages
firstName.addEventListener("input", () => {
    clearInputError(fnameError, fPicError, '');
});


// Showing Last Name Validation Error Messages
lastName.addEventListener('blur', e => {
    if (e.target.id === "signupLastname" && e.target.value === '') {
        setInputError(lnameError, lPicError, 'Last Name cannot be empty');
    }
    else if (e.target.id === "signupLastname" && !isNaN(e.target.value) && typeof value !== 'string') {
        setInputError(lnameError, lPicError, 'Last Name cannot be a number/symbol');
    };
});

// Removing Last Name validation Error Messages
lastName.addEventListener("input", () => {
    clearInputError(lnameError, lPicError, '');
});

// Showing Email Address Validation Error Messages
emailAddress.addEventListener('blur', e => {
    if (e.target.id === "signupEmail" && !emailAddress.validity.valid) {
        setInputError(emailAddressError, ePicError, 'Sorry, this does not look like an email');
    } else if (e.target.id === "signupEmail" && emailAddress.value.trim() === '') {
        setInputError(emailAddressError, ePicError, 'Email Address cannot be Empty');
    };
});


// Removing Email Address validation Error Messages
emailAddress.addEventListener('input', () => {
    clearInputError(emailAddressError, ePicError, '');
});


// Showing Password Validation Error Messages
password.addEventListener('blur', e => {
    if (e.target.id === "signupPassword" && e.target.value === '') {
        setInputError(passwordError, pPicError, 'Password cannot be empty');
    }
});

// Removing Password Validation Errors
password.addEventListener('input', () => {
    clearInputError(passwordError, pPicError, '')
})

// Making the Button Work
subscribeBtn.addEventListener('click', e => {
    e.preventDefault(); //To prevent the default action of the submit btn

    if (firstName.value && lastName.value && password.value && emailAddress.validity.valid && emailAddress.value.trim() !== '') {
        firstName.value = '';
        lastName.value = '';
        emailAddress.value = '';
        password.value = ''; 
    }
    
});


