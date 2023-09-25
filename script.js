//Função que faz o botão de dark mode/light mode funcionar
function toggleMode(){
    //substituição do fundo
    const html = document.documentElement
    html.classList.toggle(`light`)


    //substituir a imagem
    const img = document.querySelector("#profile img")
    if(html.classList.contains(`light`)){
        img.setAttribute(`src`, `./assets/avatar-light.png`)
        
    }else{
        img.setAttribute(`src`, `./assets/avatar.png`)
    }

}

