const scrollButton = _('.scroll-arrow');
const contactBtn = _('.contact-container .form-container button');

function scrollTo(selector){
    _(selector).scrollIntoView({
        behavior: 'smooth'
    });
}

contactBtn.addEventListener('click', e => {
    e.preventDefault();

    if(!contactBtn.classList.contains('disabled')){
        contactBtn.classList.add('disabled');
        contactBtn.innerText = 'נשלח בהצלחה!';
    }
});

scrollButton.addEventListener('click', e => {
    scrollTo('.colture-events-container');
});

__( '[data-toggle]' ).forEach( ( button ) => {
    button.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        e.stopPropagation();
        const selector = e.currentTarget.dataset.toggle;

        const isOpen = ! _( selector ).classList.toggle( 'hidden' );

        e.currentTarget.dataset.isOpen = isOpen;
    } );
} );

function _(selector){
    return document.querySelector(selector);
}

function __(selector){
    return document.querySelectorAll(selector);
}