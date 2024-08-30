const paragrafo1 = document.getElementById('paragrafo1')
const paragrafo2 = document.getElementsByClassName('paragrafo2')[0]
const botao = document.querySelector('#botao')

botao.addEventListener('click', function(){
    paragrafo1.textContent ='hehehehah'
    paragrafo2.textContent ='skibididop'
})

//selecionando os elementos no ex 02

const link = document.getElementById('link')
const imagem = document.getElementById('imagem')
const botaoimgagem = document.getElementById('botaoimagem')

link.setAttribute('href', 'https://www.youtube.com')
link.textContent = 'visitar o ioutubi'

link.style.color = 'yellow'

var imagematual = 1

botaoimgagem.addEventListener('click', function(){
    if(imagematual === 1){
        imagem.setAttribute('src', 'fumacos.jpg')
        imagematual = 2
    }else{
        imagem.setAttribute('src', 'osaka.jpg')
        imagematual = 1
    }
})