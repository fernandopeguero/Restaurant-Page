import {childAppender} from '../util.js'

export function createOrderOnline() {


    const container = document.createElement('div');
    container.classList.add('order_container');

    const uber = document.createElement('h2');
    uber.textContent = 'UBER\nEATS';
    uber.classList.add('uber');

    const doordash = document.createElement('h2');
    doordash.textContent = 'DOORDASH';
    doordash.classList.add('doordash');

    const grubhub = document.createElement('h2');
    grubhub.textContent = 'GRUBHUB';
    grubhub.classList.add('grubhub');

    childAppender(container, doordash, uber, grubhub);

    return container;
}