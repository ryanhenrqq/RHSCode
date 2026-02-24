import { useState, useEffect } from 'react'
import  { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import { MainHome } from './components/main'
import { MainPortfolio } from './components/portfolio'

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
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/portfolio' element={<MainPortfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
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
        <LeftSideHeader />
        <RightSideHeader />
      </header>
    </>
  )
}

function LeftSideHeader() {
  const [photoUrl, setPhotoUrl] = useState("./public/logo-image.png")
  useEffect(() => {
    setInterval(() => {
      const sources = ["./public/logo-image.png", "./public/my-photo.jpg"]
      if (photoUrl == sources[0]) {
        setPhotoUrl(sources[1])
      } else {
        setPhotoUrl(sources[0])
      }
    }, 3000)
  })
  return (
    <>
      <div className="left-head flex-hor">
          <img src={photoUrl} alt="Logo RHS Sites" className="image-head" id="image-head" loading="lazy" />
          <h1 className="title-head title-head-index">RHS Code</h1>
      </div>
    </>
  )
}

function RightSideHeader() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="right-head flex-hor">
              <div id="scrool-head" className="flex-hor right-head-buttons-parent">
                <button className="button-head">
                      <img src="./src/res/ico/services-portfolio.png" alt="Service Portfólio" className="button-head-image" loading="lazy" onClick={() => navigate('/portfolio')} />
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
    </>
  )
}

export default App