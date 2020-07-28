import React from 'react';
import Logo from '../../assets/imagem/Logo1.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from '../ButtonLink';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt='aluraFlix Logo'/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;