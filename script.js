
const showAllButton = document.querySelector('.show-all');
const mapButton = document.querySelector('.map-all');
const reduceButton = document.querySelector('.sum-all');
const filterAllButton = document.querySelector('.filter-all');
const totalPriceElement = document.querySelector('.total-price');

const burgerList = document.querySelector('.burger-list');

function renderItems(arrayItems) {
    let myLi = '';
    arrayItems.forEach((burger) => {
        myLi += `
        <li class="burger-card">
            <img src="${burger.src}" alt="${burger.name}">
            <p class="burger-name">${burger.name}</p>
            <p class="burger-price">R$ ${burger.price.toFixed(2)}</p>
        </li>
        `;
    });
    burgerList.innerHTML = myLi;
}

showAllButton.addEventListener('click', () => {
    totalPriceElement.innerHTML = '';
    renderItems(menuOptions);
});
    
mapButton.addEventListener('click', () => {
    totalPriceElement.innerHTML = '';

    const discountedMenu = menuOptions.map((burger) => ({
        ...burger,
        price: burger.price * 0.9
    }));

    renderItems(discountedMenu);
});

reduceButton.addEventListener('click', () => {
    totalPriceElement.innerHTML = '';

    const totalPrice = menuOptions.reduce(
        (acc, burger) => acc + burger.price,
        0
    );

    totalPriceElement.innerHTML =
        `O preço total do menu é R$ ${totalPrice.toFixed(2)}`;
});

filterAllButton.addEventListener('click', () => {
    totalPriceElement.innerHTML = '';

    const veganBurgers = menuOptions.filter((burger) => burger.vegan);

    renderItems(veganBurgers);
});
