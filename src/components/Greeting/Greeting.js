import React from 'react'

import styles from './Greeting.module.css'

export class Greeting extends React.Component {
    
    constructor(props) {
        super(props);

        console.log("From constructeur")

        this.state = { name: props.name}
    }

    componentDidMount() {
        console.log("From Mount")
    }

    componentWillUnmount() {
        console.log("From Unmount")
    }

    render() {
        return(<h1 className={styles.title}>Hello {this.state.name} !</h1>)
    }

}

/*export function Greeting(props) {
    let name = props.name

    return <h1>Hello {name} !</h1>
}*/