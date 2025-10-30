import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.graphite};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.silver};
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const ContactInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ContactLink = styled.a`
  color: ${theme.colors.champagne};
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.white};
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.silver};
  font-size: 0.9rem;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 600px;
  height: 1px;
  background-color: ${theme.colors.silver};
  opacity: 0.3;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <ContactLink href="mailto:contact@example.com">
            contact@example.com
          </ContactLink>
          <span style={{ color: theme.colors.silver }}>|</span>
          <ContactLink href="tel:+70000000000">
            +7 (000) 000-00-00
          </ContactLink>
        </ContactInfo>
        
        <Divider />
        
        <Copyright>
          © {currentYear} Индивидуальная терапия. Все права защищены.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};