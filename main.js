    const botoes = document.querySelectorAll(".botao");

    for(let i=;i <botoes.length;i++){
         botoe[i].onclick = function(){

            for(let j=0;j<botoes.length;j++){ 
                botoes[j].classList.renove("ativo");
            }

            botoe[j].classList.add("ativo");
        }
    }