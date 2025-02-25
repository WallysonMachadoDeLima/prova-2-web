import { useRef } from 'react';
import {  Container, FloatingButton, Header, NavButton} from 'components';
import { AboutMe, Contact, Education, Projects, Skills } from '../components';

// ----------------------------------------------------------

export function PortfolioView() {
  const sobreMimRef = useRef();
  const habilidadesRef = useRef();
  const formacaoRef = useRef();
  const projetosRef = useRef();
  const contatoRef = useRef();

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Header>
        <h1>Wallyson Machado de Lima</h1>
        <p>Ji-Paraná - RO | 20 anos | Brasileiro | Solteiro</p>
        
        <nav>
          <NavButton onClick={() => scrollToRef(sobreMimRef)}>Sobre Mim</NavButton>
          <NavButton onClick={() => scrollToRef(habilidadesRef)}>Habilidades</NavButton>
          <NavButton onClick={() => scrollToRef(formacaoRef)}>Formação</NavButton>
          <NavButton onClick={() => scrollToRef(projetosRef)}>Projetos</NavButton>
          <NavButton onClick={() => scrollToRef(contatoRef)}>Contato</NavButton>
        </nav>
      </Header>

      <AboutMe ref={sobreMimRef} />
      <Skills ref={habilidadesRef} />
      <Education ref={formacaoRef} />
      <Projects ref={projetosRef} />
      <Contact ref={contatoRef} />

      <FloatingButton onClick={handleScrollToTop}>
       <h1>🏠</h1>
      </FloatingButton>
      
    </Container>
  );
}