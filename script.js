//botoes

const bntContraste = document.getElementById("bnt-contraste");
const bntAumentar = document.getElementById("bnt-aumentar-texto");
const bntDiminuir = document.getElementById("bnt-diminuir-texto");

//Mudar tamanho da fonte

let tamanhoAtualFonte = 100;

//Alto contraste

bntContraste.addEventListenter("click", ()=>{
    document.body.clasList.toggle("alto-contrase");

    //leitor de tela

    const ativo = document.body.clasList.contains("alto-contraste");
    bntContraste.seAttribute("aria-pressed", ativo);

});

//aumentar o texto

bntAumentar.addEventListenter("click", () =>{
    if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte +=10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`
    }
});

//diminuir o texto

bntDiminuir.addEventListenter("click", () =>{
    if (tamanhoAtualFonte >90){
        tamanhoAtualFonte-=10;
        document.documentElement.style,fontSize = `${tamanhoAtualFonte}%`;
    }

})
});