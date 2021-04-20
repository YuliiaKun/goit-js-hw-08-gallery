import galleryItems from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),  //ul
    modal: document.querySelector('.js-lightbox'),  //модалка
    overlay: document.querySelector('.lightbox__overlay'),
    images: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('[data-action="close-lightbox"]'),
};

refs.gallery.addEventListener('click', onOpenModal);
refs.overlay.addEventListener('click', onOverlayClick);
// refs.images.addEventListener('click',);
refs.closeBtn.addEventListener('click', onCloseModal);

const makeGalleryList = ({preview, original, description}) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const imgList = galleryItems.map(makeGalleryList).join('');
refs.gallery.insertAdjacentHTML("afterbegin", imgList);

console.log(refs.gallery);


function onOpenModal(event) {
    window.addEventListener('keydown', onButtonKeyDown);

    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    event.preventDefault()
    refs.modal.classList.add('is-open');
    refs.images.setAttribute('src', event.target.getAttribute('data-source'));
};


function onCloseModal() {
    refs.modal.classList.remove('is-open');
    refs.images.removeAttribute('src');
    window.removeEventListener('keydown', onButtonKeyDown);
};

 // Закрытие по Esc

function onButtonKeyDown(event) {
    const ESC_KEY_CODE = 'Escape';
    const LEFT = 'ArrowLeft';
    const RIGHT = 'ArrowRight';

    if (event.code === ESC_KEY_CODE) {
    // вызываем функцию закрытия модалки
        onCloseModal();
    } else if (event.code === LEFT) {
        
    } else if (event.code === RIGHT) {

    }
 };

  // Закрытие по div.lightbox__overlay

function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
        // вызываем функцию закрытия модалки
        onCloseModal();
    }
}