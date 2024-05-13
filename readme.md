# Sistema de Controle de Contas Bancárias

Este é um simples sistema de controle de contas bancárias desenvolvido em Node.js utilizando o framework Express. Ele permite realizar operações básicas em contas bancárias, como depositar, retirar e transferir dinheiro entre contas.

## Funcionalidades

- **Resetar o estado**: Permite reinicializar o sistema, zerando todas as contas existentes.
- **Consultar saldo**: Permite verificar o saldo de uma conta específica.
- **Depositar dinheiro**: Permite adicionar dinheiro a uma conta específica.
- **Retirar dinheiro**: Permite retirar dinheiro de uma conta específica.
- **Transferir dinheiro**: Permite transferir dinheiro entre duas contas.

## Endpoints da API

- `POST /reset`: Reinicializa o sistema, zerando todas as contas existentes.
- `GET /balance?account_id={ID}`: Retorna o saldo da conta especificada pelo ID.
- `POST /event`: Cria um evento para operações como depósito, retirada ou transferência. O corpo da requisição deve incluir informações sobre o tipo de evento, origem, destino e montante.

## Como Usar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor com `npm start`.
4. Você pode usar ferramentas como Postman ou curl para enviar requisições para os endpoints da API.

## Exemplo de Uso

Para depositar 100 unidades na conta de ID 123:

POST /event
{
"type": "deposit",
"destination": "123",
"amount": 100
}


## Notas

Este é um projeto simples desenvolvido para fins de aprendizado e demonstração. Não foi projetado para ser utilizado em ambientes de produção e pode não incluir todos os recursos necessários para uma aplicação bancária completa e segura.
