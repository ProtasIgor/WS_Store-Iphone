ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(`.header__title,
.about__title`, { origin: 'top' });

ScrollReveal().reveal(`.header__image,
.select__item,
.about__text.about__text--bold`, { origin: 'bottom' });

ScrollReveal().reveal(`.header__title,
.select__title,
.order__image`, { origin: 'right' });

ScrollReveal().reveal(`.header__button,
.order__content,
.about__text`, { origin: 'left' });