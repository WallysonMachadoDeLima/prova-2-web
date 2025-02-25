import React from 'react';
import { Card, Grid, Section } from 'components';

// ----------------------------------------------------------


export const Education = React.forwardRef((_, ref) => {
  return (
    <Section ref={ref as React.LegacyRef<HTMLElement>} id="formacao">
      <h2>Formação Acadêmica e Certificações</h2>
      <Grid>
        <Card>
          <h3>Técnico em Informática</h3>
          <p>IFRO - Concluído em 2022</p>
        </Card>
        <Card>
          <h3>Análise e Desenvolvimento de Sistemas</h3>
          <p>IFRO - Previsão de conclusão 2025</p>
        </Card>
      </Grid>
    </Section>
  );
});
