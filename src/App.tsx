import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [titleColor, setTitleColor] = useState("green")
  const [isGreen, setIsGreen] = useState(true)
  useEffect(() => {
    setInterval(() => {
      const colors = ["green", "red"]
      if (isGreen) {
        setTitleColor(colors[1])
        setIsGreen(false)
      } else {
        setTitleColor(colors[0])
        setIsGreen(true)
      }
    }, 3000)
  })
  return (
    <>
      <h1
        style={{ color: titleColor }}
      >
        RHS CODES
      </h1>
      <b>Hello, World!</b>
      <p>Hello, React & TypeScript!</p>
    </>
  )
}

export default App
