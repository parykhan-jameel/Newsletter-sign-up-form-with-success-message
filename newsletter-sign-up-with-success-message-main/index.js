const form = document.querySelector('form');
const container_1 = document.querySelector('.container');
const container_2 = document.querySelector('.container-2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('email-error').textContent = '';
    const emailInput = document.getElementById("email").value.trim();
     
    
    if (emailInput === ''){
        document.getElementById('email-error').textContent = 'Please enter your email address';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
    if (!emailRegex.test(emailInput)){
        document.getElementById('email-error').textContent = 'Invalid Email address';
        return;
    }

    console.log("Form is valid. Showing success message...");
    container_1.classList.add('hide');
    document.getElementById('confirmation-email').textContent = emailInput;

    // Attach event listener for the dismissal of the success message
    document.getElementById('dismiss-message').addEventListener('click', () => {
        console.log("Dismissing success message...");
        container_2.classList.add('hide');
        container_1.classList.remove('hide');
    });

    console.log("Showing container_2...");
    container_2.classList.remove('hide');
    
});