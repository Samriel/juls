import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { theme } from '../styles/theme';

const BookingContainer = styled.section`
  background-color: ${theme.colors.white};
`;

const BookingContent = styled.div`
  max-width: 800px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const IntroText = styled.p`
  text-align: center;
  color: ${theme.colors.graphite};
  margin-bottom: ${theme.spacing.lg};
  font-size: 1.125rem;
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const Label = styled.label`
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: ${theme.spacing.sm};
  background-color: ${theme.colors.champagne};
  border: 1px solid ${theme.colors.graphite};
  color: ${theme.colors.graphite};
  font-size: 1rem;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  &::placeholder {
    color: ${theme.colors.graphite};
    opacity: 0.5;
  }
`;

const Select = styled.select`
  padding: ${theme.spacing.sm};
  background-color: ${theme.colors.champagne};
  border: 1px solid ${theme.colors.graphite};
  color: ${theme.colors.graphite};
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  option {
    background-color: ${theme.colors.champagne};
    color: ${theme.colors.graphite};
  }
`;

const TextArea = styled.textarea`
  padding: ${theme.spacing.sm};
  background-color: ${theme.colors.champagne};
  border: 1px solid ${theme.colors.graphite};
  color: ${theme.colors.graphite};
  font-size: 1rem;
  border-radius: 4px;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  &::placeholder {
    color: ${theme.colors.graphite};
    opacity: 0.5;
  }
`;

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: ${theme.spacing.sm};
    background-color: ${theme.colors.champagne};
    border: 1px solid ${theme.colors.graphite};
    color: ${theme.colors.graphite};
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: ${theme.colors.black};
      background-color: ${theme.colors.white};
    }
  }

  .react-datepicker {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.graphite};
    font-family: ${theme.fonts.body};
  }

  .react-datepicker__header {
    background-color: ${theme.colors.champagne};
    border-bottom: 1px solid ${theme.colors.graphite};
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: ${theme.colors.black};
  }

  .react-datepicker__day {
    color: ${theme.colors.graphite};

    &:hover {
      background-color: ${theme.colors.graphite};
      color: ${theme.colors.white};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  flex: 1;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.graphite};
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 4px;
  border: 2px solid ${theme.colors.graphite};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.black};
    border-color: ${theme.colors.black};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ContactButton = styled.a`
  flex: 1;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: transparent;
  color: ${theme.colors.graphite};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid ${theme.colors.graphite};
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.graphite};
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled.div`
  padding: ${theme.spacing.md};
  background-color: rgba(35, 39, 42, 0.1);
  border: 1px solid ${theme.colors.graphite};
  border-radius: 4px;
  color: ${theme.colors.black};
  text-align: center;
  margin-top: ${theme.spacing.md};
`;

interface FormData {
  name: string;
  format: string;
  date: Date | null;
  email: string;
  phone: string;
  comment: string;
}

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    format: 'online',
    date: null,
    email: '',
    phone: '',
    comment: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const sendTelegramNotification = async (data: FormData) => {
    const TELEGRAM_BOT_TOKEN = '8241584499:AAGkXZz5B8QOPfkC98VdxDuHM5DKo322CUw';
    const TELEGRAM_CHAT_ID = '492668222';
    
    const message = `
🔔 *Новая заявка на консультацию!*

👤 *Имя:* ${data.name}
📍 *Формат:* ${data.format === 'online' ? 'Онлайн' : 'Очно'}
📅 *Дата и время:* ${data.date ? data.date.toLocaleString('ru-RU') : 'Не указано'}
📧 *Email:* ${data.email}
📱 *Телефон:* ${data.phone || 'Не указан'}
💬 *Комментарий:* ${data.comment || 'Нет комментария'}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (!response.ok) {
        console.error('Failed to send Telegram notification');
      }
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    // Send Telegram notification
    await sendTelegramNotification(formData);
    
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        format: 'online',
        date: null,
        email: '',
        phone: '',
        comment: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      date
    });
  };

  return (
    <BookingContainer id="booking">
      <BookingContent>
        <SectionTitle>Формат работы и запись на консультацию</SectionTitle>
        
        <IntroText>
          Консультации проводятся в формате индивидуальных встреч очно или онлайн. 
          Заполните форму ниже, и я свяжусь с вами для уточнения деталей.
        </IntroText>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Имя *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="format">Предпочтительный формат *</Label>
            <Select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              required
            >
              <option value="online">Онлайн</option>
              <option value="offline">Очно</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Желаемое время для встречи *</Label>
            <DatePickerWrapper>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd.MM.yyyy HH:mm"
                minDate={new Date()}
                placeholderText="Выберите дату и время"
                required
              />
            </DatePickerWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Телефон (опционально)</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="comment">Комментарий (опционально)</Label>
            <TextArea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Дополнительная информация или вопросы"
            />
          </FormGroup>

          <ButtonGroup>
            <SubmitButton type="submit" disabled={submitted}>
              {submitted ? 'Отправлено' : 'Записаться на консультацию'}
            </SubmitButton>
            <ContactButton href="mailto:contact@example.com">
              Связаться лично
            </ContactButton>
          </ButtonGroup>

          {submitted && (
            <SuccessMessage>
              Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.
            </SuccessMessage>
          )}
        </Form>
      </BookingContent>
    </BookingContainer>
  );
};