const url = 'src/public/json/data.json';

//**Async Function**//
async function getMenuData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMenu(data.menus);
    
}
    getMenuData(); 

  const displayMenu = (menus) => {
    const cont = document.querySelector('.cont')
    const chose = (cont.value)
    
    const conti = menus.filter(p=>p.continent == chose)
    //console.log(conti)
    const newMenu = []
    newMenu.push(conti)
    menus.forEach((menu) => {
      const cards = document.querySelector('.menu');
      let card = document.createElement('section');
      let h1 = document.createElement('h1');
      let h11 = document.createElement('h1')
      let portrait = document.createElement('img');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4');
      let p = document.createElement('p')
     
      // Build the h2 content out to show the menu's full name - finish the template string
      h1.textContent = `${menu.name}`;
      h4.textContent = `Country: ${menu.Country}`;
      p.textContent = `Ingredients: ${menu.ingredients}`;
      h3.textContent = `Price $ : ${menu.Price}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', menu.image);
      portrait.setAttribute('alt', `Portait of ${menu.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '440');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements

      card.appendChild(h1);
      card.appendChild(h11)
      card.appendChild(h4);
      card.appendChild(h3);
      card.appendChild(p)
       card.appendChild(portrait);
      cards.appendChild(card);
    })// end of forEach loop
  } // end of function expression