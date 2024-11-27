
import {childAppender} from '../util.js'

export function createNewsLetter() {

    const div = document.createElement('div');

    const section = document.createElement('section');
    section.classList.add('container');

    const title = document.createElement('h2')
    title.textContent = 'Stay in the Know';

    const body = document.createElement('p')
    body.textContent = `Be the first to discover our latest culinary creations, exclusive promotions, and upcoming events. Sign up for our newsletter and let the flavors of Savory Delight inspire your inbox.`;

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('emailContainer');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Email';
    input.name = 'email';
    input.id = 'email';

    const signUp = document.createElement('button');
    signUp.type = 'button';
    signUp.textContent = 'Sign Up'
    signUp.classList.add('signUp');

    
    childAppender(emailContainer, input, signUp);

    childAppender(div, title, body, emailContainer);

    return div;

}