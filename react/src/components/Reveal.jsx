import { useEffect, useRef, useState } from 'react'

// Fades an element in the first time it scrolls into view.
export default function Reveal({ as: Tag = 'div', className = '', children, onShow, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      onShow?.()
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        onShow?.()
        io.disconnect()
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown, onShow])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
