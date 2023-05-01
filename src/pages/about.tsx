import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Mi nombre es Juan Jose Rivas Alvarez, 
        soy un estudiante de ultimo año de la carrera de informatica en el Centro Educativo Tecnico Laboral KINAL.
        Este blog fue desarrollado para poder llevar un registro de todos los proyectos realizados durante este año 2023,
        para poder regresar dentro de unos años y poder comparar que era lo que hacia en mis inicios en el mundo laborar de programación.
      </p>
      
    </Content>
  </Main>
);

export default About;
