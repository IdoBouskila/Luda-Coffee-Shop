const template = document.createElement('template');

template.innerHTML = `

                    <style>
                    .event-card{
                        display: flex;
                        flex-direction: column;
                        width: 65vw; 
                        margin-left: 2vw;
                        line-height: 1.8;
                        border-radius: 20px 20px 0 0;
                        background: #fff;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                        color: #402615;
                    }
                    
                    .event-card img{
                        width: 100%;
                        height: 100%;
                        border-radius: 20px 20px 0 0;
                        object-fit: cover;
                    }

                    .event-card span, div{
                        margin-top: 1vh;
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
                        margin-right: 10px;
                        font-weight: 500;
                    }
                    
                    .event-card .event-details .description{
                        margin: 0;
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


                    @media all and (min-width: 820px){
                        .event-card{
                            width: 21vw;
                            height: 90%;
                            margin-top: 2vw;
                        }

                        .event-card span, div{
                            margin-top: 1vh;
                        }

                        .event-card .date, .event-card .time, .event-card .event-details, .event-card .location{
                            font-size: 1.45vw;
                        }

                        .event-card .location::before{
                            height: 1.25vw;
                            width: 1.25vw;
                            margin-left: 0.5vw;
                        }

                        .event-card .cost{
                            font-size: 1.65vw;
                        }
                    }
                    </style>


                   <div class="event-card">
                        <img src="./img/others/adir-miller.svg" alt="">
                        <span class="date">12.11.21</span>
                        <span class="time">19:00 - 22:00</span>

                        <div class="event-details">
                            <strong class="event-type">סטנדאפ</strong>
                            <span class="description">אדיר מילר</span>
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
        this.shadowRoot.querySelector('.description').innerText = this.getAttribute('description');
        this.shadowRoot.querySelector('.cost').innerText = this.getAttribute('cost');
    }    
}

window.customElements.define('event-card', EventCard);