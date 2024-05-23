// nome cpf mes pagamento e salario

const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

const calcLiquido = require("./calculo_salario_liquido")
const calcInss = require("./calculo_inss")
const calcIrrf = require("./calculo_imposto_renda")
const formatCpf = require("./utils/format_cpf")

input.question("Nome Funcionário: ", (name) => {
    input.question("CPF: ", (cpf) => {
        input.question("Mês Pagamento: ", (mesPagamento) => {
            input.question("Salário Bruto: ", (salarioBruto) => {
                console.log(`--  FOLHA PAGAMENTO  ${mesPagamento}---`)
                console.log(`--- Nome: ${name} ---`)
                console.log(`--- CPF: ${formatCpf(cpf)} ---`)
                console.log(`--- INSS: ${calcInss(salarioBruto)} ---`)
                console.log(`--- Imposto de Renda: ${calcIrrf(salarioBruto)} ---`)
                console.log(`--- Salário Liquido ${calcLiquido(salarioBruto)} ---`)
    
                input.close()
            })
        })
    })
})








