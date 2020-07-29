import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
//BrowserRouter faz com que tenhamos uma SPA(Single page app)
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/categoria';
//Transformar essa pag no jogo da outra imersão 
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route component={Pagina404}/>
      </Switch>
    </BrowserRouter>,

 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
  document.getElementById('root')
);

