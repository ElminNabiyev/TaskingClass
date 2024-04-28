fetch("http://localhost:3000/product")
.then(res=>res.json())
.then(data =>showProduct(data))
const card=document.querySelector(".cards")
function showProduct(mal) {
    mal.forEach(x=>{
        card.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${x.image} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${x.title}</h5>
          <p class="card-text">${x.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
            </div>`
        
    })
}
const inp=document.getElementById("inp")
const inp1=document.getElementById("inp1")
const inp2=document.getElementById("inp2")
const inp3=document.getElementById("inp3")
const inp4=document.getElementById("inp4")
const form=document.querySelector("form")
form.addEventListener("submit",function () {
  fetch("http://localhost:3000/product",
  {headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({
    title:inp.value,
    description:inp1.value,
    category:inp2.value,
    price:inp3.value,
    bilmiremde:inp4.value
  })
})
})