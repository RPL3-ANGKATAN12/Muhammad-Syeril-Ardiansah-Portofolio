<template>
  <section id="home" class="relative min-h-screen flex items-center bg-brand-black overflow-hidden">
    <!-- Particle Canvas -->
    <canvas ref="canvasRef" id="particles-canvas"></canvas>

    <!-- Decorative geometric shapes with parallax -->
    <div class="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full animate-spin-slow pointer-events-none hidden lg:block" :style="parallaxStyle(-0.1)"></div>
    <div class="absolute bottom-20 left-20 w-40 h-40 border border-brand-orange/10 rounded-full animate-float-2 pointer-events-none hidden lg:block" :style="parallaxStyle(0.15)"></div>
    <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-brand-orange rounded-full animate-float-1 pointer-events-none hidden lg:block" :style="parallaxStyle(-0.2)"></div>
    <div class="absolute bottom-1/3 right-1/4 w-3 h-3 border border-brand-orange/30 rounded-sm rotate-45 animate-float-3 pointer-events-none hidden lg:block" :style="parallaxStyle(0.12)"></div>

    <!-- Ambient gradient orbs -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl" style="background: radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%);" :style="parallaxStyle(-0.05)"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15 blur-3xl" style="background: radial-gradient(circle, rgba(251,191,36,0.1), transparent 70%);" :style="parallaxStyle(0.08)"></div>

    <div class="container relative z-10 py-20 md:py-0">
      <div class="row align-items-center">
        <!-- Text -->
        <div class="col-lg-6 order-2 order-lg-1 mt-12 mt-lg-0">
          <div class="reveal reveal-delay-1">
            <span class="status-badge inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-gray-400 text-xs font-mono tracking-wider uppercase rounded-full mb-8">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Available for projects
            </span>
          </div>

          <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 reveal reveal-delay-2">
            <span ref="typingRef" class="typing-cursor">{{ displayedText }}</span>
          </h1>

          <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-lg font-light leading-relaxed reveal reveal-delay-3">
            Front-End &amp; Full-Stack Developer berbasis di Indonesia. Membangun antarmuka yang bersih, fungsional, dan memukau.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
            <a href="#about"
               class="magnetic-btn btn rounded-lg px-8 py-3.5 text-base font-semibold transition-all duration-300 border-0 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-orange/25"
               style="background: linear-gradient(135deg, #F97316, #FB923C); color: white;"
               @mousemove="magneticMove" @mouseleave="magneticReset">
              Jelajahi Portofolio
              <i class="bi bi-arrow-down-short text-lg"></i>
            </a>
            <a href="https://github.com/rillardian655" target="_blank"
               class="magnetic-btn btn bg-white/5 text-white hover:bg-white/10 rounded-lg px-8 py-3.5 text-base font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
               @mousemove="magneticMove" @mouseleave="magneticReset">
              <i class="bi bi-github text-lg"></i>
              GitHub
            </a>
          </div>

          <!-- Tech icons row -->
          <div class="flex items-center gap-5 mt-12 reveal reveal-delay-5">
            <span class="text-xs text-gray-600 font-mono uppercase tracking-wider">Tech:</span>
            <div class="flex gap-3">
              <span v-for="(tech, i) in techIcons" :key="tech.name"
                    class="tech-icon-pill w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300 cursor-default"
                    :style="{ animationDelay: (i * 0.1) + 's' }"
                    :title="tech.name">
                <i :class="tech.icon" class="text-base"></i>
              </span>
            </div>
          </div>
        </div>

        <!-- 3D Model -->
        <div class="col-lg-6 order-1 order-lg-2 flex justify-center items-center mb-12 mb-lg-0 relative min-h-[450px] md:min-h-[600px]">
          
          <!-- 3D Scene Main -->
          <div class="absolute inset-0 z-0 w-full h-full flex items-center justify-center pointer-events-auto">
            <ThreeScene />
          </div>

          <!-- Decorative floating badges around the 3D model -->
          <div class="absolute bottom-4 left-4 md:bottom-10 md:left-0 bg-brand-black/80 backdrop-blur-md border border-white/10 py-3 px-5 rounded-2xl animate-float-1 z-20 shadow-[0_8px_32px_0_rgba(249,115,22,0.15)]">
            <p class="text-xs text-gray-500 font-mono m-0 mb-1 flex items-center gap-2">
              <i class="bi bi-code-slash text-brand-orange"></i> STATUS
            </p>
            <p class="text-sm font-bold text-white m-0 font-heading flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open to Work
            </p>
          </div>

          <div class="absolute top-4 right-4 md:top-10 md:-right-4 bg-brand-black/80 backdrop-blur-md border border-white/10 py-3 px-5 rounded-2xl animate-float-3 z-20 shadow-[0_8px_32px_0_rgba(249,115,22,0.15)]">
            <p class="text-sm font-extrabold text-gradient-animated m-0 font-heading">Interactive 3D</p>
            <p class="text-xs text-gray-400 font-mono m-0">Three.js WebGL</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-600">
      <span class="text-xs font-mono tracking-widest uppercase">Scroll</span>
      <div class="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
        <div class="w-1 h-2 bg-brand-orange rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useParallax } from '../composables/useParallax'
import ThreeScene from './ThreeScene.vue'

useScrollReveal()
const { parallaxStyle } = useParallax()

const canvasRef = ref(null)
const displayedText = ref('')
const fullText = 'Halo, saya Syeril.'
let charIndex = 0
let animationFrameId = null

const techIcons = [
  { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Laravel', icon: 'devicon-laravel-original' },
  { name: 'Flutter', icon: 'devicon-flutter-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
]

// Typing
onMounted(() => {
  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        displayedText.value += fullText[charIndex]
        charIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 70)
  }, 800)

  initParticles()
})

// Tilt effect for code card
function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function resetTilt(e) {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
}

// Magnetic button
function magneticMove(e) {
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
}

function magneticReset(e) {
  e.currentTarget.style.transform = 'translate(0, 0)'
}

// Particles
function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let particles = []
  let mouse = { x: null, y: null }
  const particleCount = 80

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  resize()
  window.addEventListener('resize', resize)

  // Mouse interaction for particles
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }, { passive: true })

  class Particle {
    constructor() {
      this.reset()
    }
    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 1.5 + 0.5
      this.baseSpeedX = (Math.random() - 0.5) * 0.4
      this.baseSpeedY = (Math.random() - 0.5) * 0.4
      this.speedX = this.baseSpeedX
      this.speedY = this.baseSpeedY
      this.opacity = Math.random() * 0.3 + 0.1
    }
    update() {
      // Mouse repulsion
      if (mouse.x !== null) {
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          this.speedX = this.baseSpeedX + (dx / dist) * force * 2
          this.speedY = this.baseSpeedY + (dy / dist) * force * 2
        } else {
          this.speedX += (this.baseSpeedX - this.speedX) * 0.05
          this.speedY += (this.baseSpeedY - this.speedY) * 0.05
        }
      }
      
      this.x += this.speedX
      this.y += this.speedY
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})`
      ctx.fill()
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x
        const dy = particles[a].y - particles[b].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(249, 115, 22, ${0.04 * (1 - dist / 120)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particles[a].x, particles[a].y)
          ctx.lineTo(particles[b].x, particles[b].y)
          ctx.stroke()
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => { p.update(); p.draw() })
    connectParticles()
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>
