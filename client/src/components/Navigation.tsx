import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { theme } from '../styles/theme';

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${props => props.$isScrolled ? 'rgba(24, 24, 24, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.$isScrolled ? `1px solid ${theme.colors.silver}` : 'none'};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  color: ${theme.colors.champagne};
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 70%;
    background-color: ${theme.colors.graphite};
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    padding: ${theme.spacing.lg};
  }
`;

const NavLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: ${theme.colors.white};
  cursor: pointer;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: ${theme.colors.champagne};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const Hamburger = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    width: 25px;
    height: 2px;
    background-color: ${theme.colors.white};
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
    }
  }
`;

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Logo>THERAPY</Logo>
        
        <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <NavLinks $isOpen={isOpen}>
          <NavLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Главная
          </NavLink>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Обо мне
          </NavLink>
          <NavLink
            to="directions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Направления
          </NavLink>
          <NavLink
            to="booking"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Запись
          </NavLink>
          <NavLink
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Образование
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};