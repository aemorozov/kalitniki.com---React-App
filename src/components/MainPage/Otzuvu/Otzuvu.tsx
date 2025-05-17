import Image from 'next/image';

import chevron from '/public/img/mainPage/otzuvu/chevron.svg';
import ya from '/public/img/mainPage/otzuvu/ya.svg';
import otzuv001 from '/public/img/mainPage/otzuvu/otzuv001.png';
import otzuv002 from '/public/img/mainPage/otzuvu/otzuv002.png';
import otzuv003 from '/public/img/mainPage/otzuvu/otzuv003.png';
import otzuv004 from '/public/img/mainPage/otzuvu/otzuv004.png';
import otzuv005 from '/public/img/mainPage/otzuvu/otzuv005.png';
import otzuv006 from '/public/img/mainPage/otzuvu/otzuv006.png';
import otzuv007 from '/public/img/mainPage/otzuvu/otzuv007.png';
import star from '/public/img/mainPage/otzuvu/star.svg';

export const Otzuvu = () => {
  return (
    // <section className={'background-otzuvu'}>
    <div className={'classicBlock  otzuvu'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Отзывы</h2>
          <h3 className={'headerH3'}>
            Гости
            <br />о Калитниках
          </h3>
        </div>
        <div className={'otzuvu-slider'}>
          <div className={'buttons'}>
            <div className={'left-button'}>
              <Image src={chevron} alt="chevron" className={'toLeft'}></Image>
            </div>
            <div className={'right-button'}>
              {' '}
              <Image src={chevron} alt="chevron" className={'toRight'}></Image>
            </div>
          </div>
          <div className={'otzuvu-blocks'}>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv001}
                    alt="otzuv001"
                    className={'otzuv-photo not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Максим К.</div>
                    <div className={'otzuv-date'}>25 февраля</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Баня отличная. Приветливый персонал. Даже когда мы пришли
                  компанией и не попали во время скидок, нам пошли на встречу и
                  это очень круто!! Профессиональный банщик с большим веером
                  круто всех пропарил, особенно пар с палынькой и цитрусом!!!
                  Всем рекомендую!
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv002}
                    alt="otzuv002"
                    className={'otzuv-photo not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Sneg S.</div>
                    <div className={'otzuv-date'}>20 декабря</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Праздновали с подругами мой день рождения и это был лучший
                  выбор места. До этого мы были в разных банях, но только тут
                  такая домашняя и комфортная обстановка. Народу не много, пар
                  мягкий, банщик Андрей прекрасен. Очень рекомендую попробовать
                  у него паренье со льдом. Это лучшее из всех, что я пробовала.
                  Да и очень вкусно кормят. В общем — рекомендую. Единственно,
                  имейте в виду, что женские дни — это только понедельник и
                  вторник. Но администрация обещала добавить как минимум еще
                  один день)
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv003}
                    alt="otzuv003"
                    className={'otzuv-photo  not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Илья А.</div>
                    <div className={'otzuv-date'}>27 декабря</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Очень понятный хороший мужской разряд. Дружелюбная атмосфера,
                  отличные банщики, очень демократичный ценник. Спасибо этому
                  прекрасному месту за отличный выпар, теплый прием.
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv001}
                    alt="otzuv001"
                    className={'otzuv-photo not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Максим К.</div>
                    <div className={'otzuv-date'}>25 февраля</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Баня отличная. Приветливый персонал. Даже когда мы пришли
                  компанией и не попали во время скидок, нам пошли на встречу и
                  это очень круто!! Профессиональный банщик с большим веером
                  круто всех пропарил, особенно пар с палынькой и цитрусом!!!
                  Всем рекомендую!
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv001}
                    alt="otzuv001"
                    className={'otzuv-photo not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Максим К.</div>
                    <div className={'otzuv-date'}>25 февраля</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Баня отличная. Приветливый персонал. Даже когда мы пришли
                  компанией и не попали во время скидок, нам пошли на встречу и
                  это очень круто!! Профессиональный банщик с большим веером
                  круто всех пропарил, особенно пар с палынькой и цитрусом!!!
                  Всем рекомендую!
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
            <div className={'otzuv'}>
              <div className={'otzuv-title'}>
                <div className={'otzuv-photoNameAndDate'}>
                  <Image
                    src={otzuv001}
                    alt="otzuv001"
                    className={'otzuv-photo not-border'}
                  ></Image>
                  <div className={'otzuv-nameAndDate'}>
                    <div className={'otzuv-name'}>Максим К.</div>
                    <div className={'otzuv-date'}>25 февраля</div>
                  </div>
                </div>
                <Image src={ya} alt={'ya'} className={'otzuv-logo'}></Image>
              </div>
              <div className={'otzuv-zvezdu'}>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
              </div>
              <div className={'otzuv-text'}>
                <p>
                  Баня отличная. Приветливый персонал. Даже когда мы пришли
                  компанией и не попали во время скидок, нам пошли на встречу и
                  это очень круто!! Профессиональный банщик с большим веером
                  круто всех пропарил, особенно пар с палынькой и цитрусом!!!
                  Всем рекомендую!
                </p>
              </div>
              <button className={'otzuv-button'}>Читать больше</button>
            </div>
          </div>
          <div className={'after-slider'}>
            <div className={'textLeft'}>
              <p>
                «А вот приятно удивил{' '}
                <span className={'textLeftSpan'}>лед с лапником</span> и купель
                с <span className={'textLeftSpan'}>ледяной</span> водой верх
                восторга! Главное ведь{' '}
                <span className={'textLeftSpan'}>чистота тела</span>»
              </p>
            </div>
            <div className={'rightSide'}>
              <div className={'photos'}>
                <div className={'otzuv-photo-el'}>
                  <Image
                    src={otzuv002}
                    alt="otzuv002"
                    className={'otzuv-photo'}
                  ></Image>
                </div>
                <div className={'otzuv-photo-el'}>
                  <Image
                    src={otzuv004}
                    alt="otzuv004"
                    className={'otzuv-photo'}
                  ></Image>
                </div>
                <div className={'otzuv-photo-el'}>
                  <Image
                    src={otzuv005}
                    alt="otzuv005"
                    className={'otzuv-photo'}
                  ></Image>
                </div>
                <div className={'otzuv-photo-el'}>
                  <Image
                    src={otzuv006}
                    alt="otzuv006"
                    className={'otzuv-photo'}
                  ></Image>
                </div>
                <div className={'otzuv-photo-el'}>
                  <Image
                    src={otzuv007}
                    alt="otzuv007"
                    className={'otzuv-photo'}
                  ></Image>
                </div>
              </div>
              <div className={'count'}>
                <p>2276 отзывов</p>
              </div>
              <div className={'link'}>
                <p>На Яндекс картах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};
