const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const form = document.getElementById('signup-form');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(password);
}

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
    emailError.style.display = 'block';
    } else {
    emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
    passwordError.style.display = 'block';
    } else {
    passwordError.style.display = 'none';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    if (isEmailValid && isPasswordValid) {
    alert('Sign up berhasil');
    form.reset();
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    } else {
    alert('Form masih ada yang salah.');
    }
});