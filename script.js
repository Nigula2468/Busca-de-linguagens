
let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#campo-busca");
let btnBusca = document.querySelector("#btn-busca");
let dados = [];
document.addEventListener('DOMContentLoaded', carregarDados);

btnBusca.addEventListener('click', buscar);

campoBusca.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        buscar();
    }
});

async function carregarDados() {
          let resposta = await fetch("data.json");
          dados = await resposta.json();
}

function buscar() {
    const termoBuscado = campoBusca.value.toLowerCase();
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBuscado) || 
        dado.descricao.toLowerCase().includes(termoBuscado)
    );
    renderizarCards(resultados);
}

 function renderizarCards(dados) {
     cardContainer.innerHTML = "";
     for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
                <h2>${dado.nome}</h2>
                <p>${dado.ano}</p>
                <p>${dado.data_criacao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
     
     }
 }