let heroi
let xpDoHeroi
let nivel;


function analizaHeroi(){
    heroi = prompt('Qual o nome do seu herói?');
    xpDoHeroi = parseFloat(prompt('Qaual a xp do seu heroi?'));

    if( xpDoHeroi <= 1000){
        nivel = 'Ferro'
    }
    if( xpDoHeroi > 1000 && xpDoHeroi <= 2000){
        nivel = 'Bronze'
    }
    if( xpDoHeroi > 2000 && xpDoHeroi <= 5000){
        nivel = 'Prata'
    }
    if( xpDoHeroi > 5000 && xpDoHeroi <= 7000){
        nivel = 'Ouro'
    }
    if( xpDoHeroi > 7000 && xpDoHeroi <= 8000){
        nivel = 'Platina'
    }
    if( xpDoHeroi > 8000 && xpDoHeroi <= 90000){
        nivel = 'Ascendente'
    }
    if( xpDoHeroi > 9000 && xpDoHeroi <= 10000){
        nivel = 'Imortal'
    }
    if( xpDoHeroi > 10000){
        nivel = 'Radiante'
    }
};
analizaHeroi();
alert(`O Herói de nome : ${heroi} está no nível de ${nivel}.`)
