import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-scroll';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.champagne} 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const Title = styled.h1`
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.lg};
  max-width: 600px;
  opacity: 0.8;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto ${theme.spacing.lg};
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.graphite};
  color: ${theme.colors.white};
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${theme.colors.graphite};

  &:hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(24, 24, 24, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: 500px;
  }
`;

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <TextContent>
          <Title>
            Индивидуальная терапия<br />
            Private Therapy
          </Title>
          <Subtitle>
            Работа ведётся с соблюдением полной конфиденциальности и персонализированной поддержкой.
          </Subtitle>
          <CTAButton
            to="booking"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Записаться на консультацию
          </CTAButton>
        </TextContent>
        
        <ImageContainer>
          <HeroImage
            src={`${process.env.PUBLIC_URL}/IMG_3622.PNG`}
            alt="Therapy session"
          />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};