## Cenários Web automatizados para plataforma de e-commerce Demoblaze

---

# Funções de suporte: executeRegistration

- As funções de registro geram dados aleatórios para cadastro e também possibilitam execução repetitiva nos testes e cenários definidos

1. Gera uma string usando um gerador de caracteres aleatórios.
2. Cria uma nova URL substituindo o espaço reservado "random" na URL base pela string gerada.
3. Cria um novo endereço de e-mail usando a string gerada.
4. Define uma senha estática
5. Abre uma nova Tab no navegador
6. Solicita a URL do e-commerce
7. Armazena os seletores para os botões de sign-in e log-in
8. Efetua procedimento de Sign-up com os dados gerados
9. Efetua procedimento de Log-in com os dados gerados
10. Exporta as funções para uso posterior

---

# Cenário 1 - Log-In 

- O cenário de Log-in é definido pela asserção da presença da página inicial após a função de registro ter sido devidamente implementada, e pela identificação da mensagem de boas vindas ao usuário registrado

1. Invoca função de registro
2. Asserte a presença do URL correto
3. Asserte a presença dos dados préviamente utilizados para Sign-in e log-in na página inicial em um campo de boas vindas
---

- [x] **Cenário 2 - Adição de produtos** 

- Execução das funções de registro e Log-in
- Adição de um produto da página principal/inicial da aplicação ao carrinho
- Retorno à página inicial
- Navegação à outra categoria de produtos fora da página principal/inicial
- Adição de outro produto de categoria diferente garantindo a função de categorias de produtos
- Verificar a presença dos produtos selecionados no carrinho

Execução:
  
  - [x] Captura do seletor do primeiro produto na página inicial e executar clique
  - [x] Captura do seletor do botão de adição no carrinho e executar clique
  - [x] Armazenar o texto que identifica o nome do item para asserções
  - [x] Captura do seletor para retorno à página inicial e executar clique
  - [x] Captura do seletor de outra categoria de produtos e executar clique
  - [x] Captura do seletor do segundo produto na subcategoria e executar clique
  - [x] Captura do seletor do botão de adição no carrinho e executar clique
  - [x] Armazenar o texto que identifica o nome do item para asserções
  - [x] Captura do seletor do item do carrinho e executar clique
  - [x] Asserção de presença dos nomes dos itens adicionados em armazenamento

---

- [x] **Cenário 3 - Execução de pedido** 

- Execução das funções de registro e Log-in
- Adição de um produto da página principal/inicial da aplicação ao carrinho
- Retorno à página inicial
- Navegação à outra categoria de produtos fora da página principal/inicial
- Adição de outro produto de categoria diferente garantindo a função de categorias de produtos
- Navegação ao carrinho
- Preenchimento dos campos de compra e sua execução
- Verificar a presença de mensagens de confirmação de compra

Execução:
  
  - [x] Captura do seletor do primeiro produto na página inicial e executar clique
  - [x] Captura do seletor do botão de adição no carrinho e executar clique
  - [x] Armazenar o texto que identifica o nome do item para asserções
  - [x] Captura do seletor para retorno à página inicial e executar clique
  - [x] Captura do seletor de outra categoria de produtos e executar clique
  - [x] Captura do seletor do segundo produto na subcategoria e executar clique
  - [x] Captura do seletor do botão de adição no carrinho e executar clique
  - [x] Captura do seletor do item do carrinho e executar clique
  - [x] Captura do seletor de execução de compra e executar clique
  - [x] Captura dos seletores dos campos obrigatórios de compra
  - [x] Preenchimento dos campos de compra
  - [x] Captura do seletor do botão de compra e executar clique
  - [x] Asserção de presença de mensagem de compra
