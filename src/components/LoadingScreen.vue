<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <!-- 3D Model Container -->
        <div ref="containerRef" class="loader-3d-container"></div>
        
        <!-- Loading Text -->
        <div class="loading-text-container">
          <h1 class="loading-name" data-text="Syeril.">Syeril.</h1>
          <div class="loading-bar">
            <div class="loading-progress" :style="{ width: progress + '%' }"></div>
          </div>
          <p class="loading-status">MEMUAT 3D ASET... {{ Math.round(progress) }}%</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  isLoading: Boolean,
  progress: {
    type: Number,
    default: 0
  }
})

const containerRef = ref(null)
let scene, camera, renderer, animationId
let mesh

onMounted(() => {
  if (!containerRef.value) return
  
  const width = 200
  const height = 200

  // Scene setup
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  containerRef.value.appendChild(renderer.domElement)

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  const light1 = new THREE.PointLight(0xF97316, 50, 20)
  light1.position.set(2, 2, 2)
  scene.add(light1)

  const light2 = new THREE.PointLight(0x00D1FF, 50, 20)
  light2.position.set(-2, -2, 2)
  scene.add(light2)

  // 3D Object (Icosahedron Wireframe)
  const geometry = new THREE.IcosahedronGeometry(1.5, 0)
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xF97316,
    wireframe: true,
    emissive: 0xF97316,
    emissiveIntensity: 0.5
  })
  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // Inner solid core
  const coreGeo = new THREE.OctahedronGeometry(0.8, 0)
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    metalness: 1,
    roughness: 0.1,
    clearcoat: 1
  })
  const core = new THREE.Mesh(coreGeo, coreMat)
  mesh.add(core)

  // Animation Loop
  const clock = new THREE.Clock()
  
  function animate() {
    const elapsed = clock.getElapsedTime()
    
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
    
    // Pulse effect
    const scale = 1 + Math.sin(elapsed * 4) * 0.1
    mesh.scale.set(scale, scale, scale)

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
  }
  if (mesh) {
    mesh.geometry.dispose()
    mesh.material.dispose()
  }
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.loader-3d-container {
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 30px rgba(249, 115, 22, 0.4));
}

.loading-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 250px;
}

.loading-name {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin: 0;
  letter-spacing: -0.05em;
  position: relative;
}

.loading-name::before,
.loading-name::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.loading-name::before {
  left: 2px;
  text-shadow: -2px 0 #00D1FF;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.loading-name::after {
  left: -2px;
  text-shadow: 2px 0 #F97316;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.loading-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #F97316, #FB923C);
  border-radius: 4px;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
}

.loading-status {
  font-family: monospace;
  font-size: 0.75rem;
  color: #888;
  margin: 0;
  letter-spacing: 2px;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(20% 0 80% 0); }
  20% { clip-path: inset(60% 0 10% 0); }
  40% { clip-path: inset(40% 0 50% 0); }
  60% { clip-path: inset(80% 0 5% 0); }
  80% { clip-path: inset(10% 0 70% 0); }
  100% { clip-path: inset(30% 0 20% 0); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(10% 0 60% 0); }
  20% { clip-path: inset(30% 0 20% 0); }
  40% { clip-path: inset(70% 0 10% 0); }
  60% { clip-path: inset(20% 0 50% 0); }
  80% { clip-path: inset(50% 0 30% 0); }
  100% { clip-path: inset(5% 0 80% 0); }
}
</style>
