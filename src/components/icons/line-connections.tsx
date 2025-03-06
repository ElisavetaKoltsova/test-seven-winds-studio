// import React, { JSX } from "react";
// import styles from './LineConnections.module.scss';

// type LineConnectionsProps = {
//   children: React.ReactNode;
//   lastElement: boolean;
// }

// export default function LineConnections({children, lastElement}: LineConnectionsProps): JSX.Element {
//   return (
//     <div className={styles.LineConnection}>
//     <div className={styles.connect}>
//       {/* <div className={styles.centerVerticalLine} /> */}
//       <div className={styles.centerHorizontalHalfLine} />
//       <div className={styles.centerVerticalHalfLine} />
//       {
//         !lastElement ?
//         (
//           <><div className={styles.centerVerticalLine} />
//       </>
//         ) : ''
//       }
//       {/* <div className={styles.centerVerticalLine} />
//       <div className={styles.centerHorizontalHalfLine} /> */}

//       {/* <div className={styles.centerVerticalLine} />
//       <div className={styles.centerHorizontalHalfLine} />
      
//       <div className={styles.centerHorizontalHalfLine} />
//       <div className={styles.centerVerticalHalfLine} /> */}
//       </div>
//     <div className={styles.iconWrapper} onDoubleClick={(e) => e.stopPropagation()}>
//       {children}
//     </div>
//   </div>
//   );
// }


import React, { JSX } from "react";
import styles from './LineConnections.module.scss';

type LineConnectionsProps = {
  children: React.ReactNode;
  lastElement: boolean;
}

export default function LineConnections({ children, lastElement }: LineConnectionsProps): JSX.Element {
  return (
    <div className={styles.LineConnection}>
      <div className={styles.connect}>
        {/* Вертикальная линия */}
        {/* <div className={styles.centerVerticalLine} /> */}
        
        {/* Горизонтальная линия на половину */}
        <div className={styles.centerHorizontalHalfLine} />
        
        {/* Вертикальная линия (только если это не последний элемент) */}
        {!lastElement && <div className={styles.centerVerticalHalfLine} />}
      </div>

      <div className={styles.iconWrapper} onDoubleClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
