import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bedroomA from '../../public/images/home/custom/bedroomA.jpg';
import bedroomB from '../../public/images/home/custom/bedroomB.jpg';
import homeA from '../../public/images/home/custom/homeA.jpg';
import hotelA from '../../public/images/home/custom/hotelA.jpg';
import hotelB from '../../public/images/home/custom/hotelB.jpg';
import hall from '../../public/images/home/custom/hall.jpg';

import styles from '../../styles/CustomisedInt.module.css';

const customImages = [bedroomA, homeA, hotelA, hall, bedroomB, hotelB];

const content = {
  imgA: {
    alt: 'Bedroom furniture. Cots, wardrobes, side units, dressing units, TV units, chest of drawers.'
  },
  imgB: {
    alt: 'Living room furniture including side units, TV units, show cases'
  },
  imgC: {
    alt: 'Hotel interiors, room interiors, restaurants, bars, meeting and conference halls, Banquet halls are taken up as turnkey contracts.'
  },
  imgD: {
    alt: 'Halls including marriage halls, banquet halls, meeting halls.'
  },
  imgE: {
    alt: 'We do wardrobes in particle board, MDF, prelam MDF, plywood, wood, glass,and acrylic.'
  },
  imgF: {
    alt: 'We also do custom interiors and customized furniture. Design and execution of restaurants, coffee shops, bakeries, eateries is our specialty.'
  }
};

class CustomisedInt extends Component {
  render() {
    return (
      <div className={`fluid-container ${styles.customisedIntBase} text-left`}>
        <div className={styles.customHead}>
          <div className={styles.customTitle}>
            <div>Designed &#38;</div>
            <div>
              Built for <span className={styles.highlight}>You</span>
            </div>
          </div>

          <div className={styles.customSubtag}>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Living spaces</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Hotels</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Bedrooms</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Kitchens</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Dining spaces</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Retail spaces</button>
            </Link>
            <Link href="/customInteriors">
              <button className={styles.btnCustomTypes}>Eateries</button>
            </Link>
          </div>

          <div className={styles.text}>
            With over 22 years of experience creating inspired designs, we turn
            your requirements into incredibly aesthetic and functional designs.
          </div>

          <Link href="/customInteriors">
            <button className={`btn btn-light ${styles.btnCustomMain}`}>
              View More
            </button>
          </Link>
        </div>

        <div className={styles.customGrid}>
          <div className={styles.gridItem}>
            <Image
              src={customImages[0]}
              alt={content.imgA.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>
              Bedrooms
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src={customImages[1]}
              alt={content.imgB.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>
              Living Spaces
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src={customImages[2]}
              alt={content.imgC.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>Hotels</div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src={customImages[3]}
              alt={content.imgD.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>
              Banquet Halls
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src={customImages[4]}
              alt={content.imgE.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>
              Custom Furniture
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src={customImages[5]}
              alt={content.imgF.alt}
              className={styles.customImg}
            />
            <div className={`${styles.customImgOver} text-center`}>
              Restaurants
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomisedInt;
