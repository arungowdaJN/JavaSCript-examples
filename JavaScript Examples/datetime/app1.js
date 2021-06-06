let indianWatch= () =>
{
    let  options={ timeZone : 'Asia/Kolkata'};
let currentdate=new Date().toLocaleDateString('en-US',options);
let currentTime=new Date().toLocaleTimeString('en-US',options);
document.querySelector('#india-date').innerText=currentdate;
document.querySelector('#india-time').innerText=currentTime;
};
setInterval(indianWatch,1000);


let UsaWatch= () =>
{
    let  options={ timeZone : 'America/New_York'};
let currentdate=new Date().toLocaleDateString('en-US',options);
let currentTime=new Date().toLocaleTimeString('en-US',options);
document.querySelector('#usa-date').innerText=currentdate;
document.querySelector('#usa-time').innerText=currentTime;
};
setInterval(UsaWatch,1000);

let chinaWatch= () =>
{
    let  options={ timeZone : 'Asia/Shanghai'};
let currentdate=new Date().toLocaleDateString('en-US',options);
let currentTime=new Date().toLocaleTimeString('en-US',options);
document.querySelector('#china-date').innerText=currentdate;
document.querySelector('#china-time').innerText=currentTime;
};
setInterval(chinaWatch,1000);