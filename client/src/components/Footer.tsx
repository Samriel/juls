import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.graphite};
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
  color: ${theme.colors.graphite};
  font-size: 1rem;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: ${theme.colors.black};
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.graphite};
  font-size: 0.9rem;
  text-align: center;
  opacity: 0.7;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 600px;
  height: 1px;
  background-color: ${theme.colors.graphite};
  opacity: 0.2;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <ContactLink href="mailto:jjulijuli@yandex.ru">
            jjulijuli@yandex.ru
          </ContactLink>
          <span style={{ color: theme.colors.graphite, opacity: 0.5 }}>|</span>
          <ContactLink href="tel:+79951560007">
            +7(995)1560007
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