import {Link} from 'react-router-dom'

import { Helloworld } from '../components/Helloworld/Helloworld'
import { Greeting } from '../components/Greeting/Greeting'

const HelloScreen = () => {
    return <>
        <h1>Hello Screen</h1>
        <Helloworld />
        <Greeting name="Paul" />
        <Link to='/'>Retour au login</Link>
    </>
}

export default HelloScreen