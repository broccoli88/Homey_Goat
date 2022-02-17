
//  ...::: [ NAVBAR] :::...

const menuIconOpen = document.querySelector("#menu-open")
const menuIconClose = document.querySelector('#menu-close')
const srToggle = document.querySelector('#menu-toggle')
const menuVisible = document.querySelector('#navbar')
const mainContent = document.querySelector('main')


menuIconOpen.addEventListener('click', () => {
    let menuIconVisible = menuIconOpen.getAttribute('data-menu-open')

    if (menuIconVisible === "true") {
        menuIconOpen.setAttribute('data-menu-open', false)
        menuIconClose.setAttribute('data-menu-open', true)
        menuVisible.setAttribute('data-visible', true)
        mainContent.classList.toggle('main-toggle')
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


//  ...::: [ ] :::...



