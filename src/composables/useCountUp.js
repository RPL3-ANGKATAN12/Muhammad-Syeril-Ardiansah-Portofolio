export function useCountUp(targetRef, endValue, duration = 2000) {
  let hasAnimated = false

  function startCounting(el) {
    if (hasAnimated) return
    hasAnimated = true

    const start = 0
    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * (endValue - start) + start)

      el.textContent = current + '+'

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return { startCounting }
}
