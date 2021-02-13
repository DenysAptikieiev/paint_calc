"use strict"

const kilogram = document.querySelector('#quantity'),
    btnCalculateFasad = document.querySelector('.btnF'),
    btnCalculateInter = document.querySelector('.btnInter'),
    valueText = document.querySelector('.value-text');

const rawMaterials = {
    dispersion: { fasad: 0.15, interior: 0.085 },              //  Дисперсия
    pigment: { fasad: 0.145, interior: 0.1 },             //  Диоксид Титана
    filler: { fasad: 0.3, interior: 0.425 },                   //  Кальцит
    preservative: { fasad: 0.00014286, interior: 0.00014286 }, //  Консервант
    thickener: { fasad: 0.00143, interior: 0.00285714 },    //  Загуститель
    defoamer: { fasad: 0.00028572, interior: 0.00014286 },     //  Пеногаситель
    coaliscent: { fasad: 0.00085714, interior: 0.00085714 }    //  Коалисцент
}

const calcFunction = (type) => {
    const value = +kilogram.value;
    kilogram.value = '';

    for (let key in rawMaterials) {
        let elem = document.querySelector(`.${key}`);
        let quantity = rawMaterials[key][type]

        if (!isNaN(value) && value !== ' ' && value <= 140 && value !== 0) {
            valueText.textContent = `Для ${value}kg (${type}) краски подребуется:`;

            let resultG = value * quantity * 1000;
            let resultK = value * quantity;
            resultK = resultK.toFixed(2);
            resultG = resultG.toFixed(2);

            resultK >= 1 ? elem.textContent = `${resultG}g / ${resultK}kg` : elem.textContent = `${resultG}g`;

        } else if (value > 140) {
            kilogram.value = '';
            kilogram.placeholder = 'максимально количество 140кг'
        } else {
            kilogram.value = '';
            kilogram.placeholder = 'введите число'
        }
    }
}

btnCalculateFasad.addEventListener('click', () => calcFunction('fasad'));
btnCalculateInter.addEventListener('click', () => calcFunction('interior'));
