import "./ErrorPage.css"
import sadGirl from "../../assets/Imagens/meh.png"

function ErrorPage(){
    return(
        <div className="error-page-container">
            <img src={sadGirl}/>
            <h1>404</h1>
            <h2>A PÁGINA QUE VOCE ESTÁ TENTANDO ACESSAR NÃO EXISTE</h2>
        </div>
    )
}

export default ErrorPage