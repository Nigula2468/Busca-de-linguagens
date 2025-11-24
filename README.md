#  Base de Conhecimento de Tecnologias

Este é um projeto de frontend simples que funciona como uma base de conhecimento para diversas tecnologias de programação, frameworks e ferramentas. A aplicação permite buscar e visualizar informações de forma rápida e intuitiva.

##  Funcionalidades

- **Busca Dinâmica**: Pesquise tecnologias por nome ou descrição.
- **Listagem de Cards**: Os resultados são exibidos em cards, cada um contendo informações sobre uma tecnologia.
- **Fonte de Dados Externa**: As informações são carregadas a partir de um arquivo `data.json`, facilitando a adição e manutenção de novos itens.
- **Links Úteis**: Cada card possui um link para a página oficial da tecnologia, permitindo um aprofundamento no assunto.

##  Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização dos componentes (não fornecido, mas esperado).
- **JavaScript (Vanilla)**: Lógica da aplicação, manipulação do DOM e funcionalidade de busca.

## ⚙️ Como Executar o Projeto

Como o projeto utiliza a API `fetch` para carregar um arquivo local (`data.json`), ele precisa ser servido por um servidor web para funcionar corretamente devido às políticas de segurança dos navegadores (CORS).

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DO_SEU_REPOSITORIO>
    ```

2.  **Inicie um servidor local:**
    A maneira mais fácil é usar o `npx`, que já vem com o Node.js. Na raiz do projeto, execute:
    ```bash
    npx serve
    ```
    Outra alternativa, se você tiver Python instalado, é usar:
    ```bash
    # Para Python 3
    python -m http.server
    ```

3.  **Acesse no navegador:**
    Abra seu navegador e acesse o endereço fornecido pelo servidor (geralmente `http://localhost:3000` ou `http://localhost:8000`).

##  Estrutura dos Arquivos

```
/
├── 📄 index.html       # Arquivo principal da página
├── 🎨 style.css         # Folha de estilos
├── 📜 script.js        # Lógica da aplicação
└── 🗃️ data.json         # Banco de dados com as tecnologias
```

##  Como Contribuir

Para adicionar uma nova tecnologia, basta editar o arquivo `data.json` e adicionar um novo objeto ao array, seguindo a estrutura abaixo:

```json
{
  "nome": "Nome da Tecnologia",
  "descricao": "Uma breve descrição.",
  "data_criacao": "Ano de criação",
  "link_oficial": "https://link.para.site.oficial/",
  "tags": ["tag1", "tag2"]
}
```
