import styles from './index.module.scss';
import ProgressBar from "../app/ProgressBar";
import Image from 'next/image';
export function Index() {

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className={styles.uperContainer}>
                      <div className={styles.imageContainer}>
                        <Image className={styles.profilePicture} width={256} height={256} src="/profile_pic2.jpg" alt="profile picture" />
                      </div>
                      <h5 className="card-title">Jonas Fischer</h5>
                      <p className="card-text">
                        <div className="row">
                          <div className="col">
                            <p className={styles.statTitle}>Class & Level:</p>
                            <p>Developer 7</p>
                            <p className={styles.statTitle}>Background:</p>
                            <p>Catlover/Gamer</p>
                          </div>
                          <div className="col">
                            <p className={styles.statTitle}>Alignment:</p>
                            <p>Neutral Good</p>
                            <p className={styles.statTitle}>Race:</p>
                            <p>Human</p>
                          </div>
                        </div>
                      </p>
                    </div>
                    <ProgressBar colorScheme="javascript" title="JavaScript" />
                    <ProgressBar colorScheme="typescript" title="TypeScript" />
                    <ProgressBar colorScheme="react" title="React" />
                    <ProgressBar colorScheme="java" title="Java" />
                    <ProgressBar colorScheme="springboot" title="Spring Boot" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
