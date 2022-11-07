import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CrossfadeLoop from '../../utils/fadeLoop.js';

import stairs from '../../public/images/home/stairs/stairs3.png';
import stairs2 from '../../public/images/home/stairs/stairs4.png';
import bedBase from '../../public/images/home/bed_anim/bedBase.png';
import bedlift from '../../public/images/home/bed_anim/bedLift.png';

import '../../styles/Hero2.module.css';
import styles from '../../styles/Hero2.module.css';
const bedImages = [bedBase, bedlift];

const content = {
  imgA: {
    alt: [
      'We do glass staircases and glass handrails at Salem, Tiruppur, Coimbatore, Erode, Ooty, in Tamilnadu',
      'We do cheap and best staircase and handrails.'
    ]
  },
  imgB: {
    alt: [
      'Remote operated storage cots.',
      'Storage beds, hydraulic storage beds and hydraulic storage cots with remote.'
    ]
  }
};

function Hero2() {
  const [imgA, setImgA] = React.useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setImgA(!imgA);
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  }, [imgA]);

  return (
    <div className={`fluid-container ${styles.hero2Base}`}>
      <div className={styles.hero2A}>
        <div className={styles.flex}>
          <Image
            width={300}
            src= {stairs}
            className={styles.imgStairs}
            alt={content.imgA.alt[0]}
          />

          <div className={styles.stairTextContainer}>
            <div className={styles.contentStairBottomContainer}>
              <div>LOW MAINTENANCE</div>
              <div className={styles.highlightA}>SUPER STYLISH</div>
              <div>DURABLE</div>
            </div>

            <Link href="customInteriors">
              <button className={`btn btn-light ${styles.btnStairs}`}>
                View More
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.stairTextContent}>
          Fully customizable staircases for every home. We can even add them to
          your old staircase. Improved lighting, more space and the glass just
          looks so lovely!
        </div>
      </div>

      <div className={styles.hero2B}>
        <div className={`${styles.bedTextContainer} ${styles.textLeft}`}>
          <div className={styles.bedTextTop}>
            <div>
              SLEEP <span className={styles.bedLowlight}>&amp;</span>
            </div>
            <div>STORAGE</div>
          </div>
          <div className={`${styles.bedTextTop} ${styles.respShow}`}>
            <div>
              STORAGE <span className={styles.bedLowlight}>&amp;</span>
            </div>
            <div>SLEEP</div>
          </div>
          <div className={`${styles.bedTextTop} ${styles.respShow2}`}>
            <div>
              STORAGE <span className={styles.bedLowlight}>&amp;</span> SLEEP
            </div>
          </div>
          <div className={styles.bedTextSubtop}>Sleep on and store in</div>

          <Link href="customInteriors">
            <button className={`btn btn-light ${styles.btnBed}`}>
              Explore
            </button>
          </Link>
        </div>

        <CrossfadeLoop
          // @ts-ignore
          src={bedImages}
          anim_duration={1500}
          timingFunction={'ease-out'}
          alt={content.imgB.alt}
          interval={3000}
        />

        <div className={styles.bedTextContent}>
          The hydraulics make it easy to lift even without having to remove the
          mattress. You can now use the space below the cot to keep extra
          pillows, blankets and anything else you want.
        </div>
      </div>
    </div>
  );
}

export default Hero2;
