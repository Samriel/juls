import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const AboutContainer = styled.section`
  background-color: ${theme.colors.graphite};
`;

const AboutContent = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.champagne};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const IntroText = styled.p`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: ${theme.colors.champagne};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  font-weight: 600;
`;

const ContentBlock = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const Paragraph = styled.p`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.sm};
  text-align: justify;
`;

const List = styled.ul`
  list-style: none;
  margin: ${theme.spacing.md} 0;
  padding-left: ${theme.spacing.sm};
`;

const ListItem = styled.li`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.sm};
  padding-left: ${theme.spacing.md};
  position: relative;

  &:before {
    content: '•';
    color: ${theme.colors.champagne};
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -5px;
  }
`;

const Highlight = styled.span`
  color: ${theme.colors.champagne};
  font-weight: 600;
`;

export const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>Обо мне</SectionTitle>
        
        <IntroText>
          Рациональность - это инструмент ясного мышления и эффективного действия.
        </IntroText>

        <ContentBlock>
          <Paragraph>
            Я помогаю справляться с деструктивными эмоциями: виной, стыдом, гневом, ревностью, обидой 
            и превращать их в рациональные и конструктивные состояния. В результате вы получаете:
          </Paragraph>
          
          <List>
            <ListItem>ясность и понимание своих эмоций;</ListItem>
            <ListItem>внутреннюю мотивацию действовать и принимать решения;</ListItem>
            <ListItem>уверенность и устойчивость в любых жизненных ситуациях.</ListItem>
          </List>
        </ContentBlock>

        <ContentBlock>
          <Paragraph>
            Я не подавляю чувства. Вместо этого изменяю их логику так, чтобы внутренние реакции стали 
            ресурсом, а не препятствием.
          </Paragraph>
        </ContentBlock>

        <ContentBlock>
          <Paragraph>
            Мой подход основан на научно подтверждённых принципах <Highlight>Рационально-Эмоционально-Поведенческой 
            терапии</Highlight> и <Highlight>стоической философии</Highlight> - проверенные временем методы управления 
            эмоциями, обеспечивающие устойчивые и измеримые результаты.
          </Paragraph>
        </ContentBlock>

        <ContentBlock>
          <Paragraph>
            Мои инструменты - это исключительно клинически обоснованные методики, эффективность которых 
            подтверждена исследованиями в области когнитивной науки и психотерапии.
          </Paragraph>
        </ContentBlock>
      </AboutContent>
    </AboutContainer>
  );
};