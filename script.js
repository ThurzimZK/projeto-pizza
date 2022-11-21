const dqs = (elemento) => document.querySelector(elemento)
// encurta o comando para dqs
const dqsA = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index)=>{
    //preencher as informaçoes do pizza item
    let pizzaItem = dqs('.models .pizza-item').cloneNode(true)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    
    dqs('.pizza-area').append( pizzaItem )
})