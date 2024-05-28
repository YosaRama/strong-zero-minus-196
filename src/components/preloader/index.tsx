'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
    }

    if (document.readyState === 'complete') {
      // If the document is already loaded, we can call the handler right away
      handleLoad()
    } else {
      // Otherwise, we need to wait for the DOMContentLoaded event
      window.addEventListener('DOMContentLoaded', handleLoad)
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoad)
    }
  }, [])

  return (
    <div>
      <div style={{ display: isLoading ? 'block' : 'none' }}>loading</div>
    </div>
  )
}
