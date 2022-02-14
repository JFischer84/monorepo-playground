import React from 'react';
import styles from './index.module.scss';

interface FactProps {
  factTitle: string;
  description: string;
}

export function Fact({factTitle, description}: FactProps) {
  return (
    <div className={styles.factContainer}>
      <p className={styles.fact}><u>{factTitle}</u></p>
      <p>{description}</p>
    </div>
  );
}

export default Fact;
