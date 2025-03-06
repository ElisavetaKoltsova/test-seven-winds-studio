import React, { JSX } from "react";
import styles from './LineConnections.module.scss';

type LineConnectionsProps = {
  children: React.ReactNode
}

export default function LineConnections({children}: LineConnectionsProps): JSX.Element {
  return (
    <div className={styles.LineConnection}>
    <div className={styles.connect}>
      <div className={styles.centerVerticalLine} />

      <div className={styles.centerVerticalLine} />
      <div className={styles.centerHorizontalHalfLine} />

      <div className={styles.centerVerticalLine} />
      <div className={styles.centerHorizontalHalfLine} />
      
      <div className={styles.centerHorizontalHalfLine} />
      <div className={styles.centerVerticalHalfLine} />
      </div>
    <div className={styles.iconWrapper} onDoubleClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
  );
}
