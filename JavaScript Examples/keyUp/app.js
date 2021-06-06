/*let textBox= document.querySelector("#username");
textBox.addEventListener('keyup',function()
{
let textEntered=textBox.value;
document.querySelector("#msg").innerText=textEntered;
});*/
let textBox = document.querySelector("#username");
textBox.addEventListener('keyup',function()
{
let textEntered=textBox.value;
let message =document.querySelector("#msg");
message.innerText=textEntered;
});