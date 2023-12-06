function obterCarros(){
    return JSON.parse(localStorage.getItem('veiculos')) || [];
    //objeto JSON recebe todos os dados do usuário 
    //veiculos é a chave q aparece no local storage
}

function salvarDadosVeiculos(lista){
    //converte para string
    localStorage.setItem('veiculos', JSON.stringify(lista));
}

let listaVeiculos = obterCarros();

function adicionar(){
    const modelo = document.getElementById("modelo").value;
    const preco = document.getElementById("preco").value;
    if (modelo && preco){
        listaVeiculos.push({modelo: modelo, preco: preco});
        salvarDadosVeiculos(listaVeiculos);
    }
    //limpando
    document.getElementById("modelo").value = "";
    document.getElementById("preco").value = "";
}

function exibir(){
    let listaNova = "";
    for(i = 0; i < listaVeiculos.length; i++){
        listaNova += "Modelo: " + listaVeiculos[i].modelo + "  R$: " 
        + listaVeiculos[i].preco + "<br>";
    }
    document.getElementById("texto").innerHTML = listaNova; 
}

function filtrar(){
    valorAFiltrar = prompt("Digite o preço pelo que você deseja procurar");
    
    let listaComFiltro = "";
    for(i = 0; i < listaVeiculos.length; i++){
        if(listaVeiculos[i].preco <= valorAFiltrar){
            listaComFiltro += "Modelo: " + listaVeiculos[i].modelo + "  R$: " + listaVeiculos[i].preco + "<br>";
            document.getElementById("texto").innerHTML = "OS VEICULOS ENCONTRADOS FORAM: S<br>" + listaComFiltro;
        }
    }
}