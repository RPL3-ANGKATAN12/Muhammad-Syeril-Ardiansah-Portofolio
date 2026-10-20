export function useTilt(cardSelector) {
  function handleMouseMove(e) {
    const cards = document.querySelectorAll(cardSelector)
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    })
  }

  function handleMouseLeave(e) {
    if (e.target.closest(cardSelector)) {
      const card = e.target.closest(cardSelector)
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }
  }

  return { handleMouseMove, handleMouseLeave }
}
