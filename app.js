function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma opção de pesquisa.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = typeof dado.tags === "string" ? dado.tags.toLowerCase() : dado.tags.join(" ").toLowerCase(); // Tratamento de tags como string ou array

        // Se título, descrição ou tags contiverem o valor pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
               <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Digite novamente</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}