import "./portfolio.css"

import github from '@ico/github.png'

type RedirectConfigs = {
    // type safety scheme
    type: "internal" | "external",
    url: string
}

const REDIRECT_MAP: Record<string, RedirectConfigs> = {
    github: {type: 'external', url: 'https://github.com/ryanhenrqq/'},

    // Direct to website - links
    flodthecookie: {type: 'external', url: 'https://ryanhenrqq.github.io/FloodTheCookie/'},
    todotasks: {type: 'external', url: 'https://ryanhenrqq.github.io/ToDoTasks/'},
    climaopenweather: {type: 'external', url: 'https://ryanhenrqq.github.io/ToDoTasks/'},

    // Source codes (sc) - to github
    floodthecookiesc: {type: 'external', url: 'https://github.com/ryanhenrqq/FloodTheCookie'},
    ooniquepasssc: {type: 'external', url: 'https://github.com/ryanhenrqq/OoniquePass'},
    kalccalculadorasc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadora'},
    todotaskssc: {type: 'external', url: 'https://github.com/ryanhenrqq/ToDoTasks'},
    climaopenweathersc: {type: 'external', url: 'https://github.com/ryanhenrqq/ClimaComOpenWeather'},
    kalccalculadoralitesc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadoraLite'}
}

export function MainPortfolio() {
    function handleRedirects(target: number) { 
        // temporary function only for testing
        switch (target) {
            case 0:
                window.location.href = "https://github.com/ryanhenrqq"
                break
            case 1:
                alert("Hello!")
                break

        }
    }
    return (
        <>
            <main className="flex-ver gapper">
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src={github} alt="GitHub" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name='GitHub' description='Meu perfil profissional do GitHub, contendo todo o meu portfólio.' />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button onClick={() => handleRedirects(0)}>Abrir</button>
                        </div>
                    </div>
                </div>
                <h3>Projetos solidos</h3>
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/FloodTheCookie/src/res/fav/favicon.png" alt="" loading="lazy" />
                            <HeaderNameGenerator name='FloodTheCookie' description="Jogo Point-n-Click interativo e relaxante!" />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="portfolio-written-lang"/>
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://raw.githubusercontent.com/ryanhenrqq/OoniquePass/main/res/favicon.png" />
                            <HeaderNameGenerator name="OoniquePass" description="Gerador de senhas simples e objetivo." />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button disabled>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="portfolio-written-lang"/>
                        </div>
                    </div>
                </div>
                
                <h3>Projetos em desenvolvimento</h3>
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://raw.githubusercontent.com/ryanhenrqq/KalcCalculadora/main/src/res/calculator.png" alt="" style={{filter: "invert(1)" }}loading="lazy" />
                            <HeaderNameGenerator name="KalcCalculadora" description="Aplicativo web de calculadora e formulas." />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button disabled>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React" className="portfolio-written-lang" />
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/ToDoTasks/components/res/icon/task.svg" alt="" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name="ToDoTasks" description="Crie tarefas e lembretes pelo navegador!" />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="portfolio-written-lang" />
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/ClimaComOpenWeather/components/res/icon/sun.svg" alt="" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name="Clima com OpenWeather" description="Demo de um App de Clima pronto para a API OpenWeather" />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="portfolio-written-lang" />
                        </div>
                    </div>
                </div>
                
                <h3>Rascunhos (ou Limbo)</h3>
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://img.icons8.com/ios-filled/100/no-image.png" alt="" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name="KalcCalculadora Lite" description="Aplicativo android de calculadora e formulas." />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button disabled>Abrir</button>
                            <button>Visitar Codigo-Fonte</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className="portfolio-written-lang" />
                        </div>
                    </div>
                </div>
            </main>    
        </>
    )
}

interface PropsDefinerHeader {
    name: string,
    description: string
}

function HeaderNameGenerator({name, description}: PropsDefinerHeader) {
    return (
        <div className="flex-ver">
            <b>{name}</b>
            <p>{description}</p>
        </div>
    )
}