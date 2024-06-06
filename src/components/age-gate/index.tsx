'use client'

import { useState } from 'react'
import s from './index.module.scss'

export default function AgeGate() {
  const [age, setAge] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleVerification = () => {
    if (age && age >= 18) {
      const ageGateElement = document.getElementById('sz__age-gate')
      if (ageGateElement) {
        ageGateElement.style.display = 'none'
      }
    } else {
      setError('You must be at least 18 years old.')
    }
  }

  return (
    <div id="sz__age-gate" className={`${s.age_gate__background}`}>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Please enter your age:</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="number"
          className="border p-2 mb-4 w-full"
          onChange={(e) => {
            setAge(Number(e.target.value))
            setError(null)
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 w-full rounded"
          onClick={handleVerification}
        >
          Verify
        </button>
      </div>
    </div>
  )
}
