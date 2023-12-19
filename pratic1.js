function xadrez(inicio,fim){
    let dia = 9
    console.log('As Horas estõ sendo fornecidas em horário militar!')
    if(inicio > 23){
        console.log(`Adiicione apenas horários válidos maiores que 00 e menores que 23`)      
    }
    else if(fim > 12){
        console.log(`O jogo terminou depois de ${inicio - fim} horas`)
    }
    else if( fim < 12 ){
        console.log(`Incrivel o jogo terminou do dia ${dia+1},e a exatos ${inicio-fim} Horas depois`)
    }
    else if(fim == 12){
        console.log(`Incrivel o jogo terminou no dia ${dia+1},depois de ${inicio+fim} horas depois`)
    }
    else if(inicio,fim < 0){
        console.log(`[ ERRO ] Horas Inválidas`)
    }
}

xadrez(12,13)