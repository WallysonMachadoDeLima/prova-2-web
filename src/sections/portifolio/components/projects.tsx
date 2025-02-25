import React from 'react';
import { Card, Grid, Section } from 'components';

// ----------------------------------------------------------

const experiencesIfro = [
  {
    company: 'Instituto Federal de Rondônia',
    role: 'Monitor',
    period: 'Nov 2021 - Dez 2022',
    location: 'Ji-Paraná/RO',
    description: 'Projeto ofertado pelo MEC. Atuei como monitor para ensinar Lógica e Linguagem de Programação básica para alunos de Escolas Municipais e Públicas.'
  },
  {
    company: 'Instituto Federal de Rondônia',
    role: 'Desenvolvedor Pleno / Tech Lead',
    period: 'Jan 2022 - Jul 2024',
    location: 'Ji-Paraná/RO',
    description: 'Desenvolvimento da plataforma web PROINFE para gerenciamento acadêmico utilizando Next.js com React e Nest.js. Trabalho em equipe com metodologias ágeis para entregas eficientes e de alta qualidade.'
  },
  {
    company: 'Instituto Federal de Rondônia',
    role: 'Desenvolvedor Pleno',
    period: 'Jul 2023 - Atual',
    location: 'Ji-Paraná/RO',
    description: 'Desenvolvimento de sistema para gerenciamento transparente das filas de espera por vagas em creches em Rondônia. Utilização de Next.js e serviços de geolocalização da Google Cloud (Maps, Routes, Places). Colaboração ativa com equipe seguindo metodologia ágil.'
  },
  
];

const experiencesWork = [
  {
    company: 'Softlutions',
    role: 'Desenvolvedor Pleno',
    period: 'Set 2022 - Presente',
    location: 'Ji-Paraná/RO',
    description: 'Desenvolvimento front-end com micro front-ends, gerenciamento de servidores AWS EC2 e Cloudflare',
    project: 'https://lasercinemas.com.br/'
  }
];

export const Projects = React.forwardRef((_, ref) => {
  return (
    <Section ref={ref as React.LegacyRef<HTMLElement>} id="projetos">
      <h2>Projetos e Experiências</h2>
      <Grid>
        {experiencesWork.map((exp, index) => (
          <Card key={index}>
            <h3>{exp.company} - {exp.role}</h3>
            <p>{exp.period} | {exp.location}</p>
            <p>{exp.description}</p>
            <a style={{color:'blue'}}>{exp.project}</a>
          </Card>
        ))}
      </Grid>
     
        {experiencesIfro.map((exp, index) => (
           <Grid>
          <Card key={index}>
            <h3>{exp.company} - {exp.role}</h3>
            <p>{exp.period} | {exp.location}</p>
            <p>{exp.description}</p>
          </Card>
          </Grid>
        ))}
    </Section>
  );
});
