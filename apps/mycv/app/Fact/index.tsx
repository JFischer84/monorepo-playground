import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface FactProps {
  fact: string;
  description: string;
}


export function Fact({fact, description}: FactProps) {

  return (
    <div className={styles.factContainer}>
      <p className={styles.fact}><u>{fact}</u></p>
      <p>{description}</p>
    </div>
  );
}

export default Fact;
