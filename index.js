let obj = {
    breakfast: [
        {
            img: "./img/item-1.jpeg",
            subHeading: "Buttermilk Pancakes",
            price: "$15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan coppermug whatever cold- pressed",
        },
        {
            img: "./img/item-4.jpeg",
            subHeading: "Country Delight",
            price: "$20.99",
            text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        },
        {
            img: "./img/item-7.jpeg",
            subHeading: "Bacon Overflow",
            price: "$8.99",
            text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        }
    ],
    lunch: [
        {
            img: "./img/item-2.jpeg",
            subHeading: "Diner Double",
            price: "$13.99",
            text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings ",
        },
        {
            img: "./img/item-5.jpeg",
            subHeading: "Egg Attack",
            price: "$22.99",
            text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        },
        {
            img: "./img/item-8.jpeg",
            subHeading: "American Classic",
            price: "$12.99",
            text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        }
    ],
    shake: [
        {
            img: "./img/item-3.jpeg",
            subHeading: "Godzilla Milkshake",
            price: "$6.99",
            text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        },
        {
            img: "./img/item-6.jpeg",
            subHeading: "Quarantine Buddy",
            price: "$16.99",
            text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        },
        {
            img: "./img/item-9.jpeg",
            subHeading: "Oreo Dream",
            price: "$18.99",
            text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        }
    ],
    dinner: [
        {
            img: "./img/item-10.jpeg",
            subHeading: "Steak Dinner",
            price: "$18.99",
            text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        }
    ]
}



let but = document.querySelectorAll(".list__navi");

let cards = document.querySelector('.cards')


for (i = 0; i < but.length; i++) {
    but[i].addEventListener('click', choiceMenu)
}

function choiceMenu(e) {
    if (e.target.classList.contains('all')) {
        let arr = Object.keys(obj);
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]].forEach(element => createCard(element))
        }
    }
    if (e.target.classList.contains('breakfast')) {
        cards.innerHTML = "";
        obj.breakfast.forEach(element => createCard(element))
    }
    if (e.target.classList.contains('lunch')) {
        cards.innerHTML = "";
        obj.lunch.forEach(element => createCard(element))
    }
    if (e.target.classList.contains('shake')) {
        cards.innerHTML = "";
        obj.shake.forEach(element => createCard(element))
    }
    if (e.target.classList.contains('dinner')) {
        cards.innerHTML = "";
        obj.dinner.forEach(element => createCard(element))
    }
}


function createCard(element) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card')
    cards.append(card);
    card.innerHTML =
        `
<img src="${element.img}" class="card__img" alt="" width="1000" height="611">
<h3 class="card__subHeading">${element.subHeading}</h3>
<span class="card__price">${element.price}</span>
<p class="card__text">${element.text}</p>
`;
}
