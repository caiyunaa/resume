<script setup>
import { resume } from '../../data/resume.js'
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg"></div>
    <div class="container hero__content">
      <div class="hero__badge reveal">
        <span class="hero__badge-dot"></span>
        意向城市：{{ resume.city }}
      </div>
      <h1 class="hero__name reveal">{{ resume.name }}</h1>
      <p class="hero__title reveal">
        <span class="hero__title-text">{{ resume.title }}</span>
        <span class="hero__cursor">|</span>
      </p>
      <div class="hero__contact reveal">
        <a :href="`tel:${resume.phone}`" class="hero__contact-item">
          {{ resume.phone }}
        </a>
        <span class="hero__contact-divider">|</span>
        <a :href="`mailto:${resume.email}`" class="hero__contact-item">
          {{ resume.email }}
        </a>
      </div>
      <div class="hero__availability reveal">
        到岗时间：{{ resume.availability }}
      </div>
      <div class="hero__scroll reveal" @click="document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })">
        <span>滚动查看更多</span>
        <span class="hero__scroll-arrow">&darr;</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: var(--header-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% -20%, var(--color-glow), transparent);
  pointer-events: none;
}

.hero__content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35em 1em;
  border-radius: 999px;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-accent);
  background: rgba(37, 99, 235, 0.06);
  border: 1px solid rgba(37, 99, 235, 0.2);
  margin-bottom: 1.5rem;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: float 2s ease-in-out infinite;
}

.hero__name {
  font-size: var(--text-3xl);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__title {
  margin-top: 0.75rem;
  font-size: var(--text-xl);
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.hero__title-text {
  border-right: 2px solid var(--color-accent);
  padding-right: 0.15em;
  animation: blink 1s step-end infinite;
}

.hero__cursor {
  display: none;
}

.hero__contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: var(--text-sm);
  font-family: var(--font-mono);
}

.hero__contact-item {
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.hero__contact-item:hover {
  color: var(--color-accent);
}

.hero__contact-divider {
  color: var(--color-border);
}

.hero__availability {
  margin-top: 0.75rem;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  padding: 0.35em 1em;
  border-radius: 999px;
  background: var(--color-bg-tertiary);
  display: inline-block;
}

.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-top: 4rem;
  cursor: pointer;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  animation: float 2s ease-in-out infinite;
}

.hero__scroll-arrow {
  font-size: 1.25rem;
}
</style>
