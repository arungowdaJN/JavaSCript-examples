let numberFormat=(number)=>
{
    let result=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;

};

let rangeEl=document.querySelector('#range');
let amountEl=document.querySelector('#amount');
rangeEl.addEventListener('input',function()
{
    let rangeselect=rangeEl.value;
    amountEl.innerText=numberFormat(rangeselect);

});