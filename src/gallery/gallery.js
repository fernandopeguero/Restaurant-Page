import avocadoToast from '../img/gallery/avocado_toast.jpg';
import oreoCake from '../img/gallery/oreo_cake.jpg';
import pancake from '../img/gallery/pancake.jpg';
import rosemarySteak from '../img/gallery/rosemary_steak.jpg';
import shrimpPotato from '../img/gallery/shrimp_potato.jpg';
import { childAppender, createGalleryItem } from '../util';



export function createGallery() {

    const gallerySection = document.createElement('section');

    const avocadoSection = createGalleryItem('Avocado Toast', 'Avocado toast with eggs beautifully platted', avocadoToast);
    const shrimpPotatoSection = createGalleryItem('Shrimp Potato', 'Shrimp in lemon sauce with baked potato', shrimpPotato);
    const rosemarySteakSection = createGalleryItem('Rosemary Steak', 'Juicy steak with a lovely rosemary smell', rosemarySteak);
    const oreoCakeSection = createGalleryItem('Oreo Cake', 'Delicious orea cake with cookie crums', oreoCake);
    const pancakeSection = createGalleryItem('Blueberry Pancake', 'Out of this world blueberry pancakes', pancake);


    childAppender(gallerySection, avocadoSection, shrimpPotatoSection, rosemarySteakSection, oreoCakeSection, pancakeSection);

    return gallerySection;

}
