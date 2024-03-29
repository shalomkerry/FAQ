let accordionHeader = document.querySelectorAll(".accordionHeader");
let accordionItemBody = document.querySelector(".accordionItemBody");
let accordionContent = document.querySelector(".accordionItemBodyContent");
console.log(accordionHeader);

accordionHeader.forEach((accordionHeaders) =>
  accordionHeaders.addEventListener("click", (event) => {
    const currentlyActive = document.querySelector(".accordionHeader.active");
    if (currentlyActive && currentlyActive !== accordionHeaders) {
      currentlyActive.classList.remove("active");
      currentlyActive.nextElementSibling.style.maxHeight = 0;
    }
    accordionHeaders.classList.toggle("active");

    let check = accordionHeaders.classList.contains("active");

    if (check) {
      accordionHeaders.nextElementSibling.style.maxHeight =
        accordionItemBody.scrollHeight + "px";
    } else {
      accordionHeaders.nextElementSibling.style.maxHeight = 0;
    }
  })
);
