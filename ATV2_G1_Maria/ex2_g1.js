let lista = [];

function adicionar(){
    //pegando os valores inseridos no input
    const modelo = document.getElementById("modelo").value;
    const preco = document.getElementById("preco").value;
    Number(preco);
    //criando vetor e adicionando valores nele
    lista.push({modelo: modelo, preco: preco});
    console.log(lista);
    //limpando
    document.getElementById("modelo").value = "";
    document.getElementById("preco").value = "";
}

listaNova = "";
function exibir(){
    //lendo a lista com o for
    for(i = 0; i < lista.length; i++){
        //listaNova concatena as informações 
        listaNova += "Modelo: " + lista[i].modelo + "  R$: " + lista[i].preco + "<br>";
    }
    document.getElementById("texto").innerHTML = listaNova; //exibe a lista
}

function filtrar(){
    valorAFiltrar = prompt("Digite o preço pelo que você deseja procurar");
    
    let listaComFiltro = "";
    for(i = 0; i < lista.length; i++){
        if(lista[i].preco <= valorAFiltrar){
            listaComFiltro += "Modelo: " + lista[i].modelo + "  R$: " + lista[i].preco + "<br>";
            document.getElementById("texto").textContent = listaComFiltro;
        }
    }
}


