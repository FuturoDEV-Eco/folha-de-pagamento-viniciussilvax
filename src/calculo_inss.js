function calcInss(valorBruto) {
    
    if (valorBruto <= 1412) {
        return 'R$ 105,9 de contribuição'
    } else if (valorBruto > 1412 && valorBruto <= 2666.68) {
        return 'R$ 112,92 de contribuição'
    } else if (valorBruto > 2666.68 && valorBruto <= 4000.03) {
        return 'R$ 160,00 de contribuição'
    } else if (valorBruto > 2666.68 && valorBruto <= 4000.03) {
        return 'R$ 530,03 de contribuição'
    } else {
        return 'R$ 908,85 de contribuição'
    }

}

console.log(calcInss(1500))
