import { Section } from 'components';
import React from 'react';
import duolingu from 'assets/duolingu.jpg'

// ----------------------------------------------------------

export const AboutMe = React.forwardRef((_, ref) => {
  return (
    <Section ref={ref as React.LegacyRef<HTMLElement>} id="sobre-mim">
      <h2>Sobre Mim</h2>
      <p>
        Desenvolvedor Full Stack com 3+ anos de experiência em desenvolvimento web. 
        Apaixonado por criar soluções tecnológicas inovadoras com foco em performance 
        e experiência do usuário. Atuo principalmente com ecossistema JavaScript/TypeScript.
      </p>
      
      <h3>Idiomas</h3>
      <ul>
        <li>Inglês - Básico</li>
        <li>Espanhol - Intermediário</li>
      </ul>

      <div>
      <img 
        src={duolingu} 
        alt="Foto de Wallyson Machado"
        width={'50%'}
      />
    </div>
    <h5>Ofensiva está a milhão</h5>
    </Section>
  );
});
