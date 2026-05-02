<script setup>
import { resume } from '../../data/resume.js'
import SectionTitle from '../ui/SectionTitle.vue'
import ProjectCard from '../ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="reveal">
        <SectionTitle title="项目经历" subtitle="Projects" />
      </div>
      <div class="projects__grid reveal-stagger">
        <ProjectCard v-for="p in resume.projects" :key="p.name" :project="p" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--color-bg-secondary);
  transition: background-color var(--transition-base);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 420px), 1fr));
  gap: 1.25rem;
}
</style>
