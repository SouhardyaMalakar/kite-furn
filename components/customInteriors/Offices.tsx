import Image from 'next/image';

import styles from '../../styles/Office.module.css';
import custom from '../../styles/CustomisedInt.module.css';

const content = {
  subtext:
    'Office interiors have the power to play a major role in influencing the emotions of owners, employees, and customers. We do office interiors which gives an identity to the business.',
  imgA: {
    alt: 'Storage solutions for offices and homes are provided by us.',
    front:
      'This functional workspace improves productivity with its design efficiency.'
  },
  imgB: {
    alt: 'Offices with stunning color scheme and file storage units are done by us.',
    front:
      'We also design thematic and color based offices identifying the office with the business.'
  },
  imgC: {
    alt: 'Book shelves, study room furniture, home office furniture are also offered by us.',
    front:
      'We also design home offices where you work from home such as the one shown here.'
  }
};

function Offices() {
  return (
    <div className="fluid-container offices-base" id="offices">
      <div className="offices-grid-container"  style ={{display: 'flex', flexDirection:"column"  }}>
        <div className="title gridItem">
          <div className="offices-title">OFFICE SPACES</div>
          <div className="offices-content">{content.subtext}</div>
        </div>
        <div className="longImg gridItem" style ={{display: 'flex',  flexWrap:"wrap" }}>
          <div style={{width : '600px'}}>
          <Image
          className={custom.customImg}
            width="500px"
            height="400px"
            src="/images/customInteriors/offices/A.jpg"
            alt={content.imgA.alt}
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'50px'}}>
            {content.imgA.front}
          </div>
          </div>
        <div className="imgA gridItem" style={{width : '600px'}}>
          <Image
          className={custom.customImg}
            width="500"
            height="400"
            src="/images/customInteriors/offices/B.jpg"
            alt={content.imgB.alt}
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}} >
            {content.imgB.front}
          </div>
        </div>
        <div className="imgB gridItem" style={{width : '600px'}}>
          <Image
          className={custom.customImg}
            width="500"
            height="400"
            src="/images/customInteriors/offices/C.jpg"
            alt={content.imgC.alt}
          />
          <div style ={{position:'relative',color : "white", width: "500px", marginTop :'-80px' , zIndex :'100', marginLeft:'5%'}} >
            {content.imgC.front}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Offices;
