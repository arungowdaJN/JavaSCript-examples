
let PrintWishMessage= (message,color)=>{
  let h1Tag= document.querySelector("#msg");

h1Tag.innerText=message;
h1Tag.style.backgroundColor=color;
h1Tag.style.padding="15px";

h1Tag.style.boxShadow=" 0 0 15px black";

}
