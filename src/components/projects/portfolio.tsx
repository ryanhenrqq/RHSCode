import "./portfolio.css"

import github from '@ico/github.png'
import instagramIcon from '@ico/instagram.png'
import linkedinIcon from '@ico/linkedin.png'

import type { CardGeneratorObjects, RedirectConfigs, PropsDefinerHeader } from "../../types/types"

const REDIRECT_MAP: Record<string, RedirectConfigs> = {
    github: {type: 'external', url: 'https://github.com/ryanhenrqq/'},
    instagram: {type: 'external', url: 'https://www.instagram.com/rhs.code/'},
    linkedin: {type: 'external', url: 'https://www.linkedin.com/in/ryan-silva-791677300/?locale=pt-BR'},

    // Direct to website - links
    floodthecookie: {type: 'external', url: 'https://ryanhenrqq.github.io/FloodTheCookie/'},
    todotasks: {type: 'external', url: 'https://ryanhenrqq.github.io/ToDoTasks/'},
    todotasksts: {type: 'external', url: 'https://ryanhenrqq.github.io/ToDoTasks-Ts/'},
    climaopenweather: {type: 'external', url: 'https://ryanhenrqq.github.io/ClimaComOpenWeather/'},
    rweather: {type: 'external', url: 'https://rweather-alpha.vercel.app/'},

    // Source codes (sc) - to github
    floodthecookiesc: {type: 'external', url: 'https://github.com/ryanhenrqq/FloodTheCookie'},
    ooniquepasssc: {type: 'external', url: 'https://github.com/ryanhenrqq/OoniquePass'},
    kalccalculadorasc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadora'},
    todotaskssc: {type: 'external', url: 'https://github.com/ryanhenrqq/ToDoTasks'},
    todotaskstssc: {type: 'external', url: 'https://github.com/ryanhenrqq/ToDoTasks-Ts'},
    climaopenweathersc: {type: 'external', url: 'https://github.com/ryanhenrqq/ClimaComOpenWeather'},
    kalccalculadoralitesc: {type: 'external', url: 'https://github.com/ryanhenrqq/KalcCalculadoraLite'},
    rweathersc: {type: 'external', url: 'https://github.com/ryanhenrqq/RWeather'}
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
                    <CardGenerator projName="GitHub" projDesc="Meu perfil profissional do GitHub, contendo todo o meu portfólio." imgSrc={github} invertImg={true} hasPage={true} redirectPg="github" redirectSource="" badgeSrc="" />
                    <CardGenerator projName="Instagram" projDesc="Eu faço conteúdo abordando Programação e CyberSegurança. Você vai gostar!" imgSrc={instagramIcon} invertImg={false} hasPage={true} redirectPg="instagram" redirectSource="" badgeSrc="" />
                    <CardGenerator projName="Linkedin" projDesc="Uma visão geral para empresas. Tem muita coisa interessante aqui." imgSrc={linkedinIcon} invertImg={false} hasPage={true} redirectPg="linkedin" redirectSource="" badgeSrc="" />
                </div>
                <h3>Projetos solidos</h3>
                <div className="portfolio-grid">
                    <CardGenerator projName="FloodTheCookie" projDesc="Jogo Point-n-Click interativo e relaxante!" imgSrc="https://ryanhenrqq.github.io/FloodTheCookie/src/res/fav/favicon.png" invertImg={false} hasPage={true} redirectPg="floodthecookie" redirectSource="floodthecookiesc" badgeSrc="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
                    <CardGenerator projName="ToDoTasks" projDesc="Crie tarefas e lembretes pelo navegador! Recriado em TypeScript" imgSrc="https://ryanhenrqq.github.io/ToDoTasks/components/res/icon/task.svg" invertImg={true} hasPage={true} redirectPg="todotasksts" redirectSource="todotaskstssc" badgeSrc="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" />
                    <CardGenerator projName="OoniquePass" projDesc="Gerador de senhas simples e objetivo." imgSrc="https://raw.githubusercontent.com/ryanhenrqq/OoniquePass/main/res/favicon.png" invertImg={false} hasPage={false} redirectPg="" redirectSource="ooniquepasssc" badgeSrc="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
                </div>
                
                <h3>Projetos em desenvolvimento</h3>
                <div className="portfolio-grid">
                    <CardGenerator projName="RWeather (Destaque)" projDesc="Webapp para consultar condições climaticas, pesquisando pelo nome de sua cidade. Usa API." imgSrc="https://raw.githubusercontent.com/ryanhenrqq/RWeather/main/public/favicon.png" invertImg={true} hasPage={true} redirectPg="rweather" redirectSource="rweathersc" badgeSrc="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" />
                    <CardGenerator projName="KalcCalculadora" projDesc="Aplicativo web de calculadora e formulas." imgSrc="https://raw.githubusercontent.com/ryanhenrqq/KalcCalculadora/main/src/res/calculator.png" invertImg={true} hasPage={false} redirectPg="" redirectSource="kalccalculadorasc" badgeSrc="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
                    <CardGenerator projName="ToDoTasks Legacy" projDesc="Crie tarefas e lembretes pelo navegador!" imgSrc="https://ryanhenrqq.github.io/ToDoTasks/components/res/icon/task.svg" invertImg={true} hasPage={true} redirectPg="todotasks" redirectSource="todotaskssc" badgeSrc="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
                    <CardGenerator projName="Clima com OpenWeather" projDesc="Demo de um App de Clima pronto para a API OpenWeather" imgSrc="https://ryanhenrqq.github.io/ClimaComOpenWeather/components/res/icon/sun.svg" invertImg={true} hasPage={true} redirectPg="climaopenweather" redirectSource="climaopenweathersc" badgeSrc="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
                </div>
                
                <h3>Rascunhos (ou Limbo)</h3>
                <div className="portfolio-grid">
                    <CardGenerator projName="KalcCalculadora Lite" projDesc="Aplicativo android de calculadora e formulas." imgSrc="https://img.icons8.com/ios-filled/100/no-image.png" invertImg={true} hasPage={false} redirectPg="" redirectSource="kalccalculadoralitesc" badgeSrc="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
                </div>
            </main>    
        </>
    )
}

function CardGenerator({projName, projDesc, imgSrc, invertImg, hasPage, redirectPg, redirectSource, badgeSrc}: CardGeneratorObjects) {
    return(
        <div className="flex-ver portfolio-item-container">
            <div className="header-item-container">
                {invertImg?
                    <img src={imgSrc} alt="" style={{filter: "invert(1)"}} loading="lazy" />:
                    <img src={imgSrc} alt="" loading="lazy" />
                }
                <HeaderNameGenerator name={projName} description={projDesc} />
            </div>
            <div className="flex-hor main-item-container">
                {
                    hasPage?<button onClick={() => handleRedirect(`${redirectPg}`)}>Abrir</button>:
                    <button disabled>Abrir</button>
                }
                {
                    redirectSource!=''?<button onClick={() => handleRedirect(`${redirectSource}`)}>GitHub</button>:null
                }
            </div>
            {badgeSrc!=''?
                <div className="flex-hor footer-item-container">
                    <b>Escrito em </b>
                    <img src={badgeSrc} alt="" className="portfolio-written-lang" />
                </div>:
                null
            }
            
        </div>
    )
}

function HeaderNameGenerator({name, description}: PropsDefinerHeader) {
    return (
        <div className="flex-ver card-name-portfolio">
            <b>{name}</b>
            <p>{description}</p>
        </div>
    )
}