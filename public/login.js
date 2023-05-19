
function fazerLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;


    fetch('http://localhost:3000/pessoas/')
    .then(response => response.json())
    .then(data =>{
        
        //Função callback. Parâmetro find para procurar.
        const pessoa = data.find(p => p.
            email === email && p.senha == senha);

            if(pessoa){
                window.location.href = "home.html";
            }else{
                alert("Cadastro não encontrado!");
            }
    })
}