const btn=document.createElement("button")
const div=document.createElement("div")

btn.style.width="200px"
btn.style.height="50px"
btn.style.backgroundColor="red"
btn.style.borderRadius="1rem"
btn.style.border="1px hidden"
div.style.width="100px"
div.style.height="100px"
div.style.backgroundColor="black"
div.style.border="1px solid black"
div.style.marginTop="100px"
div.style.color="white"
div.style.display="grid"
div.style.placeItems="center"
div.style.fontFamily="calibri"


btn.onclick=()=> document.body.appendChild(div)

document.body.appendChild(btn)

btn.textContent="Click ME"
div.textContent="Ne var ne yox"