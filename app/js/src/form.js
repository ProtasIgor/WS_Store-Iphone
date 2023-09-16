(function () {

    const form = document.querySelector('.order__form');
    const formName = document.querySelector('.order__input');
    const formNumberPhone = document.querySelector('.order__input--phone');

    const messageName = document.createElement('div');
    messageName.style.cssText = `position: fixed;
    bottom: 15vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(3,5,5,.4);
    color: #FFF;
    padding: 1em;
    font-size: 1rem;
    border-radius: 5px;`;
    messageName.textContent = 'Указанное имя должно быть написано на кирилице';

    formName.addEventListener('change', () => {
        if (!checkName(formName.value)) {
            document.body.append(messageName);
            setTimeout(() => {
                messageName.remove();
            }, 5000);
            formName.value = '';
        }
    })

    formNumberPhone.addEventListener('change', () => {
        if (!checkPhone(this.value)) {
            alert('телефон хуевый')
        }
    })

    function checkName(name) {
        return /^[A-Za-z]{3,15}$/.test(name);
    }

    function checkPhone(phone) {
        const regex = /^hello/;
        return regex.test(phone);
    }

}())