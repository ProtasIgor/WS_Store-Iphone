(function () {

    const anchors = document.querySelectorAll('.header__link');

    const about = document.querySelector('.about');
    const select = document.querySelector('.select');
    const order = document.querySelector('.order');

    const sections = [about, select, order];


    anchors.forEach((item, index, anchors) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth', inline: 'center' })
        });
    });

    document.querySelector('.header__button').addEventListener('click', () => {
        select.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });


}());