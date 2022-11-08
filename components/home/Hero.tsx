import Link from 'next/link';

import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (  
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
          <div>
          <Link href="/residenceInteriors">
            <button className={styles.expbutt}>
              {'Explore '}
              <img
                className={styles.expbuttimg}
                width={50}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACIklEQVR4nO3asWsTURzA8e+LbYo11sFNHLv5l1QRWgcHK0IdRARFB8FFuF2RUlwcFNFFgqAgNPq/iPgnaG3SaiE/l1gTSa6pd0lt/H623Hs8Hl9ueLk7kCRJkiRJkiRJkiRJkiRNiHTQG/hXnK7Xj07RWg24DGxBejZd+3r/49lb38tYv1LGIpOgE/kaMAuchLi7szn3Zn59baaM9Q0NEJECLvUZWSgrtqEBUgogBoyWEtvQHRE8zRkuHNvQHdXjG/eARs6UQrE9dXQ5U69Xm7ReB5wfNCeID5Umi59XVrb3s7ah/zCq2IbuYxSxDT1A2bENnaPM2IbeQ1mxDT2EMmIbekhFYxt6H4rE7gl96t2T2elW9QEpLQMnRrTf/0EjNeNCd+yev+BTreojUrqBkYtaiFplrfvC79BZVkkpXRn7liZVxDJZttvXh0pj0n1HtyPixQHuZaJExEuyrP3rd88d3U7H7gCPgS/j3thkSeuVFrd7rhzUVg6jYY53wPvUjKXc450GKxIZDD2UopHB0HsqIzIYOldZkcHQA5UZGQzdl6+yxsCXs2Mwys8NjhTf3mSYX1+b2f5ReQucy5nWqNa+LX66eH3fX5j6UKljZ3PuIbCQM6UxXdtY+tvPeA0NdB5nXs2ZUSgyGLrboBaFI+ct/n/JsnbAqz4jpUQGQ+/aYvZmwHNgG9iMYLWsyOonwiOvJEmSJEmSJEmSJEmSpEPqJ6OcU1ptwe29AAAAAElFTkSuQmCC"
              />
            </button>
          </Link>
          </div>

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
      </div>


    </div>
  );
};

export default Hero;
