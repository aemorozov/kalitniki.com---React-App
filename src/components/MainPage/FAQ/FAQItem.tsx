// components/FAQItem.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';

interface FAQItemProps {
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={styles.item}>
      <div className={styles.questionRow} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          ⌄
        </span>
      </div>

      <div className={styles.answerWrapper} style={{ height: `${height}px` }}>
        <div ref={contentRef} className={styles.answer}>
          Ответ на вопрос появится здесь.
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
