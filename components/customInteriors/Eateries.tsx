import Image from 'next/image';

import styles from '../../styles/Eateries.module.css';

const content = {
  subTitle:
    'Bakeries, coffee shops, bars, Restaurants including Fine dining, Casual Dining, Family & Quick Service Restaurants.',
  subtext:
    'We can make coffee shops and bakeries into memorable spaces through design. We make the most of the space you have, especially with a small one.' +
    "\nRevamp Your Restaurant's Interior Design On a Budget",
  imgA: {
    alt: 'Wooden wall displays and graphic showcases in bakeries and coffee shops.',
    front:
      'This unique wall display in this bakery merchandises products through backdrop graphics and its unique display.'
  },
  imgB: {
    alt: 'Coffee shop interiors in wooden shelves.',
    front:
      'This classic, rich and traditional interior makes the outlet posh and position itself high up.'
  },
  imgC: {
    alt: 'Fine dining restaurants with good ambient lighting designs.',
    front:
      'Good decor and rich interiors makes this restaurant more effective in marketing your food.'
  },
  imgD: {
    alt: 'Cake display showcases with attractive graphics in black and white scheme.',
    front:
      'This coffee shop pulls crowd from the highway with bold and overstated graphics'
  },
  imgE: {
    alt: "We also do bars, PDR's or private dining restaurants.",
    front:
      'Creative and colorful lights combined with dimly lit areas sets the right ambiance and mood along with privacy for those who need it.'
  }
};

function Eateries() {
  return (
    <div className={`fluid-container ${styles.eateriesBase}`} id="eateries">
      <div className={styles.eatGridContainer} >
        <div id="e1" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px" }}>
          <Image
            className={styles.resImg}

            width="580"
            height="400"
            src="/images/customInteriors/eateries_bakeries/A.JPG"
            alt={content.imgA.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"100%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgA.front}
          </div>
        </div>
        <div id="e2" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px", height: "400px" }}>
          <div className={styles.eateriesTitle}>
            Restaurants Bakeries &amp; more
          </div>
          <div className={styles.eateriesSubtext}>
            <div>{content.subTitle}</div>
          </div>
          <div className={styles.eateriesContent}>{content.subtext}</div>
        </div>
        <div id="e3" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px" }}>
          <Image
            className={styles.resImg}

            width="580"
            height="400"
            src="/images/customInteriors/eateries_bakeries/B.JPG"
            alt={content.imgB.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgB.front}
          </div>
        </div>
        <div id="e4" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px" }}>
          <Image
            className={styles.resImg}

            width="580"
            height="400"
            src="/images/customInteriors/eateries_bakeries/C.JPG"
            alt={content.imgC.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgC.front}
          </div>
        </div>
        <div id="e5" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px" }}>
          <Image
            className={styles.resImg}

            width="580"
            height="400"
            src="/images/customInteriors/eateries_bakeries/D.JPG"
            alt={content.imgD.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgD.front}
          </div>
        </div>
        <div id="e6" style={{marginBottom:"40px", marginTop:"0px" , width:"100%", maxWidth:"600px" }}>
          <Image
            className={styles.resImg}
            width="580"
            height="400"
            src="/images/customInteriors/eateries_bakeries/E.JPG"
            alt={content.imgE.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgE.front}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eateries;
