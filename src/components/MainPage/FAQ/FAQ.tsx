// components/FAQ.tsx
import React from 'react';
import styles from './FAQ.module.css';
import FAQItem from './FAQItem';

const faqData = [
  'У вас есть парковка для гостей?',
  'Можно ли посещать банный комплекс с детьми?',
  'Какие банные принадлежности нужно взять с собой?',
  'Что можно взять с собой из еды и напитков?',
  'Что входит в стоимость входного билета?'
];

const FAQ = () => (
  <section className={'classicBlock'}>
    <div className={'contentBlock'}>
      <div className={'headers'}>
        <h2 className={'headerH2'}>FAQ</h2>
        <h3 className={'headerH3'}>Вопросы — ответы</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {faqData.map((question, index) => (
            <FAQItem key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
