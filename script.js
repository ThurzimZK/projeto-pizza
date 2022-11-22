const dqs = (elemento) => document.querySelector(elemento)
// encurta o comando para dqs
const dqsA = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index)=>{
    //preencher as informaçoes do pizza item
    let pizzaItem = dqs('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault()
        let key = e.target.closest('.pizza-item').getAttribute('data-key')

        dqs('.pizzaBig img').src = pizzaJson[key].img
        dqs('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        dqs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        dqs('.pizzaInfo--actualPrice').innerHTML = `R$${item.price.toFixed(2)}`

        dqs('.pizzaWindowArea').style.opacity = 0
        dqs('.pizzaWindowArea').style.display = 'flex'
        setTimeout(()=>{
            dqs('.pizzaWindowArea').style.opacity = 1
        }, 200)
    })
    
    dqs('.pizza-area').append( pizzaItem )
})