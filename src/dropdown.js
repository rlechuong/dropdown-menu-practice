const addClickDropDown = (buttonReference, contentReference) => {
  buttonReference.addEventListener("click", () => {
    if (contentReference.style.display === "none") {
      contentReference.style.display = "block";
    } else {
      contentReference.style.display = "none";
    }
  });
};

const addHoverDropDown = (
  containerReference,
  buttonReference,
  contentReference,
) => {
  buttonReference.addEventListener("mouseover", () => {
    contentReference.style.display = "block";

    containerReference.addEventListener("mouseleave", () => {
      contentReference.style.display = "none";
    });
  });
};

export { addClickDropDown, addHoverDropDown };
