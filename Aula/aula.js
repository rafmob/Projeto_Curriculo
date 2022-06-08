// 3.1 - SELETORES - Selecionar os elementos acima criado no HTML para que possamos manipulá-los no JS.
//  (*dica: use diferente tipos de seletores para praticar as diferente sintaxes)

const inputElement = document.getElementById("textBox")
const countBtn = document.querySelector("button")
// const wordCounter = document.querySelector("p span")
const wordCounter = document.querySelector("#wordCounter")
const paragraphElement = document.querySelector("p")

// 3.2 - EVENTOS  - Reagindo ao evento de click do botão => 
// adicionar um listener ao seu botão => addeventListener sempre receb 2 argumentos => 1. é o tipo de evento; 2. a função callback
countBtn.addEventListener("click", ()=>{
// que qdo clicado, extrai o valor do input digitado pelo usuário
    const words = inputElement.value 

// contar qtas palavras foram digitadas
// const number_of_words = words.split(' ').length
const number_of_words = getNumberOfWords(words)

// 3.3 MANIPULAÇÃO - atualize o texto dinâmico com a quantidade de palavras digitadas (substituindo a quantidade de palavras com o resultado da contagem do step anterior). 
    // wordCounter.innerText = number_of_words
paragraphElement.innerHTML=`<p>Você digitou ${number_of_words} palavras.</p>`
})


function getNumberOfWords(words){

    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === ' ') {
            counter++;
        }
    }

    return counter+1
}