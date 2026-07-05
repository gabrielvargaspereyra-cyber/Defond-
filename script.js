// ==========================================================
// DEFOND — comportamiento del sitio
// ==========================================================

// --- 1. Entrada: click en "Entrar" o en la palabra DEFOND ---
const splash = document.getElementById('splash');
const site = document.getElementById('site');
const enterBtn = document.getElementById('enterBtn');
const splashWord = document.querySelector('.splash-word');

function enterSite(){
  splash.classList.add('hide');
  site.classList.add('show');
  document.body.style.overflow = 'auto';
  // guarda que ya entró, así en próximas visitas puede saltar el splash si querés
  sessionStorage.setItem('defond_entered', '1');
}

enterBtn.addEventListener('click', enterSite);
splashWord.addEventListener('click', enterSite);

// Si querés que el splash SOLO aparezca la primera vez por sesión, descomentá esto:
// if (sessionStorage.getItem('defond_entered')) { enterSite(); }

// bloquea el scroll del catálogo mientras está el splash
document.body.style.overflow = 'hidden';

// --- 2. Menú mobile ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// --- 3. Revelado de tarjetas al hacer scroll ---
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// --- 4. Botón "Agregar" (placeholder simple, sin carrito real todavía) ---
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Agregado ✓';
    setTimeout(() => { btn.textContent = original; }, 1400);
  });
});
