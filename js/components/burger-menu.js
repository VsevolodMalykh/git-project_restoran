 function burgerMenu() {
  const burger = document.querySelector('.header__burger-btn');
  const nav = document.querySelector('.header__menu');

  burger.addEventListener('click', () => {
    nav.classList.toggle('activeMenu');
  });
};
export class BurgerMenu {
  constructor(){
    this.burger = document.querySelector('.header__burger-btn');
    this.nav = document.querySelector('.header__menu');

    this.switchForm();
  }

  switchForm(){
    this.burger.addEventListener('click', () => {
    this.nav.classList.toggle('activeMenu');
  });
  }
}