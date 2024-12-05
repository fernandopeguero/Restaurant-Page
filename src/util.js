import { navigationController } from ".";



export function createButton(text, cls) {

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add(cls);
    button.textContent = text;
    button.addEventListener('click' , (e) => {
        navigationController(cls);
    })

    return button;

}

export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}

export function createUnorderList(nameList) {

    const ul = document.createElement('ul');

    for(const name of nameList){
        ul.appendChild(createListItem(name));
    }

    return ul;


}

export function createListItem(text){

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.addEventListener('click' , (e) => {
        e.preventDefault();
    })
    a.textContent = text;

    li.appendChild(a);

    return li;


}


export function createMenuItem(title, sub, list, image = "", swap = false) {


    const section = document.createElement('section');
    section.classList.add('menu_container');

    const details = document.createElement('div');


    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;

    const subtitle = document.createElement('p');
    subtitle.textContent = sub;

    const menuItems = createUnorderList(list);

    childAppender(details, sectionTitle, subtitle, menuItems);
    
    const menuImage = document.createElement('img');
    menuImage.src = image || "";
    menuImage.height = 600;
    menuImage.width = 600;


    if(swap) {

        childAppender(section, menuImage , details)
    } else {
        childAppender(section, details, menuImage);
    }


    return section;
}