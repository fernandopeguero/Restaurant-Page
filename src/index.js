import './style.css'
import { createNavigationMenu } from "./navigation.js";
import { createHeroArea} from './home/hero.js';
import { createWelcomeSection } from './home/welcome.js';
import { childAppender } from './util.js';
import { createRecommendations } from './home/recommendations.js';
import { createTestimonials } from './home/testimonials.js';



initializeHtml();




function initializeHtml() {
    const body = document.querySelector('body');

    const navigation = createNavigationMenu();
    const heroSection = createHeroArea();
    const welcomeSection = createWelcomeSection();
    const chefRecommendations = createRecommendations();
    const testimonialsSection = createTestimonials();

    childAppender(body, navigation, heroSection, welcomeSection, chefRecommendations, testimonialsSection);
}