import React from 'react';
import styles from './index.module.scss';

interface ProgressBarProps {
  title: string;
  colorScheme: 'javascript' | 'java' | 'typescript' | 'react' | 'springboot';
  fillingPercentage: '60' | '75' | '85'
}

export const ProgressBar = ({title, colorScheme, fillingPercentage}: ProgressBarProps) => {
  const colorSchemeMap = {
    javascript: styles.colorjs,
    java: styles.colorjava,
    typescript: styles.colorts,
    react: styles.colorreact,
    springboot: styles.colorsb
  };

  const fillingMap = {
    60: styles.filling60,
    75: styles.filling75,
    85: styles.filling85
  };

  return (
    <div className={styles.progressBar}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.progress}>
        <div className={`${styles.filling} ${fillingMap[fillingPercentage]} ${colorSchemeMap[colorScheme]}`} />
      </div>
    </div>
  );
};

export default ProgressBar;
