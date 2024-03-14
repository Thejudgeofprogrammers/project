class Menu {
  constructor(menuElement) {
    this.menuElement = menuElement;
    this.menuItems = [];
  }

  addMenuItem(label, linkUrl, imageUrl, price) {
    const menuItem = document.createElement('div');
    menuItem.className = 'card';

    const link = document.createElement('a');
    link.href = linkUrl;


    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'icon';
    link.appendChild(image);

    const labelElement = document.createElement('p');
    labelElement.textContent = label;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Цена: ${price} руб.`;

    menuItem.appendChild(link);
    menuItem.appendChild(labelElement);
    menuItem.appendChild(priceElement);

    this.menuElement.appendChild(menuItem);
    this.menuItems.push(menuItem);
  };
};

const menuElement = document.querySelector(".vision");
const menu = new Menu(menuElement);

const data = [['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000],
              ['Дрель', "#",'../img/drill.jpeg', 4000]]

data.forEach(item => menu.addMenuItem(...item));
