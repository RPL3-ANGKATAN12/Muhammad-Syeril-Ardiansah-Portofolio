<template>
  <section id="services" class="py-24 bg-brand-black relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute top-20 right-10 w-32 h-32 border border-white/5 rounded-full pointer-events-none hidden lg:block animate-spin-slow"></div>
    <div class="absolute bottom-32 left-20 w-20 h-20 border border-brand-orange/10 rounded-full pointer-events-none hidden lg:block animate-float-2"></div>
    <!-- Morphing blob -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] morph-blob pointer-events-none opacity-[0.03] hidden lg:block" style="background: linear-gradient(135deg, #F97316, #FBBF24);"></div>

    <div class="container relative z-10">
      <div class="text-center mb-16">
        <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// Services</span>
        <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Yang Bisa Saya Bantu</h2>
        <p class="reveal reveal-delay-2 text-gray-400 text-lg max-w-2xl mx-auto m-0">
          Dari desain antarmuka hingga pengembangan aplikasi penuh, berikut area yang menjadi fokus saya.
        </p>
      </div>

      <div class="row g-4">
        <div v-for="(service, index) in services" :key="service.title" class="col-md-6 col-lg-3">
          <div :class="['reveal service-card bg-[#141414] p-7 rounded-2xl border border-white/5 h-full cursor-default', 'reveal-delay-' + (index + 1)]"
               @mousemove="handleTilt" @mouseleave="resetTilt">
            <div class="flex items-center justify-between mb-6">
              <div class="service-icon-wrapper w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-orange text-2xl transition-all duration-300">
                <i :class="service.icon"></i>
              </div>
              <span class="service-num text-5xl font-heading font-extrabold text-white/5 transition-colors duration-300">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="font-heading text-lg font-bold text-white mb-3">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">{{ service.desc }}</p>
            <div class="pt-5 border-t border-white/5">
              <ul class="space-y-2">
                <li v-for="tag in service.tags" :key="tag" class="flex items-center gap-2 text-xs text-gray-500">
                  <span class="w-1 h-1 rounded-full bg-brand-orange flex-shrink-0"></span>
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const services = ref([
  {
    icon: 'bi bi-window-stack',
    title: 'Front-End Development',
    desc: 'Membangun antarmuka web yang responsif, cepat, dan memiliki pengalaman pengguna yang menyenangkan.',
    tags: ['React.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    icon: 'bi bi-phone',
    title: 'Mobile Development',
    desc: 'Mengembangkan aplikasi mobile lintas platform dengan tampilan native dan performa optimal.',
    tags: ['React Native', 'Flutter', 'Dart', 'Cross-Platform']
  },
  {
    icon: 'bi bi-server',
    title: 'Back-End Development',
    desc: 'Menangani logika server, database, dan API yang aman serta terstruktur dengan baik.',
    tags: ['Laravel', 'Yii', 'PHP', 'Python']
  },
  {
    icon: 'bi bi-brush',
    title: 'UI/UX Design',
    desc: 'Merancang wireframe dan prototipe visual yang bersih, intuitif, dan siap dikembangkan.',
    tags: ['Figma', 'Prototyping', 'Wireframing', 'Design System']
  }
])

function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -5
  const rotateY = ((x - centerX) / centerX) * 5
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
}

function resetTilt(e) {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
}
</script>
