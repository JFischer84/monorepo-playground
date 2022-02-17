import React from 'react';
import styles from './index.module.scss';

interface FactProps {
  factTitle: string;
  description: string;
}

export const Fact = ({factTitle, description}: FactProps) => (
  <div className={styles.factContainer}>
    <p className={styles.fact}><u>{factTitle}</u></p>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Fact;
