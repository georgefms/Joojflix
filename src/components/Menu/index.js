import React from 'react';
import { Link} from 'react-router-dom';
//Import de {^Link} torna os <a><a/> em Link e href para to=''
import Logo from '../../assets/imagem/Logo1.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from '../ButtonLink';


function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt='aluraFlix Logo'/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;