import React, { useState } from 'react'
import './direct.css'

interface ChildProps{
    onSucess: () => void
}
interface UserFormData{
    name: string;
    email: string;
    dddphone: string;
    phone: string;
    type: string;
    content: string
}
export function Direct() {
    const [sentView, setSentView] = useState<boolean>(false)
    return (
        <>  
            {!sentView ?
            <FormBody onSucess={() => setSentView(true)} /> : 
            <FormSucess />
            } 
        </>
    )
}

function FormBody({onSucess}: ChildProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const [errMessage, setErrMessage] = useState<string | null>(null)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries()) as unknown as UserFormData

        try {
            const res = await fetch('https://formspree.io/f/mbddjrwd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (!res.ok) throw new Error('Erro ao enviar')
            console.log("Enviado com sucesso!")
            onSucess()
        } catch (error) {
            if (error instanceof Error) {
                setErrMessage(String(error))
            } else {
                setErrMessage("Ocorreu um erro inesperado!")
            }
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form className="contact-email-form" id="contact-email-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className='introduction-explaining flex-ver'>
                    <h3>Contato direto a meus serviços</h3>
                    <i>Para entrar em contato, preencha com calma todos os campos abaixo, para que eu possa identifica-lo e de dar um retorno o mais breve possivel!</i>
            </div>
            <div className="introduction-explaining-sub">
                    <i>Primeiro, preencha com um nome ou marca que possa identifica-lo. Será usado para uma direcionar um melhor atendimento!</i>
            </div>
            <div className="flex-hor">
                    <label htmlFor="name-email">Nome/Marca:</label>
                    <input type="text" name="name-email" id="name-email" placeholder="Nome" required />
            </div>
            <div className="introduction-explaining-sub">
                    <i>Insira um e-mail para continuidade do atendimento. Ele será usado apenas para responder a mensagem, nada mais!</i>
            </div>
            <div className="flex-hor">
                    <label htmlFor="name-email">Email:</label>
                    <input type="email" name="form-email" id="form-email" placeholder="E-mail" required />
            </div>
            <div className="introduction-explaining-sub">
                    <i>Insira seu DDD e telefone caso prefira um atendimento direto ou via WhatsApp. Este campo não é obrigatório.</i>
            </div>
            <div className="flex-hor">
                    <label htmlFor="name-email">Telefone:</label>
                    <div className="flex-hor" style={{ gap: "10px;"}}>
                        <input type="text" name="phone-ddd-email" id="phone-ddd-email" maxLength={2} inputMode='numeric' placeholder="11" style={{ width: "2.5rem;"}} />
                        <input type="text" name="phone-email" id="phone-email" inputMode='numeric' maxLength={9} placeholder="999999999" />
                    </div>
            </div>
            <div className="introduction-explaining-sub">
                    <i>Qual o tipo de contato você deseja fazer? Esse campo é importante para agilizar o atendimento.</i>
            </div>
            <div className="flex-hor">
                    <select name="type-service-email" id="type-service-email" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option value="professional-site-creation">Criação de site</option>
                        <option value="software-related-service">Software (Troca de S.O., limpeza)</option>
                        <option value="partnership">Parceria</option>
                    </select>
            </div>
            <label htmlFor="name-email">Mensagem:</label>
            <textarea name="content-email" id="content-email" placeholder="Mensagem" required></textarea>
            {errMessage && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                ⚠️ {errMessage}
                </div>
            )}
            <button type="submit" className="button-main-top">
                    {loading ? 'Enviando' : 'Enviar'}
            </button>
        </form>
    )
}

function FormSucess() {
    return (
        <>
            <div className='introduction-explaining flex-ver'>
                    <h3>Formulário enviado com sucesso!</h3>
                    <i>Seu formulário já foi enviado. Irei entrar em contato em breve por um dos meios fornecidos.</i>
            </div>
        </>
    )
}