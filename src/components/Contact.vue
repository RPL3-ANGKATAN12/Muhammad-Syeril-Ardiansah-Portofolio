<template>
  <section id="contact-form" class="py-24 bg-[#0D0D0D] relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-full section-divider"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none"></div>
    <!-- Morphing blob -->
    <div class="absolute top-1/4 -left-20 w-[400px] h-[400px] morph-blob pointer-events-none opacity-[0.03] hidden lg:block" style="background: linear-gradient(135deg, #FBBF24, #F97316);"></div>

    <div class="container relative z-10">
      <div class="row g-5 align-items-center">
        <!-- Left: Info -->
        <div class="col-lg-5">
          <span class="reveal text-brand-orange font-mono text-sm font-medium tracking-widest uppercase mb-4 block text-glitch">// Contact</span>
          <h2 class="reveal reveal-delay-1 heading-underline font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ada pertanyaan<span class="text-gradient-animated">?</span>
          </h2>
          <p class="reveal reveal-delay-2 text-gray-400 text-lg leading-relaxed mb-10">
            Jangan ragu untuk menghubungi saya. Baik untuk membahas proyek, kolaborasi, atau sekadar berdiskusi tentang teknologi.
          </p>

          <div class="space-y-5">
            <div class="reveal reveal-delay-3 flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 border border-white/10 group-hover:border-transparent"
                   style="background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05));"
                   :class="{ 'group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-orange-400': true }">
                <i class="bi bi-envelope-fill text-brand-orange group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <p class="font-heading font-bold text-white text-sm m-0 mb-0.5">Email</p>
                <p class="text-gray-500 text-sm m-0">syeril@example.com</p>
              </div>
            </div>
            <div class="reveal reveal-delay-4 flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 border border-white/10 group-hover:border-transparent"
                   style="background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05));">
                <i class="bi bi-geo-alt-fill text-brand-orange group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <p class="font-heading font-bold text-white text-sm m-0 mb-0.5">Lokasi</p>
                <p class="text-gray-500 text-sm m-0">Indonesia</p>
              </div>
            </div>
            <div class="reveal reveal-delay-5 flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 border border-white/10 group-hover:border-transparent"
                   style="background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05));">
                <i class="bi bi-clock-fill text-brand-orange group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <p class="font-heading font-bold text-white text-sm m-0 mb-0.5">Respons</p>
                <p class="text-gray-500 text-sm m-0">Biasanya dalam 24 jam</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="col-lg-6 offset-lg-1">
          <form @submit.prevent="handleSubmit" class="reveal reveal-delay-2 glass-card p-8 md:p-10 rounded-2xl">
            <div class="row g-4">
              <div class="col-md-6">
                <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Nama</label>
                <input v-model="form.name" type="text" placeholder="Nama lengkap"
                  class="form-input w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-body placeholder-gray-600" />
              </div>
              <div class="col-md-6">
                <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                <input v-model="form.email" type="email" placeholder="email@domain.com"
                  class="form-input w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-body placeholder-gray-600" />
              </div>
              <div class="col-12">
                <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Subjek</label>
                <input v-model="form.subject" type="text" placeholder="Tentang apa?"
                  class="form-input w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-body placeholder-gray-600" />
              </div>
              <div class="col-12">
                <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Pesan</label>
                <textarea v-model="form.message" rows="5" placeholder="Tulis pesan Anda..."
                  class="form-input w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-body resize-none placeholder-gray-600"></textarea>
              </div>
              <div class="col-12">
                <button type="submit"
                  :class="['btn w-full rounded-xl px-8 py-3.5 text-base font-bold transition-all duration-300 border-0 flex items-center justify-center gap-2',
                    submitted ? 'bg-green-600 text-white' : 'text-white hover:shadow-lg hover:shadow-brand-orange/20']"
                  :style="!submitted ? 'background: linear-gradient(135deg, #F97316, #FB923C);' : ''"
                  :disabled="submitted">
                  <i :class="submitted ? 'bi bi-check-circle-fill' : 'bi bi-send-fill'"></i>
                  {{ submitted ? 'Pesan Terkirim!' : 'Kirim Pesan' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const submitted = ref(false)
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 3000)
}
</script>
