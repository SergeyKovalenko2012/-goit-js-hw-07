import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const marcupPicture = createPictureCard(galleryItems);

galleryList.insertAdjacentHTML("beforeend", marcupPicture);

function createPictureCard(pictures) {
  return pictures
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "botom",
  captionsData: "alt",
  captionSelector: "img"
});
