const baseURL = 'src/public/json/data.json';

async function getData() {
    const response = await fetch(baseURL);
    const data = await response.json();
   // displayMenus(data.menus);
}
queryData()

const displayMenus = (menus)=>{
    const cards = document.querySelector('.template');
    menus.forEach((menu) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let portrait = document.createElement('img');
        let country = document.createElement('h4');
       // let ingredients = document.createElement('p');
        let Price = document.createElement('h3');

        //show data
        title.textContent = `${menu.name}`;
        portrait.setAttribute('src',menu.image);
        country.textContent = `${menu.Country}`;
        //ingredients.textContent = `${menu.ingredients}`;
        Price.textContent = `${menu.Price}`

        card.append(title);
        card.append(portrait)
        cards.append(card)
    });
}
displayMenus()