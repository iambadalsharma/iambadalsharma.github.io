document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Cloud Infomac!");

    const inquiryForm = document.getElementById('inquiry-form');
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inquiry form submitted');
        // Add form submission functionality here
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login form submitted');
        // Add login functionality here
    });

    // Glow effect for background
    document.addEventListener('mousemove', (e) => {
        document.body.style.backgroundPosition = `${e.pageX / 100}px ${e.pageY / 100}px`;
    });
});