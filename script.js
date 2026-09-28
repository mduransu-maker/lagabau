const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('#contact-form'),toast=document.querySelector('.toast');
form?.addEventListener('submit',e=>{e.preventDefault();toast?.classList.add('show');setTimeout(()=>toast?.classList.remove('show'),3200);form.reset();});
