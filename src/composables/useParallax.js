import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const offsetY = ref(0)

  const handleScroll = () => {
    offsetY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // returns a style object for parallax — usage: :style="parallaxStyle(speed)"
  function parallaxStyle(speed = 0.3) {
    return {
      transform: `translateY(${offsetY.value * speed}px)`
    }
  }

  return { offsetY, parallaxStyle }
}
