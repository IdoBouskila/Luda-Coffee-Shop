const menuIcon = _('.menu-container label');

menuIcon.addEventListener('click', e => {
    menuIcon.classList.toggle('menu-open');
})

function _(selector){
    return document.querySelector(selector);
}






const template = document.createElement('template');
//  48 vw
template.innerHTML = `

                    <style>
                    .event-card{
                        display: flex;
                        flex-direction: column;
                        width: 48vw; 
                        margin-left: 2vw;
                        line-height: 1.8;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                        background: #fff;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                        color: #402615;
                    }
                    
                    .event-card img{
                        object-fit: cover;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                    }

                    .event-card span{
                        margin-right: 10px;
                    }
                    
                    .event-card .date{
                        font-weight: 500;
                        font-size: 5vw;
                    }
                    
                    .event-card .time{
                        font-size: 4vw;
                    }
                    
                    .event-card .event-details{
                        font-size: 4.4vw;
                    }
                    
                    .event-card .event-details .event-type{
                        font-weight: 500;
                    }
                    
                    .event-card .event-details .artist{
                        margin: 0;
                    }
                    
                    .event-card .event-details .hyphen{
                        margin: 0 1px 0 -9px;
                    }
                    
                    .event-card .location{
                        font-size: 4.3vw;
                    }
                    
                    .event-card .location::before{
                        display: inline-block;
                        content: '';
                        height: 17px;
                        width: 12px;
                        margin-left: 1.5vw;
                        background: url(../img/icons/location-icon.svg);
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    
                    .event-card .cost{
                        font-size: 4.8vw;
                        font-weight: 500;
                        margin-bottom: 20px;
                    }
                    </style>


                    <div class="event-card">
                        <img src="./img/others/adir-miller.svg" alt="">
                        <span class="date">12.11.21</span>
                        <span class="time">19:00 - 22:00</span>

                        <div class="event-details">
                            <span class="event-type">סטנדאפ</span>
                            <span class="hyphen">-</span>
                            <span>עם</span>
                            <span class="artist">אדיר מילר</span>
                        </div>

                        <span class="location">קפה "לודה"</span>
                        <span class="cost">הכניסה חינם!</span>
                    </div>
`;

class EventCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('img-src');
        this.shadowRoot.querySelector('.date').innerText = this.getAttribute('date');
        this.shadowRoot.querySelector('.time').innerText = this.getAttribute('time');
        this.shadowRoot.querySelector('.event-type').innerText = this.getAttribute('event-type');
        this.shadowRoot.querySelector('.artist').innerText = this.getAttribute('artist');
        this.shadowRoot.querySelector('.cost').innerText = this.getAttribute('cost');
    }    
}

window.customElements.define('event-card', EventCard);