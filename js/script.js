window.addEventListener('scroll', function () {
    let superior = document.querySelector('.superior');
    let scroll = window.scrollY;
    let voltar = document.querySelector('.voltar');
    let tituloSobre = document.getElementById('tituloSobre');

    if (scroll >= 440) { /* QUANDO FICA VERMELHO */
        superior.style.backgroundColor = '#570006';
        superior.style.boxShadow = '0px 20px 20px 0px rgba(0, 0, 0, 0.308)'
        voltar.style.border = 'solid rgb(255, 255, 255) 1px';
        voltar.style.color = 'rgb(255, 255, 255)'
        tituloSobre.style.color = 'gainsboro'
    } else {
        superior.style.backgroundColor = 'white';
        voltar.style.border = 'solid rgb(153, 153, 153) 1px';
        voltar.style.color = 'rgb(153, 153, 153)'
        tituloSobre.style.color = 'black'
    }
});