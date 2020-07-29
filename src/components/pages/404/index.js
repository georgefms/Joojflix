import React from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';

function Pag404() {
    return (
      <PageDefault>

        <iframe width="100%" height="100%" title="This is a unique title" src="https://editor.p5js.org/georgefelipe8/embed/5Hsv-eEY0"></iframe>
        
        <div>
          <Link to="/">
              Ir Para Home
          </Link>
        </div>
      </PageDefault>

    )

}

export default Pag404;