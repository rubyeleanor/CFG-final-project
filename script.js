const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value == "" || email.value == "" || message.value == "") {
        console.log('please fill out all fields');
    } else {
        console.log('form submitted');
        name.value = "";
        email.value = "";
        message.value = "";
    }

})