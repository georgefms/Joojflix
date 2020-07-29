import React from 'react';
import dadosIniciais from '../../../data/dados_iniciais.json';
import Menu from '../../Menu'
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';


function Home() {
  return (
    <div>
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videosDescription='O que faz uma desenvolvedora front-end? #HipstersPontoTube'
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      
      <Footer />
    

    </div>
    </div>
  );
}

export default Home;
