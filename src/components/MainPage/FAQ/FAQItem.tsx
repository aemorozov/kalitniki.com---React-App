import React, { useState, useRef } from 'react';
import styles from './FAQ.module.css';
import Image from 'next/image';

import shape from '/public/img/mainPage/faq/Shape.svg';
import classNames from 'classnames';

interface FAQItemProps {
  element: { question: string; answer: string };
}

const FAQItem: React.FC<FAQItemProps> = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.item} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.questionRow}>
          <div className={styles.question}>{element.question}</div>
          <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
            <Image src={shape} alt="shape" className={styles.shape} />
          </div>
        </div>
        <div
          ref={contentRef}
          className={classNames(styles.answer, isOpen ? styles.open : '')}
        >
          {element.answer}
        </div>
      </div>
    </>
  );
};

export default FAQItem;
