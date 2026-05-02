<script setup>
defineProps({
  title: String,
  subtitle: String,
  icon: String,
})
</script>

<template>
  <div class="section-title">
    <span v-if="icon" class="section-title__icon">{{ icon }}</span>
    <h2 class="section-title__heading">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__sub">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title__icon {
  font-size: var(--text-2xl);
  display: block;
  margin-bottom: 0.5rem;
}

.section-title__heading {
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-title__sub {
  margin-top: 0.5rem;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}
</style>
