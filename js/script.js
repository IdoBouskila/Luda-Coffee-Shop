// navigation button
const navContactButton = _('.nav-contact-btn');
const coltureButton = _('.nav-colture-btn');
const aboutButton = _('.nav-about-btn');

// scroll buttons
const scrollButton = _('.scroll-arrow');
const scrollTop = _('.top-page');

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

scrollTop.addEventListener('click', e => {
    e.preventDefault();
    scrollTo('.hero');
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