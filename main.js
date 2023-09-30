const area = prompt ("Você quer segrir a área Front-End ou Back-End? Digite o nome da área:")
let linguagem = ""
let tecnologia = ""

if (area == "front-end") {
    linguagem = prompt ("voce quer aprender reack ou vue?")
}
else if (area == "back-end") {
    lingugem= prompt ("voce quer aprender C# ou java ?")
}
else {
    alert ("você não inseriu nenhum caracter ")

}

const futuro = prompt (`você deseja continuar a se aprimorar em ${linguagem} ou se especializar em Full-Stack?. Digite: 1-para ${linguagem} ou 2 para Full-Stack`)
if (futuro == 1){
    alert ("Parabéns, esse foi seu primeiro passo para o grande futuro")
}
else if (futuro == 2) {
    alert ("Voce esta no caminho correto para a sua evolução em amplas áreas ")
}else{
    alert ("escolha invalida")
}

const Tec = prompt ("conhece alguma tecnologia para o futuro ?")

if (Tec == "Sim") {
    tecnologia = prompt ("fale mais sobre ela, e como ela vai mudar o futuro")
}else if (Tec == "Não"){
    tecnologia = prompt("Procure se aprimorar mais, programação exige acompanhamento na tecnologia")
}