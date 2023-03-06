import React from 'react'
import './index.css'

class Hero extends React.Component{
    render(){
        return(
            <section className='hero'>
            <div className="heading">
                Hi, I'm Anvilly.
                <div className='subtitle row'>
                    A graduate software engineer.
                        <div class="Item_row">
                            <div class="Item_column">
                                <a href="https://www.linkedin.com/in/anvilly-huang-92694b142/"><div className='Images linkedin'></div></a>
                            </div>
                            <div class="Item_column">
                                <a href="https://github.com/zhua633/my-website/"><div className='Images git'></div></a>
                            </div>
                        </div>
                </div>
                <div className='body'>
                    I'm Anvilly, a fresh graduate from the University of Auckland's class of 2022 and currently working as a graduate software engineer.
                    I like music, and sleeps a lot in my spare time.
                    Welcome to my space and feel free to explore my projects as you go.
                </div>
            </div>
        </section>        )
    }
}

export default Hero
