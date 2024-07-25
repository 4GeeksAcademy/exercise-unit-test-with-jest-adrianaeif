// // Declaramos una función con el nombre exacto "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     // Convertimos el valor a dólares
//     let valueInDollar = valueInEuro * 1.07;
//     // Retornamos el valor en dólares
//     return valueInDollar;
// }

function fromEuroToDollar(euros) {
     let dollar = euros * oneEuroIs.USD;
     return dollar;
};

function fromDollarToYen(dollars) {
    let yen = 
    return yen;
}

// function fromYenToPound(Yens) {
//     let pound = yen *oneEuroIs.GBP;
//     return pound;
// }


// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

module.exports = {fromEuroToDollar, oneEuroIs, fromYenToPound, fromDollarToYen}