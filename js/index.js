
//!  ...::: [ NAVBAR] :::...

function navBarToggle() {

    let menuIconOpen = document.querySelector("#menu-open")
    let menuIconClose = document.querySelector('#menu-close')
    let srToggle = document.querySelector('#menu-toggle')
    let menuVisible = document.querySelector('#navbar')
    let mainContent = document.querySelector('main')
    let footerContent = document.querySelector('footer');

    menuIconOpen.addEventListener('click', () => {
        let menuIconVisible = menuIconOpen.getAttribute('data-menu-open')

        if (menuIconVisible === "true") {
            menuIconOpen.setAttribute('data-menu-open', false)
            menuIconClose.setAttribute('data-menu-open', true)
            menuVisible.setAttribute('data-visible', true)
            mainContent.classList.toggle('main-toggle')
            footerContent.classList.toggle('footer-toggle')
        }
    })

    menuIconClose.addEventListener('click', () => {
        let menuIconVisible = menuIconClose.getAttribute('data-menu-open')

        if (menuIconVisible === "true") {
            menuIconOpen.setAttribute('data-menu-open', true)
            menuIconClose.setAttribute('data-menu-open', false)
            menuVisible.setAttribute('data-visible', false)

            setTimeout(() => {
                mainContent.classList.toggle('main-toggle')
                footerContent.classList.toggle('footer-toggle')
            }, 400)
        }
    })

    srToggle.addEventListener('click', () => {
        let menuExpanded = srToggle.getAttribute('aria-expanded')

        if (menuExpanded === 'false') {
            srToggle.setAttribute('aria-expanded', true)
        }
        if (menuExpanded === "true") {
            srToggle.setAttribute('aria-expanded', false)
        }
    })

}


// navBarToggle()




//!  ...::: [ GALLERY TILE TOGGLE ] :::...


function zoomGalleryImage() {
    const galleryTiles = document.querySelectorAll(`figure img`);
    const galleryTile = document.querySelector('figure img');
    const zoomedTileImage = document.querySelector(`#gallery__img-zoomed`);
    const zoomedTileCaption = document.querySelector(`#gallery__caption-zoomed`);

}

const galleryTiles = document.querySelectorAll(`figure img`);
const galleryTile = document.querySelector('figure img');
const zoomedTileImage = document.querySelector(`#gallery__img-zoomed`);
const zoomedTileCaption = document.querySelector(`#gallery__caption-zoomed`);


galleryTiles.forEach((galleryTile) => {
    galleryTile.addEventListener('click', () => {
    })
})



// 1. Select single Tile
// 2. GET (fetch ?) url of gallery img
// 3. Send (set ? or some way to set the url) in zoomed tile
// 4. GET figcaption text of gallery img
// 5. Set figcaption to zoomed tile
// 6. Set Event => selection of small tile triggers CSS class to display zoom 
// 7. Set Event => click anywhere to hide zoomed tile

