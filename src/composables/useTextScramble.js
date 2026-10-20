import { ref, onMounted, onUnmounted } from 'vue'

export function useTextScramble() {
  const chars = '!<>-_\\/[]{}—=+*^?#________'
  
  function scramble(el, finalText, duration = 1500) {
    const length = finalText.length
    let frame = 0
    const totalFrames = Math.floor(duration / 30)
    
    function update() {
      let output = ''
      const progress = frame / totalFrames
      
      for (let i = 0; i < length; i++) {
        if (i < length * progress) {
          output += finalText[i]
        } else {
          output += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      
      el.textContent = output
      frame++
      
      if (frame <= totalFrames) {
        requestAnimationFrame(update)
      } else {
        el.textContent = finalText
      }
    }
    
    update()
  }
  
  return { scramble }
}
