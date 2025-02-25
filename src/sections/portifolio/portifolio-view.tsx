import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Linkedin, Mail, Phone } from 'react-feather';

// Animações com keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

// Estilos atualizados
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border-radius: 15px;
  animation: ${slideIn} 0.6s ease-out;

  h1 {
    animation: ${scaleUp} 0.4s ease-out;
  }
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.6s ease-out;

  &:nth-child(even) {
    background: #f8fafc;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  border-left: 4px solid #3b82f6;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  color: "black"

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
  margin: 0.5rem 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const experiences = [
  {
    company: 'Softlutions',
    role: 'Desenvolvedor Pleno',
    period: 'Set 2022 - Presente',
    description: 'Desenvolvimento front-end com micro front-ends, gerenciamento de servidores AWS EC2 e Cloudflare'
  },
  {
    company: 'Instituto Federal de Rondônia',
    role: 'Tech Lead',
    period: 'Jan 2022 - Jul 2024',
    description: 'Desenvolvimento da plataforma PROINFE com Next.js e Nest.js'
  }
];

// Componente principal
export function PortfolioView() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container>
      <Header>
        <h1>Wallyson Machado de Lima</h1>
        <p>Ji-Paraná - RO | 20 anos | Brasileiro | Solteiro</p>
        
        <div style={{ marginTop: '1rem' }}>
          <ContactItem href="https://www.linkedin.com/in/wallyson-machado/">
            <Linkedin size={20} /> LinkedIn
          </ContactItem>
          <ContactItem href="mailto:machadodelimawallyson@gmail.com">
            <Mail size={20} /> Email
          </ContactItem>
          <ContactItem href="tel:+5569993575324">
            <Phone size={20} /> (69) 99357-5324
          </ContactItem>
          <ContactItem href="tel:+5569993262606">
            <Phone size={20} /> (69) 99326-2606
          </ContactItem>
        </div>
      </Header>

      <Section style={{color:"black"}}>
        <h2>Habilidades Técnicas</h2>
        <Grid>
          <Card>
            <h3>🧑💻 Linguagens</h3>
            <p>TypeScript, JavaScript, C#</p>
          </Card>
          
          <Card>
            <h3>🛠️ Frameworks</h3>
            <p>Next.js, Electron, Nest.js, .NET</p>
          </Card>
          
          <Card>
            <h3>📚 Banco de Dados</h3>
            <p>MySQL, MariaDB</p>
          </Card>

          <Card>
            <h3>📦 Bibliotecas</h3>
            <p>React, Material UI, Lodash, Axios, Framer Motion, Redux, Tailwind CSS, Styled-components</p>
          </Card>

          <Card>
            <h3>⚙️ DevOps & Servidores</h3>
            <p>Docker, Docker Compose, Nginx, Jenkins, Portalner, Cloudflare, Amazon EC2</p>
          </Card>

          <Card>
            <h3>🔧 Ferramentas</h3>
            <p>Git, GitHub, GitLab, Scrum, Jira, Trello</p>
          </Card>

          <Card>
            <h3>💻 Sistemas Operacionais</h3>
            <p>Windows, Linux, Ubuntu</p>
          </Card>
        </Grid>
      </Section>

      <Section style={{color:"black"}}>
        <h2>Formação Acadêmica</h2>
        <Grid>
          <Card>
            <h3>Técnico em Informática</h3>
            <p>IFRO - Instituto Federal de Rondônia</p>
            <p>janeiro 2020 - dezembro 2022</p>
          </Card>
          
          <Card>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>IFRO - Instituto Federal de Rondônia</p>
            <p>janeiro 2023 – dezembro 2025 (em andamento)</p>
          </Card>
        </Grid>
      </Section>

      <Section style={{color:"black"}}>
        <h2>Experiência Profissional</h2>
        <Grid>
          {experiences.map((exp, index) => (
            <Card key={index}>
              <h3>{exp.company}</h3>
              <p>{exp.role} • {exp.period}</p>
              <p style={{ color: '#666' }}>{exp.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section style={{color:"black"}}>
        <h2>Idiomas</h2>
        <Grid>
          <Card>
            <h3>Inglês</h3>
            <p>Nível Básico</p>
          </Card>
          <Card>
            <h3>Espanhol</h3>
            <p>Nível Intermediário</p>
          </Card>
        </Grid>
      </Section>
    </Container>
  );
}