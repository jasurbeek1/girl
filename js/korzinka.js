// const cart = JSON.parse(localStorage.getItem(`cart`)) || [];


console.log(cart);
const gridtList = document.querySelector(`#crust`)
function korzinkaPage() {
    gridtList.innerHTML = ''
    cart.forEach(item => {
        const cartItemElement = document.createElement(`li`)
        cartItemElement.innerHTML = `
            <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="${item.imgUrl}" width="100" height="100" loading="lazy" alt="Greek Salad"
                    class="img-cover">
                </figure>
                <div>
                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">${item.name}</a>
                    </h3>
                    <span class="badge label-1">${item.title}</span>
                    <span class="span title-2">$ ${item.price}</span>
                  </div>
                  <p class="card-text label-1">
                        ${item.description}
                  </p>
          </div>
        `
        gridtList.appendChild(cartItemElement)
    });
    
}

korzinkaPage()