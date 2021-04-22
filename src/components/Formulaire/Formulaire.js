import { useEffect, useState } from 'react'

import styles from './Formulaire.module.css'

export const Formulaire = () => {
    /*
    const [login, setLogin] = useState('');
    const [mdp, setMdp] = useState('')

    const handlerOnchangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const handlerOnchangeMdp = (e) => {
        setMdp(e.target.value)
    }
    */

    const [form, setForm] = useState({
        login: '',
        mdp: ''
    })

    const handlerOnchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({...form, [name]: value })
    }

    return <>
        <h1 className={styles.title}>
            Le formulaire !
        </h1>
        <form>
            <div>
                <label className={styles.label} htmlFor="login">Login</label>
                <input id="login" value={form.login} placeholder="Entrez votre login" onChange={handlerOnchange} type="text" name="login" />
            </div>
            <div>
                <label className={styles.label} htmlFor="mdp">Mot de passe</label>
                <input id="mdp" value={form.mdp} type="password" onChange={handlerOnchange} placeholder="Entrez votre mot de passe" name="mdp" />
            </div>
            <div>
                <input type="submit" value="Envoyer" />
            </div>
        </form>
    </>
}
