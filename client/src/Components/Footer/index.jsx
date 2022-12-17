import React from 'react'
import './index.css'


class Footer extends React.Component{
    render(){
        return(
            <section className='footer'>
                <div className="text">
                    Contact: 
                    <a href="mailto:anvillyh@gmail.com">anvillyh@gmail.com</a>
                </div>
                <div className='Container'>
                    <div class="Item">
                    <a href="https://www.linkedin.com/in/anvilly-huang-92694b142/" target="_blank" rel="noreferrer"><div className='Images linkedin'></div></a>
                    </div>
                    <div class="Item">
                        <a href="https://github.com/zhua633/my-website/" target="_blank" rel="noreferrer"><div className='Images git'></div></a>
                    </div>
                </div>
            </section>        )
    }
}

export default Footer;
