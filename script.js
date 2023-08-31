const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const success = document.getElementById('success');
    const fail = document.getElementById('error');

    if (name.value == "" || email.value == "" || message.value == "") {

        fail.style.display = 'block';

    } else {
        success.style.display = 'block';
        fail.style.display = 'none';

        name.value = "";
        email.value = "";
        message.value = "";
    }

})