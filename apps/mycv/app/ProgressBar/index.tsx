import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface ProgressBarProps {
  title: string;
  colorScheme: 'javascript' | 'java' | 'typescript' | 'react' | 'springboot';
}


// TODO: make progress percentage configurable from outside; make progress colour configurable from outside; decide on border color
export function ProgressBar({title, colorScheme}: ProgressBarProps) {
  const colorSchemeMap = {
    javascript: styles.colorjs,
    java: styles.colorjava,
    typescript: styles.colorts,
    react: styles.colorreact,
    springboot: styles.colorsb
  }

  return (
    <div className={styles.progressBar}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.progress}>
        <div className={colorSchemeMap[colorScheme]} />
      </div>
    </div>
  );
}

export default ProgressBar;
