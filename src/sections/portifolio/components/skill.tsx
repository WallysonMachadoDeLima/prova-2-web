import { Card, Grid, Section } from 'components';
import React from 'react';

// ----------------------------------------------------------

const skills = [
  { 
    title: 'Linguagens', 
    emoji: '🧑‍💻',
    items: ['TypeScript', 'JavaScript', 'C#'] 
  },
  { 
    title: 'Front-end', 
    emoji: '🖥️',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI'] 
  },
  { 
    title: 'Back-end', 
    emoji: '⚙️',
    items: ['Node.js', 'NestJS', '.NET', 'MySQL'] 
  },
  { 
    title: 'DevOps', 
    emoji: '🚀',
    items: ['Docker', 'AWS EC2', 'Nginx', 'Jenkins'] 
  },
  { 
    title: 'Ferramentas', 
    emoji: '🛠️',
    items: ['Git', 'Jira', 'Scrum', 'Figma'] 
  },
];

export const Skills = React.forwardRef((_, ref) => {
  return (
    <Section ref={ref as React.LegacyRef<HTMLElement>} id="habilidades">
      <h2>Principais Habilidades</h2>
      <Grid>
        {skills.map((skill, index) => (
          <Card key={index}>
            <h3>
              {skill.emoji} {skill.title}
            </h3>
            <p>{skill.items.join(', ')}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
});