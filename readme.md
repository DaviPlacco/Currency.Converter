# Currency Converter in JavaScript

### This is a simple Currency Converter built using JavaScript. It allows the user to convert an amount from one currency to another.

## Desktop

![](/IMAGES/screenshot.png)

## IOS

![](/IMAGES/ios.png)

## Android mobile

![](/IMAGES/mobile.png)




## Features

* Real-time exchange rate conversion
* Supports multiple currencies (API awesome)
* User-friendly interface
* Responsive interface
* Painel with rate High and Low

## Usage

1. Check the link:![](https://daviplacco.github.io/Currency.Converter/)
2. Or clone the files and save in your device
3. For the interaction, it`s simple select the currency you want to convert from and to

## Technologies 

* JavaScript
* HTML5
* CSS3 - LESS
* API - apiawesome
* Figma
* Wepkip

## API information

* link to API: (https://docs.awesomeapi.com.br/api-de-moedas)

* Returns the last occurrence of the selected currencies.
Ex.: (https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL)

* Parameters - 200 responses 

~~~~ javascript

{
    "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": "5.734",
        "low": "5.7279",
        "varBid": "-0.0054",
        "pctChange": "-0.09",
        "bid": "5.7276",
        "ask": "5.7282",
        "timestamp": "1618315045",
        "create_date": "2021-04-13 08:57:27"
    },
    "EURBRL": {
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro/Real Brasileiro",
        "high": "6.8327",
        "low": "6.8129",
        "varBid": "-0.0069",
        "pctChange": "-0.1",
        "bid": "6.8195",
        "ask": "6.822",
        "timestamp": "1618315093",
        "create_date": "2021-04-13 08:58:15"
    },
    "BTCBRL": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": "360000",
        "low": "340500",
        "varBid": "17072.9",
        "pctChange": "4.98",
        "bid": "359973.9",
        "ask": "359974",
        "timestamp": "1618315092",
        "create_date": "2021-04-13 08:58:12"
    }
}

~~~~

* Parameters - 404 responses

~~~~ javascript

{
    "status": 404,
    "code": "CoinNotExists",
    "message": "moeda nao encontrada ABC-BRL"
}

~~~~

* Objects console.log() 

![](/IMAGES/console.log.png)

* See the full list of combinations at: (https://economia.awesomeapi.com.br/xml/available)
* See list of currency names: (https://economia.awesomeapi.com.br/xml/available/uniq)

## Future Plans

* Add more currencies to the list of supported currencies
* Improve the UI for better user experience
* Add a feature to save the conversion history for future reference

## Contribution

### Feel free to contribute to this project by submitting pull requests. Any suggestions or improvements are welcome.

## Developed by Davi B. Placco!
