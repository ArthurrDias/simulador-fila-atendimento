Simulador de Atendimento

Projeto desenvolvido em JavaScript para a disciplina de Estrutura de Dados, com o objetivo de praticar a implementação e utilização de uma estrutura de dados do tipo Fila (Queue).

O sistema simula um atendimento de clientes, onde o primeiro cliente a entrar na fila é o primeiro a ser atendido, seguindo o princípio FIFO (First In, First Out).

Funcionalidades
Adicionar clientes à fila
Atender o próximo cliente
Visualizar a fila atual
Consultar a quantidade de clientes na fila
Limpar a fila
Encerrar o sistema
Conceitos praticados
Estruturas de dados
Fila (Queue)
Princípio FIFO
Classes e métodos em JavaScript
Funções
Laços de repetição
Estruturas condicionais
Entrada de dados pelo terminal
Manipulação de objetos
Gerenciamento de dependências com NPM
Tecnologias
JavaScript
Node.js
prompt-sync
Estrutura do projeto
trabalho-estrutura-de-dados/
├── atendimento.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
Como executar
1. Clone o repositório
git clone URL_DO_REPOSITORIO
2. Entre na pasta do projeto
cd trabalho-estrutura-de-dados
3. Instale as dependências
npm install
4. Execute o programa
node atendimento.js
Como funciona

A fila é implementada por meio da classe Queue, que possui métodos para controlar os clientes:

Método	Função
enqueue()	Adiciona um cliente à fila
dequeue()	Remove e atende o próximo cliente
peek()	Consulta o próximo cliente
isEmpty()	Verifica se a fila está vazia
size()	Retorna a quantidade de clientes
toString()	Exibe os clientes da fila
FIFO

O sistema utiliza o conceito FIFO (First In, First Out):

Primeiro a entrar
       ↓
   Cliente A
       ↓
   Cliente B
       ↓
   Cliente C
       ↓
Primeiro a sair

Portanto, se os clientes entrarem na seguinte ordem:

João → Maria → Pedro

o atendimento ocorrerá:

João → Maria → Pedro
Objetivo acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina de Estrutura de Dados, com foco na compreensão e implementação de uma estrutura de fila utilizando JavaScript.

Arthur Dias

Desenvolvido como parte dos estudos em Ciência da Computação.
