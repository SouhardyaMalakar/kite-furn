import Image from 'next/image';

import styles from '../../styles/Hotels.module.css';

const Hotels = () => {
  return (
    <div className={`fluid-container ${styles.hotelsBase}`} id="hotels">
      <div className={styles.hotelsContainer} >
        <div className={styles.hotelsGridContainer} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.itemA}>
            <div className={styles.hotelsTitle}>Hotel Interiors</div>
            <div className={styles.hotelsContent}>
              Make a great first impression. The design details we do in hotels
              helps make them stand out. Hotel interior design is crucial to
              make any guest feel welcome. We do spaces which are functional,
              attractive and beneficial to visitors.
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap:"wrap"}}>
          <div className={`${styles.itemB} ${styles.gridItem}`}  style={{marginBottom:"50px" , marginTop:"20px",width:"100%", maxWidth:"600px" }}>
            <Image
              className={styles.customImg}
              width="580"
              height="400"
              src="/images/customInteriors/hotels/A.jpg"
              alt="Reception and reception table with wall paneling in glass."
            />
            <div style ={{fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
              This stunning and beautiful lobby makes the hotel memorable and a
              guest would be delighted to go through it.
            </div>
          </div>
          <div className={`${styles.itemC} ${styles.gridItem}`}  style={{marginBottom:"50px", marginTop:"20px" , width:"100%", maxWidth:"600px" }}>
            <Image
              className={styles.customImg}
              width="580"
              height="400"
              src="/images/customInteriors/hotels/B.jpg"
              alt="Cozy guest room interiors with walnut and teakwood cot."
            />
            <div style ={{fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
              Guest room should be functional, attractive, luxurious and
              comforting as in this room.
            </div>
          </div>
          <div className={`${styles.itemD} ${styles.gridItem}`}  style={{marginBottom:"50px", marginTop:"20px" , width:"100%", maxWidth:"600px" }}>
            <Image
              className={styles.customImg}
              width="580"
              height="400"
              src="/images/customInteriors/hotels/C.jpg"
              alt="Reception with custom built wooden light fixture."
            />
            <div style ={{fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
              This business class hotel{"'"}s lobby also doubles as a place for
              casual meetings.
            </div>
          </div>
          <div className={`${styles.itemE} ${styles.gridItem}`}  style={{marginBottom:"50px", marginTop:"20px" , width:"100%", maxWidth:"600px" }}>
            <Image
              className={styles.customImg}
              width="580"
              height="400"
              src="/images/customInteriors/hotels/D.jpg"
              alt="Guest bedroom with twin cot, which can be converted to double bed."
            />
            <div style ={{fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
              This spacious guestroom is exotically cozy for its guests.
            </div>
          </div>
          <div className={`${styles.itemE} ${styles.gridItem}`}  style={{marginBottom:"50px", marginTop:"20px", width:"100%", maxWidth:"600px" }}>
            <Image
              className={styles.customImg}
              width="580"
              height="400"
              src="/images/customInteriors/hotels/roomNumber.jpg"
            alt="We have best interior and furniture products for hotels"
            />
          <div style ={{ fontSize:"13px", position:'relative',color : "white", width:"90%", maxWidth:"500px", marginTop :'-90px' , zIndex :'100', marginLeft:'5%'}}>
              This spacious guestroom is exotically cozy for its guests.
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hotels;
