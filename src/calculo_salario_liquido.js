
function calcLiquido (valorBruto) {
    let inns = 0
    let impostoRenda = 0
    let salarioLiquido = 0
    // calcular INSS
    if (valorBruto <= 1412) {
        inns = 105.0
    } else if (valorBruto > 1412 && valorBruto <= 2666.68) {
        inns = 112.92
    } else if (valorBruto > 2666.68 && valorBruto <= 4000.03) {
        inns = 160
    } else if (valorBruto > 2666.68 && valorBruto <= 4000.03) {
        inns = 530.03
    } else {
        inns = 908.85
    }

    // calcular imposta de renda

    if (valorBruto <= 2112) {
        impostoRenda = 0
    } else if (valorBruto > 2112 && valorBruto <= 2826.55) {
        impostoRenda = 158.40
    } else if (valorBruto > 2826.55 && valorBruto <= 3751.05) {
        impostoRenda = 370.40 
    } else if (valorBruto > 3751.05 && valorBruto <= 4664.68) {
        impostoRenda = 651.73
    } else {
        impostoRenda = 884.96
    }

    salarioLiquido = valorBruto - inns - impostoRenda

    return salarioLiquido

}

// console.log("Salário liquido: " + calcLiquido(1500) + " R$")

module.exports = calcLiquido;
