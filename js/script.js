let title = document.getElementById('title');
let name1 = document.getElementById('name');
let forgot = document.getElementById('forgot');
let signup = document.getElementById('signup');
let login = document.getElementById('login');
let old1 = document.getElementById('old1');
let old_aocunt = document.getElementById('old_acount')

login.addEventListener('click', function(){
    title.innerHTML= 'Log in'
    login.style.backgroundColor='rgb(100, 5, 200)'
    login.style.color= 'white'
    signup.style.backgroundColor='rgb(199, 199, 199)'
    signup.style.color= 'black'
    name1.style.display='none'
    forgot.style.display='flex'
    old_acount.style.display='none'
    


})
signup.addEventListener('click', function(){
    title.innerHTML= 'Sign up'
    signup.style.backgroundColor='rgb(100, 5, 200)'
    signup.style.color= 'white'
    login.style.backgroundColor='rgb(199, 199, 199)'
    login.style.color= 'black'
    name1.style.display='flex'
    forgot.style.display='none'
    old_acount.style.display='flex'

})
old1.addEventListener('click', function(){
    title.innerHTML= 'Log in'
    login.style.backgroundColor='rgb(100, 5, 200)'
    login.style.color= 'white'
    signup.style.backgroundColor='rgb(199, 199, 199)'
    signup.style.color= 'black'
    name1.style.display='none'
    forgot.style.display='flex'
    old_acount.style.display='none'

})