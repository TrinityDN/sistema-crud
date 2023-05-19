  //Método fetch pra buscar as ocorrências no JSON
  fetch('solicitacoes.json')
  .then(response => response.json())
  .then(ocorrencia => {
    var ocorrencias = [ocorrencia.solicitacoes[0], ocorrencia.solicitacoes[1], ocorrencia.solicitacoes[2], ocorrencia.solicitacoes[3], ocorrencia.solicitacoes[4]];
    
    console.log(ocorrencia);

    document.getElementById("ocorrencia1").innerHTML = "<p>" + ocorrencias[0].tipo + "</p>"; 
    document.getElementById("usuario1").innerHTML = "<p>" + ocorrencias[0].nome + "</p>"; 
    document.getElementById("empresa1").innerHTML = "<p> Empresa " + ocorrencias[0].empresa + "</p>"; 
    document.getElementById("data1").innerHTML = "<p>" + ocorrencias[0].dataD + "</p>"; 
    document.getElementById("comentario1").innerHTML = "<p>" + ocorrencias[0].ocorrencia + "</p>"; 

    document.getElementById("ocorrencia2").innerHTML = "<p>" + ocorrencias[1].tipo + "</p>"; 
    document.getElementById("usuario2").innerHTML = "<p>" + ocorrencias[1].nome + "</p>"; 
    document.getElementById("empresa2").innerHTML = "<p> Empresa " + ocorrencias[1].empresa + "</p>"; 
    document.getElementById("data2").innerHTML = "<p>" + ocorrencias[1].dataD + "</p>"; 
    document.getElementById("comentario2").innerHTML = "<p>" + ocorrencias[1].ocorrencia + "</p>"; 

    document.getElementById("ocorrencia3").innerHTML = "<p>" + ocorrencias[2].tipo + "</p>"; 
    document.getElementById("usuario3").innerHTML = "<p>" + ocorrencias[2].nome + "</p>"; 
    document.getElementById("empresa3").innerHTML = "<p> Empresa " + ocorrencias[2].empresa + "</p>"; 
    document.getElementById("data3").innerHTML = "<p>" + ocorrencias[2].dataD + "</p>"; 
    document.getElementById("comentario3").innerHTML = "<p>" + ocorrencias[2].ocorrencia + "</p>"; 

    document.getElementById("ocorrencia4").innerHTML = "<p>" + ocorrencias[3].tipo + "</p>"; 
    document.getElementById("usuario4").innerHTML = "<p>" + ocorrencias[3].nome + "</p>"; 
    document.getElementById("empresa4").innerHTML = "<p> Empresa " + ocorrencias[3].empresa + "</p>"; 
    document.getElementById("data4").innerHTML = "<p>" + ocorrencias[3].dataD + "</p>"; 
    document.getElementById("comentario4").innerHTML = "<p>" + ocorrencias[3].ocorrencia + "</p>"; 
  })

  fetch('solicitacoes.json')
  .then(response => response.json())
  .then(ocorrencia => {
    var ocorrencias = [ocorrencia.solicitacoes[0], ocorrencia.solicitacoes[1], ocorrencia.solicitacoes[2], ocorrencia.solicitacoes[3], ocorrencia.solicitacoes[4]];
    
    console.log(ocorrencia); 

    document.getElementById("inf-1").innerHTML = "<p>" + ocorrencias[0].tipo + "</p>"; 
    document.getElementById("inf-2").innerHTML = "<p>" + ocorrencias[0].nome + "</p>"; 
    document.getElementById("inf-3").innerHTML = "<p> Empresa " + ocorrencias[0].empresa + "</p>"; 
    document.getElementById("inf-4").innerHTML = "<p>" + ocorrencias[0].dataD + "</p>"; 

    document.getElementById("inf-5").innerHTML = "<p>" + ocorrencias[1].tipo + "</p>"; 
    document.getElementById("inf-6").innerHTML = "<p>" + ocorrencias[1].nome + "</p>"; 
    document.getElementById("inf-7").innerHTML = "<p> Empresa " + ocorrencias[1].empresa + "</p>"; 
    document.getElementById("inf-8").innerHTML = "<p>" + ocorrencias[1].dataD + "</p>"; 

    document.getElementById("inf-9").innerHTML = "<p>" + ocorrencias[2].tipo + "</p>"; 
    document.getElementById("inf-10").innerHTML = "<p>" + ocorrencias[2].nome + "</p>"; 
    document.getElementById("inf-11").innerHTML = "<p> Empresa " + ocorrencias[2].empresa + "</p>"; 
    document.getElementById("inf-12").innerHTML = "<p>" + ocorrencias[2].dataD + "</p>"; 

    document.getElementById("inf-13").innerHTML = "<p>" + ocorrencias[3].tipo + "</p>"; 
    document.getElementById("inf-14").innerHTML = "<p>" + ocorrencias[3].nome + "</p>"; 
    document.getElementById("inf-15").innerHTML = "<p> Empresa " + ocorrencias[3].empresa + "</p>"; 
    document.getElementById("inf-16").innerHTML = "<p>" + ocorrencias[3].dataD + "</p>"; 
  })

