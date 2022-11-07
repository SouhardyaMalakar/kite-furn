import Hero from '../components/home/Hero';
import Hero2 from '../components/home/Hero2';
import CustomisedInt from '../components/home/CustomisedInt';
import Kitchen from '../components/home/Kitchen';
import Process from '../components/home/Process';
import Meet from '../components/home/Meet';

const Home = () => {
  return (
    <div className="fluid-container text-center home-container">
      <Hero />
      <Hero2 />
      <CustomisedInt />
      <Kitchen />
      <Process />
      <Meet />
    </div>
  );
};

export default Home;
