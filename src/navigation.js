
import { createButton } from "./util";

export function createNavigationMenu() {

    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const menuItems = [
    // navigation buttons for the site
        createButton('HOME','home'),
        createButton('ABOUT US', 'aboutUs'),
        createButton('MENU', 'menu'),
        createButton('RESERVATIONS', 'reservations'),
        createButton('ORDER ONLINE', 'orderOnline'),
        createButton('GALLERY', 'gallery'),
        createButton('EVENTS', 'events'),
        createButton('CONTACT US', 'contactUs')
    ]


    menuItems.forEach(item => {
        nav.appendChild(item)
    });

    header.appendChild(nav);
    
    return header;
}


/*
creates a navigation button with the desire class 
cls stands for class since class is a javascript keyword
*/





