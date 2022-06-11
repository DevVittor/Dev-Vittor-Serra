let time = 6000,//tempo que vai demorar para passar cada imagem
    currentImageIndex = 0,//o array da imagem começa no zero
    images = document.querySelectorAll("#slider img")//variavel images que pega todas as img dentro da #slider
max = images.length;// variavel max recebe a quantidade de imagens


function nextImage() {//essa função vai servir para passar a imagem
    images[currentImageIndex].classList.remove("selecionada")//sempre que entra no site a imagem com a classe selecionada vai ser removida
    currentImageIndex++// em seguida vai aumentar 1 na var imagem que era zero 
    if (currentImageIndex >= max)//se a quantidade de imagem for maior ou igual a quantidade de imagens que foram vasculhada com .length
        currentImageIndex = 0//a variavel que recebe a quantidade de imagens vai voltar a ter zero imagens assim iniciando o loop novamente
    images[currentImageIndex].classList.add("selecionada")//a variavel imagem vai receber novamente a imagem que tem a classe selecionada 
}//Fechamento da function nextImage

function start() {//função que inicia a função nextImage
    setInterval(() => {//vai setar o intervalo que inicia a função nextImage de acordo com o tempo preenchido logo acima
        nextImage()//Função que passa cada foto 
    }, time)//aqui vai mostrar para a função em quanto tempo que ela vai fazer a execução da função nextImage
}//fechamento da function start

window.addEventListener("load", start)//vai receber um evento que vai iniciar a função start que executa a função nextImage


document.getElementById("demo").innerHTML = "Mudar";