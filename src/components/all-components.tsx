import styled, { keyframes } from 'styled-components';

// ----------------------------------------------------------

export const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: #1d4ed8;
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;


export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

// Estilos atualizados
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Header = styled.header`
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

export const Section = styled.section`
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.6s ease-out;
  color: black;

  &:nth-child(even) {
    background: #f8fafc;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled.div`
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

export const ContactItem = styled.a`
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
