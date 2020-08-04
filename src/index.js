import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// componente novo que permite exibição nativa
import Watch from './components/watch';

// BrowserRouter faz com que tenhamos uma SPA(Single page app)
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/categoria';
// Transformar essa pag no jogo da outra imersão
import Pag404 from './components/pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch" component={Watch} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pag404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root'),
);
