function checkPassword() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('passwordFeedback');
    feedback.textContent = "";

    // Check password is valid
    if (password.length < 8) {                           //contain 8 characters
        feedback.textContent = "Password must be at least 8 characters.";
        feedback.style.color = 'red';
        return false;  
    }
    if (!/\d/.test(password)) {
        feedback.textContent = "Password must contain at least one number.";
        feedback.style.color = 'red';
        return false; 
    }
    if (!/[A-Z]/.test(password)) {
        feedback.textContent = "Password must contain at least one uppercase letter.";
        feedback.style.color = 'red';
        return false;  
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        feedback.textContent = "Password must contain at least one special character.";
        feedback.style.color = 'red';
        return false;  
    }

    // If all conditions are satisfied
    feedback.textContent = "Password is valid!";
    feedback.style.color = 'green';
    return true;  
}


