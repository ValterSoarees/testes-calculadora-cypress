/// <reference types="cypress"/>


/// TESTES DE SOMA

describe("testando função soma", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("soma de 9 + 7", ()=>{
        cy.get('#num1').type("9")
        cy.get('#num2').type("7")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "16")
    })

    it("soma de 8 + 0", ()=>{
        cy.get('#num1').type("8")
        cy.get('#num2').type("0")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "8")
    })

    it("soma de 400 + 600", ()=>{
        cy.get('#num1').type("400")
        cy.get('#num2').type("600")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "1000")
    })

    it("soma de 0 + 0", ()=>{
        cy.get('#num1').type("0")
        cy.get('#num2').type("0")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "0")
    })

    it("soma de 0 + -3", ()=>{
        cy.get('#num1').type("0")
        cy.get('#num2').type("-3")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "-3")
    })

    it("soma de 50 + -30", ()=>{
        cy.get('#num1').type("50")
        cy.get('#num2').type("-30")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "20")
    })

    it("soma de 100 + 80", ()=>{
        cy.get('#num1').type("100")
        cy.get('#num2').type("80")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "180")
    })

    it("soma de 1000 + 2500", ()=>{
        cy.get('#num1').type("1000")
        cy.get('#num2').type("2500")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "3500")
    })

    it("soma de -30 + 30", ()=>{
        cy.get('#num1').type("-30")
        cy.get('#num2').type("30")
        cy.get('#botaoSomar').click()
        cy.get('#calculoFinal').should("have.text", "0")
    })
})

/// TESTES DE SUBTRAÇÃO

describe("testando função subtração", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("subtração de 50 - 5", ()=>{
        cy.get('#num1').type("50")
        cy.get('#num2').type("5")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "45")
    })

        it("subtração de 5 - 50", ()=>{
        cy.get('#num1').type("5")
        cy.get('#num2').type("50")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "-45")
    })

    it("subtração de 20 - 40", ()=>{
        cy.get('#num1').type("20")
        cy.get('#num2').type("40")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "-20")
    })

    it("subtração de -30 - 40", ()=>{
        cy.get('#num1').type("-30")
        cy.get('#num2').type("40")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "-70")
    })

    it("subtração de 90 - 2", ()=>{
        cy.get('#num1').type("90")
        cy.get('#num2').type("2")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "88")
    })

    it("subtração de 30 - 10", ()=>{
        cy.get('#num1').type("30")
        cy.get('#num2').type("10")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "20")
    })

    it("subtração de 45 - 40", ()=>{
        cy.get('#num1').type("45")
        cy.get('#num2').type("40")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "5")
    })

    it("subtração de -60 - 20", ()=>{
        cy.get('#num1').type("-60")
        cy.get('#num2').type("20")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "-80")
    })

    it("subtração de -150 - 10", ()=>{
        cy.get('#num1').type("-150")
        cy.get('#num2').type("10")
        cy.get('#botaoSubtracao').click()
        cy.get('#calculoFinal').should("have.text", "-160")
    })
})

/// TESTES DE MULTIPLICAÇÃO

describe("testando função multiplicação", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("multiplicação de 20 * 40", ()=>{
        cy.get('#num1').type("20")
        cy.get('#num2').type("40")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "800")
    })

    it("soma de 2 * -2", ()=>{
        cy.get('#num1').type("2")
        cy.get('#num2').type("-2")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "-4")
    })

    it("soma de 150 * -1", ()=>{
        cy.get('#num1').type("150")
        cy.get('#num2').type("-1")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "-150")
    })

    it("soma de 1500 * 0", ()=>{
        cy.get('#num1').type("1500")
        cy.get('#num2').type("0")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "0")
    })

    it("soma de 600 * 3", ()=>{
        cy.get('#num1').type("600")
        cy.get('#num2').type("3")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "1800")
    })

    it("soma de 90 * -3", ()=>{
        cy.get('#num1').type("90")
        cy.get('#num2').type("-3")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "-270")
    })

    it("soma de 1 * 30", ()=>{
        cy.get('#num1').type("1")
        cy.get('#num2').type("30")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "30")
    })

    it("soma de 0 * -1", ()=>{
        cy.get('#num1').type("0")
        cy.get('#num2').type("-1")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "0")
    })

    it("soma de 25 * -25", ()=>{
        cy.get('#num1').type("25")
        cy.get('#num2').type("-25")
        cy.get('#botaoMultiplicar').click()
        cy.get('#calculoFinal').should("have.text", "-625")
    })
})

/// TESTES DE DIVISÃO

describe("testando função divisão", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("divisão de 80 / 8", ()=>{
        cy.get('#num1').type("80")
        cy.get('#num2').type("8")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "10")
    })

    it("divisão de 40 / 22", ()=>{
        cy.get('#num1').type("40")
        cy.get('#num2').type("22")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "1.8181818181818181")
    })

        it("divisão de 100 / 5", ()=>{
        cy.get('#num1').type("100")
        cy.get('#num2').type("5")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "20")
    })

    it("divisão de 500 / 100", ()=>{
        cy.get('#num1').type("500")
        cy.get('#num2').type("100")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "5")
    })

    it("divisão de 1000 / 500", ()=>{
        cy.get('#num1').type("1000")
        cy.get('#num2').type("500")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "2")
    })

    it("divisão de 0 / 5", ()=>{
        cy.get('#num1').type("0")
        cy.get('#num2').type("5")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "0")
    })

    it("divisão de 60 / 3", ()=>{
        cy.get('#num1').type("60")
        cy.get('#num2').type("3")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "20")
    })

    it("divisão de 90 / 4", ()=>{
        cy.get('#num1').type("90")
        cy.get('#num2').type("4")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "22.5")
    })

    it("divisão de 81 / 3", ()=>{
        cy.get('#num1').type("81")
        cy.get('#num2').type("3")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "27")
    })

    it("divisão de 1 / 0", ()=>{
        cy.get('#num1').type("1")
        cy.get('#num2').type("0")
        cy.get('#botaoDivisao').click()
        cy.get('#calculoFinal').should("have.text", "Error")
    })
})

