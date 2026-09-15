import "./portfolio.css"

import github from '@ico/github.png'
import instagramIcon from '@ico/instagram.png'
import linkedinIcon from '@ico/linkedin.png'

type RedirectConfigs = {
    // type safety scheme
    type: "internal" | "external",
    url: string
}

const REDIRECT_MAP: Record<string, RedirectConfigs> = {
    github: {type: 'external', url: 'https://github.com/ryanhenrqq/'},
    instagram: {type: 'external', url: 'https://www.instagram.com/rhs.code/'},
    linkedin: {type: 'external', url: 'https://www.linkedin.com/in/ryan-silva-791677300/?locale=pt-BR'},

    // Direct to website - links
    floodthecookie: {type: 'external', url: 'https://ryanhenrqq.github.io/FloodTheCookie/'},
    todotasks: {type: 'external', url: 'https://ryanhenrqq.github.io/ToDoTasks/'},
    climaopenweather: {type: 'external', url: 'https://ryanhenrqq.github.io/ClimaComOpenWeather/'},

    // Source codes (sc) - to github
    floodthecookiesc: {type: 'external', url: 'https://github.com/ryanhenrqq/FloodTheCookie'},
    ooniquepasssc: {type: 'external', url: 'https://github.com/ryanhenrqq/OoniquePass'},
    kalccalculadorasc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadora'},
    todotaskssc: {type: 'external', url: 'https://github.com/ryanhenrqq/ToDoTasks'},
    todotaskstssc: {type: 'external', url: 'https://github.com/ryanhenrqq/ToDoTasks-Ts'},
    climaopenweathersc: {type: 'external', url: 'https://github.com/ryanhenrqq/ClimaComOpenWeather'},
    kalccalculadoralitesc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadoraLite'}
}

const handleRedirect = (key: string) => {
    const config = REDIRECT_MAP[key]
    if (!config) {
        console.error(`Configuração de redirecionamento não encontrada para ${key}`);
        return;
    }
    if (config.type === 'external') {
        window.open(config.url, '_blank', 'noopener,noreferrer'); //Abre em nova aba
    } else {
        // reservado a links internos
    }
}

export function MainPortfolio() {
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
                            <button onClick={() => handleRedirect('github')}>Abrir</button>
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src={instagramIcon} alt="Instagram" loading="lazy" />
                            <HeaderNameGenerator name='Instagram' description='Eu faço conteúdo abordando Programação e CyberSegurança. Você vai gostar!' />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button onClick={() => handleRedirect('instagram')}>Abrir</button>
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src={linkedinIcon} alt="Linkedin" loading="lazy" />
                            <HeaderNameGenerator name='Linkedin' description='Uma visão geral para empresas. Tem muita coisa interessante aqui.' />
                        </div>
                        <div className="flex-ver main-item-container">
                            <button onClick={() => handleRedirect('linkedin')}>Abrir</button>
                        </div>
                    </div>
                </div>
                <h3>Projetos solidos</h3>
                <div className="portfolio-grid-two">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/FloodTheCookie/src/res/fav/favicon.png" alt="" loading="lazy" />
                            <HeaderNameGenerator name='FloodTheCookie' description="Jogo Point-n-Click interativo e relaxante!" />
                        </div>
                        <div className="flex-hor main-item-container">
                            <button onClick={() => handleRedirect('floodthecookie')}>Abrir</button>
                            <button onClick={() => handleRedirect('floodthecookiesc')}>GitHub</button>
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
                        <div className="flex-hor main-item-container">
                            <button disabled>Abrir</button>
                            <button onClick={() => handleRedirect('ooniquepasssc')}>GitHub</button>
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
                        <div className="flex-hor main-item-container">
                            <button disabled>Abrir</button>
                            <button onClick={() => handleRedirect('kalccalculadorasc')}>GitHub</button>
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
                            <HeaderNameGenerator name="ToDoTasks Legacy" description="Crie tarefas e lembretes pelo navegador!" />
                        </div>
                        <div className="flex-hor main-item-container">
                            <button onClick={() => handleRedirect('todotasks')}>Abrir</button>
                            <button onClick={() => handleRedirect('todotaskssc')}>GitHub</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="portfolio-written-lang" />
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/ToDoTasks/components/res/icon/task.svg" alt="" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name="ToDoTasks" description="Crie tarefas e lembretes pelo navegador! Recriado em TypeScript" />
                        </div>
                        <div className="flex-hor main-item-container">
                            <button disabled>Abrir</button>
                            <button onClick={() => handleRedirect('todotaskstssc')}>GitHub</button>
                            <button>Reportar Bug</button>
                        </div>
                        <div className="flex-hor footer-item-container">
                            <b>Escrito em </b>
                            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="JavaScript" className="portfolio-written-lang" />
                        </div>
                    </div>
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/ClimaComOpenWeather/components/res/icon/sun.svg" alt="" style={{filter: "invert(1)"}} loading="lazy" />
                            <HeaderNameGenerator name="Clima com OpenWeather" description="Demo de um App de Clima pronto para a API OpenWeather" />
                        </div>
                        <div className="flex-hor main-item-container">
                            <button onClick={() => handleRedirect('climaopenweather')}>Abrir</button>
                            <button onClick={() => handleRedirect('climaopenweathersc')}>GitHub</button>
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
                        <div className="flex-hor main-item-container">
                            <button disabled>Abrir</button>
                            <button onClick={() => handleRedirect('kalccalculadoralitesc')}>GitHub</button>
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
        <div className="flex-ver card-name-portfolio">
            <b>{name}</b>
            <p>{description}</p>
        </div>
    )
}