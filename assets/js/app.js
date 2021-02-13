"use strict"

const kilogram = document.querySelector('#quantity'),
    btnCalculateFasad = document.querySelector('.btnF'),
    btnCalculateInter = document.querySelector('.btnInter'),
    elemTotalPrice = document.querySelector('.total-price'),
    valueText = document.querySelector('.value-text');

const rawMaterials = {
    dispersion: { fasad: 0.25, interior: 0.085, price: 48 },                //  Дисперсия
    pigment: { fasad: 0.17857143, interior: 0.1, price: 80 },               //  Диоксид Титана
    filler: { fasad: 0.3, interior: 0.425, price: 5.6 },                    //  Кальцит
    preservative: { fasad: 0.00014286, interior: 0.00014286, price: 25.35 },//  Консервант
    thickener: { fasad: 0.00285714, interior: 0.00285714, price: 48 },      //  Загуститель
    defoamer: { fasad: 0.00014286, interior: 0.00014286, price: 25 },       //  Пеногаситель
    coaliscent: { fasad: 0.00085714, interior: 0.00085714, price: 90 }      //  Коалисцент
}

const calcFunction = (type, price) => {
    const value = +kilogram.value;
    kilogram.value = '';
    let totalPrice = 0;

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
            resultK = resultK.toFixed(2);
            resultG = resultG.toFixed(2);

            resultK >= 1 ? elem.textContent = `${resultG}g / ${resultK}kg` : elem.textContent = `${resultG}g`;
            elemOfPrice.textContent = `${resultEqualsPrice}UAH`

        } else if (value > 140) {
            kilogram.value = '';
            kilogram.placeholder = 'максимально количество 140кг'
        } else {
            kilogram.value = '';
            kilogram.placeholder = 'введите число'
        }
    }
    totalPrice = totalPrice.toFixed(2);
    elemTotalPrice.textContent = `${totalPrice}UAH`;
    // console.log('totalPrice: ', totalPrice);

}

btnCalculateFasad.addEventListener('click', () => calcFunction('fasad', 'price'));
btnCalculateInter.addEventListener('click', () => calcFunction('interior', 'price'));
