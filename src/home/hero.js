/*
Create hero area of  a section on the page home,about , others 
*/

import { createButton } from '../util';
import { childAppender } from '../util';


export function createHeroArea() {

    const div = document.createElement("div");
    div.classList.add('hero_area_container');

    const section = document.createElement("section");
    section.classList.add('container')

    // Information1
    const info = document.createElement("article");
    info.classList.add("hero_article");

    const textContainer = document.createElement('div');
    
    const h1 = document.createElement("h1");
    h1.classList.add('title')
    h1.textContent = "Where Flavor Meets Elegance"

    const h3 = document.createElement('h3');
    h3.classList.add('subtitle');
    h3.textContent = "Discover the finest culinary delights in the heart of New York";

    childAppender(textContainer, h1, h3);
    // Call to action 

    const ctaContainer = document.createElement('div');
    ctaContainer.classList.add('cta_container');
    
    const viewMenu = createButton('View More', 'view_more')
    const reserveTable = createButton('Reserve Table', 'reserve_table');
    const orderOnline = createButton('Order Online', 'order_online');

    childAppender(ctaContainer, viewMenu, reserveTable, orderOnline);

    childAppender(info,textContainer , ctaContainer)

    // const image = document.createElement("img");
    // image.height = 500;
    // image.width = 500;
    // image.src = lamb;
    // image.alt = "lamb cook to perfection"

    childAppender(section, info);

    div.appendChild(section)
    
    return div
    

}