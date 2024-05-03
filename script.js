function escolhaBot(){

    const jokenpo =['Pedra', 'Papel', 'Tesoura']
    var numAleatorio = Math.floor(Math.random() * 3)
    return jokenpo[numAleatorio]
}

function jogar(escolhaJogador){

    var bot = escolhaBot()
    resultado = ''

    if (bot === escolhaJogador){
        resultado = 'Empate'
    }
    else if ((bot === 'Pedra' && escolhaJogador === 'Tesoura') || (bot === 'Papel' && escolhaJogador === 'Pedra') || (bot === 'Tesoura' && escolhaJogador === 'Papel') ){
        resultado = 'Você perdeu'
    }
    else{
        resultado = 'Você ganhou!'
    }

    document.getElementById('jogadabot').innerText = 'O Bot escolheu: '+bot
    document.getElementById('resultado').innerText = resultado
}