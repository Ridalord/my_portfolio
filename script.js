const menu = document.querySelectorAll('.menu-button');
const navLinks = document.querySelector('.nav-links');
const cancel = document.querySelector('.link-cancel');
const wrapper = document.querySelector('.wrapper');
const portfolio = document.getElementById('portfolio');
menu.forEach((menuBtn) => {
  menuBtn.addEventListener('click', () => {
    if (navLinks.classList.contains('menuLinks')) {
      navLinks.classList.remove('menuLinks');
      cancel.classList.remove('d-none');
    } else {
      navLinks.classList.add('menuLinks');
      cancel.classList.add('d-none');
    }
  });
});

const portfolioDetails = [
  {
    id: '0',
    name: 'Tonic',
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: 'CANOPY',
    stack: 'Backend Dev',
    workStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    img: 'img/nature.png',
    source: 'https://github.com/Ridalord/my_portfolio.git',
    live: 'https://ridalord.github.io/my_portfolio/',
  },
  {
    id: '1',
    name: 'Multi-Post Stories',
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: 'FACEBOOK',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    img: 'img/professional-art.png',
    source: 'https://github.com/Ridalord/my_portfolio.git',
    live: 'https://ridalord.github.io/my_portfolio/',
  },
  {
    id: '2',
    name: 'Facebook 360',
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: 'Facebook',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    img: 'img/facebook360.png',
    source: 'https://github.com/Ridalord/my_portfolio.git',
    live: 'https://ridalord.github.io/my_portfolio/',
  },
  {
    id: '3',
    name: 'Uber Navigation',
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: 'Uber',
    stack: 'Lead Developer',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    img: 'img/Availability.png',
    source: 'https://github.com/Ridalord/my_portfolio.git',
    live: 'https://ridalord.github.io/my_portfolio/',
  },
];

if (portfolio) {
  for (let i = 0; i < portfolioDetails.length; i += 1) {
    const card = document.createElement('div');
    card.setAttribute('id', `${i}`);
    if (i % 2 === 0) {
      card.classList.add('tonic', 'd-flex');
    } else {
      card.classList.add('tonic', 'd-flex', 'flex-reverse');
    }
    card.innerHTML = `
      <div class="works-image">
        <img src="${portfolioDetails[i].img}" alt="Multi-post Stories">
      </div>
      <div class="details d-flex">
        <h2 class="works-header">${portfolioDetails[i].name}</h2>
        <ul class="header-sub d-flex">
          <li class="main-header">${portfolioDetails[i].title}</li>
          <li><img src="img/Counter.png" alt="Counter"></li>
          <li>${portfolioDetails[i].title}</li>
          <li><img src="img/Counter.png" alt="Counter"></li>
          <li>2015</li>
        </ul>
        <p class="works-text">${portfolioDetails[i].text}</p>
        <ul class="works-stack d-flex">
          ${portfolioDetails[i].workStack.map((stack) => `<li>${stack}</li>`).join('')}
        </ul>
        <button class="works-button portfolio-details">See Project</button>
      </div>
    `;
    portfolio.appendChild(card);
  }
}

const portfolioItems = document.querySelectorAll('.portfolio-details');
if (portfolioItems) {
  portfolioItems.forEach((cards) => {
    cards.addEventListener('click', (e) => {
      e.preventDefault();
      const idValue = e.target.closest('.tonic').id;
      for (let i = 0; i < portfolioDetails.length; i += 1) {
        if (portfolioDetails[i].id === idValue) {
          const popupSection = document.createElement('section');
          popupSection.classList.add('popup-section');
          popupSection.innerHTML = `
              <div class="background"></div>
              <div class="tonic d-flex">
                <button class="close" type="submit">
                  <i class="bi bi-x"></i>              
                </button>
                <h2 class="works-header">${portfolioDetails[i].name}</h2>
                <ul class="header-sub d-flex">
                  <li class="main-header">${portfolioDetails[i].title}</li>
                  <li><img src="img/Counter.png" alt="Counter"></li>
                  <li>${portfolioDetails[i].stack}</li>
                  <li><img src="img/Counter.png" alt="Counter"></li>
                  <li>2015</li>
                </ul>
                <div class="works-image" style="background-image: url(${portfolioDetails[i].img});">
                </div>
                <div class="details d-flex">
                  <p class="works-text">${portfolioDetails[i].text}</p>
                  <ul class="works-stack d-flex">
                    ${portfolioDetails[i].workStack.map((stack) => `<li>${stack}</li>`).join('')}
                  </ul>
                  <div class="d-flex justify-content-between link-buttons">
                    <button class="works-button"><a href="${portfolioDetails[i].live}" target="_blank">See Live <img src="img/live.png" alt="Live Link"/></a></button>
                    <button class="works-button"><a href="${portfolioDetails[i].source}" target="_blank">See Source <img src="img/git.png" alt="Source Link"/></a></button>
                  </div>
                </div>
              </div>
            `;
          wrapper.appendChild(popupSection);
          const closeButton = popupSection.querySelector('.close');
          closeButton.addEventListener('click', () => {
            wrapper.removeChild(popupSection);
          });
        }
      }
    });
  });
}
