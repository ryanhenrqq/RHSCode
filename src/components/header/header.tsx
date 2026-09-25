import './header.css'

import type { FullHeaderDesktopProps, FullHeaderMobileProps, RedirecterLinkProps } from '../../types/types'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import greenLogo from '/logo-image.png'
import menu from '@ico/menu.png'
import srvPortfolio from '@ico/services-portfolio.png'
import srvMessage from '@ico/comment.png'

// HEADER DESKTOP
export function FullHeaderDesktop({classNaming}: FullHeaderDesktopProps) {
    return(
        <header className={classNaming}>
          <LeftSideHeader />
          <RightSideHeader />
        </header>
    )
}

function LeftSideHeader() {
  const navi = useNavigate()
  return (
    <>
      <div className="left-head flex-hor" onClick={() => navi('/')}>
          <PhotoLogoChanger />
      </div>
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

function PhotoLogoChanger() {
  const location = useLocation()
  const path = location.pathname.slice(1)
  const title = path.charAt(0).toUpperCase() + path.slice(1)

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
      {!topListen ? <img src={greenLogo} alt="Logo RHS Sites" className="image-head" id="image-head" loading="lazy" /> : null}
      {!topListen ? <h1 className="title-head title-head-index">{location.pathname==="/" ? "RHS Code" : title}</h1> : <h1 className="title-head title-head-index">{location.pathname==="/" ? "" : "Voltar"}</h1>}
    </>
  )
}

// HEADER MOBILE
export function FullHeaderMobile({classNaming}: FullHeaderMobileProps) {
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
            {!topListen ? 
              <h1 className="title-head title-head-index">     {/* Se NAO estiver no topo, ele mostra rhs code se estiver nohome, ou title se nao */}
                {location.pathname==="/" ? "RHS Code" : title}
              </h1> : 
              <h1 className="title-head title-head-index"> {/* Se estiver e nao tiver na home, ele mostra rhs code */}
                {location.pathname==="/" ? "" : "Home"}
              </h1>
            }
        </div>
        <nav className="right-head flex-hor">
            <div id="scrool-head" className="flex-hor right-head-buttons-parent">
              <RedirectHeadLink toTarget='direct' isActive={location.pathname === "/direct"} />
            </div>
        </nav>
    </header>
  )
}

// FUNÇOES E COMPONENTES
export function RedirectHeadLink({toTarget, isActive}: RedirecterLinkProps) {
  const local = `/${toTarget}`
  const marker = isActive ? {filter: "invert(1)"} : {filter: "invert(0%)"}
  const imgsrc = toTarget=="portfolio" ? srvPortfolio : srvMessage
  return (
    <>
      <Link to={isActive ? "/" : local} className="button-head c-head" style={marker}>
        <img src={imgsrc} alt={local} className="button-head-image" loading="lazy" />
      </Link>
    </>
  )
}