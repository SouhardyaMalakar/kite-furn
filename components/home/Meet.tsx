import Image from 'next/image';

import mb from '../../public/images/home/factory/b.png';
import ma from '../../public/images/home/factory/a.png';

import maruthachalam from '../../public/images/home/team/maruthachalam.jpeg';
import vinoth from '../../public/images/home/team/vinoth.jpeg';
import sajeesh from '../../public/images/home/team/sajeesh.jpeg';
import prabhu from '../../public/images/home/team/prabhu.jpeg';
import harini from '../../public/images/home/team/harini.jpeg';
import phoneIcon from '../../public/icons/phone-icon.png';

import styles from '../../styles/Meet.module.css';

const customImages = [maruthachalam, vinoth, sajeesh, prabhu, harini];
const imgClass = {};

const btnClass = {
  borderRadius: '5px',
  fontWeight: '500',
  border: 'none',
  outline: 'none',

  padding: '10px 20px',

  color: '#ffffff'
};

const content = {
  imgA: {
    alt: 'Custom wardrobe, 2 door wardrobe, four door wardrobe, customized wardrobes are manufactured by us.'
  },
  imgB: {
    alt: 'Innovative designs are done by our architect.'
  },
  imgC: {
    alt: 'We design and manufacture furniture. Our project manager delivers furniture on time.'
  },
  imgD: {
    alt: 'Our interior designers give best interior design ideas. Our manager - projects ensures quality of furniture.'
  },
  imgE: {
    alt: 'We manufacture single bed, double bed, queen bed, king sized bed and storage bed.'
  },
  imgF: {
    alt: 'We do single cot, double cot, queen size cot, king cot and storage bed.'
  },
  imgG: {
    alt: 'We do aesthetic and functional designs. Many best selling wardrobes are in our product range.'
  },
  imgPhA: {
    alt: 'We do interiors in a budget.'
  },
  imgPhB: {
    alt: 'We do pooja shelves and pooja room design in Salem and Sathyamangalam.'
  }
};

function Meet() {
  return (
    <div className={`fluid-container ${styles.meetBase}`}>
      <div className={`${styles.meetHead} text-left`}>
        WHERE EFFICIENT PRODUCTION MEETS A PASSIONATE TEAM
      </div>
      <div className={`${styles.flexContainer} d-flex`}>
        <div className={styles.meetLeft}>
          <div className={styles.meetLeftImages}>
            <div>
              <Image
                src={mb}
                className={styles.meetLeftImg}
                id="img-L-A"
                alt={content.imgA.alt}
              />
            </div>
            <div>
              <Image
                src={ma}
                className={styles.meetLeftImg}
                alt={content.imgE.alt}
              />
            </div>
          </div>
        </div>

        <div className={styles.meetRight}>
          <div className={styles.meetRightImages}>
            <div>
              <div className={styles.imgContainer}>
                <Image
                  src={customImages[0]}
                  id="mm-img"
                  alt={content.imgB.alt}
                />
              </div>
              <div className={styles.meetImgCard} id="mm_card">
                <div className={styles.personName} id="mm">
                  Maruthachalam
                </div>
                <div className={styles.personDesc}>
                  Chief Architect &amp; Interior Designer
                </div>
              </div>
            </div>
            <div>
              <div className={styles.imgContainer}>
                <Image
                  src={customImages[1]}
                  id="vinoth"
                  alt={content.imgC.alt}
                />
              </div>
              <div className={styles.meetImgCard}>
                <div className={styles.personName}>Vinoth</div>
                <div className={styles.personDesc}>
                  Manager <br /> Production
                </div>
              </div>
            </div>
            <div>
              <div className={styles.imgContainer}>
                <Image
                  src={customImages[2]}
                  id="sajeesh"
                  alt={content.imgD.alt}
                />
              </div>
              <div className={styles.meetImgCard}>
                <div className={styles.personName}>Sajeesh</div>
                <div className={styles.personDesc}>
                  Manager <br /> Projects
                </div>
              </div>
            </div>
            <div>
              <div className={styles.imgContainer}>
                <Image
                  src={customImages[3]}
                  id="prabhu"
                  alt={content.imgE.alt}
                />
              </div>
              <div className={styles.meetImgCard}>
                <div className={styles.personName}>Prabhu</div>
                <div className={styles.personDesc}>
                  Production <br /> Co-ordinator
                </div>
              </div>
            </div>
            <div>
              <div className={styles.imgContainer} id="harini">
                <Image src={customImages[4]} alt={content.imgF.alt} />
              </div>
              <div className={styles.meetImgCard}>
                <div className={styles.personName}>Harini</div>
                <div className={styles.personDesc}>CAD Designer</div>
              </div>
            </div>
            <div>
              <div className={styles.textContainer}>
                <div className={styles.addressTitle}>
                  Come experience our products in the exclusive showroom at
                  Trichy Road
                </div>
                <div className={styles.addressText}>
                  303, Trichy Road, Singanallur, Coimbatore, Tamil Nadu, India -
                  641 005
                </div>

                <div className={`${styles.footerButtonsContainer} text-left`}>
                  <a href="tel:8940401792" className="d-block">
                    <button
                      className={`${styles.footerPhone} hover-shake`}
                      style={{ ...btnClass }}
                    >
                      Call Sajeesh @ 8940401792
                    </button>
                  </a>
                  <a
                    href="tel:8940401793"
                    className={`d-block ${styles.mt4ish}`}
                  >
                    <button
                      className={`${styles.footerPhone} hover-shake`}
                      style={{ ...btnClass }}
                    >
                      Call Prabhu @ 8940401793
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;
