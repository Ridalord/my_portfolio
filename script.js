const menu = document.querySelectorAll('.menu-button');
const navLinks = document.querySelector('.nav-links');
const cancel = document.querySelector('.link-cancel');
const portfolioItems = document.querySelectorAll('.portfolio-details')
const wrapper = document.querySelector('.wrapper');
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
    id: "1",
    name: "Tonic",
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    title: "CANOPY",
    stack: "Backend Dev",
    workStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    year: "2015",
    img: "img/nature.png",
    source: "#",
    live: "#"
  },
  {
    id: "2",
    name: "Multi-Post Stories",
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    title: "FACEBOOK",
    stack: "Full Stack Dev",
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    year: "2015",
    img: "img/professional-art.png",
    source: "#",
    live: "#"
  },
  {
    id: "3",
    name: "Facebook 360",
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    title: "Facebook",
    stack: "Full Stack Dev",
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    year: "2015",
    img: "img/facebook360.png",
    source: "#",
    live: "#"
  },
  {
    id: "4",
    name: "Uber Navigation",
    year: '2015',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    title: "Uber",
    stack: "Lead Developer",
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'JAVASCRIPT'],
    year: "2015",
    img: "img/Availability.png",
    source: "#",
    live: "#"
  },
]

if (portfolioItems) {
  portfolioItems.forEach((cards) => {
    cards.addEventListener('click', (e) => {
      const idValue = e.target.closest('.tonic').id;
      for (var i = 0; i < portfolioDetails.length; i++){
        if (portfolioDetails[i].id == idValue) { 
          const popupSection = document.createElement('section')
          popupSection.classList.add("popup-section");
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
                <li>${portfolioDetails[i].year}</li>
              </ul>
              <div class="works-image">
                <img src="${portfolioDetails[i].img}" alt="${portfolioDetails[i].name} Snapshoot">
              </div>
              <div class="details d-flex">
                <p class="works-text">${portfolioDetails[i].text}</p>
                <ul class="works-stack d-flex">
                  ${portfolioDetails[i].workStack.map((stack) => `<li>${stack}</li>`).join('')}
                </ul>
                <div class="d-flex justify-content-between link-buttons">
                  <button class="works-button"><a href="${portfolioDetails[i].live}">See Live <img src="img/live.png" alt="Live Link"/></a></button>
                  <button class="works-button"><a href="${portfolioDetails[i].source}">See Source <img src="img/git.png" alt="Source Link"/></a></button>
                </div>
              </div>
            </div>
          `
          wrapper.appendChild(popupSection)
          const closeButton = popupSection.querySelector('.close');
          closeButton.addEventListener('click', () => {
            wrapper.removeChild(popupSection);
          });
        }
      }
    })
  })
}

