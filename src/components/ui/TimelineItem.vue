<script setup>
defineProps({
  title: String,
  subtitle: String,
  period: String,
  tags: { type: Array, default: () => [] },
})
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-item__period">
      <span>{{ period }}</span>
    </div>
    <div class="timeline-item__content">
      <h3 class="timeline-item__title">{{ title }}</h3>
      <p v-if="subtitle" class="timeline-item__sub">{{ subtitle }}</p>
      <div v-if="tags.length" class="timeline-item__tags">
        <span v-for="t in tags" :key="t" class="timeline-item__tag">{{ t }}</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-item__period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  font-weight: 500;
  padding-top: 0.2rem;
}

.timeline-item__title {
  font-size: var(--text-lg);
  font-weight: 600;
}

.timeline-item__sub {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-top: 0.15rem;
}

.timeline-item__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}

.timeline-item__tag {
  font-size: 0.7rem;
  padding: 0.15em 0.5em;
  border-radius: 4px;
  background: var(--color-bg-tertiary);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

@media (max-width: 640px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
