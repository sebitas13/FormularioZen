const contenedor = document.querySelector('section');
const login_box = document.querySelector('.signUpBtn');
const register_box = document.querySelector('.signInBtn');
const body_box = document.querySelector('body');

login_box.addEventListener('click',()=>{
    contenedor.classList.toggle('active');
    body_box.classList.toggle('active');
})


register_box.addEventListener('click',()=>{
    contenedor.classList.toggle('active');
    body_box.classList.toggle('active');
})


