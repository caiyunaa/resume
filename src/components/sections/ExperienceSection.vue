<script setup>
import { resume } from '../../data/resume.js'
import SectionTitle from '../ui/SectionTitle.vue'
import TimelineItem from '../ui/TimelineItem.vue'
import SkillTag from '../ui/SkillTag.vue'
</script>

<template>
  <section id="experience" class="exp">
    <div class="container">
      <div class="reveal">
        <SectionTitle title="工作经历" subtitle="Experience" />
      </div>
      <TimelineItem
        :title="resume.experience.company"
        :subtitle="resume.experience.role"
        :period="resume.experience.period"
      >
        <div class="exp__skills">
          <div v-for="g in resume.experience.skills" :key="g.category" class="exp__skill-group">
            <h4 class="exp__skill-cat">{{ g.category }}</h4>
            <div class="exp__skill-tags">
              <SkillTag v-for="item in g.items" :key="item" :label="item" />
            </div>
          </div>
        </div>
      </TimelineItem>
    </div>
  </section>
</template>

<style scoped>
.exp__skills {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.exp__skill-cat {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-accent);
  font-family: var(--font-mono);
  margin-bottom: 0.4rem;
}

.exp__skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
</style>
