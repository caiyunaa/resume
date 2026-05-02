<script setup>
import FontLoader from './components/FontLoader.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EvaluationSection from './components/sections/EvaluationSection.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <FontLoader />
  <AppHeader />
  <main>
    <HeroSection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <EvaluationSection />
  </main>
  <AppFooter />
</template>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/base.css';
@import './assets/styles/animations.css';
</style>
