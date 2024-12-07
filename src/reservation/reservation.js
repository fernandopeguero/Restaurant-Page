import { addOptionToSelect, childAppender, createInput, createInputLabel } from "../util";


export function createReservation() {

    const reservationSection = document.createElement('div');
    reservationSection.classList.add('reservation_section');

    const container = document.createElement('section');
    container.classList.add('reservation_container');

    const title = document.createElement('h1');
    title.textContent = 'Reservation';

    // const formcontainer = document.createElement('div');

    const form = document.createElement('form');
    form.classList.add('reservation_form');

    // Full Name 
    
    const fullName = createInput('full_name', 'text');
    fullName.placeholder = 'John Doe'
    const fullNameLabel = createInputLabel('Full Name:', 'full_name');

    // Email
    const emailAddress = createInput('email_address', 'email');
    const emailLabel = createInputLabel('Email:', 'email_address');
    emailAddress.placeholder = 'goodfood@gmail.com'

    // Phone Number
    const phoneNumber = createInput('phone_number', 'number');
    phoneNumber.placeholder = '555-555-5555';
    const phoneLabel = createInputLabel('Phone Number:' , 'phone_number');

    const reservationDate = createInput('reservation_date', 'date');
    const reservationLabel = createInputLabel('Reservation Date:', 'reservation_date');

    const guestAmount = document.createElement('select');
    guestAmount.setAttribute('id', 'number_guest');
    guestAmount.name = 'number_guest';

    const guestlabel = createInputLabel('Number Of Guest:' , 'number_guest')

    console.log(guestAmount)

    addOptionToSelect(guestAmount, '1');
    addOptionToSelect(guestAmount, '2');
    addOptionToSelect(guestAmount, '3');
    addOptionToSelect(guestAmount, '4');
    addOptionToSelect(guestAmount, '5');
    addOptionToSelect(guestAmount, '6');

    const dietaryRestrictions = document.createElement('textarea');
    const diestaryLabel = createInputLabel('Dietary Restrictions:' , 'special_request');

    childAppender(form, title, fullNameLabel, fullName, emailLabel, emailAddress,phoneLabel, phoneNumber,reservationLabel, reservationDate,guestlabel, guestAmount,diestaryLabel, dietaryRestrictions);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('operation_hours');

    childAppender(container, form, hoursContainer );

    childAppender(reservationSection,container);


    return reservationSection;

}