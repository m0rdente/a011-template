/* //# pratica guiada

//criando objeto

const estudante = {
nome: "Priscila",
sobrenome:"Mordente",
matricula: 12345,
notasSemestre: [7, 9,6, 8]

}

console.log('Objeto estudante', estudante)

//adicionando uma nova propriedade ao objeto

estudante.modulo = "HTML Semântico"

console.log("Objeto estudante com modulo", estudante)

//imprimindo informações do objeto correspondente

console.log("Nome da pessoa estudante:", estudante.nome)
console.log("Segunda nota do semestre:", estudante.notasSemestre[1])
console.log("Modulo atual:", estudante.modulo)


//fazendo cópia objeto estudante
const copiaEstudante = {...estudante}

console.log("Cópia do objeto esdutante:", 
copiaEstudante)

//alterando valor da propriedade nome

copiaEstudante.nome = "Astrodev"
console.log("Copia com nome alterado", copiaEstudante)

//adicionando a nota 9 às notas do semestre

copiaEstudante.notasSemestre = [...copiaEstudante.notasSemestre, 9]

console.log('Cópia com nova nota adicionada', copiaEstudante)


// alterando o valor da propriedade modulo

copiaEstudante.modulo = "Flexbox e Grid"
console.log("Copia com modulo alterado", copiaEstudante)

// criação do array estudanteLabenu

const estudanteLabenu = []
estudanteLabenu.push(estudante)
estudanteLabenu.push(copiaEstudante)

console.log("Array de esdutante", estudanteLabenu) */


// exercicios de fixação

//Parte 1

const carrinho = {

nome: "Priscila",
formaPagamento: "Débito",
endereço: "Rua dos bobos, número zero"

}

console.log(carrinho)

//Parte 2

carrinho.compras = [
{

    produto: "Playstation 5",
    valor: 5000,
    quantidade: 2

},
{

    produto: "Notebook",
    valor: 3000,
    quantidade: 1

},
{

    produto: "SmartTV",
    valor: 2500,
    quantidade: 3

},
]

console.log(`Quantidade de compras: ${carrinho.compras.length} itens`)

//Parte 3

const cartaoPresente = {...carrinho}

cartaoPresente.nome = "Amanda"
cartaoPresente.formaPagamento = "Cartão presente"
console.log("Cartão presente", cartaoPresente)
