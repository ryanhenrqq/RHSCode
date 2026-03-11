import { useState, useEffect } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom'

import { MainHome } from './components/main'

import greenLogo from '/logo-image.png'
import photoLogo from '/my-photo.jpg'
import srvPortfolio from '@ico/services-portfolio.png'
import srvMessage from '@ico/comment.png'

const route = createHashRouter([
  {
    path: "/",
    element: <DesktopHeader />,
    children: [
      {
        index: true,
        element: <MainHome />
      }
    ]
  }
])

function App() {
  useEffect(() => {
    console.log("started app.tsx")
  })
  return <RouterProvider router={route} />
}

function DesktopHeader() {
  return (
    <>
      <header className='flex-hor full-head-desktop'>
        <LeftSideHeader />
        <RightSideHeader />
      </header>
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}

function LeftSideHeader() {
  const [photoUrl, setPhotoUrl] = useState(`${greenLogo}`)
  useEffect(() => {
    setInterval(() => {
      const sources = [greenLogo, photoLogo]
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
                      <img src={srvPortfolio} alt="Service Portfólio" className="button-head-image" loading="lazy" />
                </button>
                <button className="button-head c-head">
                      <img src={srvMessage} alt="Message" className="button-head-image" loading="lazy" />
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