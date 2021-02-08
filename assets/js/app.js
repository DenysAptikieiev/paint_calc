"use strict"

const kilogram = document.querySelector('#quantity'),
      btnCalculate = document.querySelector('.btn');

let dispersion = document.querySelector('.dispersion'),
    pigment = document.querySelector('.pigment'),
    filler = document.querySelector('.filler'),
    preservative = document.querySelector('.preservative'),
    thickener = document.querySelector('.thickener'),
    defoamer = document.querySelector('.defoamer'),
    coaliscent = document.querySelector('.coaliscent');

    const calcFunction = (value, elem, quantity) => {

        let resultG = Math.round(value * quantity * 1000);
        let resultK = value * quantity;
        resultK = resultK.toFixed(2);

        if(resultK >= 1) {
            return elem.textContent = `${resultG}g / ${resultK}kg`;
        } else {
            return elem.textContent = `${resultG}g`;
        }
    }

    btnCalculate.addEventListener('click', () => {
        const value = +kilogram.value;

        if(!isNaN(value) && value !== '' && value < 140) {
            calcFunction(value, dispersion, 0.15);
            calcFunction(value, pigment, 0.17857143);
            calcFunction(value, filler, 0.3);
            calcFunction(value, preservative, 0.00014286);
            calcFunction(value, thickener, 0.00285714);
            calcFunction(value, defoamer, 0.00014286);
            calcFunction(value, coaliscent, 0.00085714);
        } else {
            kilogram.value = 'введите число'
        }
    });