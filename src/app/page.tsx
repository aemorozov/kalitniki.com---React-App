import { Section } from '../components/MainPage/Section/Section';
import { Slider } from '../components/MainPage/Slider/Slider';
import { ThreeColumns } from '../components/MainPage/ThreeColumns/ThreeColumns';

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
    </>
  );
};

export default Home;
