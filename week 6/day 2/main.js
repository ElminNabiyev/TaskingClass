const container = document.querySelector(".container");
async function getAll() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  data.forEach((element) => {
    createItem(
      element.image,
      element.title,
      element.price,
      element.category,
      element.rating.rate,
      element.id
    );
  });
}
let arr=[]
function createItem(src, title, price, category, rating) {
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const priceP = document.createElement("p");
  const categoryP = document.createElement("p");
  const ratingP = document.createElement("p");
  const card = document.createElement("div");
  const a = document.createElement("a");
  const btn = document.createElement("button");
   

  card.append(img, h2, priceP, categoryP, ratingP, btn);
  container.appendChild(a);
  a.appendChild(card);

  btn.className = "add_to_cart";

  img.src = src;
  h2.textContent = title;
  btn.textContent = "Add To Cart";
  priceP.innerHTML = `<h3>Price:</h3> <span>${price}$</span> `;
  categoryP.innerHTML = `<h3>Category:</h3><span>${category}</span>`;
  ratingP.innerHTML = `<h3>Rating:</h3><span>${rating} <i class="fa-solid fa-star"></i></span>`;

  card.className = "card";

  const allProducts=document.querySelector(".allproducts")

  allProducts.innerHTML=`<p id="title"></p>
  <p id="price"></p>
  <p id="category"></p>
  <p id="rating"></p>`
const count=document.querySelector(".count")
  const idPrice=document.getElementById("price")
  const idTitle=document.getElementById("title")
  const idCategory=document.getElementById("category")
  const idRating=document.getElementById("rating")
  btn.addEventListener("click", function () {
    arr.push({title, price, category, rating})

    allProducts.append(idPrice,idTitle,idCategory,idRating)
    idTitle.textContent=title
    idPrice.textContent=price
    idCategory.textContent=category
    idRating.textContent=rating
    count.textContent=arr.length
  });
}
getAll();