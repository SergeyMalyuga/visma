import {CARD_NAME, cardDescription} from "./data.js";

const cardTemplate = document.querySelector('#card-template').content.querySelector('.item');
const documentFragment = document.createDocumentFragment()
const cardsList = document.querySelector('.first-screen__cards-list');

cardDescription.forEach(cardDescription => {
const card = cardTemplate.cloneNode(true);
card.classList.add('first-screen__item');
card.querySelector('.card').classList.add('first-screen__card');
card.querySelector('p:nth-child(1)').classList.add('card__title');
card.querySelector('p:nth-child(2)').classList.add('card__description');
card.querySelector('.card__title').textContent = CARD_NAME;
card.querySelector('.card__description').insertAdjacentHTML('afterbegin', cardDescription);
documentFragment.appendChild(card);
});

cardsList.appendChild(documentFragment);
