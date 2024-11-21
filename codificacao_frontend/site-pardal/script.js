const btn = document.querySelector(".btn")
const mensagem = document.querySelector(".mensagem")



btn.addEventListener("click", (event) => {

    event.preventDefault();

    const velocidade = document.querySelector(".velocidade").value 
    const limite = 60
    
    if(velocidade === ""){
        mensagem.textContent = "O campo não pode ficar vazio!"
        document.body.style.backgroundColor = "White"
        return
    }

    if(velocidade > limite){
        document.body.style.backgroundColor = "red"
        mensagem.textContent = "Você ultrapassou o limite de velocidade!"
    }else{
        document.body.style.backgroundColor = "green"
        mensagem.textContent = "Párabens! Você está dentro dos limites!"
    }
})