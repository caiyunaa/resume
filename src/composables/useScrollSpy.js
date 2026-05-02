import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds) {
  const activeSection = ref(sectionIds[0] || '')

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      { rootMargin: '-30% 0px -70% 0px' }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
