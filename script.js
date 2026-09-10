const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'))});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const dialog=document.querySelector('#lightbox');
if(dialog){const large=dialog.querySelector('img');document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{large.src=img.src;large.alt=img.alt;dialog.showModal()}));dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()})}
