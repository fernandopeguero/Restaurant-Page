import './style.css'
import { createNavigationMenu } from "./navigation.js";



initializeHtml();




function initializeHtml() {
    const body = document.querySelector('body');

    body.appendChild(createNavigationMenu())
}