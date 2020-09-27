window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const form = document.querySelector('form'),
        input = document.querySelectorAll('input'),
        text = document.querySelector('#text');

    const submit = () => {
        alert('Форма успешно отправленна');
    }

    let isValidate = false;

    const __RegExpNumberCard = /^[0-9]+$/;
    const __RegExpName = /^[a-z0-9_-]{4,20}$/;

    const validateElem = (elem) => {
        if (elem.name === 'numberCard') {
            if (!__RegExpNumberCard.test(elem.value) && elem.value !== '') {
                text.textContent =
                    "Введите корректные данные";
                isValidate = false;
                elem.classList.add('error');
            } else {
                text.textContent = "";
                isValidate = true;
                elem.classList.remove('error');
            }
        }

        if (elem.name === 'userName') {
            if (!__RegExpName.test(elem.value) && elem.value !== '') {
                elem.nextElementSibling.textContent =
                    "Введите корректное имя пользователя";
                isValidate = false;
                elem.classList.add('error');
            } else {
                elem.nextElementSibling.textContent = "";
                isValidate = true;
                elem.classList.remove('error');
            }
        }


        if (elem.name === 'cvc') {
            if (!__RegExpNumberCard.test(elem.value) && elem.value !== '') {
                elem.nextElementSibling.textContent =
                    "Не корректные данные";
                isValidate = false;
                elem.classList.add('error');
            } else {
                elem.nextElementSibling.textContent = "";
                isValidate = true;
                elem.classList.remove('error');
            }
        }


    }

    input.forEach(elem => {
        elem.addEventListener('blur', () => {
            validateElem(elem);
        })
    })

    form.addEventListener('submit', e => {
        e.preventDefault();

        input.forEach(elem => {
            if (elem.value === '') {
                text.textContent = "Заполните все поля";
                isValidate = false;
                elem.classList.add('error');
            } else {
                text.textContent = "";
                elem.classList.remove('error');
                isValidate = true;
            }
        })

        if (isValidate) {
            submit();

            form.reset();
        } else {
            console.error('Форма не отправленна')
        }
    })


    function burgerMenu() {
        const icon = document.querySelector('.icon'),
            link = document.querySelector('.menu__link');

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

});