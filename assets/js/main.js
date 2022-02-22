document.addEventListener('DOMContentLoaded', () => {
    /* SHOW MENU */
    const navMenu = document.getElementById('navMenu'),
        navToggle = document.getElementById('navToggle'),
        navClose = document.getElementById('navClose');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /* CHANGE BACKGROUND HEADER */
    function scrollHeader() {
        const header = document.getElementById('header');

        if (this.scrollY >= 100) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);

    /* HOUSES SWIPER */
    const swiper = new Swiper('.houses__container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
            rotate: 0,
        },
    });
});
