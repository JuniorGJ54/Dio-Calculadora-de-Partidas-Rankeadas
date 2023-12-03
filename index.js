let saldoVitorias =Overall(15,10)

if(saldoVitorias<=10){
    nivel = "Ferro"
}else if(saldoVitorias>=11 && xp<=20){
    nivel = "Bronze"
}else if(saldoVitorias>=21 && xp<=50){
    nivel = "Prata"
}else if(saldoVitorias>=51 && xp<=80){
    nivel = "Ouro"
}else if(saldoVitorias>=81 && xp<=90){
    nivel = "Diamante"
}else if(saldoVitorias>=91 && xp<=100){
    nivel = "Lendário"
}else if(saldoVitorias>101){
    nivel = "Imortal"
}
console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)

function Overall(win, lose){
    return win-lose
}