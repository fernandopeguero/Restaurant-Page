
import steak from '../img/plating-dish.jpg';
import { childAppender, createUnorderList } from '../util';

export function createRecommendations () {


    const div = document.createElement('div');
    div.classList.add('recommendations_container');
    const section = document.createElement('section');
    section.classList.add('container');

    const image = document.createElement('img');
    image.classList.add('recommendation_image')
    image.width = 600;
    image.src = steak;
    image.alt = 'steak with vegetables';

    const info = document.createElement('article');
    info.classList.add('recommendations_article');

    const title = document.createElement('h2');
    title.textContent = 'Chef’s Recommendations';
    title.classList.add('title');

    const textBody = document.createElement('p');
    textBody.textContent = ` Indulge in our chef-curated selections, featuring innovative creations and timeless classics. Every dish is crafted to captivate your palate and elevate your dining experience`;
    
    // recommendations by the chefs list 

    const recommendations = document.createElement('div');
    recommendations.classList.add('chef_recommendations');


    const entrees = createUnorderList(['Herb-Crusted Lamb Chops', 'Seared Halibut with Citrus Beurre Blanc', 'Filet Mignon with Truffle Butter', 'Wild Mushroom Risotto', 'Pan-Seared Duck Breast']);
    // title entrees
    const entreesTitle = document.createElement('h3');
    entreesTitle.textContent = 'Entrees';
    entrees.insertBefore(entreesTitle, entrees.firstChild);

    const desserts = createUnorderList(['Molten Chocolate Lava Cake', 'Vanilla Crème Brûlée', 'Lemon Thyme Tart', 'Poached Pear in Red Wine', 'Seasonal Cheesecake'])
    // title desserts
    const dessertTitle = document.createElement('h3');
    dessertTitle.textContent = 'Dessert';
    desserts.insertBefore(dessertTitle, desserts.firstElementChild);
    
    childAppender(recommendations, entrees, desserts);

    childAppender(info, title, textBody, recommendations);

    childAppender(section, info, image)

    div.appendChild(section);

    return div;


}