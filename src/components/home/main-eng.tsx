import type { MainHomeProps, Language } from "../../types/types"
import { Link } from "react-router-dom"

import pyAndJs from '@logo/python-js.png'
import python from '@logo/python.png'
//import react from '@logo/jsx.png'
import typescript from '@logo/typescript.png'
//import java from '@logo/java.png'
import srvMessage from '@ico/comment.png'
import srvPortfolio from '@ico/services-portfolio.png'
//import question from '@ico/question.png'
import greenLogo from '/logo-image.png'
import backgroundVSCode from '@img/vs-code-photo.jpg'
import macbookDesk from '@img/panoramic-laptop.png'

export function MainHomeEnglish({ currentLang, onLanguageChange }: MainHomeProps) {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onLanguageChange(e.target.value as Language);
    };
    return (
        <>
            <main className="flex-ver main-ct-1">
                <select className="lang-sel-body" value={currentLang} onChange={handleSelectChange}>
                    <option value="pt">PT</option>
                    <option value="eng">EN</option>
                </select>
                <div className="flex-hor">
                    <div className="flex-ver index-txt">
                        <div className="flex-hor">
                            <img src={greenLogo} alt="Logo RHS Sites" className="image-head-inside-main" id="image-head" loading="lazy" />
                            <div className="flex-ver-cambeable">
                                <h4>Meet</h4>
                                <b className="index-txt-limedup">RHS Code</b>
                            </div>
                        </div>
                        <div className="index-txt-toptext">
                            <p style={{textAlign:'left'}}>I'm a Front-End Developer focused on creating the best, most user-friendly interfaces for your business. I build solutions that elevate your professional website by keeping things simple, intuitive, and powerful.</p>
                            <p style={{textAlign:'left'}}>Practical experience and personal projects written in:</p>
                        </div>
                        <div className="experience-tab-flex">
                            <div className="experience-tab">
                                <img src={python} alt="Python Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>Python</div>
                                </div>
                            </div>
                            <div className="experience-tab">
                                <img src={typescript} alt="TS Logo" draggable="false" loading="lazy" />
                                <div className="right-experience-tab">
                                    <div>TypeScript</div>
                                </div>
                            </div>
                        </div>
                        <div className="index-txt-toptext">
                            <p style={{textAlign:'left'}}>You may be viewing the sources on my&nbsp;<a href="https://github.com/ryanhenrqq/">GitHub</a>&nbsp;profile.</p>
                        </div>
                        <div className="flex-hor-buttons">
                            <Link to="/direct" className="button-main-top">
                                <img src={srvMessage} alt="GitHub" className="button-main-image" loading="lazy" />
                                <div className="button-main-top-txt">Contact</div>
                            </Link>
                            <Link to="/portfolio" className="button-main-top">
                                <img src={srvPortfolio} alt="Portfólio" className="button-main-image" loading="lazy" />
                                <div className="button-main-top-txt">Portfólio</div>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="image-side-main">
                        <img src={pyAndJs} alt="Logos de Python e JavaScript" className="main-splash-img" draggable="false" loading="lazy" />
                    </div>
                </div>
                <div className="flex-ver main-container-second-tb">
                    <img src={backgroundVSCode} alt="VS Code Photo" className="secondTb-img-back" loading="lazy" />
                    <div className="flex-ver child-container-second-tb">
                        <h3 className="secTb-title">Areas of Practice</h3>
                        <div className="secondTb">
                            <div className="flex-ver">
                                <div className="second-tb-badge-div">
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="secTb-badges-logo" loading="lazy" />
                                    <div className="secTb-badges-logo-shadow"></div>
                                </div>
                                <p>Python was the language that taught me programming logic and sparked my passion for building software and pursuing a career in tech. While it’s not my primary focus today—since it lacks native support for mobile or web devices—it’s still fantastic for desktop apps and automation.</p>
                            </div>
                            <div className="flex-ver">
                                <div className="second-tb-badge-div">
                                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" className="secTb-badges-logo" loading="lazy" />
                                    <div className="secTb-badges-logo-shadow"></div>
                                </div>
                                <p>JavaScript drew me in because of its incredible responsiveness and the endless possibilities it offers for the web. I was actually ambitious enough to try learning Java first, until I stumbled upon JS 😅. My main focus right now is on React and TypeScript.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-ver main-container-thirty-tb">
                    <h3 className="thirtyTb-title">Why choose RHS Code?</h3>
                    <div className="flex-ver child-container-thirty-tb">
                        <div className="thirtyTb">
                            <div className="image-side-thirdy">
                                <img src={macbookDesk} alt="" className="main-thirdy-img" loading="lazy" />
                            </div>
                            <div className="flex-ver index-txt">
                                <p>I bring clean, flawless organization to your next website. Every line of code is well-structured and clearly documented, making future maintenance effortless and much more cost-effective for you.</p>
                                <p>Let's face it: messy, outdated, and unoptimized code is a nightmare for anyone trying to maintain your site. On the other hand, clean code ensures your site stays highly optimized and fully compatible with the latest browser engines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}