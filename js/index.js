//*  ...::: [ NAVBAR] :::...

function navBarToggle() {
  let menuIconOpen = document.querySelector("#menu-open");
  let menuIconClose = document.querySelector("#menu-close");
  let srToggle = document.querySelector("#menu-toggle");
  let menuVisible = document.querySelector("#navbar");
  let mainContent = document.querySelector("main");
  let footerContent = document.querySelector("footer");

  menuIconOpen.addEventListener("click", () => {
    let menuIconVisible = menuIconOpen.getAttribute("data-menu-open");

    if (menuIconVisible === "true") {
      menuIconOpen.setAttribute("data-menu-open", false);
      menuIconClose.setAttribute("data-menu-open", true);
      menuVisible.setAttribute("data-visible", true);
      mainContent.classList.toggle("main-toggle");
      footerContent.classList.toggle("footer-toggle");
    }
  });

  menuIconClose.addEventListener("click", () => {
    let menuIconVisible = menuIconClose.getAttribute("data-menu-open");

    if (menuIconVisible === "true") {
      menuIconOpen.setAttribute("data-menu-open", true);
      menuIconClose.setAttribute("data-menu-open", false);
      menuVisible.setAttribute("data-visible", false);

      setTimeout(() => {
        mainContent.classList.toggle("main-toggle");
        footerContent.classList.toggle("footer-toggle");
      }, 400);
    }
  });

  srToggle.addEventListener("click", () => {
    let menuExpanded = srToggle.getAttribute("aria-expanded");

    if (menuExpanded === "false") {
      srToggle.setAttribute("aria-expanded", true);
    }
    if (menuExpanded === "true") {
      srToggle.setAttribute("aria-expanded", false);
    }
  });
}

navBarToggle();

//*  ...::: [ GALLERY TILE TOGGLE ] :::...

function zoomGalleryImage() {
  const galleryTiles = document.querySelectorAll(`figure img`);
  const galleryTileCaption = document.querySelector("figure figcaption");

  const zoomedTile = document.querySelector(`#gallery__tile-zoomed`);
  const zoomedTileImage = document.querySelector(`#gallery__img-zoomed`);
  const zoomedTileCaption = document.querySelector(`#gallery__caption-zoomed`);

  galleryTiles.forEach((galleryTile) => {
    galleryTile.addEventListener("click", () => {
      let zoomTrigger = zoomedTile.getAttribute("data-zoom-triggered");
      let imgAddress = galleryTile.getAttribute(`src`);
      let imgAlt = galleryTile.getAttribute(`alt`);
      let imgCaption = galleryTileCaption.textContent;

      if (zoomTrigger === "false") {
        zoomedTileImage.setAttribute(`src`, imgAddress);
        zoomedTileImage.setAttribute(`alt`, imgAlt);
        zoomedTile.setAttribute("data-zoom-triggered", true);
        zoomedTileCaption.textContent = imgCaption;
      }
    });
  });

  zoomedTile.addEventListener("click", () => {
    let zoomTrigger = zoomedTile.getAttribute("data-zoom-triggered");

    if (zoomTrigger === "true") {
      zoomedTile.setAttribute("data-zoom-triggered", false);
    }
  });
}

zoomGalleryImage();
