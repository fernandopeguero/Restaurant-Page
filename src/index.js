import './style.css'
import { createNavigationMenu } from "./navigation.js";
import { createHeroArea} from './home/hero.js';
import { createWelcomeSection } from './home/welcome.js';
import { childAppender } from './util.js';
import { createRecommendations } from './home/recommendations.js';
import { createTestimonials } from './home/testimonials.js';
import { createNewsLetter } from './home/newsletter.js';
import { createFooter } from './footer.js';
import { createMenu } from './menu/menu.js';
import { setPageTitle } from './util.js';
import { createReservation } from './reservation/reservation.js';


const body = document.querySelector('body');
// default for all pages
const navigation = createNavigationMenu();
const footerSection = createFooter();

export function navigationController(destination) {

    switch(destination){
        case 'home':
            HomePage();
            break;
        case 'menu':
            menuPage();
            break;
        case 'reservations':
            reservationsPage();
            break;
        case 'orderOnline':
            orderOnlinePage();
            break;
        case 'gallery':
            galleryPage()
            break;
        case 'events':
            eventsPage();
            break;
        case 'aboutUs':
            aboutUsPage();
            break;
        case 'contactUs':
            contactUsPage();
            break;
        default: 
            const body = document.querySelector('body')

            body.textContent = "Page Not Found";

    }
}

navigationController('home')



function HomePage() {

    clearPage()

    setPageTitle('Restaurant Page');

    const heroSection = createHeroArea();
    const welcomeSection = createWelcomeSection();
    const chefRecommendations = createRecommendations();
    const testimonialsSection = createTestimonials();
    const newsletterSection = createNewsLetter();


    childAppender(body, navigation, heroSection, welcomeSection, chefRecommendations, testimonialsSection, newsletterSection, footerSection);

}

function menuPage() {
    clearPage()

    const menu = createMenu()
    setPageTitle('Menu');

    childAppender(body, navigation,menu ,footerSection);

    

}

function reservationsPage() {
    clearPage()
    setPageTitle('Reservations');
    const reservation = createReservation()
    childAppender(body, navigation, reservation,footerSection);

}

function orderOnlinePage() {
    clearPage()
    setPageTitle('OrderOnline');
    childAppender(body, navigation, footerSection);
}

function galleryPage() {

    clearPage()
    setPageTitle('Gallery');
    childAppender(body, navigation, footerSection);
}

function eventsPage() {

    clearPage()
    setPageTitle('Events');
    childAppender(body, navigation, footerSection);
}

function aboutUsPage() {

    clearPage()
    setPageTitle('About Us');
    childAppender(body, navigation, footerSection);
}

function contactUsPage() {
    clearPage()
    setPageTitle('Contact Us');
    childAppender(body, navigation, footerSection);
}

function clearPage() {

    body.textContent = '';
}