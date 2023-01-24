import React from 'react';
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Jose de la Ossa C.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link"> Sobre mi</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link"> Projectos</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href='https://www.instagram.com/jose_a_carmona/' className='home__social-icon' target="_black">
                        <i className='uil uil-instagram'></i>
                    </a>

                    <a href='https://www.linkedin.com/in/jose-andres-de-la-ossa-carmona-790251226/' className='home__social-icon' target="_black">
                        <i className='uil uil-linkedin'></i>
                    </a>

                    <a href='https://github.com/JoseCarmona17' className='home__social-icon' target="_black">
                        <i className='uil uil-github-alt'></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; Crypticalcoder. All rigths reserved
</span>
            </div>
        </footer>
    )
}
