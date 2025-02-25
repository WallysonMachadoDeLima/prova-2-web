# Portfólio Pessoal - Wallyson Machado

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-%233178C6)](https://www.typescriptlang.org/)

Portfólio profissional desenvolvido para exibir habilidades, experiências e projetos. Construído com tecnologias modernas e design responsivo.

## ✨ Funcionalidades

- Seção "Sobre Mim" com apresentação pessoal
- Listagem detalhada de habilidades técnicas
- Histórico acadêmico e certificações
- Galeria de projetos com links
- Contato direto via e-mail e redes sociais
- Navegação suave entre seções
- Design responsivo para todos os dispositivos

## 🛠 Tecnologias

- **Front-end**: 
  ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white)

- **Ferramentas**: 
  ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
  ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white)
  ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white)

## 📁 Estrutura de Arquivos

```plaintext
PROVA-2-WEB/
├── public/
│   ├── images/                        # Imagens do portfólio
│   └── favicon.ico                    # Ícone da aplicação
├── src/
│   ├── components/                    # Componentes reutilizáveis
│   ├── sections/                      # Seções do projeto
|   |   |── portifolio/                # Seções do portfólio
|   |   |   ├── components/            # Components do portfólio
|   │   │   │   ├── AboutMe.tsx
|   │   │   │   ├── Contact.tsx
|   │   │   │   ├── Education.tsx
|   │   │   │   ├── Projects.tsx
|   │   │   │   └── Skills.tsx
|   │   │   └── views/
|   │   │       └── PortfolioView.tsx
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
