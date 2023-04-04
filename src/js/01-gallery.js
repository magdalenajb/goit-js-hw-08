import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const gallery = galleryItems.map(item =>`<a class="gallery__item" href="${item.original}"><img class="gallery__image"
src="${item.preview}" alt="${item.description}"/></a>`).join('');

galleryList.insertAdjacentHTML('afterbegin', gallery);

galleryList.addEventListener("click", (event) => {
event.preventDefault(); 
});

let lightbox = new SimpleLightbox('.gallery a', {
captions: true,
captionsData: 'alt',
captionDelay: 250,
});


