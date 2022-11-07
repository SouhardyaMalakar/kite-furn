import Image from 'next/image';

import DevSection from './DevSection';

const WIP = () => {
  return (
    <div>
      <div className="flex h-[900px] justify-center items-center">
        <div>
          <div className="font-bold text-3xl leading-[0px] pb-[55px]">
            Aw, sorry. We{"'"}re still working on this.
          </div>
          <Image
            width="300"
            height="200"
            className="h-[400px] w-auto"
            src="/images/WIP/wip.png"
            alt=""
          />
        </div>
      </div>
      <DevSection
        styling={{
          backgroundImage: 'linear-gradient(to left, #247DBE, #71bcf1)',
          fontSize: '20px',
          padding: '25px 0'
        }}
      />
    </div>
  );
};

export default WIP;
