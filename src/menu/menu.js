import { childAppender, createMenuItem } from "../util";
import lamb from '../img/lamb.png';


export function createMenu() {



    const container = document.createElement('div');
    container.classList.add('menu_container');

    const entrees = createMenuItem('Entrees', 'Signature dishes crafted to perfection.',['Herb-Crusted Lamb Chops', 'Seared Halibut with Citrus Beurre Blanc' , 'Filet Mignon with Truffle Butter' , 'Wild Mushroom Risotto' , 'Pan-Seared Duck Breast'], lamb);


    childAppender(container, entrees);

    return container;
}