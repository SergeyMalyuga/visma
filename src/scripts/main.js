import {setupKeyboardFocus} from "./input-focus.js";
import "./createFirstScreenCard.js";
import "./createServiceCard.js";

const input = document.querySelector(".header__input-search");
setupKeyboardFocus(input);