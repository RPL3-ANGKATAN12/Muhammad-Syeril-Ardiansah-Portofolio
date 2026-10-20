<template>
  <div class="font-body relative" :class="{ 'h-screen overflow-hidden': isLoading }">
    <LoadingScreen :is-loading="isLoading" :progress="loadProgress" />

    <div class="app-content-wrapper" :class="!isLoading ? 'app-content-enter' : 'opacity-0'">
      <!-- Scroll Progress Bar -->
      <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

      <!-- Cursor Glow Effect -->
      <div ref="cursorGlow" class="cursor-glow hidden lg:block"></div>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />

      <!-- Back to Top Button -->
      <button
        :class="['back-to-top', showBackToTop ? 'visible' : '']"
        @click="scrollToTop"
        aria-label="Kembali ke atas">
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Journey from './components/Journey.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import LoadingScreen from './components/LoadingScreen.vue'

const scrollProgress = ref(0)
const showBackToTop = ref(false)
const cursorGlow = ref(null)

const isLoading = ref(true)
const loadProgress = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  showBackToTop.value = scrollTop > 400
}

const handleMouseMove = (e) => {
  if (cursorGlow.value) {
    cursorGlow.value.style.left = e.clientX + 'px'
    cursorGlow.value.style.top = e.clientY + 'px'
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // Simulate loading progress
  let progress = 0
  const interval = setInterval(() => {
    progress += Math.random() * 15
    if (progress > 100) {
      progress = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 800)
    }
    loadProgress.value = progress
  }, 200)

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
