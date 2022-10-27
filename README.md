
![Generic badge](https://img.shields.io/badge/Node-12-green.svg) ![Generic badge](https://img.shields.io/badge/Angular-9.0.0-red.svg)   ![Generic badge](https://img.shields.io/badge/Bootstrap-4.*-blue.svg)

#  Poverty Indicator Project

Este projeto tem finalidade de oferecer um front-end para consulta do indicador econômico que avalia a quantidade de pessoas em situação de extrema pobreza no mundo, vivendo com até $ 1,90/dia (dólar). 

## Build (manual):
Após clone do projeto rodar a aplicação com o comando:

    npm install
    ng serve --open
Acessar o navegador no endereço: http://localhost:4200/    

## Build (Docker):
Executar os comandos abaixo:

    docker build -t povertyspa .
    
    docker run -p 8081:80 povertyspa:latest 
Acessar o navegador no endereço: [http://localhost:8081/](http://localhost:8081/)

