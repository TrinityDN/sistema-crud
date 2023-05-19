
function deletarDados(){
    const id = document.getElementById("id").value;
    
    //Método fetch

    fetch(`pessoas/${id}`,{
        
        method: 'DELETE'
    })
    .then(response => response.json())
}