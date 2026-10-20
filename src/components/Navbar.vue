<template>
  <nav :class="['navbar navbar-expand-lg navbar-dark fixed-top py-3 z-50 transition-all duration-500',
    (scrolled || isMenuOpen) ? 'navbar-scrolled' : '']"
    :style="!(scrolled || isMenuOpen) ? 'background: transparent; border-bottom: 1px solid rgba(255,255,255,0.04);' : ''">
    <div class="container relative">
      <a class="navbar-brand font-heading font-extrabold text-xl text-white flex items-center gap-2 tracking-tight group" href="#">
        <div class="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] bg-white/5 p-1 border border-white/10">
          <img :src="'/logo-sa.png'" alt="SA" class="w-full h-full object-contain"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <!-- Fallback elegant text if image is missing -->
          <span class="hidden absolute inset-0 items-center justify-center font-serif font-bold text-xl text-white tracking-tighter">
            S<span class="text-brand-orange">A</span>
          </span>
        </div>
        <span>syeril<span class="text-gradient-animated">.</span></span>
      </a>

      <!-- Custom Hamburger Button -->
      <button class="navbar-toggler border-0 shadow-none p-2 focus:outline-none lg:hidden" 
              type="button" 
              @click="isMenuOpen = !isMenuOpen">
        <div class="w-6 h-5 flex flex-col justify-between relative transition-all duration-300">
          <span :class="['w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left', isMenuOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px]' : '']"></span>
          <span :class="['w-full h-0.5 bg-white rounded-full transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left', isMenuOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : '']"></span>
        </div>
      </button>

      <!-- Desktop Menu (LG and up) -->
      <div class="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-full">
        <ul class="navbar-nav gap-1 items-center m-0">
          <li v-for="link in navLinks" :key="link.href" class="nav-item">
            <a :href="link.href"
               :class="['nav-link px-3 py-2 rounded-lg text-sm transition-all duration-300 relative',
                 activeSection === link.id
                   ? 'text-white font-semibold'
                   : 'text-gray-400 hover:text-white']">
              {{ link.label }}
              <!-- Active indicator dot -->
              <span v-if="activeSection === link.id"
                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange"></span>
            </a>
          </li>
          <li class="nav-item ml-4">
            <a class="btn rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 border-0 hover:shadow-lg"
               style="background: linear-gradient(135deg, #F97316, #FB923C); color: white;"
               href="#contact-form">
              <i class="bi bi-send-fill me-1 text-xs"></i>
              Hubungi Saya
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div :class="['lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out', 
                 isMenuOpen ? 'max-h-[500px] border-b border-white/10 opacity-100' : 'max-h-0 opacity-0']"
         style="background: rgba(10, 10, 10, 0.98); backdrop-filter: blur(24px);">
      <ul class="flex flex-col p-5 gap-2 m-0 shadow-2xl">
        <li v-for="link in navLinks" :key="link.href" class="nav-item list-none">
          <a :href="link.href"
             @click="isMenuOpen = false"
             :class="['block px-4 py-3 rounded-xl text-base transition-all duration-300 relative',
               activeSection === link.id
                 ? 'bg-brand-orange/10 text-brand-orange font-semibold border border-brand-orange/20'
                 : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent']">
            {{ link.label }}
          </a>
        </li>
        <li class="mt-4 list-none">
          <a class="btn w-full rounded-xl px-5 py-3.5 text-base font-semibold transition-all duration-300 border-0 flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
             style="background: linear-gradient(135deg, #F97316, #FB923C); color: white;"
             href="#contact-form"
             @click="isMenuOpen = false">
            <i class="bi bi-send-fill text-sm"></i>
            Hubungi Saya
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeSection = ref('home')
const isMenuOpen = ref(false)

const navLinks = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#services', id: 'services', label: 'Services' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#journey', id: 'journey', label: 'Journey' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 80

  const sections = ['contact-form', 'journey', 'projects', 'skills', 'services', 'about', 'home']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
