const WHATSAPP_NUMBER = '491234567890'; // TODO: durch die echte Nummer mit Ländervorwahl ersetzen, ohne + oder Leerzeichen.
const DEFAULT_MESSAGE = 'Hallo LAGA Bau, ich hätte eine Anfrage.';
const makeWhatsAppUrl = (message = DEFAULT_MESSAGE) => {
  const numberIsPlaceholder = WHATSAPP_NUMBER === '491234567890';
  const text = numberIsPlaceholder
    ? 'Bitte tragen Sie zuerst die WhatsApp-Nummer in script.js ein.'
    : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
  link.href = makeWhatsAppUrl();
  link.addEventListener('click', event => {
    if (WHATSAPP_NUMBER === '491234567890') {
      event.preventDefault();
      toast?.classList.add('show');
      setTimeout(() => toast?.classList.remove('show'), 3800);
    }
  });
});
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('#contact-form'),toast=document.querySelector('.toast');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const message=[
    'Hallo LAGA Bau, ich möchte eine Anfrage stellen.',
    '',
    `Name: ${data.get('name')}`,
    `Kontakt: ${data.get('contact')}`,
    `Leistung: ${data.get('service')}`,
    `Nachricht: ${data.get('message') || 'Noch keine Details angegeben.'}`
  ].join('\\n');
  if (WHATSAPP_NUMBER === '491234567890') {
    toast.textContent='Bitte zuerst die WhatsApp-Nummer in script.js eintragen.';
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3800);
    return;
  }
  window.open(makeWhatsAppUrl(message),'_blank','noopener,noreferrer');
});
