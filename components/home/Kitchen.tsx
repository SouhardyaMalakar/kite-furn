import Image from 'next/image';

import styles from '../../styles/Kitchen.module.css';

const content = {
  imgA: {
    alt: 'Modern, traditional, contemporary modular kitchens including cabinets and shutters.'
  },
  imgB: {
    alt: 'We do modular kitchens and pantry units in Pollachi, Udumalpet, Coimbatore, Erode, Ooty, Salem.'
  }
};

function CustomisedInt() {
  return (
    <div className={`fluid-container ${styles.kitchenBase}`}>
      <div className={styles.kitchenA}>
        <div>
          <Image
            width="400"
            height="300"
            className={`${styles.kitchenImg} img-fluid`}
            src="/images/home/kitchen/kitchen1.jpg"
            alt={content.imgA.alt}
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            className={`${styles.kitchenImg} img-fluid`}
            src="/images/home/kitchen/kitchen2.jpg"
            alt={content.imgB.alt}
          />
        </div>
      </div>

      <div className={styles.kitchenB}>
        <div className={styles.kitchenTitle}>MODULAR KITCHENS</div>
        <div className={styles.kitchenContent}>
          Here{"'"}s a look at our functional, yet insanely sleek kitchens. They
          {"'"}re designed to fit your tastes &amp; crafted to perfection.
        </div>
        <a href="http://www.kitekitchens.com/">
          <button className={styles.btnKitchen}>View More</button>
        </a>
      </div>
    </div>
  );
}

export default CustomisedInt;
