const menu = () => {

  let menuBtn = document.querySelector('.menu__btn'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__link');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
      menuItem.forEach(function(item) {
        item.addEventListener('click', () => {
          menuBtn.classList.remove('active');
          menu.classList.remove('active');
          document.body.classList.remove('lock');
            });
        });
    });

};

export default menu;