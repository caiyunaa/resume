import { ref, watchEffect } from 'vue'

const theme = ref(
  localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)

export function useTheme() {
  function setTheme(t) {
    theme.value = t
    localStorage.setItem('theme', t)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return { theme, setTheme, toggleTheme }
}
