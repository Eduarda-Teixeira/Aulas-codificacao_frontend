
const botaoAdicionar = document.querySelector(".btn-adicionar")
const botaoRemover = document.querySelector(".btn-remover")
const botaoAlterar = document.querySelector(".btn-alterar")
const caixa = document.querySelector(".caixa")

botaoAdicionar.addEventListener("click", () => {
    caixa.classList.add("vermelho")
})
botaoRemover.addEventListener("click", () => {
    caixa.classList.remove("vermelho")
})
botaoAlterar.addEventListener("click", () => {
    caixa.classList.toggle("vermelho")
})
