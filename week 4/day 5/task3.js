const btn=document.getElementById("btn")
const input=document.getElementById("input")
const body=document.querySelector("body")

btn.addEventListener("click",function () {
const color1=Math.floor(Math.random() * 256 );
const color2=Math.floor(Math.random() * 256 );
const color3=Math.floor(Math.random() * 256 );
const generalColor="rgb("+color1+","+color2+","+color3+")";
input.value=(generalColor)
body.style.backgroundColor=generalColor
}) 