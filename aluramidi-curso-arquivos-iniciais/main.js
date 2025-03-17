function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    
}

document.querySelector('.tecla_pom').onclick=tocaSomPom; // caso estivse onclick=tocaSomPom(), 
// a função ja iria iniciar sozinha, pois ela não estaria guardando a função de tocar som no onclick
// ela ja vai estar iniciando assim que js ler as linhas 


document.querySelectorAll('.tecla');

listaDeTeclas