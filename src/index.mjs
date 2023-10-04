import "./styles.css";

const open = document.getElementById('open');
const modal_bg = document.getElementById('modal_bg');
const close = document.getElementById('close');

open.addEventListener('click',
function(){modal_bg.style.display = "flex"});

close.addEventListener('click',
function(){modal_bg.style.display = "none"});