<script setup>
import { resume } from '../../data/resume.js'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__git">
        <h4 class="footer__heading">Git 账号</h4>
        <div class="footer__links">
          <a
            v-for="s in resume.social"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="footer__link"
          >
            <span class="footer__link-icon">{{ s.label === 'GitCode' ? '⌥' : s.label === 'Gitee' ? '◇' : '⎔' }}</span>
            <span class="footer__link-text">
              <span class="footer__link-label">{{ s.label }}</span>
              <span class="footer__link-url">{{ s.url }}</span>
            </span>
            <span class="footer__link-arrow">&nearr;</span>
          </a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; 2026 {{ resume.name }}</span>
        <button class="footer__top" @click="document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })">
          回到顶部 &uarr;
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 3rem 0 1.5rem;
  transition: background-color var(--transition-base), border-color var(--transition-base);
}

.footer__heading {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 480px;
}

.footer__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
  color: var(--color-text-primary);
}

.footer__link:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
}

.footer__link-icon {
  font-size: 1.25rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--color-bg-tertiary);
  flex-shrink: 0;
}

.footer__link-text {
  flex: 1;
  min-width: 0;
}

.footer__link-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
}

.footer__link-url {
  display: block;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.footer__link-arrow {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.footer__top {
  background: none;
  border: none;
  color: var(--color-accent);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--text-xs);
  font-weight: 500;
}
</style>
