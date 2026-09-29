import { useState, useEffect } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet, Link, useLocation } from 'react-router-dom'

import { HomePage } from './components/home/main'
import { MainPortfolio } from './components/projects/portfolio'
import { Direct } from './components/contact/direct'
import { RoyaltiesPage } from './components/royalties'
import { NotFoundPage } from './components/404'
import type { Language } from './types/types'
import { FullHeaderDesktop, FullHeaderMobile  } from './components/header/header'
import { useIsMobile } from './types/mobile'

const loadingScreen = document.getElementById("loading-screen")

if (loadingScreen) {
  loadingScreen.remove()
}

const route = createHashRouter([
  {
    path: "/",
    element: <DesktopHeader />,
    children: [
      {
        index: true,
        element: <HomePage />
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
      <main>
        {!mobView?<FullHeaderDesktop classNaming="desktopView full-head-desktop" />:<FullHeaderMobile classNaming="mobileView full-head-mobile" />}
        <div className="main">
          <Outlet context={{ lang, setLang }} />
        </div>
        <FooterGlobal />
      </main>
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

export default App