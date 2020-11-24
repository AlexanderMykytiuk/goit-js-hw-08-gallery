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
    lightBoxBtnRef: document.querySelector(".lightbox__button"),
    lightBoxOverlay: document.querySelector("lightbox__overlay")
}

function onMakerGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        const localRefs = {
            galleryItemRef: document.createElement('li'),
            galleryListRef: document.createElement('a'),
            imageRef: document.createElement('img')
    }

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
}

function onImageClick (event) {

        event.preventDefault();

        if (event.target.nodeName !== 'IMG') {
         return;
    }

        const targImg = event.target;
        refs.lightboxImageRef.src = targImg.dataset.source;   
        refs.lightboxImageRef.alt = targImg.getAttribute("alt");
        refs.lightboxRef.classList.add("is-open");
          
}
 
function onCloseModal() {
        refs.lightboxRef.classList.remove("is-open");
        // refs.lightboxImageRef.src = null;
        // refs.lightboxImageRef.alt = null;
    }

function onKeyupEsc(event) {
        if (event.code === "Escape") {
         onCloseModal();
    }
}

// function onOverlayClick() {
//     onCloseModal();
// } 


onMakerGallery(galleryItems);
refs.listGalleryRef.addEventListener("click", onImageClick);
refs.lightBoxBtnRef.addEventListener("click", onCloseModal);
refs.lightBoxOverlay.addEventListener("click", onCloseModal);
window.addEventListener("keyup", onKeyupEsc);


const checkButton = function (e) {
    if (indexCurrenElement === undefined) {
      indexCurrenElement = parseInt(e.target.firstChild.dataset.index); /* проверка на наличие стартового индекса, работает только один раз*/
    }
    if (e.code === "Escape") {
      modalIsClose();
    } else if (e.code === "ArrowRight") {
      moveInGallary("right");
    } else if (e.code === "ArrowLeft") {
      moveInGallary("left");
    } else {
      return;
    }
  };
  const moveInGallary = function (indexToMove) {
    if (indexToMove === "right") {
      indexCurrenElement += 1;
      if (indexCurrenElement > gallary.length - 1) {
        indexCurrenElement = 0;
      }
    } else if (indexToMove === "left") {
      indexCurrenElement -= 1;
      if (indexCurrenElement < 0) {
        indexCurrenElement = gallary.length - 1;
      }
    }
    changeImg(
      document.querySelector(`img[data-index="${indexCurrenElement}"]`).dataset
        .sourse
    );
  };