import Image from 'next/image';
import { useRef } from 'react';
import styles from './PhotoGallery.module.css';

import galleryImg2 from '/public/img/mainPage/fotogalereya/Photo-1.jpg';
import galleryImg11 from '/public/img/mainPage/fotogalereya/Photo-10.jpg';
import galleryImg12 from '/public/img/mainPage/fotogalereya/Photo-11.jpg';
import galleryImg13 from '/public/img/mainPage/fotogalereya/Photo-12.jpg';
import galleryImg14 from '/public/img/mainPage/fotogalereya/Photo-13.jpg';
import galleryImg15 from '/public/img/mainPage/fotogalereya/Photo-14.jpg';
import galleryImg16 from '/public/img/mainPage/fotogalereya/Photo-15.jpg';
import galleryImg17 from '/public/img/mainPage/fotogalereya/Photo-16.jpg';
import galleryImg18 from '/public/img/mainPage/fotogalereya/Photo-17.jpg';
import galleryImg19 from '/public/img/mainPage/fotogalereya/Photo-18.jpg';
import galleryImg20 from '/public/img/mainPage/fotogalereya/Photo-19.jpg';
import galleryImg3 from '/public/img/mainPage/fotogalereya/Photo-2.jpg';
import galleryImg21 from '/public/img/mainPage/fotogalereya/Photo-20.jpg';
import galleryImg22 from '/public/img/mainPage/fotogalereya/Photo-21.jpg';
import galleryImg4 from '/public/img/mainPage/fotogalereya/Photo-3.jpg';
import galleryImg5 from '/public/img/mainPage/fotogalereya/Photo-4.jpg';
import galleryImg6 from '/public/img/mainPage/fotogalereya/Photo-5.jpg';
import galleryImg7 from '/public/img/mainPage/fotogalereya/Photo-6.jpg';
import galleryImg8 from '/public/img/mainPage/fotogalereya/Photo-7.jpg';
import galleryImg9 from '/public/img/mainPage/fotogalereya/Photo-8.jpg';
import galleryImg10 from '/public/img/mainPage/fotogalereya/Photo-9.jpg';
import galleryImg1 from '/public/img/mainPage/fotogalereya/Photo.jpg';

const imgs = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
  galleryImg12,
  galleryImg13,
  galleryImg14,
  galleryImg15,
  galleryImg16,
  galleryImg17,
  galleryImg18,
  galleryImg19,
  galleryImg20,
  galleryImg21,
  galleryImg22
];

export const PhotoGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  function handleScroll(event: React.MouseEvent<HTMLImageElement>) {
    if (containerRef.current && itemRef.current) {
      const target = event.target as HTMLElement;
      const scrollAmount = itemRef.current.offsetWidth + 15 || 463;
      const side = target.classList.contains(styles.toLeft)
        ? -scrollAmount
        : scrollAmount;
      console.log(target.classList);
      containerRef.current.scrollBy({
        left: side,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section className={'classicBlock' + ' ' + styles.doVsctrechi}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Фотогалерея</h2>
          <h3 className={'headerH3'}>
            До встречи
            <br />в Калитниках
          </h3>
        </div>
        <div className={'do-vsctrechi-slider'}>
          <div className={styles.buttons}>
            <div className={styles.leftButton}>
              <img
                src="img/mainPage/otzuvu/chevron.svg"
                alt="chevron"
                className={styles.toLeft}
                onClick={handleScroll}
                width="24"
                height="24"
              />
            </div>
            <div className={styles.rightButton}>
              <img
                src="img/mainPage/otzuvu/chevron.svg"
                alt="chevron"
                className={styles.toRight}
                onClick={handleScroll}
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className={styles.doVsctrechiBlocks} ref={containerRef}>
            {imgs.map((img, index) => {
              return (
                <div
                  className={styles.otzuv + ' ' + styles.galary}
                  key={index}
                  ref={itemRef}
                >
                  <Image
                    src={img}
                    alt={index.toString()}
                    className={styles.img}
                    width={448}
                    height={448}
                  />
                </div>
              );
            })}
          </div>
          <div className={'bottomDescription' + ' correction'}>
            <p>
              Просторные{' '}
              <span className={'bottomDescriptionSpan'}>парилки</span>, хамам,
              купель — <br /> наслаждайтесь пространством и высоким качеством
              пара!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
