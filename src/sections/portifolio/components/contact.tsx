import React from 'react';
import { Card, ContactItem, Grid, Section } from 'components';
import { Linkedin, Mail, Phone } from 'react-feather';

// ----------------------------------------------------------

export const Contact = React.forwardRef((_, ref) => {
  return (
    <Section ref={ref as React.LegacyRef<HTMLElement>} id="contato">
      <h2>Contato</h2>
      <Grid>
        <Card>
          <ContactItem href="https://www.linkedin.com/in/wallyson-machado/">
            <Linkedin size={20} /> LinkedIn
          </ContactItem>
          <ContactItem href="mailto:machadodelimawallyson@gmail.com">
            <Mail size={20} /> Email
          </ContactItem>
          <ContactItem href="tel:+5569993575324">
            <Phone size={20} /> (69) 99357-5324
          </ContactItem>
        </Card>
      </Grid>
    </Section>
  );
});