const scrollButton = _('.scroll-arrow');
const contactBtn = _('.contact-container .form-container button');

contactBtn.addEventListener('click', e => {
    contactBtn.classList.add('disabled');
    e.preventDefault();
});

scrollButton.addEventListener('click', e => {
    window.scrollBy(0, window.innerHeight / 2);
});




function _(selector){
    return document.querySelector(selector);
}