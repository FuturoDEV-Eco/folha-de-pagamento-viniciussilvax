// nome cpf mes pagamento e salario

const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

const pdcDoc = require("pdfkit")

const calcLiquido = require("./calculo_salario_liquido")
const calcInss = require("./calculo_inss")
const calcIrrf = require("./calculo_imposto_renda")
const formatCpf = require("./utils/format_cpf")

input.question("Nome Funcionário: ", (nome) => {
    input.question("CPF: ", (cpf) => {
        input.question("Mês Pagamento: ", (mesPagamento) => {
            input.question("Salário Bruto: ", (salarioBruto) => {
                // console.log(`--  FOLHA PAGAMENTO  ${mesPagamento}---`)
                // console.log(`--- Nome: ${name} ---`)
                // console.log(`--- CPF: ${formatCpf(cpf)} ---`)
                // console.log(`--- INSS: ${calcInss(salarioBruto)} ---`)
                // console.log(`--- Imposto de Renda: ${calcIrrf(salarioBruto)} ---`)
                // console.log(`--- Salário Liquido ${calcLiquido(salarioBruto)} ---`)

                input.question("Gerar PDF : (s/n) ", (gerar) => {
                    if (gerar.toLocaleLowerCase() === 's') {
                        const doc = new PDFDocument();
                        doc.pipe(fs.createWriteStream(`Folha de pagamento ${nome}.pdf`));
                        doc.fontSize(16);
                        doc.text(`---Folha de pagamento ${mesPagamento}---`);
                        doc.text(`Data de Geração: ${new Date().toLocaleDateString()}`);
                        doc.text(`Funcionario: ${nome}`);
                        doc.text(`CPF: ${formatCpf(cpf)}`);
                        doc.text(`------`);
                        doc.text(`Salario Bruto: R$ ${salarioBruto}`);
                        doc.text(`INSS: R$ ${calcInss(salarioBruto)}`);
                        doc.text(`Imposto de renda: R$ ${calcIrrf(salarioBruto)}`);
                        doc.text(`Salario Liquido: R$ ${calcLiquido(salarioBruto)}`);
                        doc.end();
                    }
                })
            })
        })
    })
})











