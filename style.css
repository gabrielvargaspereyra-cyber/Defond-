/* ==========================================================
   DEFOND — Design tokens
   Fondo:      #0A0A09 (negro cálido)
   Superficie: #141412
   Texto:      #EDEAE2 (hueso)
   Texto sec:  #9A968C
   Acento:     #2F4A3B (verde botella)
   Detalle:    #B08D4F (oro apagado) — usar con moderación
   Línea:      #26251F
   ========================================================== */

:root{
  --bg:#0A0A09;
  --surface:#121210;
  --text:#EDEAE2;
  --text-dim:#9A968C;
  --green:#2F4A3B;
  --green-light:#4C7360;
  --gold:#B08D4F;
  --line:#26251F;
  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
}

*{ margin:0; padding:0; box-sizing:border-box; }

html{ scroll-behavior:smooth; }

body{
  background:var(--bg);
  color:var(--text);
  font-family:var(--font-body);
  font-weight:400;
  overflow-x:hidden;
}

a{ color:inherit; text-decoration:none; }

@media (prefers-reduced-motion: reduce){
  *{ animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
}

/* ==========================================================
   SPLASH
   ========================================================== */
#splash{
  position:fixed;
  inset:0;
  z-index:100;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background:var(--bg);
  transition:opacity 0.9s ease, visibility 0.9s ease;
}

#splash.hide{
  opacity:0;
  visibility:hidden;
  pointer-events:none;
}

.splash-inner{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  animation:splashIn 1.1s ease both;
}

@keyframes splashIn{
  from{ opacity:0; transform:translateY(14px); }
  to{ opacity:1; transform:translateY(0); }
}

.splash-leaf{
  color:var(--green-light);
  margin-bottom:22px;
}

.splash-word{
  font-family:var(--font-display);
  font-weight:500;
  font-size:clamp(3rem, 10vw, 6rem);
  letter-spacing:0.08em;
  line-height:1;
}

.splash-tag{
  margin-top:14px;
  font-size:0.85rem;
  letter-spacing:0.14em;
  text-transform:uppercase;
  color:var(--text-dim);
}

.enter-btn{
  margin-top:48px;
  display:flex;
  align-items:center;
  gap:10px;
  background:transparent;
  border:1px solid var(--line);
  color:var(--text);
  font-family:var(--font-body);
  font-size:0.85rem;
  letter-spacing:0.1em;
  text-transform:uppercase;
  padding:14px 28px;
  border-radius:999px;
  cursor:pointer;
  transition:border-color 0.3s ease, background 0.3s ease, gap 0.3s ease;
}

.enter-btn:hover{
  border-color:var(--green-light);
  background:rgba(76,115,96,0.08);
  gap:16px;
}

.enter-btn svg{ transition:transform 0.3s ease; }
.enter-btn:hover svg{ transform:translateX(2px); }

.splash-footer{
  position:absolute;
  bottom:28px;
  font-size:0.72rem;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:var(--text-dim);
}

/* ==========================================================
   SITE (oculto hasta entrar)
   ========================================================== */
#site{
  opacity:0;
  transition:opacity 0.8s ease;
}
#site.show{ opacity:1; }

/* NAV */
.nav{
  position:sticky;
  top:0;
  z-index:50;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:22px 6%;
  background:rgba(10,10,9,0.85);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}

.nav-logo{
  font-family:var(--font-display);
  font-size:1.3rem;
  letter-spacing:0.1em;
  font-weight:500;
}

.nav-links{
  display:flex;
  gap:34px;
}

.nav-links a{
  font-size:0.82rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--text-dim);
  transition:color 0.25s ease;
}

.nav-links a:hover{ color:var(--text); }

.nav-toggle{
  display:none;
  flex-direction:column;
  gap:5px;
  background:none;
  border:none;
  cursor:pointer;
}
.nav-toggle span{
  width:22px; height:1px; background:var(--text);
}

.mobile-menu{
  display:none;
  flex-direction:column;
  position:sticky;
  top:65px;
  z-index:49;
  background:var(--bg);
  border-bottom:1px solid var(--line);
}
.mobile-menu.open{ display:flex; }
.mobile-menu a{
  padding:16px 6%;
  border-top:1px solid var(--line);
  font-size:0.9rem;
  letter-spacing:0.06em;
  text-transform:uppercase;
  color:var(--text-dim);
}

