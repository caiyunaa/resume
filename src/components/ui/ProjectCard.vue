<script setup>
defineProps({
  project: Object,
})
</script>

<template>
  <div class="project-card">
    <div class="project-card__header">
      <h3 class="project-card__name">{{ project.name }}</h3>
      <div class="project-card__meta">
        <span class="project-card__role">{{ project.role }}</span>
        <span class="project-card__dot">&middot;</span>
        <span class="project-card__period">{{ project.period }}</span>
      </div>
    </div>

    <p class="project-card__desc">{{ project.description }}</p>

    <div class="project-card__stack">
      <span v-for="t in project.stack" :key="t" class="project-card__tech">{{ t }}</span>
    </div>

    <ul class="project-card__list">
      <li v-for="(h, i) in project.highlights" :key="i">{{ h }}</li>
    </ul>

    <a
      v-if="project.link"
      :href="project.link"
      target="_blank"
      rel="noopener"
      class="project-card__link"
    >
      &nearr; 查看开源仓库
    </a>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.75rem;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  box-shadow: var(--color-card-shadow);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--color-glow);
}

.project-card__name {
  font-size: var(--text-lg);
  font-weight: 700;
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.project-card__dot {
  color: var(--color-text-muted);
}

.project-card__role {
  color: var(--color-accent);
  font-weight: 500;
}

.project-card__desc {
  margin-top: 1rem;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}

.project-card__tech {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 0.15em 0.5em;
  border-radius: 4px;
  background: var(--color-bg-tertiary);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

.project-card__list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-card__list li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: 1.25em;
  position: relative;
  line-height: 1.6;
}

.project-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  font-size: var(--text-sm);
  font-weight: 500;
}
</style>
