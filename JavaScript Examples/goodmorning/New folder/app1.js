
let PrintWishMessage= (message,color)=>{
  let h1Tag= document.querySelector("#msg");

h1Tag.innerText=message;
h1Tag.style.backgroundColor=color;
h1Tag.style.padding="15px";

h1Tag.style.boxShadow=" 0 0 15px black";

}


let gmButton=document.querySelector('#gm_btn')
gmButton.addEventListener('click',function()
{
  PrintWishMessage('GoodMorning' ,'blue');
});
let gfButton=document.querySelector('#ga_btn')
gfButton.addEventListener('click',function()
{
  PrintWishMessage('GoodAfternoon' ,'green');
});
