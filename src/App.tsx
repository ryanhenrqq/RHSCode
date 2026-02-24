import { useState, useEffect } from 'react'
import './App.css'
import { MainHome } from './components/main'
import { MainPortfolio } from './components/portfolio'

function App() {
  useEffect(() => {
    console.log("caralhoooooooo")
  })
  return (
    <>
      <DesktopHeader />
      <div className="main">
        <MainHome />
        <MainPortfolio />
      </div>
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
  return (
    <>
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
    </>
  )
}

export default App