function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi pesquisado. Digite o nome do atleta ou o esporte</p>"    
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item do resultado da pesquisa, formatando com template literals
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="https://www.instagram.com/rayssalealsk8/" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        }
    }
    
    if (resultados == "") {
        section.innerHTML = "<p>Nenhum resultado encontrado.</p>" 
        return
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }