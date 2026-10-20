<template>
  <section id="journey" class="py-24 bg-brand-black relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none hidden lg:block animate-spin-slow"></div>
    <div class="absolute top-40 left-10 w-24 h-24 border border-brand-orange/10 rounded-full pointer-events-none hidden lg:block animate-float-1"></div>
    <!-- Morphing blob -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] morph-blob pointer-events-none opacity-[0.03] hidden lg:block" style="background: linear-gradient(135deg, #F97316, transparent);"></div>

    <div class="container relative z-10">
      <div class="text-center mb-16">
        <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// Journey</span>
        <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Timeline Belajar</h2>
        <p class="reveal reveal-delay-2 text-gray-400 text-lg max-w-2xl mx-auto m-0">
          Langkah demi langkah perjalanan saya mendalami dunia programming.
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-3xl mx-auto relative">
        <!-- Vertical Line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style="background: linear-gradient(180deg, #F97316, rgba(249,115,22,0.2), transparent);"></div>

        <div v-for="(item, index) in timeline" :key="item.year"
             :class="['relative flex flex-col md:flex-row items-start gap-4 md:gap-0 mb-14 last:mb-0',
                       index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">

          <!-- Dot -->
          <div class="absolute left-6 md:left-1/2 w-3 h-3 bg-brand-orange rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-7 z-10 ring-4 ring-brand-black animate-pulse-glow"></div>

          <!-- Content Card -->
          <div :class="['reveal md:w-[calc(50%-2rem)] ml-14 md:ml-0', index % 2 === 0 ? 'md:pr-10 md:text-right reveal-left' : 'md:pl-10 reveal-right', 'reveal-delay-' + Math.min(index + 1, 6)]">
            <div class="timeline-card bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-400">
              <span class="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-lg mb-3 font-mono">
                {{ item.year }}
              </span>
              <h3 class="font-heading text-lg font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed m-0">{{ item.desc }}</p>
              <div :class="['flex flex-wrap gap-2 mt-4', index % 2 === 0 ? 'md:justify-end' : '']">
                <span v-for="tag in item.tags" :key="tag"
                      class="px-2.5 py-1 bg-white/5 rounded-md text-xs font-semibold text-gray-400 border border-white/5">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- End Dot -->
        <div class="absolute left-6 md:left-1/2 bottom-0 w-5 h-5 rounded-full -translate-x-2.5 md:-translate-x-2.5 z-10 ring-4 ring-brand-black flex items-center justify-center animate-pulse-glow" style="background: linear-gradient(135deg, #F97316, #FB923C);">
          <div class="w-2 h-2 bg-brand-black rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const timeline = ref([
  {
    year: '2022',
    title: 'Memulai HTML & CSS',
    desc: 'Langkah pertama memasuki dunia web development. Belajar membuat halaman statis dan memahami dasar-dasar styling.',
    tags: ['HTML5', 'CSS3']
  },
  {
    year: '2022',
    title: 'Mengenal JavaScript',
    desc: 'Mempelajari logika pemrograman, DOM manipulation, dan membuat halaman web menjadi interaktif.',
    tags: ['JavaScript', 'ES6+']
  },
  {
    year: '2023',
    title: 'Framework CSS',
    desc: 'Mendalami Bootstrap dan Tailwind CSS untuk mempercepat proses pengembangan antarmuka yang responsif.',
    tags: ['Bootstrap', 'Tailwind CSS']
  },
  {
    year: '2023',
    title: 'React.js & Vue.js',
    desc: 'Membangun Single Page Application menggunakan framework JavaScript modern. Memahami component-based architecture.',
    tags: ['React.js', 'Vue.js', 'SPA']
  },
  {
    year: '2024',
    title: 'Back-End & Full-Stack',
    desc: 'Memperluas kemampuan ke sisi server dengan Laravel dan Yii Framework. Belajar RESTful API dan database.',
    tags: ['Laravel', 'PHP', 'MySQL']
  },
  {
    year: '2024 - Now',
    title: 'Mobile Development',
    desc: 'Mengembangkan aplikasi mobile cross-platform menggunakan Flutter dan React Native. Terus belajar setiap hari.',
    tags: ['Flutter', 'React Native', 'Dart']
  }
])
</script>
