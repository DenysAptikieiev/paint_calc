"use strict"

const kilogram = document.querySelector('#quantity'),
    btnCalculateFasad = document.querySelector('.btnF'),
    btnCalculateInter = document.querySelector('.btnInter');

let dispersion = document.querySelector('.dispersion'),
    pigment = document.querySelector('.pigment'),
    filler = document.querySelector('.filler'),
    preservative = document.querySelector('.preservative'),
    thickener = document.querySelector('.thickener'),
    defoamer = document.querySelector('.defoamer'),
    valueText = document.querySelector('.value-text'),
    coaliscent = document.querySelector('.coaliscent');

const calcFunction = (elem, quantity) => {
    const value = +kilogram.value;

    if (!isNaN(value) && value !== ' ' && value <= 140 && value !== 0) {

        let resultG = value * quantity * 1000;
        let resultK = value * quantity;
        resultK = resultK.toFixed(2);
        resultG = resultG.toFixed(2);

        if (resultK >= 1) {
            return elem.textContent = `${resultG}g / ${resultK}kg`;
        } else {
            return elem.textContent = `${resultG}g`;
        }
    } else if (value > 140) {
        kilogram.value = '';
        kilogram.placeholder = 'максимально количество 140кг'
    } else {
        kilogram.value = '';
        kilogram.placeholder = 'введите число'
    }

}

btnCalculateFasad.addEventListener('click', () => {
        calcFunction(dispersion, 0.25);
        calcFunction(pigment, 0.17857143);
        calcFunction(filler, 0.3);
        calcFunction(preservative, 0.00014286);
        calcFunction(thickener, 0.00285714);
        calcFunction(defoamer, 0.00014286);
        calcFunction(coaliscent, 0.00085714);
        valueText.textContent = `Для ${kilogram.value}kg фасадной краски подребуется:`;
        kilogram.value = '';
});

btnCalculateInter.addEventListener('click', () => {
        calcFunction(dispersion, 0.085);
        calcFunction(pigment, 0.1);
        calcFunction(filler, 0.425);
        calcFunction(preservative, 0.00014286);
        calcFunction(thickener, 0.00285714);
        calcFunction(defoamer, 0.00014286);
        calcFunction(coaliscent, 0.00085714);
        valueText.textContent = `Для ${kilogram.value}kg интеръерной краски подребуется:`;
        kilogram.value = '';
});