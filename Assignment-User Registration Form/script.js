const form = document.getElementById('registrationForm');
const cancelBtn = document.getElementById('cancel');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!minLength) return 'Password must be at least 8 characters long.';
    if (!hasUpperCase) return 'Password must contain at least one uppercase letter.';
    if (!hasNumber) return 'Password must contain at least one number.';
    if (!hasSpecialChar) return 'Password must contain at least one special character.';
    return '';
}

passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    passwordError.textContent = error;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordErrorMsg = validatePassword(passwordInput.value);

    if (passwordErrorMsg) {
        passwordError.textContent = passwordErrorMsg;
        return;
    }

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
    form.reset();
    passwordError.textContent = '';
});

cancelBtn.addEventListener('click', () => {
    form.reset();
    passwordError.textContent = '';
    alert('Form cancelled.');
});