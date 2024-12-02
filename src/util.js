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