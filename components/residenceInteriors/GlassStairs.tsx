import Image from 'next/image';


import custom from '../../styles/CustomisedInt.module.css';import styles from '../../styles/GlassStairs.module.css';

const GlassStairs = () => {
  return (
    <div
      className={`fluid-container ${styles.resGlassStairsBase}`}
      id="glass-stairs"
    >
      <div className={`${styles.show1300} ${styles.resGsContentContainer}`}>
        <div>
          <div className={styles.resGsTitle}>Glass Stairs</div>
          <div className={styles.resGsContainer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and
          </div>
        </div>
      </div>
      <div className={`${styles.bootstrapRow} row`}>
        {/* first image container */}
        <div className={`col-sm ${styles.resGsElement}`}>
          <div className={`${styles.resGsImgContainer}`}>
            <Image
            className={custom.customImg}
              width="400"
              height="300"
              src="/images/residenceInteriors/glassStairs/A.jpg"
              alt=""
            />
          </div>
        </div>

        {/* content container*/}
        <div
          className={`col-sm-4 ${styles.resGsElement} ${styles.resGsContentContainer} ${styles.hide1300}`}
        >
          <div>
            <div className={styles.resGsTitle}>Glass Stairs</div>
            <div className={styles.resGsContainer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{"'"}s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and
            </div>
          </div>
        </div>

        {/* second image container */}
        <div className={`${styles.resGsElement} col-sm`}>
          <div className={`${styles.resGsImgContainer} img-fluid`}>
            <Image
            className={custom.customImg}
              width="400"
              height="300"
              src="/images/residenceInteriors/glassStairs/B.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassStairs;
