import './style.css'
import { createNavigationMenu } from "./navigation.js";
import { createHeroArea} from './home/hero.js';



initializeHtml();




function initializeHtml() {
    const body = document.querySelector('body');

    const navigation = createNavigationMenu();
    const heroArea = createHeroArea();
    
    body.appendChild(navigation);
    body.appendChild(heroArea);
}