@media (max-width:760px){
  .nav-links{ display:none; }
  .nav-toggle{ display:flex; }
}

/* HERO */
.hero{
  padding:14vh 6% 12vh;
  max-width:900px;
}
.hero-eyebrow{
  font-size:0.78rem;
  letter-spacing:0.16em;
  text-transform:uppercase;
  color:var(--gold);
  margin-bottom:20px;
}
.hero-title{
  font-family:var(--font-display);
  font-weight:500;
  font-size:clamp(2.4rem, 6vw, 4.4rem);
  line-height:1.05;
  letter-spacing:-0.01em;
}
.hero-copy{
  margin-top:24px;
  max-width:480px;
  color:var(--text-dim);
  font-size:1rem;
  line-height:1.7;
}
.hero-cta{
  display:inline-block;
  margin-top:36px;
  padding:14px 30px;
  border:1px solid var(--green-light);
  border-radius:999px;
  font-size:0.85rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  transition:background 0.3s ease;
}
.hero-cta:hover{ background:rgba(76,115,96,0.12); }

/* CATEGORY SECTIONS */
.category{
  padding:10vh 6%;
  border-top:1px solid var(--line);
}
.category.alt{ background:var(--surface); }

.category-head{
  display:flex;
  align-items:baseline;
  gap:18px;
  flex-wrap:wrap;
  margin-bottom:48px;
}
.category-num{
  font-family:var(--font-display);
  color:var(--green-light);
  font-size:0.95rem;
}
.category-head h3{
  font-family:var(--font-display);
  font-weight:500;
  font-size:clamp(1.7rem, 4vw, 2.4rem);
}
.category-head p{
  color:var(--text-dim);
  font-size:0.9rem;
  width:100%;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));
  gap:28px;
}

.card{
  border:1px solid var(--line);
  border-radius:2px;
  overflow:hidden;
  transition:border-color 0.3s ease, transform 0.3s ease;
  opacity:0;
  transform:translateY(16px);
}
.card.in-view{ opacity:1; transform:translateY(0); }
.card:hover{ border-color:var(--green-light); }

.card-img{
  height:220px;
  background-size:cover;
  background-position:center;
  filter:grayscale(15%) brightness(0.85);
  transition:filter 0.4s ease, transform 0.5s ease;
}
.card:hover .card-img{
  filter:grayscale(0%) brightness(1);
  transform:scale(1.03);
}

.card-body{ padding:22px; }
.card-body h4{
  font-family:var(--font-display);
  font-weight:500;
  font-size:1.15rem;
  margin-bottom:8px;
}
.card-desc{
  color:var(--text-dim);
  font-size:0.87rem;
  line-height:1.55;
  min-height:44px;
}
.card-foot{
  margin-top:18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.price{
  font-family:var(--font-display);
  color:var(--gold);
  font-size:1rem;
}
.add-btn{
  background:transparent;
  border:1px solid var(--line);
  color:var(--text);
  font-size:0.75rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  padding:9px 16px;
  border-radius:999px;
  cursor:pointer;
  transition:border-color 0.25s ease, background 0.25s ease;
}
.add-btn:hover{
  border-color:var(--green-light);
  background:rgba(76,115,96,0.1);
}

.card.featured{ border-color:var(--gold); }

/* FOOTER */
.footer{
  padding:10vh 6% 6vh;
  border-top:1px solid var(--line);
  text-align:center;
}
.footer-top h3{
  font-family:var(--font-display);
  font-size:1.6rem;
  letter-spacing:0.08em;
}
.footer-top p{
  margin-top:10px;
  color:var(--text-dim);
  font-size:0.88rem;
}
.footer-links{
  margin-top:30px;
  display:flex;
  justify-content:center;
  gap:26px;
  flex-wrap:wrap;
}
.footer-links a{
  font-size:0.8rem;
  letter-spacing:0.06em;
  text-transform:uppercase;
  color:var(--text-dim);
  transition:color 0.25s ease;
}
.footer-links a:hover{ color:var(--text); }
.footer-copy{
  margin-top:50px;
  font-size:0.72rem;
  color:var(--text-dim);
  opacity:0.6;
}
