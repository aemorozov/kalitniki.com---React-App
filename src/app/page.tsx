import { Section } from '../components/MainPage/Section/Section';
import { Slider } from '../components/MainPage/Slider/Slider';
import { ThreeColumns } from '../components/MainPage/ThreeColumns/ThreeColumns';
import { VIPSlider } from '../components/MainPage/VIPSlider/VIPSlider';

const Home = () => {
  return (
    <>
      <Slider />
      <Section
        subTitle="Общественные разряды"
        title="Калитниковские бани"
        backgroundImage="/img/mainPage......ну лежать должно в паблике"
      >
        <ThreeColumns />
      </Section>

      <Section
        subTitle={
          <>
            Для отдыха <br /> в компании близких
          </>
        }
        title="VIP-кабинеты"
        backgroundImage="/img/mainPage......ну лежать должно в паблике"
      >
        <VIPSlider />
      </Section>
    </>
  );
};

export default Home;
