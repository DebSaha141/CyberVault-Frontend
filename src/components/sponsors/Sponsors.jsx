// import React from 'react';
// import styles from './sponsors.module.scss'; // Import styles as an object
// import sponsorImages from '../../data/test/sponsorImages.js';

// const Sponsors = () => {
//   return (
//     <div className={styles['sponsor-section']}>
//       <h2 className={styles['sponsor-title']}>Our Sponsors</h2>
//       <div className={styles['sponsor-images']}>
//         {sponsorImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Sponsor ${index + 1}`}
//             className={styles['sponsor-image']}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sponsors;


import React from 'react';
import styles from './styles/sponsors.module.scss';

import sponsorImages from '../../data/test/sponsorImages.js';



function Sponsors() {

  return (
    <div className={styles.container}>
      <div className={styles['sponsors-section']}>
        <h2 className={styles.title}>OUR SPONSORS</h2>
        
        <div className={styles['sponsor-images']}>
          {sponsorImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor ${index + 1}`}
              className={styles['sponsor-image']}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;