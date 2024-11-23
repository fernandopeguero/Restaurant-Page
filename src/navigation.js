

export function createNavigationMenu() {

    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const menuItems = [
    // navigation buttons for the site
        createNavigationButton('HOME','home'),
        createNavigationButton('ABOUT US', 'aboutUs'),
        createNavigationButton('MENU', 'menu'),
        createNavigationButton('RESERVATIONS', 'reservations'),
        createNavigationButton('ORDER ONLINE', 'orderOnline'),
        createNavigationButton('GALLERY', 'gallery'),
        createNavigationButton('EVENTS', 'events'),
        createNavigationButton('CONTACT US', 'contactUs')
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

function createNavigationButton(text, cls) {

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add(cls);
    button.textContent = text;

    return button;

}



