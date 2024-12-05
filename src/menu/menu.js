import { childAppender, createMenuItem } from "../util";
import lamb from '../img/lamb.png';
import menuBackground from '../img/condiments.jpg';
import lavaCake from '../img/lava_cake.jpg';
import wine from '../img/wine.jpg';


export function createMenu() {



    const container = document.createElement('div');
    container.classList.add('menu_container');

    const menuHero = document.createElement('div');
    menuHero.classList.add('menu_hero_area');

    // image 
    const bgMenuImage = document.createElement('img');
    bgMenuImage.src = menuBackground;

    // info 
    const info = document.createElement('div');
    info.classList.add('info_container');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'MENU'

    const subtitle = document.createElement('h2');
    subtitle.textContent = "Reserve Your Tasting Experience";

    const body = document.createElement('p');
    body.textContent = "Embark on a culinary journey with our seasonal tasting menu. A curated selection of courses designed to showcase the chef's creativity and the finest ingredients of the season."

    childAppender(info, menuTitle, subtitle, body);

    childAppender(menuHero, bgMenuImage, info)

    const entrees = createMenuItem('Entrees', 'Signature dishes crafted to perfection.',['Herb-Crusted Lamb Chops', 'Seared Halibut with Citrus Beurre Blanc' , 'Filet Mignon with Truffle Butter' , 'Wild Mushroom Risotto' , 'Pan-Seared Duck Breast'], lamb);

    const desserts = createMenuItem('Desserts', 'End your meal on a sweet note with our handcrafted desserts.', ['Molten Chocolate Lava Cake', 'Vanilla Crème Brûlée', 'Lemon Thyme Tart', 'Poached Pear in Red Wine', 'Seasonal Cheesecake'], lavaCake, true );

    const wines = createMenuItem(
        'Wine Pairings',
        'Perfectly paired wines to complement every dish.',
        [
            'Dom Pérignon, Brut Champagne (Sparkling)',
            'Cloudy Bay, Sauvignon Blanc, New Zealand (White)',
            'Château Margaux, Bordeaux, France (Red)',
            'Whispering Angel, Rosé, Provence, France (Rosé)',
            'Château d’Yquem, Sauternes, France (Dessert)'
        ],
        wine
    )

    childAppender(container, menuHero , entrees, desserts , wines);

    return container;
}