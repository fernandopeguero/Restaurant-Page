import { childAppender, createButton } from "../util";
import steak from '../img/steak-vegetables.png'

export function createWelcomeSection() {

    const div = document.createElement('div');
    const section = document.createElement('section');

    const info = document.createElement('article');
    info.classList.add('welcome_info');
    
    const title = document.createElement('h2');
    title.textContent = 'Welcome to Savory Delight';

    const textBody = document.createElement('p');
    textBody.textContent =`Step into a world where culinary artistry meets refined elegance. At Savory Delight, we craft unforgettable dining experiences through our commitment to exceptional flavors, impeccable presentation, and unparalleled service. Located in the heart of [City Name], we invite you to indulge in a menu inspired by seasonal ingredients and global influences, all meticulously curated for your delight.`;

    // call to action container 
    const ctaContainer = document.createElement('div');
    ctaContainer.classList.add('cta_container');

    // Explore Our Menu"
    // "Reserve Your Table" 

    const exploreMenu = createButton('Explore Our Menu', 'view_menu');
    const reserveTable = createButton('Reserve Your Table', 'reserve_table');

    childAppender(ctaContainer, exploreMenu, reserveTable);

    childAppender(info, title, textBody, ctaContainer);

    const image = document.createElement('img');
    image.src = steak;
    image.alt = 'steak with vegetables';

    childAppender(section, info, image);

    div.append(section);

    return div;

}