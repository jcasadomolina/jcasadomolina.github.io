<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import portfolio from '../data.json'

const roles = ['Desarrollador Full-Stack', 'Ingeniero de Software', 'Creador de producto']
const technologyGlyphs = {
  Swift: 'SW',
  TypeScript: 'TS',
  JavaScript: 'JS',
  Angular: 'Ng',
  Python: 'Py',
  Java: 'J',
  'C++': 'C+',
  MySQL: 'SQL',
  'SQL Server': 'SQL',
  Git: 'git',
  GitHub: 'GH',
  Pandas: 'Pd',
  NumPy: 'Np',
  FastAPI: 'API'
}
const activeRole = ref(0)
const typedRole = ref('')
let timer
let wordTimer

const typeRole = () => {
  const word = roles[activeRole.value]
  typedRole.value = word.slice(0, typedRole.value.length + 1)
  if (typedRole.value.length === word.length) {
    wordTimer = window.setTimeout(() => {
      activeRole.value = (activeRole.value + 1) % roles.length
      typedRole.value = ''
      typeRole()
    }, 1800)
  } else {
    timer = window.setTimeout(typeRole, 72)
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typedRole.value = roles[0]
  } else {
    typeRole()
  }
})

onUnmounted(() => {
  window.clearTimeout(timer)
  window.clearTimeout(wordTimer)
})
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="Ir al inicio">portfolio<span>.</span></a>
      <nav aria-label="Navegación principal">
        <a href="#perfil">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
      </nav>
      <a class="header-contact" :href="`mailto:${portfolio.media.email}`">Hablemos <span aria-hidden="true">↗</span></a>
    </header>

    <main>
      <section id="inicio" class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Disponible para nuevos proyectos</p>
          <h1 id="hero-title">Creo experiencias digitales <em>que dejan huella.</em></h1>
          <p class="hero-text">Graduado en Ingeniería del Software especializado en convertir ideas complejas en productos web y móviles claros, robustos y humanos.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#proyectos">Ver proyectos <span aria-hidden="true">↓</span></a>
          </div>
          <p class="role-line" aria-live="polite"><span class="role-prefix">/</span> {{ typedRole }}<span class="cursor" aria-hidden="true"></span></p>
        </div>
        <div class="hero-aside" aria-label="Presentación">
          <div class="portrait-mark">&lt;/&gt;</div>
          <p class="hero-note">Diseño y desarrollo<br /><strong>con intención.</strong></p>
          <span class="hero-index">01 / 04</span>
        </div>
      </section>

      <section id="perfil" class="intro-band" aria-labelledby="profile-title">
        <p class="section-label">01 — Perfil</p>
        <div>
          <p id="profile-title" class="intro-title"><span>{{ portfolio.name }}</span> <span class="muted">/</span> <span>{{ portfolio.skill.split(' | ')[0] }}</span></p>
          <p class="intro-copy">{{ portfolio.about }}</p>
        </div>
      </section>

      <section id="proyectos" class="content-section projects-section" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="section-label">02 — Trabajo seleccionado</p>
            <h2 id="projects-title">Proyectos recientes</h2>
          </div>
          <p class="section-caption">Una selección de ideas convertidas<br />en experiencias funcionales.</p>
        </div>
        <div class="project-grid">
          <article v-for="(project, index) in portfolio.projects" :key="project.title" class="project-card">
            <span class="project-number">0{{ index + 1 }}</span>
            <p class="project-kind">{{ project.subtitle }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tag-list" aria-label="Tecnologías utilizadas">
              <span v-for="technology in project.technologies" :key="technology.name" class="tech-tag">
                <span class="tech-icon" aria-hidden="true">{{ technologyGlyphs[technology.name] || technology.name.slice(0, 2) }}</span>
                {{ technology.name }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="habilidades" class="skills-section" aria-labelledby="skills-title">
        <div>
          <p class="section-label">03 — Herramientas</p>
          <h2 id="skills-title">Lo que manejo</h2>
        </div>
        <div class="skills-list">
          <span v-for="technology in portfolio.technologies" :key="technology.name" class="skill">
            <span class="tech-icon" aria-hidden="true">{{ technologyGlyphs[technology.name] || technology.name.slice(0, 2) }}</span>
            {{ technology.name }}
          </span>
        </div>
      </section>

      <section id="contacto" class="contact-section" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">¿Hablamos?</p>
          <h2 id="contact-title">Hagamos algo<br /><em>que importe.</em></h2>
        </div>
        <div class="contact-details">
          <p>Si tienes una idea, un reto o simplemente quieres saludar, mi bandeja está abierta.</p>
          <a class="email-link" :href="`mailto:${portfolio.media.email}`">{{ portfolio.media.email }} <span aria-hidden="true">↗</span></a>
          <div class="social-links">
            <a class="social-link" :href="portfolio.media.github" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.8c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
              GitHub
            </a>
            <a class="social-link" :href="portfolio.media.likedin" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.6h3.8V21H3.3V9.6Zm6.2 0h3.6v1.56h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.8v-5.35c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9.5V9.6Z" /></svg>
              LinkedIn
            </a>
            <a class="social-link" :href="portfolio.media.cv" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.75h8.2L19 7.55v13.7H6V2.75Zm7.5 1.8v4h4M8.5 12h8M8.5 15h8M8.5 18h5" /></svg>
              CV
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Construido con curiosidad y código.</span>
      <span>© {{ new Date().getFullYear() }} {{ portfolio.name }}</span>
    </footer>
  </div>
</template>
