import './direct.css'

export function Direct() {
    function tempNotWorking() {
        if (confirm("O seguinte formulário não está ativo nesse repositorio. Para usa-lo, você deve ir a pagina legada e preencher as suas informações para contato direto.\n\nDeseja ser redirecionado agora?")) {
            window.location.href = "https://ryanhenrqq.github.io/RHSSites/pg/contact.html"
        } else {
            console.log("Redirecionamento cancelado.")
        }
    }
    return (
        <>
            <form className="contact-email-form" id="contact-email-form" autoComplete="off">
                <h3></h3>
                <label htmlFor="name-email">Nome e Sobrenome:</label>
                <input type="text" name="name-email" id="name-email" placeholder="Nome" required />
                <label htmlFor="name-email">Email:</label>
                <input type="email" name="form-email" id="form-email" placeholder="E-mail" required />
                <label htmlFor="name-email">Telefone:</label>
                <div className="flex-hor" style={{ gap: "10px;"}}>
                    <input type="number" name="phone-ddd-email" id="phone-ddd-email" max="999" min="10" placeholder="DDD" style={{ width: "2.5rem;"}} required />
                    <input type="number" name="phone-email" id="phone-email" placeholder="Numero de Telefone" required />
                </div>
                <label htmlFor="name-email">Tipo de requisição:</label>
                <select name="type-service-email" id="type-service-email" required>
                    <option value="" selected disabled>Escolha...</option>
                    <option value="professional-site-creation">Serviço de criação de site profissional</option>
                    <option value="software-related-service">Serviço em software (Formatação, limpeza, etc)</option>
                    <option value="partnership">Parceria de serviços</option>
                    <option value="other">Outro (Especifique na mensagem)</option>
                </select>
                <label htmlFor="name-email">Mensagem:</label>
                <textarea name="content-email" id="content-email" placeholder="Mensagem" required></textarea>
                <input type="text" name="_gotcha" style={{ display: "none"}} /> 
                <button type="submit" className="button-main-top" onClick={tempNotWorking}>Enviar</button>
            </form>
        </>
    )
}