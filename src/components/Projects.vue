<template>
  <section id="projects" class="py-24 bg-[#0A0A0A] relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute top-1/3 right-0 w-72 h-72 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none"></div>
    <!-- Morphing blob -->
    <div class="absolute bottom-1/4 left-0 w-[600px] h-[600px] morph-blob pointer-events-none opacity-[0.02] hidden lg:block" style="background: linear-gradient(135deg, #FBBF24, #F97316);"></div>

    <div class="container relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// Projects</span>
          <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight m-0">Proyek Pilihan</h2>
        </div>
        <!-- Filter Tabs -->
        <div class="reveal reveal-delay-2 flex flex-wrap gap-2">
          <button v-for="tab in tabs" :key="tab.value"
            @click="activeTab = tab.value"
            :class="['px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 border cursor-pointer',
              activeTab === tab.value
                ? 'text-white border-brand-orange'
                : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white']"
            :style="activeTab === tab.value ? 'background: linear-gradient(135deg, #F97316, #FB923C);' : ''">
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="row g-4 relative z-10">
        <TransitionGroup name="project-fade">
          <div v-for="(project, index) in filteredProjects" :key="project.title"
               class="col-md-6 col-lg-4">
            <div :class="['reveal project-card rounded-2xl overflow-hidden h-full border border-white/5 cursor-pointer group hover:border-brand-orange/20 transition-all duration-500', 'reveal-delay-' + Math.min(index + 1, 6)]"
                 @click="openModal(project)">
              <!-- Project Preview -->
              <div class="relative overflow-hidden" :style="{ backgroundColor: project.color }">
                <div class="aspect-video flex items-center justify-center p-8 relative">
                  <div class="text-center z-10">
                    <i :class="[project.icon, 'project-icon text-6xl block mb-3']" :style="{ color: project.iconColor || 'rgba(255,255,255,0.8)' }"></i>
                    <p class="text-white/40 text-xs font-mono m-0 uppercase tracking-wider">{{ project.type }}</p>
                  </div>
                  <!-- Hover Overlay Indicator -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                     <span class="bg-brand-orange text-white text-sm font-bold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <i class="bi bi-eye-fill"></i> Detail Proyek
                     </span>
                  </div>
                </div>
              </div>

              <!-- Project Info -->
              <div class="p-6 bg-[#111111] relative z-10">
                <h3 class="font-heading text-lg font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{{ project.desc }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in project.tags.slice(0, 3)" :key="tag"
                        class="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-xs font-semibold text-gray-400">
                    {{ tag }}
                  </span>
                  <span v-if="project.tags.length > 3" class="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-xs font-semibold text-gray-400">
                    +{{ project.tags.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Project Modal Pop-up -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
             @click.self="closeModal">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

          <!-- Modal Content -->
          <div class="relative bg-[#111111] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl modal-card border border-white/10">
            <!-- Close Btn -->
            <button @click="closeModal" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-full flex items-center justify-center text-white transition-colors z-20 border border-white/10">
              <i class="bi bi-x-lg"></i>
            </button>

            <!-- Banner -->
            <div class="h-48 sm:h-64 w-full relative flex items-center justify-center" :style="{ backgroundColor: selectedProject.color }">
               <i :class="[selectedProject.icon, 'text-8xl sm:text-9xl opacity-30']" :style="{ color: selectedProject.iconColor || '#fff' }"></i>
               <!-- Decorative elements -->
               <div class="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
               <h3 class="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 font-heading text-3xl sm:text-4xl font-extrabold text-white m-0 z-10">{{ selectedProject.title }}</h3>
            </div>

            <!-- Body -->
            <div class="p-6 sm:p-10">
              <div class="row g-5">
                <div class="col-lg-8">
                  <h4 class="font-heading font-bold text-lg text-white mb-3">Tentang Proyek</h4>
                  <p class="text-gray-400 text-base leading-relaxed mb-6">{{ selectedProject.longDesc || selectedProject.desc }}</p>

                  <h4 class="font-heading font-bold text-lg text-white mb-3">Tantangan & Solusi</h4>
                  <p class="text-gray-400 text-base leading-relaxed mb-0">{{ selectedProject.challenge || 'Mengembangkan arsitektur yang scalable dan antarmuka yang ramah pengguna untuk memastikan pengalaman terbaik.' }}</p>
                </div>
                
                <div class="col-lg-4">
                  <div class="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div class="mb-5">
                      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Kategori</p>
                      <p class="font-medium text-white m-0">{{ selectedProject.type }}</p>
                    </div>
                    <div class="mb-5">
                      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Teknologi</p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tag in selectedProject.tags" :key="tag" class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-bold">
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                    <div class="pt-2">
                      <a v-if="selectedProject.demo !== '#'" :href="selectedProject.demo" target="_blank" 
                         class="btn text-white rounded-xl px-5 py-3 text-sm font-bold transition-all w-full flex justify-center items-center gap-2 mb-3 border-0"
                         style="background: linear-gradient(135deg, #F97316, #FB923C);">
                         <i class="bi bi-box-arrow-up-right"></i> Kunjungi Website
                      </a>
                      <a v-if="selectedProject.github !== '#'" :href="selectedProject.github" target="_blank" 
                         class="btn bg-white/5 text-white hover:bg-white/10 rounded-xl px-5 py-3 text-sm font-bold transition-all w-full flex justify-center items-center gap-2 border border-white/10">
                         <i class="bi bi-github"></i> Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const activeTab = ref('all')
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden' // prevent body scroll
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

// Optional: close on escape key
watch(selectedProject, (newVal) => {
  if (newVal) {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        window.removeEventListener('keydown', handleEsc)
      }
    }
    window.addEventListener('keydown', handleEsc)
  }
})

