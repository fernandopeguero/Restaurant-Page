import { childAppender } from "../util";


export function createTestimonials() {

    const div = document.createElement('div');
    const section = document.createElement('section');


    const cards = [
        createCard(
            '', 
            'An Unforgettable Evening', 
            `From the moment we walked in, we were treated like royalty. The dishes were a masterpiece, both in flavor and presentation. Savory Delight has redefined gourmet dining for us!`, 
            `Sophia L., NYC`),
        createCard(
            '', 
            'Simply Exquisite', 
            `Every bite was a symphony of flavors. The staff’s attention to detail and the ambiance made our anniversary dinner truly magical. Highly recommended for special occasions!`, 
            `James R., Brooklyn`
        ),
        createCard(
            '', 
            'A Culinary Journey', 
            `The seasonal tasting menu was divine! The chef’s creativity and passion are evident in every dish. Can’t wait to return and try more.`, 
            `Mia T., Manhattan`
        )
    ]
    


    cards.forEach(card => section.appendChild(card));

    div.appendChild(section);

    return div;
}


function createCard(img = '', title, body, author ) {

    const card = document.createElement('div')
    card.classList.add('card');

    const image = document.createElement('img');
    image.height = 100;
    image.width = 100;
    image.src = img || "";
    image.alt = 'user testimonial picture'
    image.style.backgroundColor = 'Gray'

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const textBody = document.createElement('p');
    textBody.textContent = body;

    const cardAuthor = document.createElement('h4');
    cardAuthor.textContent = author;

    childAppender(card, image, cardTitle, textBody, cardAuthor);

    return card;
}