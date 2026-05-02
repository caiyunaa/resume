<script setup>
import { resume } from '../../data/resume.js'
import SectionTitle from '../ui/SectionTitle.vue'
import SkillTag from '../ui/SkillTag.vue'
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="reveal">
        <SectionTitle title="专业技能" subtitle="Tech Stack" />
      </div>
      <div class="skills__grid reveal-stagger">
        <div
          v-for="g in resume.experience.skills"
          :key="g.category"
          class="skills__card"
        >
          <h3 class="skills__card-title">{{ g.category }}</h3>
          <div class="skills__tags">
            <SkillTag
              v-for="item in g.items"
              :key="item"
              :label="item"
              :variant="g.category === 'Vue生态' || g.category === '前端基础' ? 'primary' : 'default'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: var(--color-bg-primary);
  transition: background-color var(--transition-base);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.skills__card {
  padding: 1.25rem;
  border-radius: var(--radius);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.skills__card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 2px 8px var(--color-glow);
}

.skills__card-title {
  font-size: var(--text-sm);
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
</style>
