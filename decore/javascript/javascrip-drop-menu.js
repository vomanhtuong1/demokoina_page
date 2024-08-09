const barsbutton = document.querySelector('.header-home-responsive-menu')
            const barsbuttonIcon = document.querySelector('.header-home-responsive-menu i')
            const dropMenu = document.querySelector('.header-contact-drop-menu')

            barsbutton.onclick = function() {
                dropMenu.classList.toggle('open')
                const isOpen = dropMenu.classList.contains('open')
    
                barsbuttonIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
console.log(123)