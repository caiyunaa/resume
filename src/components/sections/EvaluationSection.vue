<script setup>
import { resume } from '../../data/resume.js'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="evaluation" class="eval">
    <div class="container">
      <div class="reveal">
        <SectionTitle title="自我评价" subtitle="About Me" />
      </div>
      <div class="eval__grid reveal-stagger">
        <div v-for="e in resume.evaluation" :key="e.title" class="eval__card">
          <span class="eval__icon">{{ e.icon === 'briefcase' ? '◈' : e.icon === 'cpu' ? '◇' : e.icon === 'target' ? '◎' : e.icon === 'book-open' ? '▣' : '▤' }}</span>
          <h3 class="eval__title">{{ e.title }}</h3>
          <p class="eval__desc">{{ e.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eval__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  gap: 1rem;
}

.eval__card {
  text-align: center;
  padding: 2rem 1.25rem;
  border-radius: var(--radius);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  box-shadow: var(--color-card-shadow);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.eval__card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.eval__icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.75rem;
  color: var(--color-accent);
}

.eval__title {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.eval__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
