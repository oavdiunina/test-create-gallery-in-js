import './sass/main.scss';

import images from "./gallery-items.js";


const refs = {
    gallery: document.querySelector(".js-gallery"),
    image: document.createElement("img"),
    lightbox: document.querySelector(".lightbox"),
    btn: document.querySelector('[data-action="close-lightbox"]'),
    modal: document.querySelector(".lightbox__content"),
    lightbox__image: document.querySelector(".lightbox__image"),
};

const galleryMarkup = images.map(galleryEl).join('');
console.log(galleryMarkup);

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
refs.image.classList.add('gallery__image');
refs.gallery.addEventListener('click', onGalleryClick);
refs.btn.addEventListener('click', onClickHandlerClose);
refs.modal.addEventListener('click', closeLightbox);

function galleryEl ({preview, original, description}){
    return  `<li class="gallery__item">
    <a 
    class="gallery__link" 
    href= '${original}'
    >
    <img 
    class="gallery__image" 
    src='${preview}' 
    data-source='${original}' 
    alt='${description}'
    />
    </a>
</li>
`;
};
  
function onGalleryClick(evt){
evt.preventDefault();
if (evt.target.nodeName === 'IMG'){
    refs.lightbox.classList.add ('is-open');
    refs.lightbox__image.src = evt.target.getAttribute('data-source');
    refs.lightbox__image.alt = evt.target.alt
} if (!evt.target.nodeName == 'IMG'){
    return;
} 
window.addEventListener('keyup', clickKey);
};

function onClickHandlerClose(evt) {
    refs.lightbox.classList.remove('is-open');
    refs.lightbox__image.src = '';
    refs.lightbox__image.alt = '';
    window.removeEventListener('keyup', clickKey);
  };
  
function closeLightbox(evt) {
if (evt.target === evt.currentTarget) {
    onClickHandlerClose();
}
};
  
function clickKey(evt) {
if (evt.keyCode === 27) {
    onClickHandlerClose();
};
};






