// contact form submit button
const contactBtn = _('.contact-container .form-container button');

// navigation button
const navContactButton = _('.nav-contact-btn');
const coltureButton = _('.nav-colture-btn');
const aboutButton = _('.nav-about-btn');

// scroll buttons
const scrollButton = _('.scroll-arrow');

contactBtn.addEventListener('click', e => {
    e.preventDefault();
    
    if(!contactBtn.classList.contains('disabled')){
        contactBtn.classList.add('disabled');
        contactBtn.innerText = 'נשלח בהצלחה!';
    }
});

// every button that has data-toggle will open the mobile nav
__( '[data-toggle]' ).forEach( ( button ) => {
    button.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        e.stopPropagation();
        const selector = e.currentTarget.dataset.toggle;
        
        const isOpen = ! _( selector ).classList.toggle( 'hidden' );
        
        e.currentTarget.dataset.isOpen = isOpen;
    } );
} );


coltureButton.addEventListener('click', e => {
    e.preventDefault();
    scrollTo('.colture-events-container');
});

aboutButton.addEventListener('click', e => {
    e.preventDefault();
    scrollTo('.about-container');
});

navContactButton.addEventListener('click', e => {
    e.preventDefault();
    scrollTo('.contact-container');
});

scrollButton.addEventListener('click', e => {
    e.preventDefault();
    scrollTo('.colture-events-container');
});

function scrollTo(selector){
    _(selector).scrollIntoView({
        behavior: 'smooth'
    });
}

function _(selector){
    return document.querySelector(selector);
}

function __(selector){
    return document.querySelectorAll(selector);
}