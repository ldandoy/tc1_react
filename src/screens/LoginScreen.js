import { Link } from 'react-router-dom'
import { Formulaire } from '../components/Formulaire/Formulaire'

const LoginScreen = () => {
    return <>
        <h1>Login Screen</h1>
        <Formulaire />
        <Link to='/hello'>Dire Bonjour</Link>
    </>
}

export default LoginScreen