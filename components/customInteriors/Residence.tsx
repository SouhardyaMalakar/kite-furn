import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/CustomisedInt.module.css';

const content = {
  subTitle: 'Beauty & Functionality',
  subtext:
    'We customize manufacture and supply home interiors. We do Living, dining, bedrooms, kitchens, stairs, storage units and more so that your space meets your every requirement.',
  imgA: {
    alt: 'We do residence interiors in Coimbatore. We do wardrobes with mirrors and home furniture. ',
    front:
      'We also create bedrooms as an expression such as this Egyptian themed bedroom with motifs.'
  },
  imgB: {
    alt: 'Partitions and sliding partitions in wood and glass.',
    front:
      'We also create lively spaces such as this patio surrounded by living, dining and a corridor.'
  },
  imgC: {
    alt: 'Dining room interiors including customized dining tables.',
    front:
      'Even the hand wash unit can become a beautiful accent such as the one in this dining. '
  },
  imgD: {
    alt: 'We also do fixed partitions and wooden handrails and study room furniture.',
    front: 'We also do Indian classical and European classical themed spaces.'
  }
};

function Residence() {
  return (
    <div className="fluid-container residences-base" id="residence"  >
      <div className="residencesA" style ={{display: 'flex',  flexWrap:"wrap"  , marginBottom:"20px"}}>
        <div style={{marginBottom:"20px",  marginTop:"0px" , width:"100%", maxWidth:"620px" }}>
          <Image
           className={styles.customImg}
            width="590"
           height="320"
            src="/images/customInteriors/residence_interiors/A.jpg"
            alt={content.imgA.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"600px", marginTop :'-70px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgA.front}
          </div>
        </div>
        <div style={{marginBottom:"20px",  marginTop:"0px" , width:"100%", maxWidth:"620px" }}>
          <Image
           className={styles.customImg}
           width="590"
           height="320"
            src="/images/customInteriors/residence_interiors/B.jpg"
            alt={content.imgB.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"600px", marginTop :'-70px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgB.front}
          </div>
        </div>
        <div style={{marginBottom:"20px",  marginTop:"0px" , width:"100%", maxWidth:"620px" }}>
          <Image
           className={styles.customImg}
           width="590"
           height="320"
            src="/images/customInteriors/residence_interiors/C.jpg"
            alt={content.imgC.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"600px", marginTop :'-70px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgC.front}
          </div>
        </div>
        <div style={{marginBottom:"20px",  marginTop:"0px" , width:"100%", maxWidth:"620px" }}>
          <Image
           className={styles.customImg}
           width="590"
           height="320"
            src="/images/customInteriors/residence_interiors/D.jpg"
            alt={content.imgD.alt}
          />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"600px", marginTop :'-70px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgD.front}
          </div>
        </div>
      </div>

      <div className="residencesB">
        <div>
          <div className="residences-title">Residence Interiors</div>

          {/* Button with a link to residence interiors */}
          <div className="residence-residenceBtnContainer show-1350">
            <div className="residence-btnExtraText">
              Take a look at more of our designs for <span>Residences</span>
            </div>
            <Link href="/residenceInteriors">
              <button className="residence-btn-toResidence">
                Residence Interiors
              </button>
            </Link>
          </div>
        </div>

        <div className="residences-subContainer">
          <div className="residences-subtitles">
            <div>{content.subTitle}</div>
          </div>
          <div className="residences-content">{content.subtext}</div>
        </div>

        {/* Button with a link to residence interiors */}
        <div className="residence-residenceBtnContainer hide-1350">
          <div className="residence-btnExtraText">
            Take a look at more of our designs for <span>Residences</span>
          </div>
          <Link href="/residenceInteriors">
            <button className="residence-btn-toResidence">
              Residence Interiors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Residence;
