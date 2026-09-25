import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import { createHashRouter, RouterProvider, Outlet, Link, useLocation } from 'react-router-dom'

const HomePage = lazy(() => import('./components/home/main'))
const MainPortfolio = lazy(() => import('./components/projects/portfolio'))
const Direct = lazy(() => import('./components/contact/direct'))
const RoyaltiesPage = lazy(() => import('./components/royalties'))
const NotFoundPage = lazy(() => import('./components/404'))
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