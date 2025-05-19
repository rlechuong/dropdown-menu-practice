import "./styles.css";
import { addClickDropDown, addHoverDropDown } from "./dropdown.js";

const dropdownContainer = document.querySelector("#dropdown-container");
const dropdownButton = document.querySelector("#dropdown-button");
const dropdownContentContainer = document.querySelector(
  "#dropdown-content-container",
);

// addClickDropDown(dropdownButton, dropdownContentContainer);
addHoverDropDown(dropdownContainer, dropdownButton, dropdownContentContainer);
