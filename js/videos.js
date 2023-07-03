"use client"

let play1 = document.querySelector('.play-button1');
let play2 = document.querySelector('.play-button2');
let play3 = document.querySelector('.play-button3');
let play4 = document.querySelector('.play-button4');
let play5 = document.querySelector('.play-button5');
let play6 = document.querySelector('.play-button6');
let play7 = document.querySelector('.play-button7');
let play8 = document.querySelector('.play-button8');
let play9 = document.querySelector('.play-button9');
let play10 = document.querySelector('.play-button10');
let play11 = document.querySelector('.play-button11');
let play12 = document.querySelector('.play-button12');

let video1 = document.querySelector('.video1');
let video2 = document.querySelector('.video2');
let video3 = document.querySelector('.video3');
let video4 = document.querySelector('.video4');
let video5 = document.querySelector('.video5');
let video6 = document.querySelector('.video6');
let video7 = document.querySelector('.video7');
let video8 = document.querySelector('.video8');
let video9 = document.querySelector('.video9');
let video10 = document.querySelector('.video10');
let video11 = document.querySelector('.video11');
let video12 = document.querySelector('.video12');

let fotoBanda = document.querySelector('.sobreAbanda');

let musicas = [
    { botao: play1, videoMusica: video1 },
    { botao: play2, videoMusica: video2 },
    { botao: play3, videoMusica: video3 },
    { botao: play4, videoMusica: video4 },
    { botao: play5, videoMusica: video5 },
    { botao: play6, videoMusica: video6 },
    { botao: play7, videoMusica: video7 },
    { botao: play8, videoMusica: video8 },
    { botao: play9, videoMusica: video9 },
    { botao: play10, videoMusica: video10 },
    { botao: play11, videoMusica: video11 },
    { botao: play12, videoMusica: video12 }
]

//array pra identificar o click e abrir o video com .map()