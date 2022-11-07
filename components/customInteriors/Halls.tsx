import Image from 'next/image';

import styles from '../../styles/Halls.module.css';
import custom from '../../styles/CustomisedInt.module.css';

const content = {
  subTitle: 'Make a lasting memory…',
  subtext:
    'We increase the appeal of the space with decor style, color, mood, harmony, contrast, comfort, convenience, lighting, paint & wall covering, glass etc.',
  imgA: {
    alt: 'A blue color themed meeting hall at Yercaud convention centre done by us.',
    front:
      'We design and execute multipurpose convention halls such as this one in Yercaud.'
  },
  imgB: {
    alt: 'Board rooms with a difference with fabric panels.',
    front:
      'This highly functional and flexible boardroom has been the space where many business ideas are generated.'
  },
  imgC: {
    alt: 'Seminar hall with acoustic panels.',
    front:
      'We also do halls with perfect acoustics such as the one shown here which is a 350 seater.'
  },
  imgD: {
    alt: 'Marriage hall and Kalyana mandapam design and interiors.',
    front:
      'Memorable and cost effective interiors for marriage halls designed and executed by us has proved successful'
  },
  imgE: {
    alt: 'Ceiling acoustic panels to reduce echo in halls.',
    front:
      'This elegant and stylish banquet hall has been the happy host for many functions and has been a huge attraction for the hotel it is in.'
  }
};

function Hotels() {
  return (
    <div className="fluid-container halls-base" id="halls">
      <div className="halls-grid-container" style={{display : 'flex', flexDirection: 'column'}}>
        <div id="ha" className="halls-title-container">
          <div className="halls-title">Mandaps, Halls and Banquets</div>
          <div className="halls-subtext">
            <div>{content.subTitle}</div>
          </div>
          <div className="halls-content">{content.subtext}</div>
        </div>
        <div style ={{display: 'flex', flexDirection : "row" ,  flexWrap:"wrap", width:"101%"}} >
        <div id="hb" style={{width : '600px' , margin:"10px"}}>
          <Image
            className={custom.customImg}
            width="550"
            height="400"
            alt={content.imgA.alt}
            src="/images/customInteriors/halls/A.jpg"
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgA.front}
          </div>
        </div>
        <div id="hc" style={{width : '600px', margin:"10px"}}>
          <Image
            className={custom.customImg}
            width="550"
            height="400"
            alt={content.imgB.alt}
            src="/images/customInteriors/halls/B.jpg"
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgB.front}
          </div>
        </div>
        <div id="hd" style={{width : '600px', margin:"10px"}}>
          <Image
            className={custom.customImg}

            width="550"
            height="400"
            alt={content.imgC.alt}
            src="/images/customInteriors/halls/C.jpg"
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgC.front}
          </div>
        </div>
        <div id="he" style={{width : '600px', margin:"10px"}}>
          <Image
            className={custom.customImg}

            width="550"
            height="400"
            alt={content.imgD.alt}
            src="/images/customInteriors/halls/D.jpg"
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgD.front}
          </div>
        </div>
        <div id="hf" style={{width : '600px', margin:"10px"}}>
          <Image
            className={custom.customImg}

            width="550"
            height="400"
            alt={content.imgE.alt}
            src="/images/customInteriors/halls/E.jpg"
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}}>
            {content.imgE.front}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Hotels;
