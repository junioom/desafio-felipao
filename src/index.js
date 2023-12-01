let nome = "junioom"
let nvExp = 3000
let ranking = ""

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