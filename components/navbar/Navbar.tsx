import React, { useEffect, useState } from 'react';
import styles from '../../styles/navbar.module.css';
import { useColorMode } from '@chakra-ui/react';
import router, { useRouter } from 'next/router';
import  DropDown  from './DropDown'
function Navbar() {
  const [win, setWin] = useState(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWin(window.innerWidth);
    }
    window.addEventListener('resize', () => {
      return setWin(window.innerWidth);
    });
  }, []);

  if (win > 1000) {
    return (
      <div className={styles.nvbg}>
        <div className={styles.nvRt}>
          <button
            className={styles.navbutt}
            onClick={() => {
              router.push('http://kitefurn.com/');
            }}
          >
            <img
              height={30}
              src="data:image/png;base64,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"
            />
          </button>
          <button
            className={styles.navbutt}
            onClick={() => {
              router.push('/customInteriors/#residence');
            }}
          >
            Residence Interiors
          </button>
          <button
            className={styles.navbutt}
            onClick={() => {
              router.push('http://www.kitekitchens.com/');
            }}
          >
            Moduler Kitchen
          </button>

          <DropDown/>

        </div>
        <div className={styles.nvLf}>
          <button className={styles.navbutt}>
            <img
              height={30}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gv
        aeTAAAFDElEQVRogdWaX2wUZRTFf3emLZaA0G0riIIQozGKJibEYkI0CvKndKlGgw8Yg4pKAoKosFsgphq0WyU8aQzGPhgTHlYeKGuBpAQMR
        KqkvkiK0Rj+RahCdwENpaXduT7UimJn987uYOJ529xz7z0n351v5ptZ+J9DwiqU3rFpspS4C1BmgdyjMAUYD6jCBVFOItqFOgc9ZXd1fexMGH2LNp
        Bua5ovnsQUHgIcY5oH7FfRRFVdw95i+hdsIN3WNB9P3gIeKEYASIeK92ahRgIbyLQnxnl9+qEgSwpp6A/91POcV6rrY78HyQpk4GzqvTtcvJ3AXYG02dUcz
        Wa1/qb6hp/sKUZk2hL3qkc7MKEgcXZ0q8jsqrrY9xayycC51uZJjqPfALcWJc2OM7hSU1kb+zkfMe+uoZ1bSx3RVv478QCTyOp23d9Yko+Y10Dml/MbEWaEoys
        QajKXyhvykXKOUCaVmKLwA3BDgMZHgBaUvQOj3BMApf3ZqQhzQJaBTg9Qq1cZvLMquvG0HyHnEnmiMVExiVfod4Q1FZ19W6Wx0bsm3AV0aTL5Qbr82HKBLUCZoe
        xowV0HrPYj+K7AudbmsY6jp4GxFvEqsqC6LrbfIIqenU2PishubCYuDpS5t0yct/bSSEHfa8ARby4G8UNF9FWreICqRQ37FHndSB9X0p+d49/bNyKPGRscqfi2/2
        Mj9y9UXp72EUOjlR/CPL+QvwHlfkttRT4ZYebza1q8OItqi4krcp9fzNeAwjRT8Wy24KdJcbx2E1H1dr9QrvvAjZba2StXTplEjJSbLTlp4SlU+MV8DQhkLcV
        lVHnBj+RO6WVTrsCAb40cWWdNIjQ72cIbsYVXOsVI9dXib8DDNhquY92t/gX1bLkCvqPmP0KiX9lkyDJNJl0b9yo0mXRxZJmthR7yC+XYRuWgUcr0dPm
        x5TbuVaTLj69AudvUAX8tvgYqSkbvA85bGghs6Uk1z7ZwAXq+aJoj6GYjPRPp7fO9y/uPUO2qfmC7sUmZoLt6Us0rc42TJpNuT6p5lajsAkpNlYXPZXH
        jFf9wDvS0vVsjnvO1qdFVdKHaIo7XPtg7cAKgZHTpVFV3LsIL1rEZhiI1VdHYYb943n04nUocBGYFaRoalAOVi+IP56LkPZF5Iu+HpygYRMh7nZjuhO
        lU8yHQB4uXFAiHI3WxmSKiuUimV4GOo/FwNNnhicTziQejgYqF8QMitBYvywaBHdYDkvVlLCirgBGPdSGj11H3NSvZbCASjZ8S2FSYJjtE9O3xi9Yet
        /LtKwBUjOnbDNIRXJYRSmfFxMiWICmBDMgjjYOueM8Agd4gG3HJc70lMuNl32f/kRDIAMD4uoZjIvpG0DwD1lQvXP9j0KSCT1M9qcROgWih+f+Ayp5I
        dF2tZdu8FoFXYBhZL/si0F1o/t/QPaiDSwsRD0UYmFC/4VfwngR8nxQNGBBxnh6qVRgKNgBQGV3foWDes6+FCKsjdeuMByefGsUkDyOdSrQAzwdr
        rJ9Fog3PFtu7qBUYRu/lspUoneYEpfPimP6Xwugd2ofuc3veudkZcDpAbstDPY0rMy2fjywIZQUAqudv6Ca
        rtcCFHLTfxHNrwxIPIRoAqHx8/VEPfYKRd6YBPHkqUr/2uzB7hmoAoDra8KXAcwz9nWAYnsDSyvqY7WVuAIRuA
        CASjW8TYeWfP1XQFZFofNv16HVdkUkl4plU4rqe5v4Al8OWuYLbTh4AAAAASUVORK5CYII="
              onClick={() => {
                router.push(
                  'https://www.google.co.in/maps/place/Kite/@11.002934,77.0413037,19.75z/data=!4m5!3m4!1s0x3ba8571101fe5145:0x84b8c6c772ef0f78!8m2!3d11.0028299!4d77.0413946?shorturl=1'
                );
              }}
            />
          </button>
          <button className={styles.navbutt}>Contact Rajesh @999999999</button>
          <button className={styles.navbutt}>Contact Rajesh @999999999</button>
          <button className={styles.kite}>
            <img
              src="data:image/png;base64,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"
              height={"45px"}
            />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={styles.menuToggle}
        style={{ height: '70px', width: '100%', zIndex: '100' }}
      >
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className={styles.menu}>
          <button
            className={styles.navbutt2}
            onClick={() => {
              router.push('/customInteriors/#residence');
            }}
          >
            <li>Residence Interiors</li>
          </button>
          <button
            className={styles.navbutt2}
            onClick={() => {
              router.push('http://www.kitekitchens.com/');
            }}
          >
            <li>Moduler Kitchen</li>
          </button>
          <div>
            <li><DropDown/></li>
            </div>
          <button className={styles.navbutt2}>
            <li>Contact</li>
          </button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
