# Exercício 3 - Padrões comportamentais
Estrutura de conexão P2P com tratamento de mensagens.
Neste projeto foram utilizados proeminentemente os padrões Chain of Reponsabity e Template Method.

## Iniciando peers
---
Para inicializar um Peer, rodar o comando:

    PORT=<PORT_NUMBER> npx ts-node ./src/ex03/index.ts

ou os shortcuts:

    yarn local1 //inicializa um peer na porta 3000
    yarn local2 //inicializa um peer na porta 3001
    yarn local3 //inicializa um peer na porta 3002

## Conectando peers
---
Para conectar peers, rodar no terminal:

    connect host:localhost port:<PEER_PORT_NUMBER>

## Comandos no server
---
Para enviar comandos no servidor, basta digitar no terminal no seguinte formato:

    <COMANDO> <ARG1>:<VALUE1> <ARG2>:<VALUE2>

exemplos:

    connect host:localhost port:3001
    search keywords:something destination:127.0.0.1:45505
    execute script:somescript.js

Obs: comandos com destination devem corresponder a uma conexão ativa.