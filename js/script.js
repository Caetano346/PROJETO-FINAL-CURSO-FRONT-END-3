let clickCarrinhoPreto = document.querySelector('#carrinho-preto')
let clickCarrinhoBranco = document.querySelector('#carrinho-branco')
let carrinhoPreto = document.querySelector('#carrinho-preto')
let carrinhoBranco = document.querySelector('#carrinho-branco')
let carrinho = document.querySelector('#carrinho-compras')

clickCarrinhoPreto.addEventListener('click', () => {
    carrinho.style.display = 'flex'
})

clickCarrinhoBranco.addEventListener('click', () => {
    carrinho.style.display = 'flex'
})

let clickXPreto = document.querySelector('#x-preto')

clickXPreto.addEventListener('click', () => {
    carrinho.style.display = 'none'
})

let clickXBranco = document.querySelector('#x-branco')

clickXBranco.addEventListener('click', () => {
    carrinho.style.display = 'none'
})

let clickBotaoCompra1 = document.querySelector('#botao-compra1')
let tituloCar1 = document.querySelector('#titulo-car-1')
let paragrafoCar1 = document.querySelector('#paragrafo-car-1')

let clickBotaoCompra2 = document.querySelector('#botao-compra2')
let tituloCar2 = document.querySelector('#titulo-car-2')
let paragrafoCar2 = document.querySelector('#paragrafo-car-2')

let clickBotaoCompra3 = document.querySelector('#botao-compra3')
let tituloCar3 = document.querySelector('#titulo-car-3')
let paragrafoCar3 = document.querySelector('#paragrafo-car-3')

let clickBotaoCompra4 = document.querySelector('#botao-compra4')
let tituloCar4 = document.querySelector('#titulo-car-4')
let paragrafoCar4 = document.querySelector('#paragrafo-car-4')

let clickBotaoCompra5 = document.querySelector('#botao-compra5')
let tituloCar5 = document.querySelector('#titulo-car-5')
let paragrafoCar5 = document.querySelector('#paragrafo-car-5')

let clickBotaoCompra6 = document.querySelector('#botao-compra6')
let tituloCar6 = document.querySelector('#titulo-car-6')
let paragrafoCar6 = document.querySelector('#paragrafo-car-6')

let clickBotaoCompra7 = document.querySelector('#botao-compra7')
let tituloCar7 = document.querySelector('#titulo-car-7')
let paragrafoCar7 = document.querySelector('#paragrafo-car-7')

let fraseFixa = document.querySelector('.item-unico-carrinho')
let adicionado = document.querySelector('#itens-carrinho')

let selectConteudo = document.querySelector('#titulo-conteudo2')

clickBotaoCompra1.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Volkswagen Fox 1.6 Connect 2019'
  
    alert('Você adicionou um Volkswagen Fox 1.6 Connect 2019 ao carrinho!')
})

clickBotaoCompra2.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Chevrolet Onix 1.0 LT 2019'

    alert('Você adicionou um Chevrolet Onix 1.0 LT 2019 ao carrinho!')
})

clickBotaoCompra3.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Volkswagen Saveiro 1.6 Robust CS 2020'

    alert('Você adicionou um Volkswagen Saveiro 1.6 Robust CS 2020 ao carrinho!')
})

clickBotaoCompra4.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Toyota Yaris 1.5 XL CVT 2023'

    alert('Você adicionou um Toyota Yaris 1.5 XL CVT 2023 ao carrinho!')
})

clickBotaoCompra5.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Chevrolet Onix RS 2023'

    alert('Você adicionou um Chevrolet Onix RS 2023 ao carrinho!')
})

clickBotaoCompra6.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Renault Stepway Zen'

    alert('Você adicionou um Renault Stepway Zen ao carrinho!')
})

clickBotaoCompra7.addEventListener('click', () => {
    let novoLi = document.createElement('li')
    fraseFixa.remove()

    adicionado.append(novoLi)
    novoLi.textContent = 'Peugeot 208 Allure 2022'

    alert('Você adicionou um Peugeot 208 Allure 2022 ao carrinho!')
})

let clickMais = document.querySelector('#botao-mais')
let clickMenos = document.querySelector('#botao-menos')
let verMais = document.querySelector('#ver-mais')

clickMais.addEventListener('click', () => {
    clickMais.style.display = 'none'
    clickMenos.style.display = 'block'
    verMais.style.display = 'block'
})

clickMenos.addEventListener('click', () => {
    clickMenos.style.display = 'none'
    clickMais.style.display = 'block'
    verMais.style.display = 'none'
})

let trocaModoEscuro = document.querySelector('#troca-de-modo-escuro')
let trocaDeModoEscuro = document.querySelector('#troca-modo-escuro')
let desaparecerModoEscuro = document.querySelector('#caps-troca-modo-escuro')

let trocaModoClaro = document.querySelector('#troca-de-modo-claro')
let trocaDeModoClaro = document.querySelector('#troca-modo-claro')
let desaparecerModoClaro = document.querySelector('#caps-troca-modo-claro')

let body = document.querySelector('body')

let cabecalho = document.querySelector('#cabecalho')

let conteudoPrincipal = document.querySelector('#conteudo-principal')

let carrinho2 = document.querySelector('#carrinho-de-compras')

let destaque1 = document.querySelector('#destaque-1')
let destaque2 = document.querySelector('#destaque-2')
let destaque3 = document.querySelector('#destaque-3')

let tituloCarrinho = document.querySelector('#titulo-carrinho')

let botaoCompra = document.querySelectorAll('.botao-compra')

