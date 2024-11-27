
import steak from '../img/plating-dish.jpg';
import { childAppender } from '../util';

export function createRecommendations () {


    const div = document.createElement('div');
    const section = document.createElement('section');
    section.classList.add('container');

    const image = document.createElement('img');
    image.classList.add('recommendation_image')
    image.height = 500;
    image.width = 500;
    image.src = steak;
    image.alt = 'steak with vegetables';

    const info = document.createElement('article');
    info.classList.add('article');

    const title = document.createElement('h2');
    title.textContent = 'Chef’s Recommendations';
    title.classList.add('title');

    const textBody = document.createElement('p');
    textBody.textContent = ` Indulge in our chef-curated selections, featuring innovative creations and timeless classics. Every dish is crafted to captivate your palate and elevate your dining experience`;
    
    childAppender(info, title, textBody);

    childAppender(section, info, image)

    div.appendChild(section);

    return div;


}