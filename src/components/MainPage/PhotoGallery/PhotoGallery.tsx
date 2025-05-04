import Image from 'next/image';
import styles from './PhotoGallery.module.css';
import chevron from '/public/img/mainPage/otzuvu/chevron.svg';
import galaryImg1 from '/public/img/mainPage/fotogalereya/img1.jpg';
import galaryImg2 from '/public/img/mainPage/fotogalereya/img2.jpg';
import galaryImg3 from '/public/img/mainPage/fotogalereya/img3.jpg';
import galaryImg4 from '/public/img/mainPage/fotogalereya/img4.jpg';

export const PhotoGallery = () => {
  return (
    <section className={styles.backgroundDoVsctrechi}>
      <div className={'classicBlock' + ' ' + styles.doVsctrechi}>
        <div className={'contentBlock'}>
          <div className={'headers'}>
            <h2 className={'headerH2'}>Фотогалерея</h2>
            <h3 className={'headerH3'}>
              До встречи
              <br />в Калитниках
            </h3>
          </div>
          <div className={styles.doVsctrechiSlider}>
            <div className={styles.buttons}>
              <div className={styles.leftButton}>
                <Image
                  src={chevron}
                  alt="chevron"
                  className={styles.toLeft}
                ></Image>
              </div>
              <div className={styles.rightButton}>
                <Image
                  src={chevron}
                  alt="chevron"
                  className={styles.toRight}
                ></Image>
              </div>
            </div>
            <div className={styles.doVsctrechiBlocks}>
              <div className={styles.otzuv + ' ' + styles.galary}>
                <Image src={galaryImg1} alt="img1"></Image>
              </div>
              <div className={styles.otzuv + ' ' + styles.galary}>
                <Image src={galaryImg2} alt="img2"></Image>
              </div>
              <div className={styles.otzuv + ' ' + styles.galary}>
                <Image src={galaryImg3} alt="img3"></Image>
              </div>
              <div className={styles.otzuv + ' ' + styles.galary}>
                <Image src={galaryImg4} alt="img4"></Image>
              </div>
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
      </div>
    </section>
  );
};
