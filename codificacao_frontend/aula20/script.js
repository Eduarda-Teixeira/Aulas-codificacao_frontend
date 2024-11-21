
function Cadastrar(){
    const nome = document.querySelector("#nome");
    const apelido = document.getElementById("apelido");
    const nascimento = document.querySelector("#nascimento");
    const genero = document.getElementById("genero");
    const email = document.querySelector ("#email");
    const senha = document.getElementById("senha");

    const nomeValor = nome.value;
    const apelidoValor = apelido.value;
    const nascimentoValor = nascimento.value; 
    const generoValor = genero.value;
    const emailValor = email.value;
    const senhaValor = senha.value;

    if(nomeValor === ""){
        nome.classList.add("erro")
        return
    }else{
        nome.classList.remove("erro")
    }
    if(apelidoValor === ""){
        nome.classList.add("erro")
        return
    }
    if(nascimentoValor === ""){
        nome.classList.add("erro")
        return
    }else{
        nome.classList.remove("erro")
    }
    if(generoValor === ""){
        nome.classList.add("erro")
        return
    }else{
        nome.classList.remove("erro")
    }
    if(emailValor === ""){
        nome.classList.add("erro")
        return
    }else{
        nome.classList.remove("erro")
    }
    if(senhaValor === ""){
        nome.classList.add("erro")
        return
    }else{
        nome.classList.remove("erro")
    }

}


