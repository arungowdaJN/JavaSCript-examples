let formValidation=document.querySelector('#register-from');
formValidation.addEventListener('submit',function(event)
{
    event.preventDefault();
if(validateform())
{
    alert('form submited sucessfully');
}
});

let validateform=()=>
{
return(checkUserName() & checkemail() & checkpassword() & checkconfirmpassword())
};

let checkUserName=()=>
{
    let username=document.querySelector('#username');
    let feedback=document.querySelector('#username-feedback');
    let regEx=/^[a-zA-Z0-9]{4,10}$/;
    if(regEx.test(username.value))
    {
        makevalid(username,feedback);
        return true;
    }
    else
    {
        makeinvalid(username,feedback);
        return false;
    }
}

let checkemail=()=>
{
    let username=document.querySelector('#email');
    let feedback=document.querySelector('#email-feedback');
    let regEx=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if(regEx.test(username.value))
    {
        makevalid(username,feedback);
        return true;
    }
    else
    {
        makeinvalid(username,feedback);
        return false;
    }
}
let checkpassword=()=>
{
    let username=document.querySelector('#password');
    let feedback=document.querySelector('#password-feedback');
    let regEx=/^[a-zA-Z0-9]{4,10}$/;
    if(regEx.test(username.value))
    {
        makevalid(username,feedback);
        return true;
    }
    else
    {
        makeinvalid(username,feedback);
        return false;
    }
}
let checkconfirmpassword=()=>
{
    let username=document.querySelector('#c_password');
    let passwordel=document.querySelector('#password');
    let feedback=document.querySelector('#c_password-feedback');
    let regEx=/^[a-zA-Z0-9]{4,10}$/;
    if(regEx.test(username.value) &&  username.value===passwordel.value)
    {
        makevalid(username,feedback);
        return true;
    }
    else
    {
        makeinvalid(username,feedback);
        return false;
    }
}

let makevalid =(username,feedback)=>

{
username.classList.add('is-form-valid');
username.classList.remove('is-form-invalid');
feedback.classList.add('text-success');
feedback.classList.remove('text-danger');

feedback.innerText='looks good';

}
let makeinvalid =(username,feedback)=>

{
username.classList.remove('is-form-valid');
username.classList.add('is-form-invalid');
feedback.classList.remove('text-success');
feedback.classList.add('text-danger');

feedback.innerText=`please enter a ${username.placeholder}`;

};

let usernameEl=document.querySelector('#username');
usernameEl.addEventListener('keyup', function()
{
checkUserName();
});

let emailEl=document.querySelector('#email');
emailEl.addEventListener('keyup', function()
{
checkemail();
});

let passwordEl=document.querySelector('#password');
passwordEl.addEventListener('keyup', function()
{
checkpassword();
});

let confirmEl=document.querySelector('#c_password');
confirmEl.addEventListener('keyup', function()
{
checkconfirmpassword();
});