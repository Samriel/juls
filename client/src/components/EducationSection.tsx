import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const EducationContainer = styled.section`
  background-color: ${theme.colors.champagne};
`;

const EducationContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const SubsectionTitle = styled.h3`
  font-family: ${theme.fonts.subheading};
  color: ${theme.colors.black};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
  font-size: 1.75rem;
  text-transform: none;
`;

const List = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.lg};
`;

const ListItem = styled.li`
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.sm};
  padding-left: ${theme.spacing.md};
  position: relative;

  &:before {
    content: '•';
    color: ${theme.colors.black};
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -5px;
  }
`;

const MentorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`;

const MentorCard = styled.div<{ $isExpanded: boolean }>`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${theme.colors.graphite};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.black};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(24, 24, 24, 0.1);
  }
`;

const MentorName = styled.h4`
  font-family: ${theme.fonts.subheading};
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing.xs};
  font-size: 1.25rem;
  text-transform: none;
`;

const MentorTitle = styled.p`
  color: ${theme.colors.graphite};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.sm};
  font-style: italic;
  opacity: 0.7;
`;

const MentorDescription = styled.p<{ $isExpanded: boolean }>`
  color: ${theme.colors.graphite};
  line-height: 1.6;
  max-height: ${props => props.$isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: ${props => props.$isExpanded ? theme.spacing.sm : '0'};
`;

const ExpandIndicator = styled.span`
  color: ${theme.colors.black};
  font-size: 0.9rem;
  display: block;
  margin-top: ${theme.spacing.xs};
  font-weight: 600;
`;

const IntroText = styled.p`
  color: ${theme.colors.graphite};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: 1.125rem;
  font-style: italic;
  opacity: 0.8;
`;

interface Mentor {
  name: string;
  title: string;
  description: string;
}

const mentors: Mentor[] = [
  {
    name: 'Елена Анатольевна Ромек',
    title: 'Доктор философских наук, профессор ЮФУ, обучающий тренер по РЭПТ',
    description: 'Дала мне глубинное понимание, как изменяя систему убеждений, можно восстанавливать эмоциональную устойчивость, автономию и способность человека осознанно управлять своей жизнью.'
  },
  {
    name: 'Людмила Леонаровна Яшина',
    title: 'Эксперт по психодиагностике, научный сотрудник кафедры методологии психологии МГУ',
    description: 'Её внимание к деталям и глубина в работе с личностью заложили во мне фундамент научного взгляда на человека: точного, без догматизма и клише.'
  },
  {
    name: 'Александр Борисович Орлов',
    title: 'Доктор психологических наук, профессор, основатель Российского общества человекоцентрированного подхода',
    description: 'Именно он научил видеть в человеке не объект коррекции, а личность с собственной логикой, смыслом и потенциалом к развитию.'
  },
  {
    name: 'Елена Лопухина',
    title: 'Президент Ассоциации психодрамы, юнгиански ориентированный психотерапевт',
    description: 'У Елены я училась свободе терапевтического процесса и глубине работы с бессознательным. Её интеграция философии, искусства и психологии остаётся для меня примером целостного подхода к внутреннему миру.'
  },
  {
    name: 'Алексей Игоревич Батищев',
    title: 'Доктор педагогических и кандидат психологических наук, профессор факультета психологии МГУ',
    description: 'Он стал для меня примером академической точности и этики в психотерапии, где каждое слово имеет значение.'
  },
  {
    name: 'Татьяна Анатольевна Ребеко',
    title: 'Кандидат психологических наук, аналитический психолог, переводчик работ Карла Юнга',
    description: 'Благодаря её подходу я научилась воспринимать внутренний мир человека как многослойную систему смыслов и символов, а не просто набор реакций.'
  },
  {
    name: 'Елена Васильевна Пояркова',
    title: 'Системный семейный терапевт, преподаватель Института Практической Психологии и Психоанализа',
    description: 'От неё я переняла способность видеть систему. Не только личность, но и контекст: семью, отношения, жизненные связи, которые формируют человека.'
  },
  {
    name: 'Татьяна Львовна Готлиб',
    title: 'Клинический психолог и лучший психодиагност России',
    description: 'Её точность, интеллектуальная строгость и человечность задали для меня планку профессионализма, к которой я стремлюсь в каждой консультации.'
  },
  {
    name: 'Марина Станиславовна Павловская',
    title: 'Клинический психолог, гештальт-терапевт, член Российской ассоциации EMDR',
    description: 'От неё я переняла умение работать с травмой и стрессом мягко, но предельно эффективно, сохраняя уважение к границам клиента.'
  },
  {
    name: 'Елена Ростиславовна Калитеевская',
    title: 'Кандидат психологических наук, экзистенциально ориентированный гештальт-терапевт',
    description: 'Её взгляд на эмоции как на проявление глубинных экзистенциальных потребностей повлиял на моё понимание того, как через осознанность приходит зрелость и устойчивость.'
  }
];

export const EducationSection: React.FC = () => {
  const [expandedMentor, setExpandedMentor] = useState<number | null>(null);

  const toggleMentor = (index: number) => {
    setExpandedMentor(expandedMentor === index ? null : index);
  };

  return (
    <EducationContainer id="education">
      <EducationContent>
        <SectionTitle>Образование</SectionTitle>

        <SubsectionTitle>Базовое образование</SubsectionTitle>
        <List>
          <ListItem>МГУ им. Ломоносова - Психологическое консультирование и психодиагностика личности</ListItem>
          <ListItem>МГУ им. Косыгина - Социология</ListItem>
        </List>

        <SubsectionTitle>Повышение квалификации</SubsectionTitle>
        <List>
          <ListItem>РАН - Рационально-Эмоционально-Поведенческая терапия в индивидуальном и групповом консультировании</ListItem>
          <ListItem>МГУ им. Ломоносова - Когнитивно-поведенческая терапия</ListItem>
          <ListItem>МГУ им. Ломоносова - Тематический апперцептивный тест</ListItem>
          <ListItem>МГУ им. Ломоносова - Психотерапевтические техники</ListItem>
          <ListItem>Центр Системной Семейной Терапии - Психология утраты и травмы</ListItem>
          <ListItem>Центр Системной Семейной Терапии - Психология семейных взаимоотношений</ListItem>
        </List>

        <SubsectionTitle>Учителя и профессиональное становление</SubsectionTitle>
        <IntroText>
          Моё профессиональное мышление сформировалось под руководством выдающихся специалистов, 
          каждый из которых оказал значимое влияние на мой подход к психотерапии и пониманию человека.
        </IntroText>

        <MentorsGrid>
          {mentors.map((mentor, index) => (
            <MentorCard
              key={index}
              $isExpanded={expandedMentor === index}
              onClick={() => toggleMentor(index)}
            >
              <MentorName>{mentor.name}</MentorName>
              <MentorTitle>{mentor.title}</MentorTitle>
              <MentorDescription $isExpanded={expandedMentor === index}>
                {mentor.description}
              </MentorDescription>
              <ExpandIndicator>
                {expandedMentor === index ? '▲ Свернуть' : '▼ Подробнее'}
              </ExpandIndicator>
            </MentorCard>
          ))}
        </MentorsGrid>
      </EducationContent>
    </EducationContainer>
  );
};