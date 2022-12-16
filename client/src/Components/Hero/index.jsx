import React from 'react'
import './index.css'

// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}!</h1>
//     )
// }

class Hero extends React.Component{
    render(){
        return(
            <section className='hero'>
            <div className="heading">
                Hi, I'm Anvilly.
                <div className='subtitle'>
                    A graduate software engineer.
                    <div className='body'>
                    I'm Anvilly, a fresh mechatronics engineering graduate from the University of Auckland's class of 2022. I've developed a keen interest for programming in my second year of university and aspires to become a front-end engineer. 

                    Welcome to my space and feel free to explore my projects as you go.

                    </div>
                </div>
            </div>
        </section>        )
    }
}

export default Hero