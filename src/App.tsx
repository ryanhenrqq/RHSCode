import { useState, useEffect } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet, Link, useNavigate } from 'react-router-dom'

import { MainHome } from './components/main'
import { MainPortfolio } from './components/portfolio'
import { Direct } from './components/direct'
import { NotFoundPage } from './components/404'

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
      },
      {
        path: "/portfolio",
        element: <MainPortfolio />
      },
      {
        path: "/direct",
        element: <Direct />
      },
      {
        path:"*",
        element: <NotFoundPage />
      }
    ]
  }
])

function App() {
  useEffect(() => {
    console.log("started app.tsx")
  }, [])
  return <RouterProvider router={route} />
}

function DesktopHeader() {
  return (
    <>
      <main>
        <header className='flex-hor full-head-desktop'>
          <LeftSideHeader />
          <RightSideHeader />
        </header>
        <div className="main">
          <Outlet />
        </div>
        <footer>
          <FooterGlobal />
        </footer>
      </main>
    </>
  )
}

function LeftSideHeader() {
  const navi = useNavigate()
  const [photoUrl, setPhotoUrl] = useState(`${greenLogo}`)
  useEffect(() => {
    const sources = [greenLogo, photoLogo]
    const changer = setInterval(() => {
        setPhotoUrl((prev) => (
          prev === sources[0] ? sources[1] : sources[0]
        ))
      }, 5000)
    return clearInterval(changer)
  }, [])
  return (
    <>
      <div className="left-head flex-hor" onClick={() => navi('/')}>
          <img src={photoUrl} alt="Logo RHS Sites" className="image-head" id="image-head" loading="lazy" />
          <h1 className="title-head title-head-index">RHS Code</h1>
      </div>
    </>
  )
}

function RightSideHeader() {
  function handleTempUnvailable() {
    alert("Não disponivel. Aguarde uma atualização futura.")
  }
  return (
    <>
      <nav className="right-head flex-hor">
              <div id="scrool-head" className="flex-hor right-head-buttons-parent">
                <Link to="/portfolio" className="button-head gaussian-blur-darker">
                      <img src={srvPortfolio} alt="Service Portfólio" className="button-head-image" loading="lazy" />
                </Link>
                <Link to="/direct" className="button-head c-head  gaussian-blur-darker">
                      <img src={srvMessage} alt="Message" className="button-head-image" loading="lazy" />
                </Link>
                <select name="lang-sel" id="lang-sel" onChange={handleTempUnvailable}>
                      <option value="port">PT</option>
                      <option value="eng">EN</option>
                </select>
            </div>
        </nav>  
    </>
  )
}

function FooterGlobal() {
  return (
    <>
      <footer id="pt-version-footer-index">
        <div className="flex-hor">
          <a href="./pg/about.html">Sobre</a>
          <a href="https://ko-fi.com/rhscode">Doação</a>
        </div>
        <div className="flex-hor align last-line-footer">
          <small><a href="#">© 2024 RHS Code </a> - é uma marca digital criada por Ryan Henrique</small>
        </div>
      </footer>
    </>
  )
}

export default App