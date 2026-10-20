<template>
  <section id="skills" class="py-24 bg-[#0D0D0D] relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none"></div>
    <!-- Morphing blob -->
    <div class="absolute top-1/4 right-0 w-[450px] h-[450px] morph-blob pointer-events-none opacity-[0.03] hidden lg:block" style="background: linear-gradient(135deg, #F97316, transparent);"></div>

    <div class="container relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// Skills</span>
          <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight m-0">Tech Stack</h2>
        </div>
        <p class="reveal reveal-delay-2 text-gray-400 max-w-md m-0">
          Kumpulan teknologi yang saya pelajari dan gunakan untuk membangun produk digital.
        </p>
      </div>

      <!-- Languages -->
      <div class="mb-14">
        <div class="reveal flex items-center gap-3 mb-8">
          <div class="w-8 h-0.5 bg-gradient-to-r from-brand-orange to-transparent"></div>
          <h3 class="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-500 m-0">Bahasa Pemrograman</h3>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="(skill, i) in languages" :key="skill.name"
               :class="['reveal skill-card bg-[#141414] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 cursor-default', 'reveal-delay-' + Math.min(i + 1, 6)]">
            <i :class="[skill.icon, 'skill-icon text-5xl grayscale opacity-40']"></i>
            <span class="font-bold text-xs text-white tracking-wide">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <!-- Frameworks -->
      <div class="mb-14">
        <div class="reveal flex items-center gap-3 mb-8">
          <div class="w-8 h-0.5 bg-gradient-to-r from-brand-orange to-transparent"></div>
          <h3 class="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-500 m-0">Framework & Library</h3>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="(skill, i) in frameworks" :key="skill.name"
               :class="['reveal skill-card bg-[#141414] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 cursor-default', 'reveal-delay-' + Math.min(i + 1, 6)]">
            <i :class="[skill.icon, 'skill-icon text-5xl grayscale opacity-40']"></i>
            <span class="font-bold text-xs text-white tracking-wide text-center">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <!-- Tools -->
      <div>
        <div class="reveal flex items-center gap-3 mb-8">
          <div class="w-8 h-0.5 bg-gradient-to-r from-brand-orange to-transparent"></div>
          <h3 class="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-500 m-0">Tools & Platform</h3>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="(skill, i) in tools" :key="skill.name"
               :class="['reveal skill-card bg-[#141414] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 cursor-default', 'reveal-delay-' + Math.min(i + 1, 6)]">
            <i :class="[skill.icon, 'skill-icon text-5xl grayscale opacity-40']"></i>
            <span class="font-bold text-xs text-white tracking-wide">{{ skill.name }}</span>
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

const languages = ref([
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'Dart', icon: 'devicon-dart-plain colored' }
])

const frameworks = ref([
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
  { name: 'Laravel', icon: 'devicon-laravel-original colored' },
  { name: 'Yii', icon: 'devicon-yii-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' }
])

const tools = ref([
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
])
</script>
