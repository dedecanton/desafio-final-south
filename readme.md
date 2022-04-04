# Desafio final

## **Projeto**

Neste desafio construi uma aplicação separada em três pastas, frontend (aplicação React), server (servidor Express) e nginx (para proxy da aplicação). Esse app contem um sistema de autenticação com email e senha (somente contas registradas no firebase) e/ou com OAuth2 por meio de uma conta google. 

Para cada parte do projeto foi criado um Dockerfile, sendo assim, na pasta raíz há um Docker Compose responsável por buildar as imagens, definir as dependências, e então rodar as mesmas para o funcionamento correto da aplicação.

## **Instruções para execução:**

- Clonar repositório ([git clone](https://github.com/dedecanton/to-do-list-react.git) [https://github.com/dedecanton/desafio-final-south](https://github.com/dedecanton/desafio-final-south)[)](https://github.com/dedecanton/to-do-list-react.git)
- Rodar no root do projeto o comando ***docker-compose up***
- Após terminar os processos do Docker Compose, o projeto vai estar rodando na porta 80 do localhost.