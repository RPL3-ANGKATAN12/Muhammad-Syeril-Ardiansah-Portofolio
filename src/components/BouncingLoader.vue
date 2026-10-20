<template>
  <div class="loader-container">
    <div class="bouncing-loader">
      <div 
        class="ball-wrapper" 
        v-for="(color, index) in colors" 
        :key="index"
      >
        <div 
          class="ball" 
          :style="{ 
            backgroundColor: color, 
            animationDelay: `${index * 0.15}s` 
          }"
        ></div>
        <div 
          class="shadow" 
          :style="{ 
            animationDelay: `${index * 0.15}s` 
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  colors: {
    type: Array,
    // Menggunakan warna tema: Orange, Biru, Orange
    default: () => ['#F97316', '#00D1FF', '#F97316']
  }
})
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.bouncing-loader {
  display: flex;
  gap: 20px;
}

.ball-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24px;
  height: 60px; /* Ruang untuk pantulan */
}

.ball {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  z-index: 2;
  /* ease-in akan membalik menjadi ease-out saat alternate (memantul ke atas) */
  animation: bounce 0.5s infinite alternate ease-in;
  /* Memberikan efek 3D sedikit */
  box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.3), 
              0 0 10px currentColor; 
}

.shadow {
  width: 20px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  filter: blur(2px);
  animation: shadowScale 0.5s infinite alternate ease-in;
}

/* Animasi jatuh dari atas ke bawah */
@keyframes bounce {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(40px) scale(1.15, 0.85); /* Efek penyok saat menyentuh tanah */
  }
}

/* Bayangan membesar saat bola mendekat ke tanah */
@keyframes shadowScale {
  0% {
    transform: scale(0.3);
    opacity: 0.1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}
</style>
