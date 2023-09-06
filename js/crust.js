// ! korzinka dropdown

const menuItems =  [
    {
        id: `1`,
        imgUrl: "../assets/images/menu-1.png",
        name: "Greek Salad",
        price: 25.50,
        title:"Seasonal",
        description:"Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
    },
    {
        id: `2`,
        imgUrl: "../assets/images/menu-2.png",
        name: "Lasagne",
        price: 40.00,
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    },
    {
        id: `3`,
        imgUrl: "../assets/images/menu-3.png",
        name: "Butternut Pumpkin",
        price: 10.00,
        description:" Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
    },
    {
        id: `4`,
        imgUrl: "../assets/images/menu-4.png",
        name: "Tokusen Wagyu",
        title:"New",
        price: 39.00,
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    },
    {
        id: `5`,
        imgUrl: "../assets/images/menu-5.png",
        name: "Olivas Rellenas",
        price: 39.00,
        description:"Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper. "
    },
    {
        id:"6",
        imgUrl: "../assets/images/menu-6.png",
        name:"Opu Fish",
        price:"49.00",
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    }
]

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function sendKorzinka(itemId) {
    const selectedItem = menuItems.find(item => item.id == itemId);

    if (selectedItem) {
        cart.push(selectedItem);
         console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));

    }
}






console.log(`slaom`);

function sendKorzinkaPage() {
    window.location.href = `korzinka.html`
}
