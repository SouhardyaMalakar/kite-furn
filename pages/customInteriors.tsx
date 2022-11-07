import GlassStairs from '../components/customInteriors/GlassStairs';
import Hotels from '../components/customInteriors/Hotels';
import Eateries from '../components/customInteriors/Eateries';
import Residence from '../components/customInteriors/Residence';
import Halls from '../components/customInteriors/Halls';
import Offices from '../components/customInteriors/Offices';
import Retails from '../components/customInteriors/Retails';

const customInteriors = () => {
  return (
    <div className="fluid-container text-center customInteriors-container">
      <GlassStairs />
      <Hotels />
      <Eateries />
      <Residence />
      <Halls />
      <Offices />
      <Retails />
    </div>
  );
};

export default customInteriors;
