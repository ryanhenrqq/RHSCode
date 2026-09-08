import "./royalties.css"

// First implementation! (8/9/26) - I't will be better distributed and organized
export function RoyaltiesPage() {
    return (
        <>
            <h1 className="section flex-col">Icones</h1>
            <ul className="section-list flex-col">
                <li>
                    <h1>Flaticon</h1>
                    <a href="www.flaticon.com">flaticon.com</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/return" title="return icons">Return icons created by Magnific - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/message" title="message icons">Message icons created by apien - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Magnific - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Magnific - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by SeyfDesigner - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by NajmunNahar - Flaticon</a>
                </li>
                <li>
                    <span>missing anchor - services-portfolio</span>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/shine" title="shine icons">Shine icons created by Magnific - Flaticon</a>
                </li>
            </ul>
            <h1 className="section flex-col section-divider">Linguagens e Frameworks</h1>
            <ul className="section-list flex-col">
                <li>
                    <i>Python: Logotipo e marca registrada da Python Software Foundation. Usado para fins informativos.</i>
                </li>
                <li>
                    <i>JavaScript: Marca registrada da Oracle Corporation (e mantida pela comunidade open-source). Usado para fins informativos.</i>
                </li>
                <li>
                    <i>React / React Native: Logotipos pertencentes à Meta Platforms, Inc.</i>
                </li>
                <li>
                    <i>TypeScript: Logotipo e marca registrada da Microsoft Corporation. Usado para fins informativos.</i>
                </li>
                <li>
                    <i>Java: Logotipo, nome e marca registrada da Oracle Corporation e/ou de suas afiliadas. Usado para fins informativos.</i>
                </li>
            </ul>
        </>
    )
}