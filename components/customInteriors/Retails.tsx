import Image from 'next/image';

const content = {
  subTitle: 'Maximize Customer Flow',
  subtext:
    'We smartly design retail store layouts. Designs which assists walk-ins and converts walk-ins to sales. Even a minimal budget, when used wisely, can bring out your store’s full potential.',
  imgA: {
    alt: 'Shops and retail layout design is our specialty.',
    front:
      'We also create exterior appeal by styling of a retail outlet such as this one.'
  },
  imgB: {
    alt: 'We do architectural designs and service at Singanallur, Ondipudhur, Peelamedu, Avinashi road, Erode, Coimbatore',
    front: 'We also design signage and graphics in retail outlets.'
  },
  imgC: {
    alt: 'Wooden departmental store racks are supplied by us.',
    front:
      'Many retail spaces such as this one also serves as a showroom to help a brand connect with its potential customers.'
  },
  imgD: {
    alt: 'Display showcases are done by us.',
    front:
      'A well designed floor plan plays a critical role in managing store flow, traffic and sales.'
  }
};

function Retails() {
  return (
    <div className="fluid-container retails-base" id="retails">
      <div className="retailsA">
        <div>
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/retails/A.jpg"
            alt={content.imgA.alt}
          />
          <div className="customInteriors-img-overlay">
            {content.imgA.front}
          </div>
        </div>
        <div>
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/retails/B.jpg"
            alt={content.imgB.alt}
          />
          <div className="customInteriors-img-overlay">
            {content.imgB.front}
          </div>
        </div>
        <div>
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/retails/C.jpg"
            alt={content.imgC.alt}
          />
          <div className="customInteriors-img-overlay">
            {content.imgC.front}
          </div>
        </div>
        <div>
          <Image
            width="300"
            height="200"
            src="/images/customInteriors/retails/D.jpg"
            alt={content.imgD.alt}
          />
          <div className="customInteriors-img-overlay">
            {content.imgD.front}
          </div>
        </div>
      </div>
      <div className="retailsB">
        <div className="retails-title">
          Retail Stores &amp; Departmental Stores
        </div>
        <div className="retails-subContainer">
          <div className="retails-subtitles">
            <div>{content.subTitle}</div>
          </div>
          <div className="retails-content">{content.subtext}</div>
        </div>
      </div>
    </div>
  );
}
export default Retails;
