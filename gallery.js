import galleryItems from "./gallery-items.js";

// {/* <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li> */}

const refs = {
    listGalleryRef: document.querySelector('.js-gallery'),
    lightboxRef: document.querySelector(".lightbox"),
    lightboxImageRef: document.querySelector(".lightbox__image"),
    lightboxContentRef: document.querySelector(".lightbox__content"),
    lightBoxBtnRef: document.querySelector(".lightbox__button")
};

function onMakerGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        const localRefs = {
            galleryItemRef: document.createElement('li'),
            galleryListRef: document.createElement('a'),
            imageRef: document.createElement('img')
    };

        localRefs.galleryItemRef.classList.add('gallery__item');
        localRefs.galleryListRef.classList.add('gallery__link');
        localRefs.galleryListRef.setAttribute('href', original);
        localRefs.imageRef.classList.add('gallery__image');
        localRefs.imageRef.setAttribute('src',  preview);
        localRefs.imageRef.setAttribute('data-source', original);
        localRefs.imageRef.setAttribute('alt', description);
        localRefs.galleryListRef.appendChild(localRefs.imageRef);
        localRefs.galleryItemRef.appendChild(localRefs.galleryListRef);
        refs.listGalleryRef.appendChild(localRefs.galleryItemRef);

        return localRefs.galleryItemRef; 
    });
};

function onImageClick (event) {

        event.preventDefault();

        if (event.target.nodeName !== 'IMG') {
         return;
    };

        const targImg = event.target;
        console.log(targImg);
        const altRef = targImg.getAttribute("alt"); 
        const largeImg = targImg.dataset.source;
        refs.lightboxImageRef.src = largeImg;    
        refs.lightboxImageRef.alt = altRef;
        refs.lightboxRef.classList.add("is-open");
  
}; 
 
function onCloseModal() {
        refs.lightboxRef.classList.remove("is-open");
    };

function onKeyupEsc(event) {
        if (event.code === "Escape") {
         onCloseModal();
    };
};

onMakerGallery(galleryItems);
refs.listGalleryRef.addEventListener("click", onImageClick);
refs.lightBoxBtnRef.addEventListener("click", onCloseModal);
window.addEventListener("keyup", onKeyupEsc);