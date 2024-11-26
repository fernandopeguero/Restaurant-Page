import './style.css'
import { createNavigationMenu } from "./navigation.js";
import { createHeroArea} from './home/hero.js';
import { createWelcomeSection } from './home/welcome.js';
import { childAppender } from './util.js';



initializeHtml();




function initializeHtml() {
    const body = document.querySelector('body');

    const navigation = createNavigationMenu();
    const heroSection = createHeroArea();
    const welcomeSection = createWelcomeSection();

    childAppender(body, navigation, heroSection, welcomeSection);
}