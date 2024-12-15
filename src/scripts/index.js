import '../sass/main.scss';

const DrawerInitiator = {
  init({ button, drawer, header, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });
    
    header.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
    
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');

    // Perubahan teks tombol
    if (drawer.classList.contains('open')) {
      button.innerText = '\u2715';
    } else {
      button.innerText = '☰';
    }
  },
  
  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('open');
    button.innerText = '☰';
  },
}

const buttonMenu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const header = document.querySelector('header');
const content = document.querySelector('main');

DrawerInitiator.init({
  button: buttonMenu,
  drawer: drawer,
  header: header,
  content: content,
});