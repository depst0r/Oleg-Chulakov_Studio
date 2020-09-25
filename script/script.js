window.addEventListener('DOMContentLoaded', () => {


    const form = document.querySelector('form'),
        btn = document.querySelector('.card__btn-form');

    const messages = {
        errorNumber: 'Введите коректные данные! [0 - 9]',
        errorName: 'Введите имя латинскими символами [A - z]',
    }

    const month = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
    const year = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

    function dateCard() {
        const years = document.querySelector('[data-selecr-year]'),
            options = years.querySelectorAll('option');
        console.log(options);
    };


    dateCard();

    form.addEventListener('submit', e => {
        e.preventDefault();
    })


    const numberCard = document.querySelectorAll('[data-number-card]'),
        userName = document.querySelector('.payment-card__user'),
        cvc = document.querySelector('.payment-card__input');

    const __RegExp = /^[0-9]+$/;

    numberCard.forEach(input => {
        input.maxLength = "4";
        input.minLength = "4";
        input.addEventListener('change', () => {
            if (input.value.match(__RegExp)) {
                input.classList.remove('error')
            }
            else {
                input.classList.add('error')
            }
        })

    })

});