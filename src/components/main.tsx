import "./main.css"
import { Link } from "react-router-dom"

import pyAndJs from '@logo/python-js.png'
import python from '@logo/python.png'
import react from '@logo/jsx.png'
import typescript from '@logo/typescript.png'
import java from '@logo/java.png'
import srvMessage from '@ico/comment.png'
import question from '@ico/question.png'
import github from '@ico/github.png'
import back from '@ico/return-button.png'

import backgroundVSCode from '@img/vs-code-photo.jpg'

export function MainHome() {
    const gaussianBlurDarker = {
        backgroundColor: "#0000007d",
        backdropFilter: "blur(5px)",
        border: "solid 1px rgba(255, 255, 255, 0.492)"
    }
    return (
        <>
            <main className="flex-ver" id="pt-version-index">
                <select className="lang-sel-body">
                    <option value="port">PT</option>
                    <option value="eng">EN</option>
                </select>
                <div className="flex-hor">
                    <div className="flex-ver index-txt">
                        <h3>Olá, eu sou o Ryan 👋</h3>
                        <p>Sou um Programador Front End, focado em criar as melhores e mais amigáveis interfaces de usuário para a sua empresa. Consigo criar as melhores soluções para elevar o nivel de seu website profissional, focando na simplicidade de comandos simples, mas poderosos!</p>
                        <p>Experiencia prática e projetos pessoais escritos em:</p>
                        <div className="experience-tab-flex">
                            <div className="experience-tab">
                                <img src={python} alt="Python Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>Python</div>
                                </div>
                            </div>
                            <div className="experience-tab">
                                <img src={react} alt="React Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>React</div>
                                </div>
                            </div>
                        </div>
                        <p>Criando nova experiencia ativamente em:</p>
                        <div className="experience-tab-flex">
                            <div className="experience-tab">
                                <img src={java} alt="Java Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>Java</div>
                                </div>
                            </div>
                            <div className="experience-tab">
                                <img src={typescript} alt="TS Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>TypeScript</div>
                                </div>
                            </div>
                        </div>
                        <p>Você pode estar vendo as fontes no meu perfil do GitHub.</p>
                        <Link to="/direct" id="contact-now" className="button-main-top" style={gaussianBlurDarker}>
                            <img src={srvMessage} alt="GitHub" className="button-main-image" loading="lazy" />
                            <span>Contate-me</span>
                        </Link>
                    </div>
                    <div className="image-side-main">
                        <img src={pyAndJs} alt="Logos de Python e JavaScript" className="main-splash-img" draggable="false" loading="lazy" />
                    </div>
                </div>
                <div className="flex-ver main-container-second-tb">
                    <img src={backgroundVSCode} alt="VS Code Photo" className="secondTb-img-back" loading="lazy" />
                    <div className="flex-ver child-container-second-tb">
                        <h3 className="secTb-title">Áreas de Atuação</h3>
                        <div className="secondTb">
                            <div className="flex-ver">
                                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="secTb-badges-logo" loading="lazy" />
                                <p>Python foi a linguagem que me ensinou a logica da programação, me fez descobrir o gosto de criar novos programas e continuar nesta area. Atualmente, não é o meu principal foco por não ter suporte a outros dispositivos, mas é otimo para programas desktops e automações.</p>
                            </div>
                            <div className="flex-ver">
                                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="secTb-badges-logo" loading="lazy" />
                                <p>JavaScript é a linguagem que mais tive interesse de aprender pela incrivel responsividade e possibilidades online dentro dela, fui tentar ser ambicioso de aprender Java até conhecer essa aí 😅. Meu foco principal esta sendo os frameworks React & Typescript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-ver main-container-thirty-tb">
                    <h3 className="thirtyTb-title">Por que escolher o RHS Code?</h3>
                    <div className="flex-ver child-container-thirty-tb">
                        <div className="thirtyTb">
                            <div className="image-side-main">
                                <img src={question} alt="" className="main-splash-img" loading="lazy" />
                            </div>
                            <div className="flex-ver index-txt">
                                <p>Eu faço um trabalho de organização impecavel em seu proximo site! Todos os codigos ficam bem declarados e organizados em cada canto, fazendo assim uma manutenção posterior muito mais facil e amigavel pro seu bolso.</p>
                                <p>Há de concordar que um codigo todo bagunçado, antigo e mal-otimizado é muito menos amigavel pra quem irá fazer algum conserto do codigo de seu site! Fora que algo mais limpo irá, com toda certeza, deixar o seu site o mais otimizado possivel e, compartivel com os motores de navegação mais recentes presentes nos navegadores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}