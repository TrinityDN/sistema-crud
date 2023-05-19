//Função que envia dados ao servidor

function enviar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confsenha").value;


    //Para envio dos dados para o servidor, utilizamos o método fetch
    fetch(`pessoas`,{
        method: 'POST' ,

        headers:{
            'Content-Type':
            'application/json'
        },
        body: JSON.stringify({
            nome: nome, idade: idade, email: email, senha: senha, confsenha: confsenha
        })
    })
    .then(response => response.json())
    swal("Cadastro realizado com sucesso!"),
    window.location.reload();
};