trocaModoEscuro.addEventListener('click', () => {
    body.style.color = 'white'
    body.style.backgroundColor = '#333'

    cabecalho.style.color = 'white'

    conteudoPrincipal.style.color = 'white'

    carrinho.style.color = 'white'
    carrinho2.style.backgroundColor = 'var(--cor3)'

    destaque1.style.backgroundColor = '#555'
    destaque2.style.backgroundColor = '#555'
    destaque3.style.backgroundColor = '#555'

    clickMais.style.color = 'white'
    clickMenos.style.color = 'white'

    desaparecerModoEscuro.style.display = 'none'
    desaparecerModoClaro.style.display = 'flex'

    carrinhoPreto.style.display = 'none'
    carrinhoBranco.style.display = 'block'

    tituloCarrinho.style.borderBottom = '1px solid white'

    clickXPreto.style.display = 'none'
    clickXBranco.style.display = 'block'

    clickBotaoCompra1.style.color = 'white'
    tituloCar1.style.color = 'white'
    tituloCar1.style.backgroundColor = 'transparent'
    paragrafoCar1.style.color = 'white'
    paragrafoCar1.style.backgroundColor = 'transparent' 
  
    clickBotaoCompra2.style.color = 'white'
    tituloCar2.style.color = 'white'
    tituloCar2.style.backgroundColor = 'transparent'
    paragrafoCar2.style.color = 'white'
    paragrafoCar2.style.backgroundColor = 'transparent'
  
    clickBotaoCompra3.style.color = 'white'
    tituloCar3.style.color = 'white'
    tituloCar3.style.backgroundColor = 'transparent'
    paragrafoCar3.style.color = 'white'
    paragrafoCar3.style.backgroundColor = 'transparent'
  
    clickBotaoCompra4.style.color = 'white'
    tituloCar4.style.color = 'white'
    tituloCar4.style.backgroundColor = 'transparent'
    paragrafoCar4.style.color = 'white'
    paragrafoCar4.style.backgroundColor = 'transparent'
  
    clickBotaoCompra5.style.color = 'white'
    tituloCar5.style.color = 'white'
    tituloCar5.style.backgroundColor = 'transparent'
    paragrafoCar5.style.color = 'white'
    paragrafoCar5.style.backgroundColor = 'transparent'
  
    clickBotaoCompra6.style.color = 'white'
    tituloCar6.style.color = 'white'
    tituloCar6.style.backgroundColor = 'transparent'
    paragrafoCar6.style.color = 'white'
    paragrafoCar6.style.backgroundColor = 'transparent'
  
    clickBotaoCompra7.style.color = 'white'
    tituloCar7.style.color = 'white'
    tituloCar7.style.backgroundColor = 'transparent'
    paragrafoCar7.style.color = 'white'
    paragrafoCar7.style.backgroundColor = 'transparent'
})

trocaModoClaro.addEventListener('click', () => {
    body.style.color = 'black'
    body.style.backgroundColor = 'white'

    cabecalho.style.color = 'black'

    conteudoPrincipal.style.color = 'black'

    carrinho.style.color = 'black'
    carrinho2.style.backgroundColor = 'var(--cor1)'

    destaque1.style.backgroundColor = 'white'
    destaque2.style.backgroundColor = 'white'
    destaque3.style.backgroundColor = 'white'

    clickMais.style.color = 'black'
    clickMenos.style.color = 'black'

    desaparecerModoEscuro.style.display = 'flex'
    desaparecerModoClaro.style.display = 'none'

    carrinhoBranco.style.display = 'none'
    carrinhoPreto.style.display = 'block'

    tituloCarrinho.style.borderBottom = '1px solid black'

    clickXPreto.style.display = 'block'
    clickXBranco.style.display = 'none'

    clickBotaoCompra1.style.color = 'black'
    tituloCar1.style.color = 'black'
    tituloCar1.style.backgroundColor = 'white'
    paragrafoCar1.style.color = 'black'
    paragrafoCar1.style.backgroundColor = 'white' 
  
    clickBotaoCompra2.style.color = 'black'
    tituloCar2.style.color = 'black'
    tituloCar2.style.backgroundColor = 'white'
    paragrafoCar2.style.color = 'black'
    paragrafoCar2.style.backgroundColor = 'white'
  
    clickBotaoCompra3.style.color = 'black'
    tituloCar3.style.color = 'black'
    tituloCar3.style.backgroundColor = 'white'
    paragrafoCar3.style.color = 'black'
    paragrafoCar3.style.backgroundColor = 'white'
  
    clickBotaoCompra4.style.color = 'black'
    tituloCar4.style.color = 'black'
    tituloCar4.style.backgroundColor = 'white'
    paragrafoCar4.style.color = 'black'
    paragrafoCar4.style.backgroundColor = 'white'
  
    clickBotaoCompra5.style.color = 'black'
    tituloCar5.style.color = 'black'
    tituloCar5.style.backgroundColor = 'white'
    paragrafoCar5.style.color = 'black'
    paragrafoCar5.style.backgroundColor = 'white'
  
    clickBotaoCompra6.style.color = 'black'
    tituloCar6.style.color = 'black'
    tituloCar6.style.backgroundColor = 'white'
    paragrafoCar6.style.color = 'black'
    paragrafoCar6.style.backgroundColor = 'white'
  
    clickBotaoCompra7.style.color = 'black'
    tituloCar7.style.color = 'black'
    tituloCar7.style.backgroundColor = 'white'
    paragrafoCar7.style.color = 'black'
    paragrafoCar7.style.backgroundColor = 'white'
})