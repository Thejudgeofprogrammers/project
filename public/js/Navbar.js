class Navbar {
  constructor() {
    this.NavbarElement = NavbarElement;
    this.NavbarItems = [];
  };

  addNavbarItem(text, linkUrl) {
    const NavbarItem = document.createElement('li');
    
    
    const Navlink = document.createElement('a');
    Navlink.className = 'btn';
    Navlink.href = linkUrl;
    Navlink.textContent = text;

    NavbarItem.appendChild(Navlink);

    this.NavbarElement.appendChild(NavbarItem);
    this.NavbarItems.push(NavbarItem);
  };
};

const NavbarElement = document.querySelector(".nav-bar ul");
const bar = new Navbar(NavbarElement);

bar.addNavbarItem('Инструменты', "#");
bar.addNavbarItem('Электрика', "#");
bar.addNavbarItem('Акции', "#");
bar.addNavbarItem('Сантехника', "#");
bar.addNavbarItem('Стройматериалы', "#");
bar.addNavbarItem('Офис', "#");
bar.addNavbarItem('Форум', "#");
