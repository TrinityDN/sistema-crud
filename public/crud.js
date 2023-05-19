//POST - CREATE
function enviarDados() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch(`pessoas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, idade: idade, email: email, senha: senha}),
    }).then((response) => response.json());
  }

function enviarOcorrencia(){
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const data= document.getElementById("data").value;
  const horario = document.getElementById("horario").value;
  const tipo = document.getElementById("tipo").value;
  const ocorrencia = document.getElementById("ocorrencia").value;


//Para envio dos dados para o servidor, utilizamos o método fetch
fetch(`pessoas`,{
  method: 'POST' ,

  headers:{
      'Content-Type':
      'application/json'
  },
  body: JSON.stringify({
    nome: nome, empresa:empresa, email: email, data: data, horario: horario, tipo: tipo, ocorrencia: ocorrencia
  })
})
.then(response => response.json())
  swal("Cadastro realizado com sucesso!"),
  window.location.reload();
}

  //GET - READ
  function buscarDados() {
    const id = document.getElementById("id").value;

    fetch(`pessoas/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("nomeExibir").innerHTML = data.nome;
        document.getElementById("idadeExibir").innerHTML = data.idade;
      });
  }

  //PUT - UPDATE
  function atualizarDados() {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    fetch(`pessoas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, idade: idade }),
    }).then((response) => response.json());
      swal("Dados atualizados com sucesso!"),
      window.location.reload();
  }

  //DELETE - DELETE
  function deletarDados() {
    const id = document.getElementById("id").value;

    fetch(`pessoas/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
    swal("Registro apagado com sucesso!"),
    window.location.reload();
  }