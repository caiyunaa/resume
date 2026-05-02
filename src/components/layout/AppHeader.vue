<script setup>
import { ref } from 'vue'
import { useTheme } from '../../composables/useTheme.js'
import { useScrollSpy } from '../../composables/useScrollSpy.js'
import { resume } from '../../data/resume.js'

const sections = [
  { id: 'hero', label: '首页' },
  { id: 'education', label: '教育' },
  { id: 'experience', label: '工作' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'evaluation', label: '评价' },
]

const { theme, toggleTheme } = useTheme()
const { activeSection } = useScrollSpy(sections.map((s) => s.id))
const menuOpen = ref(false)

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <a href="#" class="header__logo" @click.prevent="scrollTo('hero')">
        <span class="header__logo-text">{{ resume.name }}</span>
        <span class="header__logo-dot">.</span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <button
          v-for="s in sections"
          :key="s.id"
          class="header__link"
          :class="{ 'header__link--active': activeSection === s.id }"
          @click="scrollTo(s.id)"
        >
          {{ s.label }}
        </button>
      </nav>

      <div class="header__actions">
        <a
          v-for="s in resume.social"
          :key="s.label"
          :href="s.url"
          target="_blank"
          rel="noopener"
          class="header__git-link"
          :title="s.label"
        >
          {{ s.label === 'GitHub' ? 'GH' : s.label === 'GitCode' ? 'GC' : s.label === 'Gitee' ? 'GE' : 'GL' }}
        </a>
        <button class="header__theme-btn" @click="toggleTheme" :aria-label="theme === 'dark' ? '切换亮色模式' : '切换暗色模式'">
          {{ theme === 'dark' ? '☀' : '☾' }}
        </button>
        <button class="header__hamburger" @click="menuOpen = !menuOpen" aria-label="菜单">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  transition: background-color var(--transition-base), border-color var(--transition-base);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header__logo {
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.header__logo-dot {
  color: var(--color-accent);
  font-size: 1.5em;
  line-height: 0;
  margin-left: 1px;
  margin-top: -2px;
}

.header__nav {
  display: flex;
  gap: 0.25rem;
}

.header__link {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: inherit;
}

.header__link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.header__link--active {
  color: var(--color-accent);
  background: rgba(37, 99, 235, 0.08);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header__git-link {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.header__git-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.header__theme-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--transition-fast);
}

.header__theme-btn:hover {
  background: var(--color-bg-tertiary);
}

.header__hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.header__hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: transform var(--transition-fast);
}

@media (max-width: 768px) {
  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    padding: 0.75rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .header__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .header__hamburger {
    display: flex;
  }
}
</style>
