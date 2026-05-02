<script setup>
import { resume } from '../../data/resume.js'
import SectionTitle from '../ui/SectionTitle.vue'
import TimelineItem from '../ui/TimelineItem.vue'
import SkillTag from '../ui/SkillTag.vue'
</script>

<template>
  <section id="education" class="edu">
    <div class="container">
      <div class="reveal">
        <SectionTitle title="教育经历" subtitle="Education" />
      </div>
      <TimelineItem
        :title="resume.education.school"
        :subtitle="resume.education.degree"
        :period="resume.education.period"
      >
        <div class="edu__courses">
          <span class="edu__label">主修课程</span>
          <div class="edu__tags">
            <SkillTag v-for="c in resume.education.courses" :key="c" :label="c" variant="primary" />
          </div>
        </div>
        <div class="edu__awards">
          <span class="edu__label">获得奖项</span>
          <ul class="edu__award-list">
            <li v-for="(a, i) in resume.education.awards" :key="i" class="edu__award-item">
              <span class="edu__award-icon">&#9733;</span> {{ a }}
            </li>
          </ul>
        </div>
      </TimelineItem>
    </div>
  </section>
</template>

<style scoped>
.edu {
  background: var(--color-bg-secondary);
  transition: background-color var(--transition-base);
}

.edu__label {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.5rem;
}

.edu__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.edu__courses,
.edu__awards {
  margin-top: 1rem;
}

.edu__award-list {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.edu__award-item {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.edu__award-icon {
  color: #f59e0b;
  font-size: 0.7rem;
  margin-right: 0.35rem;
}
</style>
