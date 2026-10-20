<template>
  <div ref="containerRef" class="three-scene-container cursor-grab active:cursor-grabbing"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, animationId
let geometries = []
let mouseX = 0, mouseY = 0
let targetX = 0, targetY = 0

// Need to store reference to remove event listener
let onDocumentMouseMove

onMounted(() => {
  if (!containerRef.value) return
  
  const container = containerRef.value
  const width = container.offsetWidth
  const height = container.offsetHeight

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.z = 9 // Pull back a bit to see the whole structure

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 2)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)

  const orangeLight = new THREE.PointLight(0xF97316, 100, 30)
  orangeLight.position.set(-4, 0, 5)
  scene.add(orangeLight)

  const blueLight = new THREE.PointLight(0x00D1FF, 100, 30)
  blueLight.position.set(4, 3, 5)
  scene.add(blueLight)

  // Central Object: Solid Shiny Icosahedron
  const coreGeo = new THREE.IcosahedronGeometry(1.6, 0)
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x0f0f0f,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  })
  const core = new THREE.Mesh(coreGeo, coreMat)
  scene.add(core)
  geometries.push({ mesh: core, rotSpeed: { x: 0.002, y: 0.003, z: 0.001 } })

  // Outer Wireframe Shell
  const wireGeo = new THREE.IcosahedronGeometry(2.0, 1)
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xF97316,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  })
  const wire = new THREE.Mesh(wireGeo, wireMat)
  scene.add(wire)
  geometries.push({ mesh: wire, rotSpeed: { x: -0.001, y: -0.002, z: -0.001 } })

  // Orbiting Torus Rings
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(2.8, 0.02, 16, 100),
    new THREE.MeshStandardMaterial({ color: 0xF97316, emissive: 0xF97316, emissiveIntensity: 0.6 })
  )
  ring1.rotation.x = Math.PI / 2.5
  scene.add(ring1)
  geometries.push({ mesh: ring1, rotSpeed: { x: 0, y: 0.01, z: 0.005 } })

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(3.2, 0.02, 16, 100),
    new THREE.MeshStandardMaterial({ color: 0x00D1FF, emissive: 0x00D1FF, emissiveIntensity: 0.6 })
  )
  ring2.rotation.x = -Math.PI / 3
  scene.add(ring2)
  geometries.push({ mesh: ring2, rotSpeed: { x: 0.005, y: -0.008, z: 0 } })

  // Floating Particles / Data Cubes
  const cubeGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25)
  for (let i = 0; i < 25; i++) {
    const isOrange = i % 2 === 0
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: isOrange ? 0xF97316 : 0x00D1FF,
      metalness: 0.6,
      roughness: 0.2,
      clearcoat: 1.0,
      emissive: isOrange ? 0xF97316 : 0x00D1FF,
      emissiveIntensity: 0.25
    })
    const cube = new THREE.Mesh(cubeGeo, cubeMat)
    
    const angle = Math.random() * Math.PI * 2
    const radius = 3.5 + Math.random() * 2
    const yOffset = (Math.random() - 0.5) * 7
    cube.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius)
    cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    
    scene.add(cube)
    geometries.push({
      mesh: cube,
      rotSpeed: { x: Math.random() * 0.02, y: Math.random() * 0.02, z: Math.random() * 0.02 },
      orbit: { angle, radius, speed: 0.001 + Math.random() * 0.003, yOffset }
    })
  }

  // Mouse interactivity
  onDocumentMouseMove = (event) => {
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
  }
  document.addEventListener('mousemove', onDocumentMouseMove, false);

  // Resize handler
  const handleResize = () => {
    if (!containerRef.value) return
    const w = containerRef.value.offsetWidth
    const h = containerRef.value.offsetHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', handleResize)

  // Animation loop
  const clock = new THREE.Clock()
  
  function animate() {
    const elapsed = clock.getElapsedTime()

    // Smooth camera/scene rotation based on mouse
    targetX = mouseX * 1.5;
    targetY = mouseY * 1.5;
    
    scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
    scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

    // Rotate geometries
    geometries.forEach((item) => {
      item.mesh.rotation.x += item.rotSpeed.x
      item.mesh.rotation.y += item.rotSpeed.y
      item.mesh.rotation.z += item.rotSpeed.z

      if (item.orbit) {
        item.orbit.angle += item.orbit.speed
        item.mesh.position.x = Math.cos(item.orbit.angle) * item.orbit.radius
        item.mesh.position.z = Math.sin(item.orbit.angle) * item.orbit.radius
        item.mesh.position.y = item.orbit.yOffset + Math.sin(elapsed * 2 + item.orbit.angle) * 0.5
      }
    })

    // Float the whole scene gently
    scene.position.y = Math.sin(elapsed) * 0.2

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (onDocumentMouseMove) {
    document.removeEventListener('mousemove', onDocumentMouseMove, false)
  }
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
  }
  geometries.forEach(item => {
    item.mesh.geometry.dispose()
    item.mesh.material.dispose()
  })
})
</script>

<style scoped>
.three-scene-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}
.three-scene-container canvas {
  display: block;
  outline: none;
  width: 100% !important;
  height: 100% !important;
  /* Add a subtle drop shadow to the canvas object to make it pop */
  filter: drop-shadow(0 0 40px rgba(249, 115, 22, 0.2));
}
</style>
