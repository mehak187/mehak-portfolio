// Scroll progress bar, 3D tilt and cursor spotlight.
// Pointer effects are skipped on touch devices and when reduced motion is on.

const MAX_TILT = 7

export function initEffects() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const cleanups = []

  const bar = document.querySelector('.progress')
  if (bar) {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })
  }

  if (!fine || still) return () => cleanups.forEach((fn) => fn())

  document.querySelectorAll('.spot').forEach((el) => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', onMove)
    cleanups.push(() => el.removeEventListener('pointermove', onMove))
  })

  document.querySelectorAll('[data-tilt]').forEach((el) => {
    let frame = 0
    const onMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(1000px) rotateX(${-y * MAX_TILT}deg) rotateY(${x * MAX_TILT}deg) translateY(-6px)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      frame = 0
      el.style.transform = ''
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    cleanups.push(() => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      onLeave()
    })
  })

  return () => cleanups.forEach((fn) => fn())
}
