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

const listGalleryRef = document.querySelector('.js-gallery');
// console.log(listGalleryRef);

const onMakerGallery = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {

const galleryItemRef = document.createElement('li');
galleryItemRef.classList.add('gallery__item');
// console.log(galleryItemRef);

const galleryListRef = document.createElement('a');
galleryListRef.classList.add('gallery__link');
galleryListRef.setAttribute('href', original);
// console.log(galleryListRef);

const imageRef = document.createElement('img');
imageRef.classList.add('gallery__image');
imageRef.setAttribute('src',  preview);
imageRef.setAttribute('data-source', original);
imageRef.setAttribute('alt',description);
// console.log(imageRef);

galleryListRef.appendChild(imageRef);
galleryItemRef.appendChild(galleryListRef);
listGalleryRef.appendChild(galleryItemRef);

return galleryItemRef; 

    });
};

onMakerGallery(galleryItems);



// import gallery from "./gallery-items.js";

// const KEYCODE_ESC = 27;

// const refs = {
//     list: document.querySelector(".gallery"),
//     divLightbox: document.querySelector("div.lightbox"),
//     lightboxImage: document.querySelector(".lightbox___image"),
//     lightboxContent: document.querySelector(".lightbox__content"),
//     lightBoxBtn: document.querySelector(".lightbox__button")
// };

// const galleryProcess = gallery => {
//     return gallery.map(({ preview, original, description }) => {
//         const localRefs = {
//             item: document.createElement("li"),
//             link: document.createElement("a"),
//             image: document.createElement("img"),
//             span: document.createElement("span"),
//             i: document.createElement("i")
//         };

//         localRefs.item.classList.add("gallery__item");
//         localRefs.link.classList.add("gallery__link");
//         localRefs.link.setAttribute("href", original);
//         localRefs.image.classList.add("gallery__image");
//         localRefs.image.setAttribute("src", preview);
//         localRefs.image.setAttribute("data-source", original);
//         localRefs.image.setAttribute("alt", description);
//         localRefs.span.classList.add("gallery__icon");
//         localRefs.i.classList.add("material-icons");
//         localRefs.i.textContent = "zoom out map";
//         localRefs.span.appendChild(localRefs.i);
//         localRefs.link.appendChild(localRefs.image);
//         localRefs.link.appendChild(localRefs.span);
//         localRefs.item.appendChild(localRefs.link);

//         return localRefs.item;
//     });
// };

// const items = galleryProcess(gallery);
// items.forEach(item => {
//     refs.list.appendChild(item);
// });

// const handleClick = e => {
    
//     e.preventDefault();
//     const data = e.target.dataset.source;
//     const image = refs.lightboxImage.cloneNode(false);
//     image.setAttribute("src", data);
//     image.setAttribute("alt", e.target.alt);
//     refs.lightboxContent.innerHTML = "";
//     refs.lightboxContent.append(image);
//     refs.divLightbox.classList.add("is-open");
    
// };

// const closeHandler = () => {
//     refs.divLightbox.classList.remove("is-open");
// };

// const handleKeyup = e => {
//     if (e.keyCode == KEYCODE_ESC) {
//         console.log("key ESC pressed");
//         closeHandler();
//     }
// };

// const contentClickHandler = e => {
//     if (e.target !== e.currentTarget) {
//         return;
//     }

//     closeHandler();
// };

// refs.list.addEventListener("click", handleClick);
// refs.lightBoxBtn.addEventListener("click", closeHandler);
// window.addEventListener("keyup", handleKeyup);
// refs.lightboxContent.addEventListener("click", contentClickHandler);