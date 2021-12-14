const scrollButton = _('.scroll-arrow');
const contactBtn = _('.contact-container .form-container button');


contactBtn.addEventListener('click', e => {
    if(!contactBtn.classList.contains('disabled')){
        contactBtn.classList.add('disabled');
        e.preventDefault();
        contactBtn.innerText = 'נשלח בהצלחה!';
    }
});

scrollButton.addEventListener('click', e => {
    window.scrollBy(0, window.innerHeight / 2);
});




function _(selector){
    return document.querySelector(selector);
}