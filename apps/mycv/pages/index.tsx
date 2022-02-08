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
                        <div className={styles.factSection}>
                          <div className="row">
                           <div className="col">
                             <p className={styles.stat}><u>Developer 7</u></p>
                             <p>Class & Level</p>
                             <p className={styles.stat}><u>Catlover/Gamer</u></p>
                             <p>Background</p>
                           </div>
                           <div className="col">
                             <p className={styles.stat}><u>Neutral Good</u></p>
                             <p>Alignment</p>
                             <p className={styles.stat}><u>Human</u></p>
                             <p>Race</p>
                           </div>
                          </div>
                        </div>
                    </div>
                    <ProgressBar fillingPercentage="75" colorScheme="javascript" title="JavaScript" />
                    <ProgressBar fillingPercentage="85" colorScheme="typescript" title="TypeScript" />
                    <ProgressBar fillingPercentage="85" colorScheme="react" title="React" />
                    <ProgressBar fillingPercentage="75" colorScheme="java" title="Java" />
                    <ProgressBar fillingPercentage="60" colorScheme="springboot" title="Spring Boot" />
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
