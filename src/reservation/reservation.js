import { addOptionToSelect, childAppender, createInput } from "../util";


export function createReservation() {

    const reservationSection = document.createElement('div');

    const container = document.createElement('section');
    container.classList.add('reservation_container');

    // const formcontainer = document.createElement('div');

    const form = document.createElement('form');
    form.classList.add('reservations-form');

    const fullName = createInput('full_name', 'text');
    const emailAddress = createInput('email_address', 'email');
    const phoneNumber = createInput('phone_number', 'number');
    const reservationDate = createInput('reservation_date', 'date');
    const guestAmount = document.createElement('select');
    const partySize = createInput('party_size', 'number');
    console.log(guestAmount)

    addOptionToSelect(guestAmount, '1');
    addOptionToSelect(guestAmount, '2');
    addOptionToSelect(guestAmount, '3');
    addOptionToSelect(guestAmount, '4');
    addOptionToSelect(guestAmount, '5');
    addOptionToSelect(guestAmount, '6');

    const dietaryRestrictions = createInput('special_request', 'textarea');

    childAppender(form, fullName, emailAddress, phoneNumber, reservationDate, guestAmount, partySize, dietaryRestrictions);

    container.appendChild(form)

    reservationSection.appendChild(container);


    return reservationSection;

}