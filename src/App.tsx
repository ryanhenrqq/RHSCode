import { useState, useEffect } from 'react'
import './App.css'
import { MainHome } from './components/main'

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
      <DesktopHeader />
      <MainHome />
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

function DesktopHeader() {
  return (
    <>
      <header className='flex-hor full-head-desktop'>
          <div className="left-head flex-hor">
              <img src="../public/logo-image.png" alt="Logo RHS Sites" className="image-head" id="image-head" loading="lazy" />
              <h1 className="title-head title-head-index">RHS Code</h1>
          </div>
          <nav className="right-head flex-hor">
              <div id="scrool-head" className="flex-hor right-head-buttons-parent">
                  <button className="button-head">
                      <img src="./src/res/ico/services-portfolio.png" alt="Service Portfólio" className="button-head-image" loading="lazy" />
                  </button>
                  <button className="button-head c-head">
                      <img src="./src/res/ico/comment.png" alt="Message" className="button-head-image" loading="lazy" />
                  </button>
                  <select name="lang-sel" id="lang-sel">
                      <option value="port">PT</option>
                      <option value="eng">EN</option>
                  </select>
              </div>
          </nav>  
      </header>
    </>
  )
}

export default App
