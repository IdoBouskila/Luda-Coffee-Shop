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

function formValidation() {    
    
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if(submitBtn.classList.contains('disabled')) {
        alert('.הטופס הקודם התקבל, לשליחת טופס נוסף רענן את הדף');
        return;
    }

    if((name.value).trim() == "" || (phone.value).trim() == "") {
        alert('נא למלא את הטופס בהתאם.');
        return;
    }
    
    submitBtn.classList.add('disabled');
    submitBtn.innerText = 'נשלח בהצלחה!';

    sendMail();
});

function _(selector) {
    return document.querySelector(selector);
}
