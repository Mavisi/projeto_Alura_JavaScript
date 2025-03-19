function tocaSom(seletorAudio){
   const elemento =  document.querySelector(seletorAudio);

   if(elemento!=null && elemento.localName==='audio'){
    elemento.play();
   }else{
    console.log('Elemento não encontrado');
   }

}

// document.querySelector('.tecla_pom').onclick=tocaSomPom; // caso estivse onclick=tocaSomPom(), 
// a função ja iria iniciar sozinha, pois ela não estaria guardando a função de tocar som no onclick
// ela ja vai estar iniciando assim que js ler as linhas 

const listaDeTeclas = document.querySelectorAll('.tecla');


for( let contador=0; contador < listaDeTeclas.length;  contador++){
   
    const tecla = listaDeTeclas[contador]; 
    // aqui percorremos os botões 

    const instrumento = tecla.classList[1];
     // aqui percorremos a segunda classe que pertence cada botão

    const idAudio= `#som_${instrumento}`;
    // console.log(idAudio);
    //aqui temos a virada de chave, cada id do arquivo de audio se chama
    // #som_tecla_pom e assim por diante,  ao colorcamos #som_${intrumento}, tornamos esse elemento variavel
    // assim, cada vez que ativamos um botão, o som vai mudando e não ficando o mesmo  
    tecla.onclick=function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        
        if(evento.code==='Enter' || evento.code==='Space'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
}