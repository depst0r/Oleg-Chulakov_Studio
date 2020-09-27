window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const form = document.querySelector('form'),
        input = document.querySelectorAll('input'),
        text = document.querySelector('#text');

    const validateElem = (elem) => {
        console.log(elem)
    }

    input.forEach(elem => {
        elem.addEventListener('blur', () => {
            validateElem(elem)
        })
    })

    form.addEventListener('submit', e => {
        e.preventDefault();

        input.forEach(elem => {
            if (elem.value === '') {
                text.textContent = "Заолните все поля";
                elem.classList.add('error');
            } else {
                text.textContent = "";
                elem.classList.remove('error');
            }
        })
    })

    // function validate() {
    //     const numberCard = document.querySelectorAll('[data-number-card]'),
    //         userName = document.querySelector('.payment-card__user'),
    //         cvc = document.querySelector('.payment-card__input'),
    //         btn = document.querySelector('.card__btn-form');

    //     const __RegExp = /^[0-9]+$/;
    //     const __RegExpName = /^[A-z]+$/;

    //     userName.addEventListener('change', () => {
    //         userName.minLength = "4";
    //         if (userName.value.match(__RegExpName)) {
    //             userName.classList.remove('error');
    //             userName.classList.add('without_mistakes');
    //         } else {
    //             userName.classList.add('error');
    //             userName.classList.remove('without_mistakes');
    //         }
    //     })

    //     numberCard.forEach(input => {
    //         input.maxLength = "4";
    //         input.minLength = "4";
    //         input.addEventListener('change', () => {
    //             if (input.value.match(__RegExp)) {
    //                 input.classList.remove('error');
    //             }
    //             else {
    //                 input.classList.add('error');
    //             }
    //         })

    //     })

    //     cvc.addEventListener('change', () => {
    //         cvc.maxLength = "3";
    //         cvc.minLength = "3";
    //         if (cvc.value.match(__RegExp)) {
    //             cvc.classList.remove('error');
    //         } else {
    //             cvc.classList.add('error');
    //         }
    //     })

    //     if (numberCard || cvc || userName == '') {
    //         btn.classList.disabled = true
    //     }

    // }

    function burgerMenu() {
        const icon = document.querySelector('.icon');
        const link = document.querySelector('.menu__link');

        icon.addEventListener('click', () => {
            icon.classList.toggle('active');

            if (icon.classList.contains('active')) {
                link.style.display = 'block';
            } else {
                link.style.display = '';
            }

        })
    }

    burgerMenu();
    // validate();
});