import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface ProgressBarProps {}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div>
      <div className={styles.progress}>
        <div className={styles.color} />
      </div>
    </div>
  );
}

export default ProgressBar;
