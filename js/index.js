// API request URL

// API from "awesomeapi"

const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL'

fetch(url + coins)
  .then(function(responsive){
    return responsive.json()
  })
  .then(function(data){
    dolarReal = data.USDBRL;
    euroReal = data.EURBRL;
    libraReal = data.GBPBRL;

    console.log(dolarReal , euroReal , libraReal);

    var resultado = document.querySelector('#resultado');
    var real = document.querySelector('#insira-o-valor');

    var converterparadolar = document.querySelector('#converter-para-dolar');
    var converterparaeuro = document.querySelector('#converter-para-euro');
    var converterparalibra = document.querySelector('#converter-para-libra');

    var resumocontainer = document.querySelector('#resumo');
    var resumo = document.querySelector('#titulo-resumo');
    var alta = document.querySelector('#alta-valor');
    var baixa = document.querySelector('#baixa-valor');
    var variacao = document.querySelector('#variacao-valor');
    var compra = document.querySelector('#compra-valor');

    var fechar = document.querySelector('#close');



    // Dolar converter

    converterparadolar.addEventListener('click', function(){
       
        resultadodolar = real.value / dolarReal.high;
        resultado.textContent = resultadodolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'});
        
        resumocontainer.style.opacity = "1";
        resumocontainer.style.transition = "600ms ease-in-out";

        resumo.innerHTML = 'Resumo Dolar';
        alta.innerHTML = 'R$ ' + dolarReal.high;
        baixa.innerHTML = 'R$ ' + dolarReal.low;
        variacao.innerHTML = 'R$ ' + dolarReal.varBid;
        compra.innerHTML = 'R$ ' + dolarReal.bid;   


        console.log(resultadodolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}));
    })

    // Euro converter

    converterparaeuro.addEventListener('click', function(){
       
        resultadoeuro = real.value / euroReal.high;
        resultado.textContent = resultadoeuro.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});

        resumocontainer.style.opacity = "1";
        resumocontainer.style.transition = "600ms ease-in-out";

        resumo.innerHTML = 'Resumo Euro';
        alta.innerHTML = 'R$ ' + euroReal.high;
        baixa.innerHTML = 'R$ ' + euroReal.low;
        variacao.innerHTML = 'R$ ' + euroReal.varBid;
        compra.innerHTML = 'R$ ' + euroReal.bid;


        console.log(resultadoeuro.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}));
    })

    // Libra converter

    converterparalibra.addEventListener('click', function(){
       
        resultadolibra = real.value / libraReal.high;
        resultado.textContent = resultadolibra.toLocaleString('pt-BR', {style: 'currency', currency: 'GBP'});

        resumocontainer.style.opacity = "1";
        resumocontainer.style.transition = "600ms ease-in-out";
        
        resumo.innerHTML = 'Resumo Libra';
        alta.innerHTML = 'R$ ' + libraReal.high;
        baixa.innerHTML = 'R$ ' + libraReal.low;
        variacao.innerHTML = 'R$ ' + libraReal.varBid;
        compra.innerHTML = 'R$ ' + libraReal.bid;


        console.log(resultadolibra.toLocaleString('pt-BR', {style: 'currency', currency: 'GBP'}));
    })

    // Close resumo

    fechar.addEventListener('click', function(){
        resumocontainer.style.opacity = "0";
    })

  }
  )