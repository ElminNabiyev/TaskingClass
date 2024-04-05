const parentCard = document.createElement("div");
const img = document.createElement("img");
const cardBody = document.createElement("div");
const h5 = document.createElement("h5");
const cardText = document.createElement("p");
const btnPrimary = document.createElement("a");

parentCard.append(img, cardBody, h5, cardText, btnPrimary);
document.body.appendChild(parentCard);

btnPrimary.setAttribute("href", "#");
img.setAttribute("src", "...");
img.setAttribute("alt", "...");
cardBody.classList.add("card-body");
h5.classList.add("card-title");
cardText.classList.add("card-text");
btnPrimary.classList.add("btn");
btnPrimary.classList.add("btn-primary");
img.classList.add("card-img-top");
parentCard.classList.add("card");

parentCard.style.width = "18rem";

h5.textContent = "Card title";
cardText.textContent =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
btnPrimary.textContent = "Go somewhere";
