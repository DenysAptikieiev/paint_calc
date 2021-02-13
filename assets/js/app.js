"use strict"

const kilogram = document.querySelector('#quantity'),
    btnCalculateFasad = document.querySelector('.btnF'),
    btnCalculateInter = document.querySelector('.btnInter'),
    elemTotalPrice = document.querySelector('.total-price'),
    water = document.querySelector('.water td:nth-child(3)'),
    valueText = document.querySelector('.value-text');

const rawMaterials = {
    dispersion: { fasad: 0.15, interior: 0.085, price: 48 },                //  Дисперсия
    pigment: { fasad: 0.145, interior: 0.1, price: 80 },               //  Диоксид Титана
    filler: { fasad: 0.3, interior: 0.425, price: 5.6 },                    //  Кальцит
    preservative: { fasad: 0.00014286, interior: 0.00014286, price: 25.35 },//  Консервант
    thickener: { fasad: 0.00143, interior: 0.00285714, price: 48 },      //  Загуститель
    defoamer: { fasad: 0.00028572, interior: 0.00014286, price: 25 },       //  Пеногаситель
    coaliscent: { fasad: 0.00085714, interior: 0.00085714, price: 90 },
    water: {fasad: 0.40228571, interior: 0.386, price: 0.013584}     //  Коалисцент
}

const calcFunction = (type, price) => {
    const value = +kilogram.value;
    kilogram.value = '';
    let totalPrice = 0;
    let totalWeight = 0; 

    for (let key in rawMaterials) {

        let elem = document.querySelector(`.${key} td:nth-child(3)`);
        let elemOfPrice = document.querySelector(`.${key} td:nth-child(4)`);
        let quantity = rawMaterials[key][type];
        let priceOfElem = rawMaterials[key][price];

        if (!isNaN(value) && value !== ' ' && value <= 140 && value !== 0) {
            valueText.textContent = `Для ${value}kg (${type}) краски подребуется:`;

            let resultG = value * quantity * 1000;
            let resultK = value * quantity;
            let resultEqualsPrice = resultK * priceOfElem;
            totalPrice = totalPrice + resultEqualsPrice;
            resultEqualsPrice = resultEqualsPrice.toFixed(2);
            resultK = resultK.toFixed(2); // количство компонента в кг
            resultG = resultG.toFixed(2); // количство компонента в г


            totalWeight = +totalWeight + +resultG / 1000; //общее количество краски

            resultK >= 1 ? elem.textContent = `${resultG}g / ${resultK}kg` : elem.textContent = `${resultG}g`;
            elemOfPrice.textContent = `${resultEqualsPrice}UAH`

        } else if (value > 140) {
            kilogram.placeholder = 'максимально количество 140кг'
        } else {
            kilogram.placeholder = 'введите число'
        }
    }
    totalWeight
    totalPrice = totalPrice.toFixed(2);
    elemTotalPrice.textContent = `${totalPrice}UAH`;
    // water.textContent = `${(value - totalWeight).toFixed(2)}kg`;
}

btnCalculateFasad.addEventListener('click', () => calcFunction('fasad', 'price'));
btnCalculateInter.addEventListener('click', () => calcFunction('interior', 'price'));
