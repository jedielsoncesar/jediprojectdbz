//const botoes e queryselectorall, é para determiniar que todos os vetores da classe botao sejam selecionados
const botoes = document.querySelectorAll('.botao');
console.log(botoes);

//Mesma função realizada acima para botoes repita para personagem, assim animar/exibir o personagem selecionado
const personagens = document.querySelectorAll(".personagem");

//Comando Foreach, serve para marcar em especifico os vetores da classe e determinar uma seleção
botoes.forEach((botao, indice)=> {
    botao.addEventListener("click", ()=>{
        
        //queryselector, estamos marcando apenas a seleção botao especifica
        const botaoSelecionado = document.querySelector(".botao.selecionado");

        //classlist.remove, para remover a class selecionado ao clicar em um botao
        botaoSelecionado.classList.remove("selecionado");
        
        //classlist.add, serve para marcar em clique o botão selecionado dando o destaque do mesmo.
        botao.classList.add("selecionado");

        console.log(personagens[indice]);

        //variavel especifica para exibir ao clicar personagem e texto
        const personagemselecionado = document.querySelector(".personagem.selecionado");

        //função para remover a class selecionado ao clicar e só manter a imagem exibida.
        personagemselecionado.classList.remove("selecionado");

        //função para adicionar ao clicar o no botão respectivo, transformando todos na classe selecionado
        personagens[indice].classList.add("selecionado");

    });
});