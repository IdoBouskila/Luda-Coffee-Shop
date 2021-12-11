const scrollButton = _('.scroll-arrow');

scrollButton.addEventListener('click', e => {
    window.scrollBy(0, window.innerHeight / 2);
});



function _(selector){
    return document.querySelector(selector);
}