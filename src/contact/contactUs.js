import {childAppender} from '../util.js';
import {createOperationInformation} from '../reservation/reservation.js';

export function createContactUs() {



    const contactSection = document.createElement('section');
    contactSection.classList.add('contact_section');

    const container = document.createElement('div');
    container.classList.add('contact_container')

    const map = document.createElement('div');
    map.classList.add('map');

    const information = createOperationInformation();

    
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('operation_hours');

    const informationTitle = document.createElement('h2')
    informationTitle.textContent = "Contact Us";

    childAppender(hoursContainer, informationTitle, information);

    childAppender(container, map, hoursContainer);

    childAppender(contactSection, container);

    return contactSection


}