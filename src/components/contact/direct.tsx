import React, { useEffect, useState } from 'react'
import { handleBadTypo } from '../../types/utils';
import type { InputType } from '../../types/utils';
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
    const [startTm, setStartTm] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dphone, setDphone] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, type: InputType = 'default') => {
        return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const valorLimpo = handleBadTypo(e.target.value, type)
        setter(valorLimpo);
        };
    };

    const m = 'mbd'
    const j = 'djr'

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const end = 'wd'
        const elapsedTm = Date.now() - startTm
        if (elapsedTm <3000) {
            console.error('Envio muito rapido, por favor, revise o formulário.')
            return
        }
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries()) as unknown as UserFormData
        const st = `${j}${end}`
        try {
            const res = await fetch(`https://formspree.io/f/${m}${st}`, {
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
    useEffect(() => {
        setStartTm(Date.now())
    })
    return (
        <form className="contact-email-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex-hor-contact">
                <div className='left-side-contact'>
                    <div className='introduction-explaining flex-ver'>
                        <h3>Contato direto a meus serviços</h3>
                        <i>Para entrar em contato, preencha com calma todos os campos abaixo, para que eu possa identifica-lo e de dar um retorno o mais breve possivel!</i>
                    </div>

                    <div>
                        <div className="introduction-explaining-sub">
                            <i>Primeiro, preencha com um nome ou marca que possa identifica-lo. Será usado para uma direcionar um melhor atendimento!</i>
                        </div>
                        <div className="flex-hor">
                            <input type="text" name="nameMail" className="name-email" placeholder="Nome"
                            value={name}
                            onChange={handleChange(setName, 'default')} required />
                        </div>
                    </div>
                    
                    <div>
                        <div className="introduction-explaining-sub">
                            <i>Insira um e-mail para continuidade do atendimento. Ele será usado apenas para responder a mensagem, nada mais!</i>
                        </div>
                        <div className="flex-hor">
                            <input type="email" name="formMail" 
                            className="form-email" placeholder="E-mail"
                            value={email}
                            onChange={handleChange(setEmail, 'email')} required />
                        </div>
                    </div>
                    
                    <div>
                        <div className="introduction-explaining-sub">
                            <i>Insira seu DDD e telefone caso prefira um atendimento direto ou via WhatsApp. Este campo não é obrigatório.</i>
                        </div>
                        <div className="flex-hor">
                            <div className="flex-hor" style={{ gap: "10px;"}}>
                                <input type="text" name="phonedddMail" className="phone-ddd-email" maxLength={2} inputMode='numeric' placeholder="11" style={{ width: "2.5rem;"}}
                                value={dphone} onChange={handleChange(setDphone, 'number')} />
                                <input type="text" name="phoneMail" className="phone-email" inputMode='numeric' maxLength={9} placeholder="999999999" value={phone} onChange={handleChange(setPhone, 'number')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-side-contact'>
                    <div>
                        <div className="introduction-explaining-sub">
                            <i>Qual o tipo de contato você deseja fazer? Esse campo é importante para agilizar o atendimento.</i>
                        </div>
                        <div className="flex-hor">
                            <select name="type-service-email" className="type-service-email"  required>
                                <option value="" selected disabled>Escolha...</option>
                                <option value="professional-site-creation">Criação de site</option>
                                <option value="software-related-service">Software (Troca de S.O., limpeza)</option>
                                <option value="partnership">Parceria</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name-email">Mensagem:</label>
                        <textarea className="content-email" id="content-email" placeholder="Mensagem" value={message} onChange={handleChange(setMessage, 'textarea')} required></textarea>
                        <div style={{display:'none'}} aria-hidden='true'>
                            <input type='text' name='_gotcha' tabIndex={-1} autoComplete='off' placeholder='n4o pr3ench4 1sso 5e f0r hum4n0' />
                        </div>
                    </div>
                    
                    <div>
                        {errMessage && (
                            <div style={{ color: 'red', marginBottom: '1rem' }}>
                                ⚠️ {errMessage}
                            </div>
                        )}
                        <button type="submit" className="button-main-top" disabled={loading}>
                            {loading ? 'Enviando' : 'Enviar'}
                        </button>
                    </div>
                </div>
            </div>
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