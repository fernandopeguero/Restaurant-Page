import { childAppender, createUnorderList } from "./util";


export function createFooter(){

    const div = document.createElement('div');
    div.classList.add('footer_container');
    const section = document.createElement('section');
    section.classList.add('container');

    
    const navigationList = createUnorderList(['Home', 'Menu', 'Reservations', 'Order Online', 'Events', 'Contact Us']);

    const socialMediaList = createUnorderList(['instagram', 'Facebook', 'Twitter']);

    const policyList = createUnorderList(['Privacy Policy', 'Terms & Conditions', '© 2024 Savory Delight. All Rights Reserved.'])


    childAppender(section, navigationList, socialMediaList, policyList);

    div.appendChild(section)

    return div;

}
