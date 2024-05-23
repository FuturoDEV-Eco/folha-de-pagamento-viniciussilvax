function calcIrrf(valorBruto) {
    
    if (valorBruto <= 2112) {
        return 'Isento do IRRF'
    } else if (valorBruto > 2112 && valorBruto <= 2826.55) {
        return 'R$ 158.40 de Imposto de renda'
    } else if (valorBruto > 2826.55 && valorBruto <= 3751.05) {
        return 'R$ 370,40 de Imposto de renda'
    } else if (valorBruto > 3751.05 && valorBruto <= 4664.68) {
        return 'R$ 651,73 de Imposto de renda'
    } else {
        return 'R$ 884,96 de Imposto de renda'
    }

}

module.exports = calcIrrf;