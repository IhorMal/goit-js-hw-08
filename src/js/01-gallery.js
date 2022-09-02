// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function creationGalleryElements({ preview, original, description }) {
   
    return `<li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`; 
}

const createdGallery = galleryItems.map(creationGalleryElements).join('');
gallery.innerHTML = createdGallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
    captionDelay: 250,
    navText: ['&#10913', '&#10914'], 
});
