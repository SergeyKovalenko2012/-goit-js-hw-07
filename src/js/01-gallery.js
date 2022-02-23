import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryList = document.querySelector(".gallery");

const marcupPicture = createPictureCard(galleryItems);

galeryList.insertAdjacentHTML("beforeend", marcupPicture);

function createPictureCard(pictures) {
  return pictures
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
           class="gallery__image"
           src="${preview}"
             data-source="${original}"
             alt="${description}"
             width = 450
             height = 450
           />
         </a>
         </div>`;
    })
    .join("");
}

galeryList.addEventListener("click", e => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = e.target.dataset.source;
  instance.show();
});

const instance = basicLightbox.create(
  `
    <div class="modal">
        <img src = ""/>
        <a class = 'close'>Close</a>
    </div>
`,
  {
    onShow: instance => {
      instance.element().querySelector("a").onclick = instance.close;
    }
  }
);
