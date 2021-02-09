"use strict"

const kilogram = document.querySelector('#quantity'),
    btnCalculateFasad = document.querySelector('.btnF'),
    btnCalculateInter = document.querySelector('.btnInter');

let valueText = document.querySelector('.value-text');


const rawMaterials = {
    dispersion: { fasad: 0.25, inter: 0.085 },
    pigment: { fasad: 0.17857143, inter: 0.1 },
    filler: { fasad: 0.3, inter: 0.425 },
    preservative: { fasad: 0.00014286, inter: 0.00014286 },
    thickener: { fasad: 0.00285714, inter: 0.00285714 },
    defoamer: { fasad: 0.00014286, inter: 0.00014286 },
    coaliscent: { fasad: 0.00085714, inter: 0.00085714 }
}

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
    for (let key in rawMaterials) {
        let elem = document.querySelector(`.${key}`);
        calcFunction(elem, rawMaterials[key].fasad);
    }
    valueText.textContent = `Для ${kilogram.value}kg фасадной краски подребуется:`;
    kilogram.value = '';
});

btnCalculateInter.addEventListener('click', () => {
    for (let key in rawMaterials) {
        let elem = document.querySelector(`.${key}`);
        calcFunction(elem, rawMaterials[key].inter);
    }
    valueText.textContent = `Для ${kilogram.value}kg интеръерной краски подребуется:`;
    kilogram.value = '';
});