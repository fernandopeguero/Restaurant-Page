
import { childAppender, createButton } from "./util";

import logo from './img/logo_long_transparent.png';

export function createNavigationMenu() {

    const header = document.createElement('header');
    header.classList.add('nav_container');
    
    const nav = document.createElement('nav');
    // nav.classList.add('container')

    // logo 
    const image = document.createElement('img');
    image.src = logo;
    image.height = 100;
    image.width = 100;


    const menuItems = [
    // navigation buttons for the site
        createButton('HOME','home'),
        createButton('MENU', 'menu'),
        createButton('RESERVATIONS', 'reservations'),
        createButton('ORDER ONLINE', 'orderOnline'),
        createButton('GALLERY', 'gallery'),
        createButton('EVENTS', 'events'),
        createButton('ABOUT US', 'aboutUs'),
        createButton('CONTACT US', 'contactUs')
    ]


    menuItems.forEach(item => {
        nav.appendChild(item)
    });

    childAppender(header, image , nav)
    
    return header;
}


/*
creates a navigation button with the desire class 
cls stands for class since class is a javascript keyword
*/





