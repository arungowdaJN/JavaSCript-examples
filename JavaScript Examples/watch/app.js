let textEL=document.querySelector("#text1");
let charLength=document.querySelector("#charCount");
textEL.addEventListener('keyup',function()
{
  let textentered=textEL.Value.length;
  charLength.innerText=textentered;  

});