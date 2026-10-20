<template>
  <footer id="contact" class="bg-[#050505] text-white pt-20 pb-8 relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full h-1" style="background: linear-gradient(90deg, transparent, #F97316, transparent);"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none"></div>
    <!-- Morphing blob -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] morph-blob pointer-events-none opacity-[0.02]" style="background: linear-gradient(135deg, #F97316, transparent);"></div>

    <div class="container relative z-10">
      <!-- Top Section -->
      <div class="row gy-5 mb-16">
        <!-- Brand -->
        <div class="col-lg-4">
          <div class="flex items-center gap-2 mb-5">
            <div class="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 p-1 border border-white/10">
              <img :src="'/logo-sa.png'" alt="SA" class="w-full h-full object-contain"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <!-- Fallback elegant text if image is missing -->
              <span class="hidden absolute inset-0 items-center justify-center font-serif font-bold text-xl text-white tracking-tighter">
                S<span class="text-brand-orange">A</span>
              </span>
            </div>
            <span class="font-heading text-2xl font-extrabold tracking-tight">syeril<span class="text-gradient-animated">.</span></span>
          </div>
          <p class="text-gray-500 max-w-xs leading-relaxed text-sm mb-6">
            Front-End Developer berbasis di Indonesia. Berdedikasi membangun antarmuka yang bersih, fungsional, dan memukau.
          </p>
          <div class="flex gap-3">
            <a href="https://github.com/rillardian655" target="_blank" class="social-icon w-10 h-10 rounded-xl bg-white/5 text-gray-500 hover:text-white flex items-center justify-center text-base border border-white/5">
              <i class="bi bi-github"></i>
            </a>
            <a href="#" class="social-icon w-10 h-10 rounded-xl bg-white/5 text-gray-500 hover:text-white flex items-center justify-center text-base border border-white/5">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="social-icon w-10 h-10 rounded-xl bg-white/5 text-gray-500 hover:text-white flex items-center justify-center text-base border border-white/5">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon w-10 h-10 rounded-xl bg-white/5 text-gray-500 hover:text-white flex items-center justify-center text-base border border-white/5">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="col-lg-2 offset-lg-2">
          <h4 class="font-heading font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Navigasi</h4>
          <ul class="space-y-3">
            <li><a href="#home" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Home</a></li>
            <li><a href="#about" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>About</a></li>
            <li><a href="#services" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Services</a></li>
            <li><a href="#skills" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Skills</a></li>
          </ul>
        </div>

        <!-- More Links -->
        <div class="col-lg-2">
          <h4 class="font-heading font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Lainnya</h4>
          <ul class="space-y-3">
            <li><a href="#projects" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Projects</a></li>
            <li><a href="#journey" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Journey</a></li>
            <li><a href="#contact-form" class="text-gray-500 hover:text-brand-orange transition-colors text-sm inline-flex items-center gap-2 group"><span class="w-0 h-px bg-brand-orange group-hover:w-3 transition-all duration-300"></span>Contact</a></li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="col-lg-2">
          <h4 class="font-heading font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Get In Touch</h4>
          <a href="#contact-form" class="btn rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-300 border-0 w-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-orange/20"
             style="background: linear-gradient(135deg, #F97316, #FB923C); color: white;">
            <i class="bi bi-envelope-fill text-xs"></i> Email Saya
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs font-mono">
        <p class="m-0">&copy; {{ new Date().getFullYear() }} M. Syeril Ardiansah</p>
        <p class="m-0 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Built with Vue 3 + Vite + Tailwind + Bootstrap
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
