import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet, Link, useNavigate, useLocation } from 'react-router-dom'

const HomePage = lazy(() => import('./components/home/main'))
const MainPortfolio = lazy(() => import('./components/projects/portfolio'))
const Direct = lazy(() => import('./components/contact/direct'))
const RoyaltiesPage = lazy(() => import('./components/royalties'))
const NotFoundPage = lazy(() => import('./components/404'))
import type { Language, RedirecterLinkProps, FullHeaderDesktopProps, FullHeaderMobileProps } from './types/types'
import { useIsMobile } from './types/mobile'

import greenLogo from '/logo-image.png'
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
        element: (
          <Suspense fallback={<LoadingDown />} >
            <HomePage />
          </Suspense>
        )
      },
      {
        path: "/portfolio",
        element: (
          <Suspense fallback={<LoadingDown />} >
            <MainPortfolio />
          </Suspense>
        )
      },
      {
        path: "/direct",
        element: (
          <Suspense fallback={<LoadingDown />} >
            <Direct />
          </Suspense>
        )
      },
      {
        path: "/royalties",
        element: (
          <Suspense fallback={<LoadingDown />} >
            <RoyaltiesPage />
          </Suspense>
        )
      },
      {
        path:"*",
        element: (
          <Suspense fallback={<LoadingDown />} >
            <NotFoundPage />
          </Suspense>
          )
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
  const [lang, setLang] = useState<Language>('pt')
  const { pathname } = useLocation();
  const mobView = useIsMobile(768)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <main>
        {!mobView?<FullHeaderDesktop classNaming="desktopView full-head-desktop" />:<FullHeaderMobile classNaming="mobileView full-head-mobile" />}
        <div className="main">
          <Outlet context={{ lang, setLang }} />
        </div>
        <FooterGlobal />
      </main>
    </>
  )
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

function FooterGlobal() {
  return (
    <>
      <footer>
        <div>
          <div className="flex-hor-footer">
            <a>Sobre</a>
            <a href="https://ko-fi.com/rhscode">Doação</a>
          </div>
          <div className="flex-hor-footer">
            <Link to="/royalties">Créditos de Uso</Link>
            <a href="https://ryanhenrqq.github.io/RHSSites/">Compartibilidade</a>
          </div>
        </div>
        <div className="last-line-footer">
          <small><b>© 2024 RHS Code </b> - é uma marca digital criada por Ryan Henrique</small>
        </div>
      </footer>
    </>
  )
}

function LoadingDown() {
  return(
    <div style={
      {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:'2rem'
      }
      }>
      <h3>Carregando pagina...</h3>
      <p>Não se preocupe, vai ser rápido!</p>
    </div>
  )
}

export default App