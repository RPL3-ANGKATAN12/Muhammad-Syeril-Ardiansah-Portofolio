<template>
  <section id="about" class="py-24 bg-[#0D0D0D] relative overflow-hidden">
    <!-- Decorative bg elements -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute top-40 right-0 w-96 h-96 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none"></div>
    <!-- Morphing blob -->
    <div class="absolute bottom-0 left-20 w-[400px] h-[400px] morph-blob pointer-events-none opacity-[0.02] hidden lg:block" style="background: linear-gradient(135deg, #FBBF24, #F97316);"></div>

    <div class="container relative z-10">
      <div class="row align-items-center g-5">
        <!-- Left: Big heading -->
        <div class="col-lg-5">
          <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// About</span>
          <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Menulis kode yang<br/>berbicara<span class="text-gradient-animated">.</span>
          </h2>
          <p class="reveal reveal-delay-2 text-gray-400 text-lg leading-relaxed mb-8">
            Saya M. Syeril Ardiansah, pelajar dan developer muda dari Indonesia yang bersemangat membangun antarmuka web dan mobile yang intuitif. Saya percaya bahwa kode yang baik adalah kode yang bisa dipahami siapa saja.
          </p>
          <a href="#skills" class="reveal reveal-delay-3 inline-flex items-center gap-2 text-white font-bold hover:text-brand-orange transition-colors text-sm uppercase tracking-wider group">
            Lihat kemampuan saya
            <i class="bi bi-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
        </div>

        <!-- Right: Info cards -->
        <div class="col-lg-7">
          <div class="row g-4">
            <!-- Profil Card -->
            <div class="col-md-6">
              <div class="reveal reveal-delay-1 tilt-card glass-card p-7 rounded-2xl h-full hover:border-brand-orange/20 transition-all duration-400"
                   @mousemove="handleTilt" @mouseleave="resetTilt">
                <div class="tilt-inner">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                       style="background: linear-gradient(135deg, #F97316, #FB923C); color: white;">
                    <i class="bi bi-person-vcard-fill"></i>
                  </div>
                  <h3 class="font-heading text-lg font-bold text-white mb-4">Profil</h3>
                  <ul class="space-y-3 text-sm text-gray-400">
                    <li class="flex items-start gap-3">
                      <span class="w-1 h-1 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                      <span><strong class="text-white">Nama:</strong> M. Syeril Ardiansah</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-1 h-1 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                      <span><strong class="text-white">Role:</strong> Front-End & Full-Stack Dev</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-1 h-1 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                      <span><strong class="text-white">Lokasi:</strong> Indonesia</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-1 h-1 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                      <span><strong class="text-white">Status:</strong> Pelajar / Junior Dev</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Hobi Card -->
            <div class="col-md-6">
              <div class="reveal reveal-delay-2 tilt-card glass-card p-7 rounded-2xl h-full hover:border-brand-orange/20 transition-all duration-400"
                   @mousemove="handleTilt" @mouseleave="resetTilt">
                <div class="tilt-inner">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                       style="background: linear-gradient(135deg, #FBBF24, #F97316); color: white;">
                    <i class="bi bi-lightning-charge-fill"></i>
                  </div>
                  <h3 class="font-heading text-lg font-bold text-white mb-4">Di Luar Koding</h3>
                  <p class="text-sm text-gray-400 leading-relaxed mb-5">
                    Keseimbangan antara logika pemrograman dan refleks fisik. Lapangan olahraga adalah tempat saya me-reset pikiran.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-bold">🏸 Badminton</span>
                    <span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-bold">🎾 Tenis</span>
                    <span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-bold">💻 Koding</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Row -->
            <div class="col-12">
              <div class="reveal reveal-delay-3 row g-3">
                <div class="col-4">
                  <div class="stat-card bg-[#141414] rounded-xl p-5 text-center border border-white/5 hover:border-brand-orange/20 transition-all duration-300">
                    <p ref="stat1" class="font-heading text-3xl md:text-4xl font-extrabold text-gradient-animated m-0">0+</p>
                    <p class="text-xs text-gray-500 m-0 mt-1 font-mono uppercase tracking-wider">Bahasa</p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-card bg-[#141414] rounded-xl p-5 text-center border border-white/5 hover:border-brand-orange/20 transition-all duration-300">
                    <p ref="stat2" class="font-heading text-3xl md:text-4xl font-extrabold text-gradient-animated m-0">0+</p>
                    <p class="text-xs text-gray-500 m-0 mt-1 font-mono uppercase tracking-wider">Framework</p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-card bg-[#141414] rounded-xl p-5 text-center border border-white/5 hover:border-brand-orange/20 transition-all duration-300">
                    <p ref="stat3" class="font-heading text-3xl md:text-4xl font-extrabold text-gradient-animated m-0">0+</p>
                    <p class="text-xs text-gray-500 m-0 mt-1 font-mono uppercase tracking-wider">Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useCountUp } from '../composables/useCountUp'

useScrollReveal()

const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)

const counter1 = useCountUp(stat1, 6)
const counter2 = useCountUp(stat2, 8)
const counter3 = useCountUp(stat3, 6)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counter1.startCounting(stat1.value)
        counter2.startCounting(stat2.value)
        counter3.startCounting(stat3.value)
        observer.disconnect()
      }
    })
  }, { threshold: 0.5 })

  if (stat1.value) observer.observe(stat1.value)
})

// Tilt effect
function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6
  const rotateY = ((x - centerX) / centerX) * 6
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function resetTilt(e) {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
}
</script>
