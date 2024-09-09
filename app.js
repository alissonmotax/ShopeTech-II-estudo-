function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

//se campoPesquisa for uma string vazia
if(campoPesquisa ==""){
   section.innerHTML = "<p>Nenhum dispositivo encontrado na nossa base de dados</p>"
    return;
}

    //inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
   //intera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                
                 //então, faça...
        resultados +=`
        <div class="item-resultado">
          <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
        }
       
    
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
     section.innerHTML = resultados;
  }