import "../App.css"
import { Link } from "react-router-dom"

import github from "@ico/github.png"
import back from "@ico/return-button.png"

export function NotFoundPage() {
    const gaussianBlurDarker = {
        backgroundColor: "#0000007d",
        backdropFilter: "blur(5px)",
        border: "solid 1px rgba(255, 255, 255, 0.492)"
    }
    return (
        <>
            <main className="flex-ver gapper">
                <div className="flex-hor">
                    <h2>404 (NOT FOUND)</h2>
                </div>
                <h4>A pagina requisitada não existe ou está temporariamente indisponivel.</h4>
                <div style={{gap:"24px;"}}>
                    <h3>Você ainda pode tentar:</h3>
                    <div style={{display:"flex",flexDirection: "row", gap: "12px"}}>
                        <Link to="/" style={gaussianBlurDarker} className="button-head">
                            <img src={github} alt="GitHub" className="button-head-image" />
                            <p>Github</p>
                        </Link>
                        <Link to="/" style={gaussianBlurDarker} className="button-head">
                            <img src={back} alt="Return" className="button-head-image" style={{filter:"invert(1);"}} />
                            <p>Voltar</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}