const tabs = [
  { label: 'Semua', value: 'all' },
  { label: 'Web App', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'UI/UX', value: 'design' },
]

const projects = ref([
  {
    title: 'SplittyGo',
    desc: 'Platform E-Commerce pintar untuk membagi pembayaran secara instan.',
    longDesc: 'SplittyGo adalah solusi inovatif untuk E-commerce yang memungkinkan pengguna untuk berbelanja dan membagi tagihan dengan teman atau keluarga secara seamless. Menawarkan integrasi payment gateway yang aman dan dashboard analitik untuk merchant.',
    tags: ['Vue.js', 'Tailwind', 'Node.js', 'E-Commerce'],
    icon: 'bi bi-shop',
    color: '#111111',
    iconColor: '#F97316',
    type: 'Web Application',
    category: 'web',
    github: '#',
    demo: 'https://splittygo.com/'
  },
  {
    title: 'Clloo',
    desc: 'Aplikasi manajemen tugas (Task Management) yang dirancang untuk produktivitas tim tingkat tinggi.',
    longDesc: 'Clloo (app.clloo.com) adalah platform manajemen proyek komprehensif. Menampilkan Kanban boards, real-time collaboration, time tracking, dan sistem notifikasi pintar. Dirancang khusus untuk meminimalisir distraksi dan memaksimalkan output tim.',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'SaaS'],
    icon: 'bi bi-kanban-fill',
    color: '#0D2137',
    iconColor: '#00D1FF',
    type: 'Web Application',
    category: 'web',
    github: '#',
    demo: 'https://app.clloo.com/'
  },
  {
    title: 'J3Log',
    desc: 'Sistem manajemen logistik dan pengiriman terpadu untuk perusahaan jasa ekspedisi.',
    longDesc: 'Mengembangkan sistem inti untuk J3Log, sebuah perusahaan logistik yang berkembang pesat. Platform ini menangani pelacakan resi real-time, manajemen rute kurir, manajemen inventaris gudang, dan otomatisasi pembuatan label pengiriman.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Logistics API'],
    icon: 'bi bi-truck',
    color: '#111111',
    iconColor: '#F97316',
    type: 'Enterprise Web App',
    category: 'web',
    github: '#',
    demo: '#'
  },
  {
    title: 'Indobox',
    desc: 'Platform layanan smart locker & box storage modern.',
    longDesc: 'Indobox adalah layanan loker pintar (smart locker). Proyek ini mencakup pengembangan antarmuka pelanggan untuk pemesanan loker, integrasi sistem IoT untuk membuka/mengunci pintu secara remote dari aplikasi web, dan dashboard admin operasional.',
    tags: ['React', 'Node.js', 'IoT Integration', 'Bootstrap'],
    icon: 'bi bi-box-seam-fill',
    color: '#1A1A1A',
    iconColor: '#4ADE80',
    type: 'Web Application',
    category: 'web',
    github: '#',
    demo: '#'
  },
  {
    title: 'Travel Booking UI',
    desc: 'Desain antarmuka aplikasi pemesanan tiket perjalanan dengan pengalaman pengguna yang intuitif.',
    longDesc: 'Eksplorasi desain UI/UX untuk aplikasi travel masa depan. Fokus pada micro-interactions, layout yang bersih, dan proses checkout yang disederhanakan menjadi hanya 3 langkah.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'],
    icon: 'bi bi-airplane-fill',
    color: '#0A0A0A',
    type: 'UI/UX Design',
    category: 'design',
    github: '#',
    demo: '#'
  },
  {
    title: 'Weather App (Mobile)',
    desc: 'Aplikasi cuaca real-time dengan prakiraan, lokasi, dan visualisasi data atmosfer.',
    longDesc: 'Proyek mobile app menggunakan Flutter yang mengonsumsi OpenWeatherMap API. Memiliki fitur deteksi lokasi otomatis, widget cuaca, dan peringatan cuaca buruk dengan antarmuka dark mode yang elegan.',
    tags: ['Flutter', 'Dart', 'REST API', 'Geolocation'],
    icon: 'bi bi-cloud-sun-fill',
    color: '#111111',
    iconColor: '#FBBF24',
    type: 'Mobile App',
    category: 'mobile',
    github: '#',
    demo: '#'
  },
])

const filteredProjects = computed(() => {
  if (activeTab.value === 'all') return projects.value
  return projects.value.filter(p => p.category === activeTab.value)
})
</script>

<style scoped>
.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.4s ease;
}
.project-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.project-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
  position: absolute; /* Prevent layout jump */
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-card {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .modal-card {
  transition: all 0.3s ease-in;
}

.modal-enter-from .modal-card {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.modal-leave-to .modal-card {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>
