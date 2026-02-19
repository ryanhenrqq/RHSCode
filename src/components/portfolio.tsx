import "./portfolio.css"

export function MainPortfolio() {
    return (
        <>
            <main className="flex-ver gapper">
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="../src/res/ico/github.png" alt="GitHub" style={{filter: "invert(1)"}} loading="lazy" />
                            <div className="flex-ver">
                                <b>GitHub</b>
                                <p>Meu perfil profissional do GitHub, contendo todo o meu portfólio.</p>
                            </div>
                        </div>
                        <div className="flex-ver main-item-container">
                            <button>Abrir</button>
                        </div>
                    </div>
                </div>
                <h3>Projetos solidos</h3>
                <div className="portfolio-grid">
                    <div className="flex-ver portfolio-item-container">
                        <div className="header-item-container">
                            <img src="https://ryanhenrqq.github.io/FloodTheCookie/src/res/fav/favicon.png" alt="" loading="lazy" />
                            <div className="flex-ver">
                                <b>FloodTheCookie</b>
                                <p>Jogo Point-n-Click interativo e relaxante!</p>
                            </div>
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
                            <div className="flex-ver">
                                <b>OoniquePass</b>
                                <p>Gerador de senhas simples e objetivo.</p>
                            </div>
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
                            <div className="flex-ver">
                                <b>KalcCalculadora</b>
                                <p>Aplicativo web de calculadora e formulas.</p>
                            </div>
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
                            <div className="flex-ver">
                                <b>ToDoTasks</b>
                                <p>Crie tarefas e lembretes pelo navegador!</p>
                            </div>
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
                            <div className="flex-ver">
                                <b>Clima com OpenWeather</b>
                                <p>Demo de um App de Clima pronto para a API OpenWeather</p>
                            </div>
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
                            <div className="flex-ver">
                                <b>KalcCalculadora Lite</b>
                                <p>Aplicativo android de calculadora e formulas.</p>
                            </div>
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