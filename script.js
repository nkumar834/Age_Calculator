function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JS months are zero-based
    const year = parseInt(document.getElementById('year').value);
    const resultDiv = document.getElementById('result');

    if (!day || !month || !year) {
        resultDiv.textContent = 'Please enter a valid date.';
        resultDiv.classList.add('error');
        return;
    }

    const dob = new Date(year, month, day);
    const today = new Date(); 

    if (dob > today) {
        resultDiv.textContent = 'Future dates are not allowed.';
        resultDiv.classList.add('error');
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age >= 0) {
        resultDiv.textContent = `You are ${age} years old! 🎈`;
        resultDiv.classList.remove('error');
    } else {
        resultDiv.textContent = 'Please enter a valid date of birth.';
        resultDiv.classList.add('error');
    }
}
