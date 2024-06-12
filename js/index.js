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

    let resultado = document.querySelector('#resultado');
    let real = document.querySelector('#insira-o-valor');

    let converterparadolar = document.querySelector('#converter-para-dolar');
    let converterparaeuro = document.querySelector('#converter-para-euro');
    let converterparalibra = document.querySelector('#converter-para-libra');

    let resumocontainer = document.querySelector('#resumo');
    let resumo = document.querySelector('#titulo-resumo');
    let alta = document.querySelector('#alta-valor');
    let baixa = document.querySelector('#baixa-valor');
    let variacao = document.querySelector('#variacao-valor');
    let compra = document.querySelector('#compra-valor');

    let fechar = document.querySelector('#close');



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
        compra.innerHTML = 'R$ ' + dolarReal.low;   
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
        compra.innerHTML = 'R$ ' + euroReal.low;
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
        compra.innerHTML = 'R$ ' + libraReal.low;

    })

    // Close resumo

    fechar.addEventListener('click', function(){
        resumocontainer.style.opacity = "0";
    })

  }
  )