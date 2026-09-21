<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import portfolio from '../data.json'

const roles = ['Desarrollador Full-Stack', 'Ingeniero de Software', 'Creador de producto']
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
            <a class="text-link" :href="`mailto:${portfolio.media.email}`">Contactar <span aria-hidden="true">↗</span></a>
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
              <span v-for="technology in project.technologies" :key="technology.name">{{ technology.name }}</span>
            </div>
            <a class="project-link" :href="project.github" target="_blank" rel="noreferrer" :aria-label="`Ver código de ${project.title}`">Ver proyecto <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section id="habilidades" class="skills-section" aria-labelledby="skills-title">
        <div>
          <p class="section-label">03 — Herramientas</p>
          <h2 id="skills-title">Lo que manejo</h2>
        </div>
        <div class="skills-list">
          <span v-for="technology in portfolio.technologies" :key="technology.name" class="skill">{{ technology.name }}</span>
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
            <a :href="portfolio.media.github" target="_blank" rel="noreferrer">GitHub</a>
            <a :href="portfolio.media.likedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a :href="portfolio.media.cv" target="_blank" rel="noreferrer">CV</a>
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