/// TESTES DE RAIZ QUADRADA

describe("testando função raiz", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("raiz de √80", ()=>{
        cy.get('#num1').type("80")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "8.94427190999916")
    })

        it("divisão de √9", ()=>{
        cy.get('#num1').type("9")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "3")
    })

    it("divisão de √20", ()=>{
        cy.get('#num1').type("20")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "4.47213595499958")
    })

    it("divisão de √90", ()=>{
        cy.get('#num1').type("90")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "9.486832980505138")
    })

    it("divisão de √1000", ()=>{
        cy.get('#num1').type("1000")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "31.622776601683793")
    })

    it("divisão de √40", ()=>{
        cy.get('#num1').type("40")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "6.324555320336759")
    })

    it("divisão de √60", ()=>{
        cy.get('#num1').type("60")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "7.745966692414834")
    })

    it("divisão de √2000", ()=>{
        cy.get('#num1').type("2000")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "44.721359549995796")
    })

    it("divisão de √169", ()=>{
        cy.get('#num1').type("169")
        cy.get('#botaoRaiz').click()
        cy.get('#calculoFinal').should("have.text", "13")
    })
})

/// TESTES DE EXPONENCIAL

describe("testando função exponenciação", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("exponencial de 3^0", ()=>{
        cy.get('#num1').type("3")
        cy.get('#num2').type("0")
        cy.get('#botaoExponencial').click()
        cy.get('#calculoFinal').should("have.text", "1")
    })

    it("exponencial de 2^2", ()=>{
        cy.get('#num1').type("2")
        cy.get('#num2').type("2")
        cy.get('#botaoExponencial').click()
        cy.get('#calculoFinal').should("have.text", "4")
    })

    it("exponencial de 5^5", ()=>{
        cy.get('#num1').type("5")
        cy.get('#num2').type("5")
        cy.get('#botaoExponencial').click()
        cy.get('#calculoFinal').should("have.text", "3125")
    })

    it("exponencial de 6^3", ()=>{
        cy.get('#num1').type("6")
        cy.get('#num2').type("3")
        cy.get('#botaoExponencial').click()
        cy.get('#calculoFinal').should("have.text", "216")
    })

    it("exponencial de 25^2", ()=>{
        cy.get('#num1').type("25")
        cy.get('#num2').type("2")
        cy.get('#botaoExponencial').click()
        cy.get('#calculoFinal').should("have.text", "625")
    })
})

/// TESTES DE PAR - IMPAR

describe("testando função número par ou ímpar", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("81 par ou ímpar?", ()=>{
        cy.get('#num1').type("81")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Ímpar")
    })

    it("2 par ou ímpar?", ()=>{
        cy.get('#num1').type("2")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Par")
    })

    it("4 par ou ímpar?", ()=>{
        cy.get('#num1').type("4")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Par")
    })

    it("100 par ou ímpar?", ()=>{
        cy.get('#num1').type("100")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Par")
    })

    it("30 par ou ímpar?", ()=>{
        cy.get('#num1').type("30")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Par")
    })

    it("0 par ou ímpar?", ()=>{
        cy.get('#num1').type("0")
        cy.get('#botaoParImpar').click()
        cy.get('#calculoFinal').should("have.text", "Par")
    })
})

/// TESTES DE NÚMERO PRIMO

describe("testando função número primo", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("5 é primo?", ()=>{
        cy.get('#num1').type("5")
        cy.get('#botaoPrimo').click()
        cy.get('#calculoFinal').should("have.text", "Primo")
    })

    it("50 é primo?", ()=>{
        cy.get('#num1').type("50")
        cy.get('#botaoPrimo').click()
        cy.get('#calculoFinal').should("have.text", "Não é primo")
    })

    it("300 é primo?", ()=>{
        cy.get('#num1').type("300")
        cy.get('#botaoPrimo').click()
        cy.get('#calculoFinal').should("have.text", "Não é primo")
    })

    it("100 é primo?", ()=>{
        cy.get('#num1').type("100")
        cy.get('#botaoPrimo').click()
        cy.get('#calculoFinal').should("have.text", "Não é primo")
    })

    it("0 é primo?", ()=>{
        cy.get('#num1').type("0")
        cy.get('#botaoPrimo').click()
        cy.get('#calculoFinal').should("have.text", "Não é primo")
    })
})

/// TESTES DE FATORIAL

describe("testando função fatorial", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("fatorial de 5!", ()=>{
        cy.get('#num1').type("5")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "120")
    })

    it("fatorial de 10!", ()=>{
        cy.get('#num1').type("10")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "3628800")
    })

    it("fatorial de 12!", ()=>{
        cy.get('#num1').type("12")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "479001600")
    })

    it("fatorial de 0!", ()=>{
        cy.get('#num1').type("0")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "1")
    })

    it("fatorial de 9!", ()=>{
        cy.get('#num1').type("9")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "362880")
    })

    it("fatorial de -1!", ()=>{
        cy.get('#num1').type("-1")
        cy.get('#botaoFatorial').click()
        cy.get('#calculoFinal').should("have.text", "1")
    })
})