import { useState, useEffect } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet, Link, useNavigate, useLocation } from 'react-router-dom'

import { MainHome } from './components/main'
import { MainPortfolio } from './components/portfolio'
import { Direct } from './components/direct'
import { RoyaltiesPage } from './components/royalties'
import { NotFoundPage } from './components/404'

import greenLogo from '/logo-image.png'
import photoLogo from '/my-photo.jpg'
import srvPortfolio from '@ico/services-portfolio.png'
import srvMessage from '@ico/comment.png'
import menu from '@ico/menu.png'

const loadingScreen = document.getElementById("loading-screen")

if (loadingScreen) {
  loadingScreen.remove()
}
// Small comment for git

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
        path: "/royalties",
        element: <RoyaltiesPage />
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
        <FullHeaderDesktop classNaming="desktopView full-head-desktop" />
        <FullHeaderMobile classNaming="mobileView full-head-mobile" />
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

type FullHeaderDesktopProps = {
  classNaming?: string
}
function FullHeaderDesktop({classNaming}: FullHeaderDesktopProps) {
  // below these 2 elements, add <MenuOptionsPopup /> later!!
  return (
    <>
        <header className={classNaming}>
          <LeftSideHeader />
          <RightSideHeader />
          
        </header>
    </>
  )
}

type FullHeaderMobileProps = {
  classNaming?: string
}
function FullHeaderMobile({classNaming}: FullHeaderMobileProps) {
  const location = useLocation()
  const path = location.pathname.slice(1)
  const title = path.charAt(0).toUpperCase() + path.slice(1)
  const navi = useNavigate()

  const [topListen, setTopListen] = useState<boolean>(true)
  useEffect(() => {
    const handleHeaderHide = () => {
      setTopListen(window.scrollY < 100);
    }
    window.addEventListener('scroll', handleHeaderHide, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleHeaderHide);
    }
  }, [])
  return (
    <header className={classNaming}>
        <div className="left-head flex-hor">
            <div className="right-head-buttons-parent">
              <RedirectHeadLink toTarget='portfolio' isActive={location.pathname === "/portfolio"} />
            </div>
        </div>
        <div onClick={() => navi('/')}>
            {!topListen ? <h1 className="title-head title-head-index">{location.pathname==="/" ? "RHS Code" : title}</h1> : <h1 className="title-head title-head-index">{location.pathname==="/" ? "" : "Home"}</h1>}
        </div>
        <nav className="right-head flex-hor">
            <div id="scrool-head" className="flex-hor right-head-buttons-parent">
              <RedirectHeadLink toTarget='direct' isActive={location.pathname === "/direct"} />
            </div>
        </nav>
    </header>
  )
}

function LeftSideHeader() {
  const navi = useNavigate()
  const [topListen, setTopListen] = useState<boolean>(true)
  useEffect(() => {
    const handleHeaderHide = () => {
      setTopListen(window.scrollY < 100);
    }
    window.addEventListener('scroll', handleHeaderHide, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleHeaderHide);
    }
  }, [])
  return (
    <>
      <div className="left-head flex-hor" onClick={() => navi('/')}>
          {!topListen ? <PhotoLogoChanger /> : null}
      </div>
    </>
  )
}

function PhotoLogoChanger() {
  const location = useLocation()
  const path = location.pathname.slice(1)
  const title = path.charAt(0).toUpperCase() + path.slice(1)
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
      <img src={photoUrl} alt="Logo RHS Sites" className="image-head" id="image-head" loading="lazy" />
      <h1 className="title-head title-head-index">{location.pathname==="/" ? "RHS Code" : title}</h1>
    </>
  )
}

function RightSideHeader() {
  //const location = useLocation()
  const [activeMenu, setActiveMenu] = useState(false)
  const marker = activeMenu ? {filter: "invert(100%)"} : {filter: "invert(0%)"}
  function handleMenuBool() {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true)
  }
  return (
    <>
      <nav className="right-head flex-hor">
            <div id="scrool-head" className="flex-hor right-head-buttons-parent">
              <RedirectHeadLink toTarget='portfolio' isActive={location.pathname === "/portfolio"} />
              <RedirectHeadLink toTarget='direct' isActive={location.pathname === "/direct"} />
              <button className="tempHide" style={marker} onClick={handleMenuBool}>
                <img src={menu} alt={menu} className="button-head-image" loading="lazy" />
              </button>
            </div>
        </nav>
        
    </>
  )
}



type RedirecterLinkProps = {
  toTarget?: string,
  isActive?: boolean
}
/* >> new funcionality, replacing buttons with a hidden menu <<
function MenuOptionsPopup() {
    return(
      <div className="container-menu-options tempHide">
        <MenuOptionsPopupBtnWrap toTarget='portfolio' isActive={location.pathname === "/portfolio"} />
        <MenuOptionsPopupBtnWrap toTarget='direct' isActive={location.pathname === "/direct"} />
      </div>
    )
}
function MenuOptionsPopupBtnWrap({toTarget, isActive}: RedirecterLinkProps) {
  if (toTarget=="") return
  const showcaseForm = capitalize(`${toTarget}`)
  const local = `/${toTarget}`
  const marker = isActive ? {filter: "invert(100%)"} : {filter: "invert(0%)"}
  
  return (
      <Link to={isActive ? "/" : local} className="menuOptionsPopupBtn" style={marker}>
        {
          showcaseForm=="Direct" ? "Contato" : showcaseForm
        }
      </Link>
  )
}
  */
export function RedirectHeadLink({toTarget, isActive}: RedirecterLinkProps) {
  const local = `/${toTarget}`
  const marker = isActive ? {filter: "invert(100%)"} : {filter: "invert(0%)"}
  const imgsrc = toTarget=="portfolio" ? srvPortfolio : srvMessage
  return (
    <>
      <Link to={isActive ? "/" : local} className="button-head c-head gaussian-blur-darker" style={marker}>
        <img src={imgsrc} alt={local} className="button-head-image" loading="lazy" />
      </Link>
    </>
  )
}
/* >> temporaly unused <<
function capitalize(word: string): string {
  if(!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
  */

function FooterGlobal() {
  return (
    <>
      <footer id="pt-version-footer-index gaussian-blur">
        <div className="1">
          <a>Sobre</a>
          <a href="https://ko-fi.com/rhscode">Doação</a>
          <Link to="/royalties">Créditos de Uso</Link>
          <a href="https://ryanhenrqq.github.io/RHSSites/">Compartibilidade</a>
        </div>
        <div className="1 align last-line-footer">
          <small><a href="#">© 2024 RHS Code </a> - é uma marca digital criada por Ryan Henrique</small>
        </div>
      </footer>
    </>
  )
}

export default App