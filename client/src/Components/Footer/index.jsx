import React from 'react'
import './index.css'


class Footer extends React.Component{
    render(){
        return(
            <section className='footer'>
                <div className='footer_container'>
                    <div class="footer_item">
                    <a href="https://www.linkedin.com/in/anvilly-huang-92694b142/" target="_blank" rel="noreferrer"><div className='footer_images linkedin'></div></a>
                    </div>
                    <div class="footer_item">
                        <a href="mailto:anvillyh@gmail.com" target="_blank" rel="noreferrer"><div className='footer_images email'></div></a>
                    </div>
                    <div class="footer_item">
                        <a href="https://github.com/zhua633/my-website/" target="_blank" rel="noreferrer"><div className='footer_images git'></div></a>
                    </div>
                </div>
            </section>        )
    }
}

export default Footer;
