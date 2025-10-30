import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const DirectionsContainer = styled.section`
  background-color: ${theme.colors.champagne};
`;

const DirectionsContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const DirectionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const DirectionCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${theme.colors.graphite};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.black};
    box-shadow: 0 10px 30px rgba(24, 24, 24, 0.15);
  }
`;

const DirectionTitle = styled.h3`
  font-family: ${theme.fonts.subheading};
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing.sm};
  font-size: 1.25rem;
  text-transform: none;
`;

const DirectionText = styled.p`
  color: ${theme.colors.graphite};
  line-height: 1.6;
`;

const ClosingText = styled.p`
  text-align: center;
  color: ${theme.colors.graphite};
  font-size: 1.125rem;
  margin-top: ${theme.spacing.lg};
  font-style: italic;
  opacity: 0.8;
`;

const directions = [
  {
    title: 'Управление эмоциями',
    text: 'Поддержка в управлении эмоциями и сохранении внутреннего ресурса.'
  },
  {
    title: 'Восстановление уверенности',
    text: 'Восстановление уверенности, внутреннего баланса и опоры на свои ценности.'
  },
  {
    title: 'Межличностные отношения',
    text: 'Работа с партнёрскими, семейными и межличностными отношениями.'
  },
  {
    title: 'Семейная терапия',
    text: 'Восстановление гармонии и конструктивной коммуникации в семье.'
  },
  {
    title: 'Работа с зависимостями',
    text: 'Сопровождение при зависимостях (алкоголь, наркотики) и работа с их последствиями для семейной системы.'
  },
  {
    title: 'Поддержка при важных решениях',
    text: 'Помощь при важных решениях и жизненных изменениях с сохранением внутренней устойчивости.'
  }
];

export const DirectionsSection: React.FC = () => {
  return (
    <DirectionsContainer id="directions">
      <DirectionsContent>
        <SectionTitle>Направления профессиональной работы</SectionTitle>
        
        <DirectionsList>
          {directions.map((direction, index) => (
            <DirectionCard key={index}>
              <DirectionTitle>{direction.title}</DirectionTitle>
              <DirectionText>{direction.text}</DirectionText>
            </DirectionCard>
          ))}
        </DirectionsList>

        <ClosingText>
          Работа даёт внутреннюю свободу, эмоциональную ясность и контроль.
        </ClosingText>
      </DirectionsContent>
    </DirectionsContainer>
  );
};