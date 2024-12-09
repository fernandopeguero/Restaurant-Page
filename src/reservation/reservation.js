import { addOptionToSelect, childAppender, createInput, createInputLabel, createUnorderList } from "../util";



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
    const phoneNumber = createInput('phone_number', 'tel');
    phoneNumber.placeholder = '555-555-5555';
    phoneNumber.pattern = "[0-9]{3}-[0-9]{2}-[0-9]{3}"
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

    const actionButton = document.createElement('button');
    actionButton.type = 'button';
    actionButton.textContent = 'Submit Reservation';

    childAppender(form, title, fullNameLabel, fullName, emailLabel, emailAddress,phoneLabel, phoneNumber,reservationLabel, reservationDate,guestlabel, guestAmount,diestaryLabel, dietaryRestrictions, actionButton);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('operation_hours');

    const informationTitle = document.createElement('h2')
    informationTitle.textContent = "Information";

    const informationSection = createOperationInformation();

    childAppender(hoursContainer, informationTitle ,informationSection);

    childAppender(container, form, hoursContainer );

    childAppender(reservationSection,container);


    return reservationSection;

}




function createOperationInformation() {


    const information = document.createElement('div');

    const hours = document.createElement('h3');
    hours.textContent = "Hours Of Operation:";

    const timeSheet = createUnorderList(['Mon–Fri: 5 PM – 10 PM', 'Sat–Sun: 12 PM – 10 PM']);

    const reservationPolicy = document.createElement('h3');
    reservationPolicy.textContent = 'Reservation Policy:';

    const policy = createUnorderList(['Reservations are highly recommended, especially for weekends and holidays. Walk-ins are welcome based on availability.', 'Please inform us of cancellations at least 24 hours in advance.']);

    const groups = document.createElement('h3');
    groups.textContent = 'Group Reservations:'

    const groudsPolicy = createUnorderList(['For parties of 8 or more, please contact us directly at (555) 123-4567 or email events@savorydelight.com.' , 'For an exclusive and intimate experience, our private dining rooms are perfect for special occasions, corporate gatherings, or family celebrations. Each room is elegantly designed and can accommodate groups of 10 to 30 guests.'])


    childAppender(information, hours, timeSheet, reservationPolicy, policy, groups, groudsPolicy);

    
    return information;

}