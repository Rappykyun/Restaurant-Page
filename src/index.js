import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
import './styles.css';

const pageController = {
  currentPage: 'home',
  pages: {
    home: createHomePage,
    menu: createMenuPage,
    contact: createContactPage
  },

  switchToPage(pageName) {
    if (this.pages[pageName]) {
      this.currentPage = pageName;
      this.clearContent();
      this.pages[pageName]();
    } else {
      console.error(`Page "${pageName}" does not exist.`);
    }
  },

  clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  },
};

const addNavEventListeners = () => {
  document.getElementById('home-btn').addEventListener('click', () => {
    pageController.switchToPage('home');
  });
  document.getElementById('menu-btn').addEventListener('click', () => {
    pageController.switchToPage('menu');
  });
  document.getElementById('contact-btn').addEventListener('click', () => {
    pageController.switchToPage('contact');
  });
};

const initializeWebsite = () => {
  pageController.switchToPage('home');
  addNavEventListeners();
};

initializeWebsite();