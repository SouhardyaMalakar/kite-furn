import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/GlassStairsCustom.module.css';

const GlassStairs = () => {
  return (
    <div
      className={`fluid-container ${styles.glassStairsBase}`}
      id="glass-stairs"
    >
      <div className={styles.glassStairsA}>
        <div>
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/glassStairs/A.jpg"
            alt="Steel and wooden stairs with glass handrails can be done."
            className={styles.glassStairsImg}
          />
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/glassStairs/B.jpg"
            alt="Steel and wooden stairs with glass handrails can be done."
            className={styles.glassStairsImgTop}
          />
          <Image
            width="300"
            height="200"
            className={styles.glassStairsImgTop}
            src="/images/customInteriors/glassStairs/A.jpg"
            alt="We do balcony handrails."
          />
          <div className={styles.glassStairsImgOverlay}>
            Glass and wooden rails along with wood finishes for steps makes this
            existing staircase look new, modern & spacious.
          </div>
        </div>
        <div>
          <div className={styles.imgBContainer}>
            <Image
              width="300"
              height="200"
              className={styles.glassStairsImg}
              src="/images/customInteriors/glassStairs/B.png"
              alt="Beautiful handrails for existing staircase."
            />
            <Image
              width="300"
              height="200"
              className={styles.glassStairsImgTop}
              src="/images/customInteriors/glassStairs/B.png"
              alt="Good shower partition in glass can be supplied."
            />
            <div className={styles.glassStairsImgOverlay}>
              This prefabricated steel steps finished in wood with glass and
              wooden rails complements a modern home.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.glassStairsB}>
        <div className={styles.glassStairsTitleContainer}>
          <span>Glass STAIRS</span>
          <div
            className={`${styles.glassStairsResidenceBtnContainer} ${styles.gsB}`}
          >
            <div className={styles.residenceExtraText}>
              Take a look at more of our designs for <span>Residences</span>
            </div>
            <Link href="/customInteriors/#residence">
              <button className={styles.glassStairsBtnToResidence}>
                Residence Interiors
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.glassStairsSubContainer}>
          <div className={styles.glassStairsSubtitle}>
            <div>New and retrofitted handrails</div>
            <div>1 Lakh to 5 Lakhs</div>
            <div>Glass, Wood and Metal</div>
          </div>

          <div className={styles.glassStairsContent}>
            Glass railing systems have a higher aesthetic appeal, increases
            visibility, increases light and glass creates the illusion of more
            space. These are of low maintenance and are very durable. These
            rails can also be fitted to existing staircases.
          </div>

          <div
            className={`${styles.glassStairsResidenceBtnContainer} ${styles.gsA}`}
          >
            <div className={styles.residenceExtraText}>
              Take a look at more of our designs for <span>Residences</span>
            </div>
            <Link href="/customInteriors/#residence">
              <button className={styles.glassStairsBtnToResidence}>
                Residence Interiors
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassStairs;
