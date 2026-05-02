<script setup>
defineProps({
  label: String,
  variant: { type: String, default: 'default' },
})
</script>

<template>
  <span class="skill-tag" :class="`skill-tag--${variant}`">{{ label }}</span>
</template>

<style scoped>
.skill-tag {
  display: inline-block;
  padding: 0.25em 0.75em;
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: 999px;
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.skill-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--color-glow);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.skill-tag--primary {
  background: rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.3);
  color: var(--color-accent);
}
</style>
