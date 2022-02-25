const userID = 'service_0ykjkl9';
const emailTemplate = 'template_gs0t4ov';

const name      = _('#name');
const phone     = _('#phone');
const submitBtn = _('#submit-btn');

emailjs.init("user_D3hbZfYeUDJSgXL1icq4Y");

function sendMail() {
    const tempParams = {
        from_name: name.value,
        phone_number: phone.value,
    }
    emailjs.send(userID, emailTemplate, tempParams)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
}


submitBtn.addEventListener('click', e => {
    sendMail();
});

function _(selector) {
    return document.querySelector(selector);
}
