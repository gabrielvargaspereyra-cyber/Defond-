// ==========================================================
// DEFOND — comportamiento del sitio
// ==========================================================

// --- 0. Catálogo de productos ---------------------------------
// Para agregar, editar o borrar productos, tocá solo este array.
// category tiene que ser: "yerbas", "mates", "bombillas" o "combos"
const PRODUCTS = [
  { id:'y1', category:'yerbas', name:'DEFOND Clásica', desc:'Despalada suave, estacionamiento 12 meses. El punto de partida.', price:8500, img:'https://images.unsplash.com/photo-1550505095-6efcc8a7e5c4?w=600&q=60' },
  { id:'y2', category:'yerbas', name:'DEFOND Intensa', desc:'Molienda fina, sabor concentrado. Para rondas largas.', price:9200, img:'https://images.unsplash.com/photo-1620045758319-df5c2b4c3d8d?w=600&q=60' },
  { id:'y3', category:'yerbas', name:'DEFOND Compuesta', desc:'Con hierbas serranas: peperina, boldo y cedrón.', price:9800, img:'https://images.unsplash.com/photo-1620045758421-8f5c2b6a2d3f?w=600&q=60' },

  { id:'m1', category:'mates', name:'Mate Imperial Negro', desc:'Calabaza curada, virola de alpaca.', price:15400, img:'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=60' },
  { id:'m2', category:'mates', name:'Mate Torpedo', desc:'Acero inoxidable, doble pared térmica.', price:21900, img:'https://images.unsplash.com/photo-1615486364566-9db1f7b4bcbd?w=600&q=60' },
  { id:'m3', category:'mates', name:'Mate Camionero Cuero', desc:'Forrado en cuero negro, base antideslizante.', price:18700, img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=60' },

  { id:'b1', category:'bombillas', name:'Bombilla Alpaca Recta', desc:'Pico redondo, filtro doble resorte.', price:6300, img:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=60' },
  { id:'b2', category:'bombillas', name:'Bombilla Curva Premium', desc:'Acabado mate negro, resistente al uso diario.', price:7100, img:'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&q=60' },

  { id:'c1', category:'combos', name:'Set Iniciación DEFOND', desc:'Mate Imperial + bombilla recta + 500g Clásica.', price:26900, img:'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=60', featured:true },
  { id:'c2', category:'combos', name:'Set Ronda Larga', desc:'Mate Torpedo térmico + bombilla curva + 1kg Intensa.', price:38500, img:'https://images.unsplash.com/photo-1595436374314-e3a4d1e3d5f4?w=600&q=60', featured:true },
];

const WHATSAPP_NUMBER = '549XXXXXXXXXX'; // reemplazá por tu número real, con código de país sin "+" ni espacios

const fmt = (n) => '$' + n.toLocaleString('es-AR');

// --- 1. Render de productos por categoría ----------------------
function renderProducts(){
  const containers = {
    yerbas: document.getElementById('grid-yerbas'),
    mates: document.getElementById('grid-mates'),
    bombillas: document.getElementById('grid-bombillas'),
    combos: document.getElementById('grid-combos'),
  };

  PRODUCTS.forEach(p => {
    const container = containers[p.category];
    if (!container) return;

    const card = document.createElement('article');
    card.className = 'card' + (p.featured ? ' featured' : '');
    card.innerHTML = `
      <div class="card-img" style="background-image:url('${p.img}')"></div>
      <div class="card-body">
        <h4>${p.name}</h4>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="price">${fmt(p.price)}</span>
          <button class="add-btn" data-id="${p.id}">Agregar</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.card').forEach(c => cardObserver.observe(c));
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.id);
      const original = btn.textContent;
      btn.textContent = 'Agregado ✓';
      setTimeout(() => { btn.textContent = original; }, 1200);
    });
  });
}

// --- 2. Entrada del splash ---------------------------------
const splash = document.getElementById('splash');
const site = document.getElementById('site');
const enterBtn = document.getElementById('enterBtn');
const splashWord = document.querySelector('.splash-word');

function enterSite(){
  splash.classList.add('hide');
  site.classList.add('show');
  document.body.style.overflow = 'auto';
}
enterBtn.addEventListener('click', enterSite);
splashWord.addEventListener('click', enterSite);
document.body.style.overflow = 'hidden';

// --- 3. Menú mobile ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// --- 4. Nav se encoge al scrollear ---
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
});

// --- 5. Revelado de tarjetas al hacer scroll ---
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// --- 6. Carrito ---------------------------------------------
let cart = JSON.parse(localStorage.getItem('defond_cart') || '{}'); // { id: qty }

const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

function saveCart(){
  localStorage.setItem('defond_cart', JSON.stringify(cart));
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
}

function changeQty(id, delta){
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeFromCart(id){
  delete cart[id];
  saveCart();
  renderCart();
}

function openCart(){
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
}
function closeCart(){
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function renderCart(){
  const ids = Object.keys(cart);
  const totalItems = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCountEl.textContent = totalItems;

  if (ids.length === 0){
    cartItemsEl.innerHTML = '<p class="cart-empty">Todavía no agregaste nada.</p>';
    cartTotalEl.textContent = fmt(0);
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return '';
    const lineTotal = p.price * cart[id];
    total += lineTotal;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <h6>${p.name}</h6>
          <span class="cart-item-price">${fmt(lineTotal)}</span>
          <div class="cart-item-qty">
            <button data-action="dec" data-id="${id}">−</button>
            <span>${cart[id]}</span>
            <button data-action="inc" data-id="${id}">+</button>
          </div>
          <button class="cart-item-remove" data-action="remove" data-id="${id}">Quitar</button>
        </div>
      </div>
    `;
  }).join('');

  cartTotalEl.textContent = fmt(total);

  cartItemsEl.querySelectorAll('button[data-action]').forEach(btn => {
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    btn.addEventListener('click', () => {
      if (action === 'inc') changeQty(id, 1);
      if (action === 'dec') changeQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    });
  });
}

checkoutBtn.addEventListener('click', () => {
  const ids = Object.keys(cart);
  if (ids.length === 0){
    closeCart();
    return;
  }
  let total = 0;
  let lines = ids.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    const lineTotal = p.price * cart[id];
    total += lineTotal;
    return `• ${p.name} x${cart[id]} — ${fmt(lineTotal)}`;
  });
  const message = `Hola! Quiero hacer este pedido de DEFOND:\n\n${lines.join('\n')}\n\nTotal: ${fmt(total)}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// --- Inicializar ---
renderProducts();
renderCart();
