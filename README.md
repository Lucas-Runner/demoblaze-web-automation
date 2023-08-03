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

# Cenário 2 - Adição de produtos

- O cenário de testes de adição de produtos em carrinho visa garantir que os itens selecionados, tanto na página inicial quanto dentro de subcategoria de produtos resulta na presença dos produtos selecionados no carrinho

1. Invoca função de registro
2. Adiciona um produto localizado na página inicial no carrinho
3. Armazena o título do produto
4. Retorna a página inicial
5. Seleciona sub-categoria de produtos no menu lateral
6. Seleciona um segundo produto e o adiciona no carrinho
7. Armazena o título do segundo produto
8. Navega até o carrinho
9. Asserte que os títulos dos produtos armazenados coincidem com os dados no carrinho

---

# Cenário 3 - Execução de ordem de compra

- O cenário de testes de execução de compra efetua os mesmos passos do teste anterior, porém onde o teste anterior possui a função de assertir a presença dos produtos corretos no carrinho, o teste que simula o cenário de compra prossegue com a ordem de compra

1. Invoca função de registro
2. Adiciona um produto localizado na página inicial no carrinho
4. Retorna a página inicial
5. Seleciona sub-categoria de produtos no menu lateral
6. Seleciona um segundo produto e o adiciona no carrinho
8. Navega até o carrinho
9. Seleciona o botão para finalização de compra
10. Insegre dados de compra nos campos necessários
11. Efetua compra
12. Asserte a existência de uma mensagem de confirmação
