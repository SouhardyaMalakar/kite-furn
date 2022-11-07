import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className="fluid-container">
      <div className={`${styles.heroBase}`}>
        <div className={styles.heroSpaceBgLeft}>
          <img
            src="/images/home/hero1_wardrobe/door2.png"
            className={styles.heroSpaceImageDoor2}
            alt="We do space saving furniture and sliding wardrobes at Coimbatore, Erode, Tiruppur, Ooty, Salem in TamilNadu"
          />
          <img
            src="/images/home/hero1_wardrobe/door.png"
            className={styles.heroSpaceImageDoor}
            alt="Sliding wardrobes are good option for small apartments."
            
          />
        </div>

        <div className={`${styles.heroImageBgRight} text-right`}>
          <div className={styles.heroTextMobile}>SPACE SAVING STORAGE</div>
          <div className={styles.heroText}>SPACE</div>
          <div className={styles.heroText}>SAVING</div>
          <div className={styles.heroText}>STORAGE</div>
          <div className={styles.heroBase2}>
            <div className={styles.contentContainer}>
              <h2 className={styles.contentTitle}>
                More Space, Inside and Out.
              </h2>
              <p className={styles.content}>
                Introducing a new line of storage units that slide instead of
                swinging, leaving you with more space, inside and outside. From
                as big as you need to much smaller ones, these wardrobes are for
                every home. Think sleek, simple and affordable.
              </p>
            </div>
          </div>
          <Link href="/residenceInteriors">
            <Image
              width="300"
              height="200"
              alt="We do good residence interior designs at Erode and Salem."
              src="/icons/arrow.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
