import { Slider } from '../components/MainPage/Slider/Slider';
import { Razryady } from '../components/MainPage/Razryady/Razryady';
import { PhotoGallery } from '../components/MainPage/PhotoGallery/PhotoGallery';
import { VIP } from '../components/MainPage/VIP/VIP';
import { Uslugi } from '../components/MainPage/Uslugi/Uslugi';
import { Kyhnya } from '../components/MainPage/Kyhnya/Kyhnya';
import { Novosti } from '../components/MainPage/Novosti/Novosti';
import FAQ from '../components/MainPage/FAQ/FAQ';
import Location from '../components/MainPage/Location/Location';

import { Promo } from '../components/MainPage/Promo/Promo';
import { Otzuvu } from '../components/MainPage/Otzuvu/Otzuvu';

const Index = () => {
  return (
    <>
      <Slider />
      <Razryady />
      <VIP />
      <Uslugi />
      <Kyhnya />
      <Novosti />
      <Promo />
      <Otzuvu />
      <FAQ />
      <Location />
      <PhotoGallery />
    </>
  );
};

export default Index;
