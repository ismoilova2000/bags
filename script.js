const catalog = [
    {

        name: 'кошелек', 
        img: 'https://maxcom.uz/storage/product/XF10r8qyfb3ysGCDQ4T08NZB08EoqSXv4jhO9ZGP.png',
        price: 500,
        oldPrice: 1000,
        currency: '$',
        description: 'something',
    },
    {

        name: 'сумка', 
        img: 'https://a-cdn.lakestone.ru/image/cache/catalog/Bloy%20Black/Bloy%20Black_1-600x600.jpg',
        price: 400,
        oldPrice: 900,
        currency: '$',
        description: 'something',
    },
    {

        name: 'портфель', 
        img: 'https://media2.bulavka.uz/Oub3v7EahR86vFAg1VC0Aa0M5cA=/fit-in/485x570/products/TgGC11j2av/input.jpeg',
        price: 600,
        oldPrice: 1200,
        currency: '$',
        description: 'something',
    },
    {

        name: 'спортивный рюкзак', 
        img: 'https://bison-media.ru/wa-data/public/shop/products/93/02/190293/images/1019830/1019830.970.jpg',
        price: 1200,
        oldPrice: 1400,
        currency: '$',
        description: 'something',
    },
 
]

const obj = {

}


const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
    <div class="card">
            <img src=${card.img} alt="">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <s>${card.oldPrice} ${card.currency}</s>
            <h4>${card.price}</h4>
            <button>Купить</Купить>
        </div>
    `
})






