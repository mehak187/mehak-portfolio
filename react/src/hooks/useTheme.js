import { useCallback, useEffect, useState } from 'react'

const read = () => {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    if (!theme) return
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // private mode, ignore
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const active = current || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      return active === 'dark' ? 'light' : 'dark'
    })
  }, [])

  return { theme, toggle }
}
