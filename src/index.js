let nome = "junioom"
let nvExp = 0
let ranking = ""
let expPSlime = 100
let slimeKill = 10
let expPOgro = 1000
let ogroKill = 4

for(let cont = 1; cont <= slimeKill; cont++){
    nvExp += expPSlime
}
for(let cont = 1; cont <= ogroKill; cont++){
    nvExp += expPOgro
}

if (nvExp <= 1000){
    ranking = "Ferro";
} else if (nvExp > 1000 && nvExp <= 2000){
    ranking = "Bronze";
} else if (nvExp > 2000 && nvExp <= 6000){
    ranking = "Prata";
} else if (nvExp > 6000 && nvExp <= 7000){
    ranking = "Ouro";
} else if (nvExp > 7000 && nvExp <= 8000){
    ranking = "Platina";
} else if (nvExp > 8000 && nvExp <= 9000){
    ranking = "Ascendente";
} else if (nvExp > 9000 && nvExp <= 10000){
    ranking = "Imortal";
} else {
    ranking = "Radiante"
}


console.log("O herói de nome " + nome + " possui " + nvExp + " pontos de experiência e está no ranking: " + ranking) 