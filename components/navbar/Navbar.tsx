import { Router } from 'next/router';
import React from 'react';
import styles from '../../styles/navbar.module.css';
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.nvbg}>
      <div className={styles.nvRt}>
        <button className={styles.navbutt} onClick={() => {
            router.push('http://kitefurn.com/');
          }}>
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
        <button
          className={styles.navbutt}
          onClick={() => {
            router.push('/customInteriors/#residence');
          }}
        >
          Customised Interiors
        </button>
        <div className={styles.dropdown}>
          <span>Mouse over me</span>
          <div className={styles.dropdowncontent}>
            <p>Hello World!</p>
          </div>
        </div>
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
          />
        </button>
        <button className={styles.navbutt}>Contact Rajesh @999999999</button>
        <button className={styles.navbutt}>Contact Rajesh @999999999</button>
        <button className={styles.kite}>Q kite</button>
      </div>
    </div>
  );
}

export default Navbar;
