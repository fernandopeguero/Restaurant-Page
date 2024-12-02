import './style.css'
import { createNavigationMenu } from "./navigation.js";
import { createHeroArea} from './home/hero.js';
import { createWelcomeSection } from './home/welcome.js';
import { childAppender } from './util.js';
import { createRecommendations } from './home/recommendations.js';
import { createTestimonials } from './home/testimonials.js';
import { createNewsLetter } from './home/newsletter.js';
import { createFooter } from './footer.js';


export function navigationController(destination) {

    switch(destination){
        case 'home':
            initializeHomePage();
            break;
        case 'menu':
            break;
        case 'reservations':
            break;
        case 'orderOnline':
            break;
        case 'gallery':
            break;
        case 'events':
            break;
        case 'aboutUs':
            break;
        case 'contactUs':
            break;
        default: 
            const body = document.querySelector('body')

            body.textContent = destination;

    }
}

navigationController('home')



function initializeHomePage() {
    const body = document.querySelector('body');

    const navigation = createNavigationMenu();
    const heroSection = createHeroArea();
    const welcomeSection = createWelcomeSection();
    const chefRecommendations = createRecommendations();
    const testimonialsSection = createTestimonials();
    const newsletterSection = createNewsLetter();
    const footerSection = createFooter();

    childAppender(body, navigation, heroSection, welcomeSection, chefRecommendations, testimonialsSection, newsletterSection, footerSection);

}