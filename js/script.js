const nav = document.querySelector('.nav');

document.addEventListener('click', function (event){
  if(nav.classList.contains('nav__active') && !event.target.matches('[class^="nav"]') && !event.target.matches('.close')){
    nav.classList.toggle('nav__active');
  }

  if (event.target.dataset.toggleClass === 'nav') {
    nav.classList.toggle('nav__active');
  };

  if(event.target.matches('a[href^="#"]')){
    document.querySelector(`.${event.target.getAttribute('href').slice(1)}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
})

