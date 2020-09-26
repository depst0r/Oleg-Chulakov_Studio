window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
    })

    function burgerMenu() {
        const icon = document.querySelector('.icon');
        const link = document.querySelector('.menu__link');

        icon.addEventListener('click', () => {
            icon.classList.toggle('active');

            if (icon.classList.contains('active')) {
                link.style.display = 'block';
            } else {
                link.style.display = '';
            };

        });
    }


    function validate() {
        const numberCard = document.querySelectorAll('[data-number-card]'),
            userName = document.querySelector('.payment-card__user'),
            cvc = document.querySelector('.payment-card__input');

        const __RegExp = /^[0-9]+$/;

        numberCard.forEach(input => {
            input.maxLength = "4";
            input.minLength = "4";
            input.addEventListener('change', () => {
                if (input.value.match(__RegExp)) {
                    input.classList.remove('error');
                }
                else {
                    input.classList.add('error');
                }
            })

        });

    };

    burgerMenu();
    validate();
});