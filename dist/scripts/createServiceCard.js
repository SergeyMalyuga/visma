import{CARD_NAME,cardServiceDescription}from"./data.js";const cardTemplate=document.querySelector("#card-template").content.querySelector(".item"),documentFragment=document.createDocumentFragment(),cardsList=document.querySelector(".service__cards-list");cardServiceDescription.forEach((e=>{const t=cardTemplate.cloneNode(!0);t.classList.add("service__item"),t.querySelector(".card").classList.add("service__card"),t.querySelector("p:nth-child(1)").classList.add("card__title"),t.querySelector("p:nth-child(2)").classList.add("card__description"),t.querySelector(".card__title").textContent=CARD_NAME,t.querySelector(".card__description").insertAdjacentHTML("afterbegin",e),documentFragment.appendChild(t)})),cardsList.appendChild(documentFragment);