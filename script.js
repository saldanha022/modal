const modal = document.querySelector('.container');
const btn_open = document.querySelector('[btn-open]');
const btn_close = document.querySelector('[btn-close]');

const abrir =() =>{
    modal.classList.add('active');
}

const fechar = () =>{
    modal.classList.remove('active');
}
btn_open.addEventListener('click',abrir);
btn_close.addEventListener('click',fechar);

/*
function onOpen(){
    modal.classList.add('active');
}

function onClose(){
    modal.classList.remove('active');
}

*/