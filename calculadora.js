console.log("importado com sucesso")


function calcularMedia() {

    console.log("Clicado com sucesso!")

    //1 Entrada de dados
    //2 Processamento
    //3 Saida de dados

    const inputUm = document.getElementById("input1")
    const inputDois = document.getElementById("input2")
    const inputTres = document.getElementById("input3")

    const valorUm = Number(inputUm.value)
    const valorDois = Number(inputDois.value)
    const valorTres = Number(inputTres.value)
    const quantidadeProvas = 3

       
    // Processamento
    const resultadoMedia = (valorUm + valorDois + valorTres) / 3

    // Saída de dados
    const spanMedia = document.getElementById("rMedia")
    const spanPassou = document.getElementById("rPassou")

    console.log(resultadoMedia)

    if (resultadoMedia > 5.9) {
        spanMedia.innerText = resultadoMedia
        spanPassou.innerText = "Passou!"
        spanPassou.style.color = "green"

    }

    else {
        spanPassou.innerText = " Não Passou!"
        spanPassou.style.color = "red"
    }




    spanMedia.innerText = resultadoMedia




}