const consDiv = document.querySelector('#conselhoDiv');
const contDiv = document.querySelector('#contadorDiv');
const resBtn = document.querySelector('#getCons');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


function toggleOpacity() {
  main.classList.toggle('opacidadeZero');
}

function getAdvice(){
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    contDiv.innerHTML = `<p>#${adviceData.slip.id}</p>`;
    const AdviceObj = adviceData.slip;
    consDiv.innerHTML = `<p>${AdviceObj.advice}</p>`;
  }).catch(error => {
    console.log(error);
  })
}

resBtn.addEventListener('click', () => {
  toggleOpacity();
  setTimeout(() => {
    toggleOpacity();
  }, 1000);
 getAdvice()
});
