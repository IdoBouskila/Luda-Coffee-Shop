const scrollButton = _('.scroll-arrow');
const contactBtn = _('.contact-container .form-container button');

function scrollTo(selector){
    _(selector).scrollIntoView({
        behavior: 'smooth'
    });
}



scrollButton.addEventListener('click', e => {
    scrollTo('.colture-events-container');
});

function _(selector){
    return document.querySelector(selector);
}