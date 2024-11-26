export function createButton(text, cls) {

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add(cls);
    button.textContent = text;

    return button;

}

export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}