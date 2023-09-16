UFMA - Universidade Federal do Maranhão
CRUD de produtos utilizando TDD para disciplina de Engenharia de Software
Equipe desenvolvedora: Vitor Nunes, Bertoldo Klinger, Rhaynon Carvalho
Projeto adiciona, atualiza, deleta e lista produtos de acordo com o desejo do usuário.


1- Resumo do projeto
Sistema cadastra um produto novo, recebendo parâmetros Name, description e price,gerando um número de identificação para cada produto cadastrado.
Sistema atualiza produto quanto ao seu nome, descrição ou preço conforme licitação do usuário.
Sistema deleta produtos selecionados pelo usuário por id. 
Sistema lista todos os produtos cadastrados, detalhando o nome, preço e seu UUID(Identificador universal).
Sistema lista um produto específico selecionado pelo usuário, detalhando o nome o preço e número de identificação.
2- Como instalar o projeto
Siga as instruções abaixo para executar o projeto em sua máquina:
1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

 Abra o console e navegue até o diretório em que deseja clonar o repositório.

 Clone o repositório executando o seguinte comando: `git clone https://github.com/engSoftwareUFMA/crudProductsTypescript.git`

 Entre na pasta do repositório com: `cd ./crudProductsTypescript`

 Execute o comando `npm install` para instalar as dependências necessárias.

 Após a instalação, execute o comando `npm run dev` para iniciar a aplicação.

 A aplicação estará disponível para uso.

3- Como usar o projeto
O usuário pode utilizar uma das operações abaixo, segundo suas necessidades.

Função adicionar produto:
1.Usuário utiliza função de adição de produto.
2.Sistema solicita nome, descrição e preço a ser registrado
3.Usuário digita nome, descrição e preço.
4.Sistema registra e gera ID do produto.
Fluxo alternativo: Caso não seja informado um dos parâmetros, o sistema exibe mensagem de erro.





Função atualizar produto:
1.Usuário utiliza função de atualização de produto
2.Sistema solicita ID, nome, descrição e preço do produto
3.Usuário informa ID, nome, descrição e preço do produto
4.Sistema solicita parâmetro a ser atualizado
5.Usuário informa parâmetro entre: Nome, descrição e preço
6.Sistema solicita a mudança em texto ou número
7.Usuário digita a mudança
8.Sistema exibe mensagem informando a atualização.

Função deletar produto
1.Usuário utiliza função de deletar produto
2.Sistema solicita ID do produto a ser deletado
3.Usuário digita ID
4.Produto é excluido


.Sistema exibe mensagem de remoção de produto e volta para tela inicial.

Função de listar produtos:
1.Usuário utiliza função de listar produtos
2.Sistema lista todos os produtos cadastrados com suas ID, preços e nomes.
3.Usuário selecionar para voltar
4.Sistema volta para página inicial

Função de listar 1 produto
1.Usuário utiliza função de procurar produto
2.Sistema solicita ID do produto
3.Usuário digita ID
4.Sistema exibe produto correspondente com nome e preço
5.Usuário seleciona voltar
6.Sistema volta para página inicial

4- Créditos
Aos integrantes já citados, Vitor Nunes, Bertoldo Klinger e Rhaynon Carvalho.

